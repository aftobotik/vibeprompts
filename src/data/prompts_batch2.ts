import { Prompt } from '../lib/types';

export const promptsBatch2: Prompt[] = [
  {
    id: 'ai-meeting-summarizer',
    title: 'AI Meeting Summarizer',
    slug: 'ai-meeting-summarizer',
    description: 'Загружайте аудио или расшифровки встреч и получайте практичные краткие итоги.',
    category: 'Productivity',
    type: 'SaaS',
    difficulty: 'Advanced',
    technologies: ['Next.js', 'OpenAI Whisper', 'Tailwind', 'PostgreSQL'],
    estimatedTime: '~1.5 hours',
    tags: ['AI', 'Audio', 'Meetings'],
    features: ['Загрузка аудио', 'Транскрибация', 'Action items'],
    useCase: 'Для специалистов, желающих извлекать ключевые решения и задачи из долгих встреч.',
    prompt: `### ROLE
You are an expert full-stack developer with experience in AI audio processing.

### OBJECTIVE
Build an AI Meeting Summarizer SaaS that accepts audio files or text transcripts and generates structured meeting notes.

### PRODUCT REQUIREMENTS
- File upload interface (drag and drop) for MP3/WAV files.
- Integration with OpenAI Whisper API for transcription.
- Integration with GPT-4 for summarization.
- Output format: Executive Summary, Key Decisions, Action Items (with assignees if mentioned).
- Dashboard to view past meeting summaries.

### UX/UI REQUIREMENTS
- Clean, minimal SaaS aesthetic.
- Progress bar and status indicators during transcription/summarization (this takes time).
- Skeleton loaders for the text output area.

### TECH STACK
- Next.js 14+ (App Router)
- Tailwind CSS v3+ CSS v3+
- NextAuth for simple authentication.
- PostgreSQL (via Prisma or Drizzle) to store summaries.
- OpenAI API (Whisper + GPT-4o-mini).

### FUNCTIONAL REQUIREMENTS
- Upload file -> Send to backend -> Send to Whisper -> Get Transcript -> Send to GPT -> Get structured summary -> Save to DB -> Return to frontend.
- Allow users to edit the generated summary before exporting.
- Export to Markdown or copy to clipboard.

### DATA MODEL
- Meeting: { id, userId, title, date, transcript, summary, actionItems, createdAt }

### API / BACKEND
- POST /api/upload: Handles file buffer, calls external APIs, and returns data.
- Need to configure bodyParser config in Next.js to accept larger file sizes (e.g., 25MB).

### AUTH
- Basic email/password or Google OAuth.

### RESPONSIVE
- Standard responsive layout.

### ERROR HANDLING
- Handle file size limits (reject > 25MB).
- Handle unsupported file types.

### SECURITY
- Restrict API routes to logged-in users.

### CONSTRAINTS & RULES
- DO NOT write custom CSS. Use Tailwind utility classes strictly.
- Keep components small and modular.
- Do NOT use third-party libraries unless explicitly mentioned in TECH STACK.

### FINAL REQUIREMENTS
1. Init Next.js + Tailwind + Prisma.
2. Build UI for file upload.
3. Implement backend route for audio processing.
4. Construct the GPT prompt to specifically extract "Executive Summary", "Key Decisions", and 'Action items'.
5. Save results to the database.
6. Display results beautifully.

IMPORTANT: Please do not write the entire application at once. Start with Step 1 and 2 (Setup and Layout), show me the code, and wait for my confirmation before proceeding to the next steps.`,
    popularity: 89,
  },
  {
    id: 'invoice-generator',
    title: 'Modern Invoice Generator',
    slug: 'invoice-generator',
    description: 'Красивый клиентский генератор счетов с экспортом в PDF.',
    category: 'Developer Tools',
    type: 'Web App',
    difficulty: 'Beginner',
    technologies: ['React', 'Tailwind', 'html2pdf'],
    estimatedTime: '~30 min',
    tags: ['Finance', 'Utility'],
    features: ['Экспорт в PDF', 'Живое превью', 'Кастомный логотип'],
    useCase: 'Для фрилансеров, которым нужен быстрый профессиональный счет без регистрации в сложных SaaS.',
    prompt: `### ROLE
You are a frontend React developer.

### OBJECTIVE
Build a fast, client-side only Invoice Generator that exports beautiful PDFs.

### PRODUCT REQUIREMENTS
- Form on the left side to input company details, client details, items (description, qty, price), and taxes.
- Real-time preview of the invoice on the right side.
- "Download PDF" button.
- Ability to upload a custom logo (client-side only).

### UX/UI REQUIREMENTS
- The preview should look exactly like a printed page (A4 aspect ratio, white background, soft shadow).
- Modern, clean typography.
- Auto-calculating totals, subtotals, and taxes.

### TECH STACK
- React (Vite).
- Tailwind CSS v3+ CSS v3+
- html2canvas + jsPDF (or react-to-print / html2pdf.js) for PDF generation.

### FUNCTIONAL REQUIREMENTS
- Dynamic list of items (Add item, Remove item).
- Calculation logic: subtotal = sum(qty * price). total = subtotal + tax.
- Logo upload should use URL.createObjectURL to display locally without a server.

### DATA MODEL
- InvoiceData: { from, to, date, invoiceNumber, items, taxRate, notes, logo }

### API / BACKEND
- None.

### AUTH
- None.

### CONSTRAINTS & RULES
- DO NOT write custom CSS. Use Tailwind utility classes strictly.
- Keep components small and modular.
- Do NOT use third-party libraries unless explicitly mentioned in TECH STACK.

### FINAL REQUIREMENTS
1. Setup React and Tailwind.
2. Create state for all invoice fields.
3. Build the split-pane layout (Form / Preview).
4. Implement the dynamic items list logic.
5. Style the invoice preview to look like a real document.
6. Implement PDF export logic.

IMPORTANT: Please do not write the entire application at once. Start with Step 1 and 2 (Setup and Layout), show me the code, and wait for my confirmation before proceeding to the next steps.`,
    popularity: 75,
  },
  {
    id: 'seo-content-planner',
    title: 'SEO Content Planner',
    slug: 'seo-content-planner',
    description: 'Инструмент для создания и управления тематической картой для SEO.',
    category: 'Marketing',
    type: 'Web App',
    difficulty: 'Intermediate',
    technologies: ['Vue.js', 'Tailwind', 'Supabase'],
    estimatedTime: '~45 min',
    tags: ['SEO', 'Content'],
    features: ['Группировка ключей', 'Отслеживание статусов'],
    useCase: 'Для SEO-специалистов и контент-мейкеров, планирующих архитектуру блога.',
    prompt: `### ROLE
You are a full-stack developer with marketing knowledge.

### OBJECTIVE
Build an SEO Content Planner to help users create and track a topical map of articles.

### PRODUCT REQUIREMENTS
- Define a "Pillar Topic".
- Add "Cluster Topics" under the pillar.
- Track status of each article (Planned, Drafting, Published).
- Visual representation of the topical map (e.g., a tree view or nested list).

### UX/UI REQUIREMENTS
- Clean, structured dashboard.
- Color-coded badges for status.

### TECH STACK
- Next.js 14+ (App Router) or React.
- Tailwind CSS v3+ CSS v3+
- LocalStorage or Supabase for persistence.

### FUNCTIONAL REQUIREMENTS
- CRUD operations for Pillars and Clusters.
- Ability to drag and drop clusters between pillars (bonus).

### DATA MODEL
- Pillar: { id, title, status }
- Cluster: { id, pillarId, title, keywordVolume, status }

### CONSTRAINTS & RULES
- DO NOT write custom CSS. Use Tailwind utility classes strictly.
- Keep components small and modular.
- Do NOT use third-party libraries unless explicitly mentioned in TECH STACK.

### FINAL REQUIREMENTS
1. Initialize the app.
2. Build the UI for adding topics.
3. Create the tree/nested view for the topical map.
4. Add status toggles.

IMPORTANT: Please do not write the entire application at once. Start with Step 1 and 2 (Setup and Layout), show me the code, and wait for my confirmation before proceeding to the next steps.`,
    popularity: 60,
  },
  {
    id: 'link-in-bio',
    title: 'Link-in-Bio Builder',
    slug: 'link-in-bio',
    description: 'Альтернатива Linktree для креаторов, чтобы делиться всеми ссылками в одном месте.',
    category: 'Social',
    type: 'Web App',
    difficulty: 'Intermediate',
    technologies: ['Next.js', 'Tailwind', 'Firebase'],
    estimatedTime: '~1 hour',
    tags: ['Creator', 'Social'],
    features: ['Кастомные темы', 'Мок-аналитика', 'Ссылка для шеринга'],
    useCase: 'Для креаторов, которым нужна настраиваемая страница-визитка со ссылками на соцсети.',
    prompt: `### ROLE
You are a full-stack developer.

### OBJECTIVE
Build a Link-in-Bio tool where users can customize their profile and add multiple links.

### PRODUCT REQUIREMENTS
- Admin panel to add/edit/delete links and choose a theme.
- Public profile page viewable via a custom URL slug (e.g., /u/username).
- Profile picture upload.

### UX/UI REQUIREMENTS
- Mobile-first design for the public page.
- Admin panel should have a live preview of the mobile view.
- Smooth animations when clicking links.

### TECH STACK
- Next.js 14+ (App Router)
- Tailwind CSS v3+ CSS v3+
- Firebase (Auth, Firestore, Storage) or Supabase.

### FUNCTIONAL REQUIREMENTS
- User registration and claiming a unique username (slug).
- Saving profile data and links.
- Public page reads data based on the URL parameter.

### CONSTRAINTS & RULES
- DO NOT write custom CSS. Use Tailwind utility classes strictly.
- Keep components small and modular.
- Do NOT use third-party libraries unless explicitly mentioned in TECH STACK.

### FINAL REQUIREMENTS
1. Setup project and database.
2. Implement Auth and username claiming.
3. Build the Admin dashboard with live preview.
4. Build the dynamic public page route [username].
5. Implement image upload.

IMPORTANT: Please do not write the entire application at once. Start with Step 1 and 2 (Setup and Layout), show me the code, and wait for my confirmation before proceeding to the next steps.`,
    popularity: 82,
  },
  {
    id: 'habit-tracker',
    title: 'Minimalist Habit Tracker',
    slug: 'habit-tracker',
    description: 'Красиво оформленный и простой трекер привычек на основе сетки.',
    category: 'Productivity',
    type: 'Web App',
    difficulty: 'Beginner',
    technologies: ['React', 'Tailwind'],
    estimatedTime: '~30 min',
    tags: ['Health', 'Daily'],
    features: ['График коммитов', 'Дневные страйки'],
    useCase: 'Для тех, кто хочет отслеживать ежедневные привычки без сложных настроек.',
    prompt: `### ROLE
You are a frontend developer focused on UI/UX.

### OBJECTIVE
Build a grid-based Habit Tracker inspired by GitHub's contribution graph.

### PRODUCT REQUIREMENTS
- Add habits to track.
- View a 30-day or 365-day grid for each habit.
- Click a cell to toggle completion for that date.
- Calculate current streak and longest streak.

### UX/UI REQUIREMENTS
- Extremely minimal. Black, white, and a single accent color (e.g., green for done).
- Smooth tooltip on hover over a grid cell showing the date.

### TECH STACK
- React.
- Tailwind CSS v3+ CSS v3+
- date-fns for date manipulation.
- LocalStorage.

### FUNCTIONAL REQUIREMENTS
- Generate the grid dynamically based on the current date going backward.
- Toggle state and save to LocalStorage.

### CONSTRAINTS & RULES
- DO NOT write custom CSS. Use Tailwind utility classes strictly.
- Keep components small and modular.
- Do NOT use third-party libraries unless explicitly mentioned in TECH STACK.

### FINAL REQUIREMENTS
1. Setup React.
2. Create the grid generation logic.
3. Build the UI.
4. Implement streak calculation logic.

IMPORTANT: Please do not write the entire application at once. Start with Step 1 and 2 (Setup and Layout), show me the code, and wait for my confirmation before proceeding to the next steps.`,
    popularity: 70,
  }
];
