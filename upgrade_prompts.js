const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, 'src', 'data');
const files = fs.readdirSync(dataDir).filter(f => f.startsWith('prompts_batch') && f.endsWith('.ts'));

const constraintsBlock = `### CONSTRAINTS & RULES
- DO NOT write custom CSS. Use Tailwind utility classes strictly.
- Keep components small and modular.
- Do NOT use third-party libraries unless explicitly mentioned in TECH STACK.

### FINAL REQUIREMENTS`;

const importantNote = `

IMPORTANT: Please do not write the entire application at once. Start with Step 1 and 2 (Setup and Layout), show me the code, and wait for my confirmation before proceeding to the next steps.`;

for (const file of files) {
  const filePath = path.join(dataDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // 1. Update Tech Stack versions
  // Be careful not to replace it multiple times if run twice
  if (!content.includes('Next.js 14+')) {
    content = content.replace(/- Next\.js \(App Router\)\.?/g, '- Next.js 14+ (App Router)');
    content = content.replace(/- Next\.js\b/g, '- Next.js 14+ (App Router)');
    // Fix double app router if any
    content = content.replace(/- Next\.js 14\+ \(App Router\) 14\+ \(App Router\)/g, '- Next.js 14+ (App Router)');
  }
  
  if (!content.includes('Tailwind CSS v3+')) {
    content = content.replace(/- Tailwind CSS\.?/g, '- Tailwind CSS v3+');
    content = content.replace(/- Tailwind\.?/g, '- Tailwind CSS v3+');
  }

  // 2. Add Constraints Block
  if (!content.includes('### CONSTRAINTS & RULES')) {
    content = content.replace(/### FINAL REQUIREMENTS/g, constraintsBlock);
  }

  // 3. Add Important step-by-step note at the end of the prompt
  // The prompt ends with `, followed by newline and spaces and popularity:
  // Regex to match the end of the prompt string before `, \n popularity
  if (!content.includes('IMPORTANT: Please do not write')) {
    content = content.replace(/`,(\s*popularity:)/g, `${importantNote}\`,$1`);
  }

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated ${file}`);
}
