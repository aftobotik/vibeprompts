import { Prompt } from '../lib/types';

export const promptsBatch1: Prompt[] = [
  {
    id: 'ai-resume-builder',
    title: 'AI Resume Builder',
    slug: 'ai-resume-builder',
    description: 'SaaS-приложение, которое помогает пользователям создавать резюме, оптимизированные для ATS, с помощью ИИ.',
    category: 'SaaS',
    type: 'Web App',
    difficulty: 'Advanced',
    technologies: ['Next.js', 'Tailwind', 'OpenAI API', 'Supabase'],
    estimatedTime: '~45 min',
    tags: ['AI', 'Career', 'SaaS'],
    features: ['Экспорт в PDF', 'AI-подсказки', 'Авторизация', 'База данных'],
    useCase: 'Для соискателей, чтобы быстро генерировать профессиональные резюме под конкретные вакансии.',
    prompt: `### ROLE
You are an expert full-stack developer specializing in Next.js, React, Tailwind CSS, and AI integrations.

### OBJECTIVE
Build an AI Resume Builder SaaS application that allows users to create, edit, and export ATS-friendly resumes. The app should use AI to suggest improvements for job experience bullet points based on a target job description.

### PRODUCT REQUIREMENTS
- Landing page with clear value proposition and CTA.
- User authentication (Sign up / Login).
- Dashboard to manage multiple resumes.
- Resume editor with sections: Personal Info, Experience, Education, Skills, Projects.
- AI assistant button next to experience entries to "Enhance with AI".
- Live preview of the resume on the side or as a toggle.
- Export to PDF functionality.

### UX/UI REQUIREMENTS
- Clean, professional, and trustworthy design.
- Color palette: Deep blues, crisp white, and subtle grays.
- Responsive layout (mobile-friendly editor is a plus, but desktop-first for the editor is acceptable).
- Loading states for AI generation.
- Glassmorphism touches for floating toolbars.

### TECH STACK
- Frontend: Next.js (App Router), React, Tailwind CSS, Lucide React (icons).
- Backend: Next.js API Routes.
- Database & Auth: Supabase.
- AI: OpenAI API (gpt-4o-mini).
- PDF Generation: react-to-pdf or similar lightweight library.

### FUNCTIONAL REQUIREMENTS
- User must be able to create a new resume from scratch.
- The AI enhancement should take the current bullet point and a "Target Job Title" context, and return 3 improved, action-oriented bullet points to choose from.
- All resume data must be saved to the database.

### DATA MODEL
- User (managed by Supabase Auth)
- Resume (id, user_id, title, content (JSON), created_at, updated_at)

### API / BACKEND
- POST /api/enhance-resume: Takes current text and job context, calls OpenAI, returns suggestions.

### AUTH
- Required for accessing the dashboard and saving resumes.

### RESPONSIVE
- Landing page and dashboard must be fully responsive.
- Editor should prioritize desktop/tablet.

### ERROR HANDLING
- Graceful degradation if AI API fails (show toast notification).
- Validation for required fields before saving.

### SECURITY
- Protect API routes so only authenticated users can generate AI text (prevent abuse).
- RLS (Row Level Security) in Supabase so users can only access their own resumes.

### PERFORMANCE
- Optimize AI calls by streaming the response if possible, or showing a clear loading skeleton.

### CONSTRAINTS & RULES
- DO NOT write custom CSS. Use Tailwind utility classes strictly.
- Keep components small and modular.
- Do NOT use third-party libraries unless explicitly mentioned in TECH STACK.

### FINAL REQUIREMENTS
1. Initialize the Next.js project.
2. Set up Tailwind CSS and basic UI components (buttons, inputs, cards).
3. Implement Supabase Auth and database tables.
4. Build the landing page and dashboard.
5. Create the resume editor interface.
6. Integrate OpenAI API for the enhancement feature.
7. Implement PDF export.
8. Test all user flows (auth, create, edit, AI generate, export).
9. Provide a comprehensive README with environment variables needed and instructions to run.

IMPORTANT: Please do not write the entire application at once. Start with Step 1 and 2 (Setup and Layout), show me the code, and wait for my confirmation before proceeding to the next steps.`,
    popularity: 95,
  },
  {
    id: 'ai-content-generator',
    title: 'AI Content Generator',
    slug: 'ai-content-generator',
    description: 'Платформа для генерации постов в блог, подписей для соцсетей и рекламных текстов.',
    category: 'AI Apps',
    type: 'SaaS',
    difficulty: 'Intermediate',
    technologies: ['React', 'Next.js', 'Anthropic API', 'Tailwind'],
    estimatedTime: '~30 min',
    tags: ['Content', 'Marketing', 'AI'],
    features: ['Несколько шаблонов', 'Скопировать', 'История'],
    useCase: 'Для маркетологов и креаторов, которым нужны быстрые черновики для разных платформ.',
    prompt: `### ROLE
You are a senior frontend developer and AI engineer.

### OBJECTIVE
Create an AI Content Generator tool with multiple templates (Blog Post, Tweet Thread, LinkedIn Post, Ad Copy).

### PRODUCT REQUIREMENTS
- Sidebar navigation with content templates.
- Main area with input form specific to the selected template.
- Output area with generated text, copy button, and word count.
- History tab to see past generations.

### UX/UI REQUIREMENTS
- Modern SaaS look, similar to Jasper or Copy.ai.
- Use a light theme with subtle purple/indigo accents.
- Smooth transitions between templates.
- Skeleton loaders while generating content.

### TECH STACK
- Next.js 14+ (App Router)
- Tailwind CSS v3+ CSS v3+
- Anthropic API (Claude 3.5 Sonnet) for high-quality writing.
- LocalStorage for saving history (no complex database needed for v1).

### FUNCTIONAL REQUIREMENTS
- Each template should have specific input fields (e.g., Blog: Topic, Tone, Keywords. Tweet: Topic, Length).
- Clicking "Generate" sends a well-crafted system prompt + user inputs to the API.
- Output is displayed in a styled markdown reader.
- 'Скопировать' functionality.

### DATA MODEL
- HistoryItem: { id, template, promptInputs, outputText, timestamp }

### API / BACKEND
- POST /api/generate: Connects to Anthropic API. Protect with rate limiting if possible, or simple error handling.

### AUTH
- None required for this standalone tool version.

### RESPONSIVE
- Fully responsive. On mobile, sidebar becomes a bottom tab or hamburger menu.

### ERROR HANDLING
- Handle API timeouts and empty inputs gracefully.

### SECURITY
- Hide API keys in server-side API routes.

### PERFORMANCE
- Use React Suspense for loading states.

### CONSTRAINTS & RULES
- DO NOT write custom CSS. Use Tailwind utility classes strictly.
- Keep components small and modular.
- Do NOT use third-party libraries unless explicitly mentioned in TECH STACK.

### FINAL REQUIREMENTS
1. Setup Next.js and Tailwind.
2. Build layout with Sidebar and Main Content area.
3. Create the input forms for at least 4 templates.
4. Implement the API route connecting to Anthropic.
5. Build the results view with Markdown rendering and copy button.
6. Implement LocalStorage history saving.
7. Ensure mobile responsiveness.
8. Provide launch instructions.

IMPORTANT: Please do not write the entire application at once. Start with Step 1 and 2 (Setup and Layout), show me the code, and wait for my confirmation before proceeding to the next steps.`,
    popularity: 88,
  },
  {
    id: 'telegram-ai-assistant',
    title: 'Telegram AI Assistant',
    slug: 'telegram-ai-assistant',
    description: 'Универсальный Telegram-бот, который отвечает на вопросы, кратко пересказывает ссылки и генерирует изображения.',
    category: 'Telegram',
    type: 'Bot',
    difficulty: 'Intermediate',
    technologies: ['Node.js', 'Telegraf', 'OpenAI API', 'MongoDB'],
    estimatedTime: '~40 min',
    tags: ['Bot', 'Assistant', 'Telegram'],
    features: ['Чат', 'Веб-браузинг', 'Генерация картинок'],
    useCase: 'Личный карманный помощник для быстрого поиска информации на ходу.',
    prompt: `### ROLE
You are an expert backend developer specializing in Node.js and Telegram Bot API.

### OBJECTIVE
Build a Telegram AI Assistant bot that can maintain context, summarize URLs sent to it, and generate images on demand.

### PRODUCT REQUIREMENTS
- Respond to text messages with contextual AI replies.
- Command /image <prompt> to generate an image.
- Command /clear to clear conversation history.
- Automatically detect URLs in messages, fetch the webpage content, and provide a summary.

### UX/UI REQUIREMENTS
- Use appropriate emojis in bot responses.
- Send "typing..." or "uploading photo..." actions while processing.
- Provide a clean welcome message on /start with instructions.

### TECH STACK
- Node.js.
- Telegraf (Telegram bot framework).
- OpenAI API (gpt-4o-mini for text, dall-e-3 for images).
- Cheerio (for basic web scraping).
- MongoDB (or simple in-memory/JSON file for storing user context if keeping it simple).

### FUNCTIONAL REQUIREMENTS
- Maintain a rolling window of the last 10 messages per user for context.
- If a message contains a URL, fetch the HTML, extract text, and ask the AI to summarize it before responding.
- Image generation should return the image directly in the chat.

### DATA MODEL
- Session: { userId, messages: [] }

### API / BACKEND
- Webhook or Long Polling for Telegram (Long Polling is fine for this).

### AUTH
- Optional: Restrict the bot to a specific list of User IDs (whitelist) to prevent API abuse.

### RESPONSIVE
- N/A (Telegram native UI).

### ERROR HANDLING
- If URL fetching fails, inform the user gently.
- Handle OpenAI API limits and inform the user to wait.

### SECURITY
- Do not log sensitive user data.
- Keep API keys in .env.

### PERFORMANCE
- Process requests asynchronously.

### CONSTRAINTS & RULES
- DO NOT write custom CSS. Use Tailwind utility classes strictly.
- Keep components small and modular.
- Do NOT use third-party libraries unless explicitly mentioned in TECH STACK.

### FINAL REQUIREMENTS
1. Initialize Node.js project.
2. Setup Telegraf and basic commands.
3. Implement context management (session).
4. Integrate OpenAI text generation.
5. Implement URL detection and scraping with Cheerio.
6. Integrate DALL-E for the /image command.
7. Test the bot extensively.
8. Write a README detailing how to get a Telegram Bot Token and run the project.

IMPORTANT: Please do not write the entire application at once. Start with Step 1 and 2 (Setup and Layout), show me the code, and wait for my confirmation before proceeding to the next steps.`,
    popularity: 92,
  },
  {
    id: 'marketplace-analytics-dashboard',
    title: 'Marketplace Analytics Dashboard',
    slug: 'marketplace-analytics-dashboard',
    description: 'Комплексная панель администратора для мониторинга метрик маркетплейса.',
    category: 'Dashboards',
    type: 'Dashboard',
    difficulty: 'Advanced',
    technologies: ['React', 'Next.js', 'Recharts', 'Tailwind'],
    estimatedTime: '~1 hour',
    tags: ['Analytics', 'Admin', 'Data'],
    features: ['Графики', 'Таблицы данных', 'Экспорт'],
    useCase: 'Для владельцев маркетплейсов для отслеживания GMV, роста пользователей и объема транзакций.',
    prompt: `### ROLE
You are a senior UI/UX developer and React expert.

### OBJECTIVE
Build a static but highly interactive Marketplace Analytics Dashboard with beautiful charts and data tables.

### PRODUCT REQUIREMENTS
- Overview cards (Total Revenue, Active Users, New Vendors, Conversion Rate).
- Main Revenue Line Chart (with time filters: 7d, 30d, 1y).
- User Growth Bar Chart.
- Recent Transactions Table with sorting and pagination.
- Vendor Performance list.

### UX/UI REQUIREMENTS
- Premium dark mode default, with a toggle for light mode.
- Use a refined color palette (slate/zinc backgrounds, emerald for positive metrics, rose for negative).
- Smooth hover states on chart data points.
- Clean typography for numbers (tabular nums).

### TECH STACK
- Next.js 14+ (App Router)
- Tailwind CSS v3+ CSS v3+
- shadcn/ui components (cards, tables, buttons, dropdowns).
- Recharts (for charts).
- Lucide Icons.

### FUNCTIONAL REQUIREMENTS
- Mock all data realistically (generate robust dummy data arrays).
- Time filters should actually update the charts with different data subsets.
- Table should support basic sorting by clicking column headers (Amount, Status, Date).

### DATA MODEL
- Transaction: { id, date, amount, vendor, customer, status }
- DailyMetric: { date, revenue, users }

### API / BACKEND
- All static/mock data for this version. No real backend needed.

### AUTH
- Mock login screen that accepts any credentials to view the dashboard.

### RESPONSIVE
- Dashboard must be fully responsive.
- Sidebar collapses to an icon-only menu on tablet, and a bottom bar on mobile.
- Charts should resize properly.

### ERROR HANDLING
- N/A for static data.

### SECURITY
- N/A.

### PERFORMANCE
- Optimize Recharts rendering (use ResponsiveContainer).

### CONSTRAINTS & RULES
- DO NOT write custom CSS. Use Tailwind utility classes strictly.
- Keep components small and modular.
- Do NOT use third-party libraries unless explicitly mentioned in TECH STACK.

### FINAL REQUIREMENTS
1. Set up Next.js, Tailwind, and shadcn/ui.
2. Create robust mock data generators.
3. Build the Sidebar and Header layout.
4. Implement Overview Cards with trend indicators (e.g., +12% from last month).
5. Integrate Recharts for Revenue and Growth.
6. Build the interactive Transactions table.
7. Ensure pixel-perfect responsive design.
8. Document how to swap mock data for real API calls in the future.

IMPORTANT: Please do not write the entire application at once. Start with Step 1 and 2 (Setup and Layout), show me the code, and wait for my confirmation before proceeding to the next steps.`,
    popularity: 85,
  },
  {
    id: 'kanban-project-manager',
    title: 'Kanban Project Manager',
    slug: 'kanban-project-manager',
    description: 'Альтернатива Trello с функцией drag-and-drop для личного управления задачами.',
    category: 'Productivity',
    type: 'Web App',
    difficulty: 'Advanced',
    technologies: ['React', 'Zustand', 'dnd-kit', 'Tailwind'],
    estimatedTime: '~1 hour',
    tags: ['Task Management', 'Drag-and-Drop'],
    features: ['Drag & Drop', 'Local Storage', 'Кастомные колонки'],
    useCase: 'Управление сложными проектами или ежедневными задачами с помощью визуальной доски.',
    prompt: `### ROLE
You are an expert React developer skilled in complex state management and drag-and-drop interfaces.

### OBJECTIVE
Build a Kanban Project Manager (like Trello) that works entirely in the browser using LocalStorage.

### PRODUCT REQUIREMENTS
- Multiple columns (To Do, In Progress, Review, Done).
- Ability to add, edit, delete tasks.
- Drag and drop tasks between columns.
- Drag and drop columns to reorder them.
- Task details modal (description, labels, due date).

### UX/UI REQUIREMENTS
- Clean, minimalist interface.
- Distinct visual states for dragging (opacity change, shadow).
- Accessible keyboard navigation if possible.
- Custom scrollbars for columns.

### TECH STACK
- React (Vite or Next.js).
- Tailwind CSS v3+ CSS v3+
- @dnd-kit/core, @dnd-kit/sortable (or react-beautiful-dnd if preferred, but dnd-kit is modern).
- Zustand (for global state management).
- LocalStorage.

### FUNCTIONAL REQUIREMENTS
- State must persist across page reloads.
- Reordering tasks within the same column.
- Moving tasks across different columns.
- Creating new columns.

### DATA MODEL
- Board: { id, title, columns: Column[] }
- Column: { id, title, taskIds: string[] }
- Task: { id, content, description, labels: string[] }

### API / BACKEND
- None. Fully client-side.

### AUTH
- None.

### RESPONSIVE
- Horizontal scrolling for boards on mobile.
- Drag and drop should work on touch devices (use appropriate dnd-kit sensors).

### ERROR HANDLING
- Prevent adding empty tasks.

### SECURITY
- Sanitize inputs to prevent XSS if rendering markdown in descriptions.

### PERFORMANCE
- Use memoization (React.memo) for tasks so moving one task doesn't re-render the whole board.

### CONSTRAINTS & RULES
- DO NOT write custom CSS. Use Tailwind utility classes strictly.
- Keep components small and modular.
- Do NOT use third-party libraries unless explicitly mentioned in TECH STACK.

### FINAL REQUIREMENTS
1. Setup project and install dnd-kit + Zustand.
2. Define the Zustand store and load/save logic for LocalStorage.
3. Build the static UI (Board, Columns, Task Cards).
4. Implement drag-and-drop logic for Tasks.
5. Implement drag-and-drop logic for Columns.
6. Build the Task detail modal.
7. Polish the UI (animations, drag overlays).
8. Ensure touch compatibility for mobile users.

IMPORTANT: Please do not write the entire application at once. Start with Step 1 and 2 (Setup and Layout), show me the code, and wait for my confirmation before proceeding to the next steps.`,
    popularity: 90,
  }
];
