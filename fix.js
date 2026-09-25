const fs = require('fs');
const path = require('path');

for (let i = 1; i <= 5; i++) {
  const filePath = path.join(__dirname, `src/data/prompts_batch${i}.ts`);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    content = content.replace("from '../types';", "from '../lib/types';");
    fs.writeFileSync(filePath, content);
    console.log(`Updated ${filePath}`);
  }
}
