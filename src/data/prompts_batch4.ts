import { Prompt } from '../lib/types';

export const promptsBatch4: Prompt[] = [
  {
    id: 'sql-query-builder', title: 'SQL Query Builder', slug: 'sql-query-builder', category: 'Developer Tools', type: 'Utility', difficulty: 'Intermediate', technologies: ['React', 'Zustand', 'Tailwind'], estimatedTime: '~1 hour', tags: ['SQL', 'Data'], features: ['Визуальный билдер', 'Экспорт SQL', 'Схема таблиц'], useCase: 'Визуальное конструирование сложных SQL-запросов.', popularity: 62, description: 'Визуальный инструмент для создания SQL-запросов без написания кода.',
    prompt: `### ROLE\nYou are a frontend developer.\n\n### OBJECTIVE\nBuild a visual SQL query builder.\n\n### PRODUCT REQUIREMENTS\n- Define a mock schema (e.g., Users, Orders, Products).\n- UI to select table, columns, WHERE conditions, and ORDER BY.\n- Real-time generated SQL string output.\n\n### UX/UI REQUIREMENTS\n- Clean, logical flow from left to right.\n- Syntax highlighted output.\n\n### TECH STACK\n- React.\n- Zustand.\n- Tailwind CSS v3+ CSS v3+\n\n### CONSTRAINTS & RULES
- DO NOT write custom CSS. Use Tailwind utility classes strictly.
- Keep components small and modular.
- Do NOT use third-party libraries unless explicitly mentioned in TECH STACK.

### FINAL REQUIREMENTS\n1. Define the mock schema state.\n2. Build the visual selection components.\n3. Implement the logic to construct the SQL string based on selections.\n4. Display the output.`
  },
  {
    id: 'team-knowledge-base', title: 'Team Knowledge Base', slug: 'team-knowledge-base', category: 'Productivity', type: 'Web App', difficulty: 'Advanced', technologies: ['Next.js', 'Tailwind', 'Markdown', 'Supabase'], estimatedTime: '~1.5 hours', tags: ['Wiki', 'Team'], features: ['Markdown редактор', 'Поиск', 'Категории'], useCase: 'Внутренняя вики для командной документации.', popularity: 76, description: 'Быстрая внутренняя вики на основе markdown для команд.',
    prompt: `### ROLE\nYou are a full-stack developer.\n\n### OBJECTIVE\nBuild a team knowledge base / wiki.\n\n### PRODUCT REQUIREMENTS\n- Create, edit, and delete markdown documents.\n- Organize by categories.\n- Full-text search.\n\n### UX/UI REQUIREMENTS\n- Notion-like clean interface.\n- Sidebar for navigation.\n\n### TECH STACK\n- Next.js 14+ (App Router).\n- Tailwind CSS v3+ CSS v3+\n- Supabase.\n- react-markdown.\n\n### DATA MODEL\n- Document: { id, title, content, categoryId }\n- Category: { id, name }\n\n### CONSTRAINTS & RULES
- DO NOT write custom CSS. Use Tailwind utility classes strictly.
- Keep components small and modular.
- Do NOT use third-party libraries unless explicitly mentioned in TECH STACK.

### FINAL REQUIREMENTS\n1. Setup database.\n2. Build document viewer and editor.\n3. Implement search functionality.\n4. Build navigation sidebar.`
  },
  {
    id: 'customer-feedback', title: 'Customer Feedback Platform', slug: 'customer-feedback', category: 'SaaS', type: 'Web App', difficulty: 'Intermediate', technologies: ['Next.js', 'Tailwind', 'PostgreSQL'], estimatedTime: '~1 hour', tags: ['Feedback', 'Product'], features: ['Голосование', 'Дорожная карта', 'Комментарии'], useCase: 'Сбор и приоритизация отзывов пользователей.', popularity: 83, description: 'Доска для запросов функций и голосования за них.',
    prompt: `### ROLE\nYou are a full-stack developer.\n\n### OBJECTIVE\nBuild a feedback board where users can request features and upvote them.\n\n### PRODUCT REQUIREMENTS\n- List of feature requests sorted by votes.\n- Form to submit a new request.\n- Status tags (Under Review, Planned, In Progress, Done).\n- Roadmap view.\n\n### UX/UI REQUIREMENTS\n- Clean list view with prominent upvote buttons.\n- Kanban style roadmap.\n\n### TECH STACK\n- Next.js 14+ (App Router).\n- Tailwind CSS v3+ CSS v3+\n- PostgreSQL.\n\n### CONSTRAINTS & RULES
- DO NOT write custom CSS. Use Tailwind utility classes strictly.
- Keep components small and modular.
- Do NOT use third-party libraries unless explicitly mentioned in TECH STACK.

### FINAL REQUIREMENTS\n1. Build the feedback list and upvote logic.\n2. Create the submission form.\n3. Build the roadmap board view.`
  },
  {
    id: 'ai-interview-simulator', title: 'AI Interview Simulator', slug: 'ai-interview-simulator', category: 'AI Apps', type: 'Web App', difficulty: 'Advanced', technologies: ['Next.js', 'OpenAI API', 'Tailwind'], estimatedTime: '~2 hours', tags: ['AI', 'Career'], features: ['Голосовой ввод', 'ИИ-интервьюер', 'Отчет с отзывами'], useCase: 'Тренировка собеседований с ИИ.', popularity: 91, description: 'Симуляция технических или поведенческих интервью с ИИ.',
    prompt: `### ROLE\nYou are an AI and frontend engineer.\n\n### OBJECTIVE\nBuild a text/voice-based AI interview simulator.\n\n### PRODUCT REQUIREMENTS\n- Select interview type (e.g., Frontend React, Behavioral).\n- AI asks questions one by one.\n- User answers (text input is fine for v1).\n- AI provides a final evaluation report.\n\n### UX/UI REQUIREMENTS\n- Chat interface focused on the current question.\n- Professional, encouraging tone.\n\n### TECH STACK\n- Next.js 14+ (App Router).\n- Tailwind CSS v3+ CSS v3+\n- OpenAI API (GPT-4o).\n\n### CONSTRAINTS & RULES
- DO NOT write custom CSS. Use Tailwind utility classes strictly.
- Keep components small and modular.
- Do NOT use third-party libraries unless explicitly mentioned in TECH STACK.

### FINAL REQUIREMENTS\n1. Construct system prompts for different interview types.\n2. Build the chat flow.\n3. Implement the logic to generate the final report after 5 questions.`
  },
  {
    id: 'course-platform', title: 'Mini Course Platform', slug: 'course-platform', category: 'E-commerce', type: 'SaaS', difficulty: 'Advanced', technologies: ['Next.js', 'Tailwind', 'Stripe', 'Supabase'], estimatedTime: '~2 hours', tags: ['Education', 'Video'], features: ['Видеоплеер', 'Отслеживание прогресса', 'Пейволл'], useCase: 'Продажа и предоставление доступа к видеокурсу.', popularity: 79, description: 'Платформа для размещения и продажи цифровых видеокурсов.',
    prompt: `### ROLE\nYou are a full-stack developer.\n\n### OBJECTIVE\nBuild a simple LMS (Learning Management System) to sell a course.\n\n### PRODUCT REQUIREMENTS\n- Landing page with course details and Stripe checkout.\n- Authenticated area for buyers.\n- Sidebar with curriculum.\n- Video player (YouTube/Vimeo embed is fine).\n- Mark lessons as complete.\n\n### UX/UI REQUIREMENTS\n- High-converting landing page.\n- Distraction-free learning interface.\n\n### TECH STACK\n- Next.js 14+ (App Router).\n- Tailwind CSS v3+ CSS v3+\n- Supabase (Auth + DB).\n- Stripe.\n\n### CONSTRAINTS & RULES
- DO NOT write custom CSS. Use Tailwind utility classes strictly.
- Keep components small and modular.
- Do NOT use third-party libraries unless explicitly mentioned in TECH STACK.

### FINAL REQUIREMENTS\n1. Setup Auth and DB for Users and Course Progress.\n2. Integrate Stripe Checkout for access.\n3. Build the curriculum viewer and video player page.`
  },
  {
    id: 'event-management', title: 'Event Management App', slug: 'event-management', category: 'Productivity', type: 'Web App', difficulty: 'Intermediate', technologies: ['React', 'Tailwind', 'Firebase'], estimatedTime: '~1 hour', tags: ['Events', 'Social'], features: ['RSVP (Ответы)', 'Список гостей', 'Детали мероприятия'], useCase: 'Создание мероприятий и управление списками гостей.', popularity: 66, description: 'Простое приложение для проведения мероприятий и отслеживания участников.',
    prompt: `### ROLE\nYou are a frontend developer.\n\n### OBJECTIVE\nBuild an event creation and RSVP app.\n\n### PRODUCT REQUIREMENTS\n- Create an event (Title, Date, Location, Description).\n- Generate a shareable link.\n- Public page for users to RSVP (Yes/No).\n- Dashboard to see guest list.\n\n### UX/UI REQUIREMENTS\n- Fun, celebratory design.\n- Mobile-friendly public RSVP page.\n\n### TECH STACK\n- Next.js 14+ (App Router) or React.\n- Tailwind CSS v3+ CSS v3+\n- Firebase/Supabase.\n\n### CONSTRAINTS & RULES
- DO NOT write custom CSS. Use Tailwind utility classes strictly.
- Keep components small and modular.
- Do NOT use third-party libraries unless explicitly mentioned in TECH STACK.

### FINAL REQUIREMENTS\n1. Build the event creation form.\n2. Build the dynamic event public page.\n3. Implement RSVP logic and guest list view.`
  },
  {
    id: 'digital-product-marketplace', title: 'Digital Product Marketplace', slug: 'digital-product-marketplace', category: 'E-commerce', type: 'Web App', difficulty: 'Advanced', technologies: ['Next.js', 'Tailwind', 'Stripe'], estimatedTime: '~2 hours', tags: ['Marketplace', 'Digital'], features: ['Загрузка товаров', 'Поиск', 'Загрузки'], useCase: 'Покупка и продажа цифровых активов (например, шаблонов, иконок).', popularity: 74, description: 'Витрина для цифровых товаров.',
    prompt: `### ROLE\nYou are a full-stack developer.\n\n### OBJECTIVE\nBuild a marketplace for digital goods.\n\n### PRODUCT REQUIREMENTS\n- Product grid with filtering and search.\n- Product detail page.\n- Cart and checkout.\n- Post-purchase download link generation.\n\n### UX/UI REQUIREMENTS\n- Visual-heavy design focusing on product thumbnails.\n- Clean checkout experience.\n\n### TECH STACK\n- Next.js 14+ (App Router).\n- Tailwind CSS v3+ CSS v3+\n- Stripe.\n\n### CONSTRAINTS & RULES
- DO NOT write custom CSS. Use Tailwind utility classes strictly.
- Keep components small and modular.
- Do NOT use third-party libraries unless explicitly mentioned in TECH STACK.

### FINAL REQUIREMENTS\n1. Build the catalog UI.\n2. Implement search and filtering.\n3. Integrate Stripe checkout.\n4. Handle secure digital file delivery post-payment.`
  },
  {
    id: 'subscription-manager', title: 'Subscription Manager', slug: 'subscription-manager', category: 'Dashboards', type: 'Web App', difficulty: 'Intermediate', technologies: ['Vue.js', 'Tailwind', 'LocalStorage'], estimatedTime: '~45 min', tags: ['Finance', 'Utility'], features: ['Расчет стоимости', 'Напоминания', 'Валюты'], useCase: 'Учет ежемесячных подписок на SaaS-сервисы.', popularity: 69, description: 'Отслеживайте все ваши регулярные подписки и их стоимость.',
    prompt: `### ROLE\nYou are a frontend developer.\n\n### OBJECTIVE\nBuild an app to track monthly subscriptions.\n\n### PRODUCT REQUIREMENTS\n- Add subscription (Name, Cost, Billing Cycle).\n- Calculate total monthly and yearly costs.\n- Highlight upcoming renewals.\n\n### UX/UI REQUIREMENTS\n- Clean list view with logos for popular services (Netflix, Spotify).\n- Summary cards for costs.\n\n### TECH STACK\n- React or Vue.js.\n- Tailwind CSS v3+ CSS v3+\n- LocalStorage.\n\n### CONSTRAINTS & RULES
- DO NOT write custom CSS. Use Tailwind utility classes strictly.
- Keep components small and modular.
- Do NOT use third-party libraries unless explicitly mentioned in TECH STACK.

### FINAL REQUIREMENTS\n1. Build the input form.\n2. Implement the list view.\n3. Calculate and display cost summaries.`
  },
  {
    id: 'ai-agent-control', title: 'AI Agent Control Center', slug: 'ai-agent-control', category: 'AI Apps', type: 'Dashboard', difficulty: 'Expert', technologies: ['Next.js', 'Tailwind', 'WebSockets'], estimatedTime: '~2.5 hours', tags: ['AI', 'Agents', 'Complex'], features: ['Очередь задач', 'Лайв-логи', 'Статус агента'], useCase: 'Мониторинг и управление автономными ИИ-агентами.', popularity: 95, description: 'Дашборд для мониторинга автономных задач ИИ и логов.',
    prompt: `### ROLE\nYou are a senior full-stack AI developer.\n\n### OBJECTIVE\nBuild a control center for monitoring autonomous AI agents.\n\n### PRODUCT REQUIREMENTS\n- View active agents and their current tasks.\n- Live streaming logs of agent thoughts/actions.\n- Ability to pause/kill an agent.\n- Form to dispatch a new agent task.\n\n### UX/UI REQUIREMENTS\n- Hacker/Cyberpunk aesthetic or ultra-modern dark mode.\n- Terminal-like scrolling view for logs.\n\n### TECH STACK\n- Next.js 14+ (App Router).\n- Tailwind CSS v3+ CSS v3+\n- Mock WebSockets for live data simulation.\n\n### CONSTRAINTS & RULES
- DO NOT write custom CSS. Use Tailwind utility classes strictly.
- Keep components small and modular.
- Do NOT use third-party libraries unless explicitly mentioned in TECH STACK.

### FINAL REQUIREMENTS\n1. Build the dashboard layout.\n2. Implement the live log viewer with auto-scroll.\n3. Create mock data streams for agent activities.\n4. Build the task dispatch form.`
  },
  {
    id: 'ai-website-generator', title: 'AI Website Generator', slug: 'ai-website-generator', category: 'AI Apps', type: 'SaaS', difficulty: 'Expert', technologies: ['React', 'Next.js', 'OpenAI API', 'Tailwind'], estimatedTime: '~3 hours', tags: ['AI', 'Builder', 'Web'], features: ['Промпт в сайт', 'Живое превью', 'Экспорт кода'], useCase: 'Генерация лендинга из одного текстового промпта.', popularity: 98, description: 'Введите промпт и получите полностью сверстанный адаптивный лендинг.',
    prompt: `### ROLE\nYou are an AI engineer and UI expert.\n\n### OBJECTIVE\nBuild a tool that takes a user description and generates a React/Tailwind landing page using AI.\n\n### PRODUCT REQUIREMENTS\n- Input area for the website description.\n- Call LLM to generate raw HTML/Tailwind code.\n- Render the generated code safely in an iframe or shadow DOM.\n- Provide a "Download Code" button.\n\n### UX/UI REQUIREMENTS\n- Split view: Prompt on left, generated preview on right.\n- Loading animations describing the generation steps.\n\n### TECH STACK\n- Next.js 14+ (App Router).\n- Tailwind CSS v3+ CSS v3+\n- OpenAI API (GPT-4o).\n- html-react-parser (for rendering).\n\n### CONSTRAINTS & RULES
- DO NOT write custom CSS. Use Tailwind utility classes strictly.
- Keep components small and modular.
- Do NOT use third-party libraries unless explicitly mentioned in TECH STACK.

### FINAL REQUIREMENTS\n1. Design the prompt interface.\n2. Construct the system prompt to force the LLM to output ONLY valid HTML/Tailwind.\n3. Implement the rendering logic for the AI output.\n4. Add code export functionality.`
  }
];
