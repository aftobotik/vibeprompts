import { Prompt } from '../lib/types';

export const promptsBatch3: Prompt[] = [
  {
    id: 'personal-finance-dashboard', title: 'Personal Finance Dashboard', slug: 'personal-finance-dashboard', category: 'Dashboards', type: 'Dashboard', difficulty: 'Intermediate', technologies: ['React', 'Next.js', 'Recharts'], estimatedTime: '~1 hour', tags: ['Finance', 'Tracking'], features: ['Учет расходов', 'Учет доходов', 'Бюджетирование'], useCase: 'Визуальное отслеживание личных расходов и доходов.', popularity: 81, description: 'Дашборд для отслеживания личных расходов, доходов и бюджетов с помощью графиков.',
    prompt: `### ROLE\nYou are a frontend developer focused on data visualization.\n\n### OBJECTIVE\nBuild a Personal Finance Dashboard to track expenses and income.\n\n### PRODUCT REQUIREMENTS\n- Overview cards (Total Balance, Monthly Income, Monthly Expenses).\n- Expense breakdown by category (Pie chart).\n- Income vs Expenses over time (Bar chart).\n- Recent transactions list.\n- Add new transaction modal.\n\n### UX/UI REQUIREMENTS\n- Clean, modern, trustworthy UI.\n- Dark mode support.\n- Smooth chart animations.\n\n### TECH STACK\n- Next.js 14+ (App Router)\n- Tailwind CSS v3+ CSS v3+\n- Recharts.\n- Lucide Icons.\n\n### FUNCTIONAL REQUIREMENTS\n- Add transaction adds to the list and updates charts.\n- Filter transactions by month.\n\n### DATA MODEL\n- Transaction: { id, date, amount, category, type (income/expense), description }\n\n### CONSTRAINTS & RULES
- DO NOT write custom CSS. Use Tailwind utility classes strictly.
- Keep components small and modular.
- Do NOT use third-party libraries unless explicitly mentioned in TECH STACK.

### FINAL REQUIREMENTS\n1. Setup project.\n2. Create mock data for transactions.\n3. Build UI and integrate Recharts.\n4. Implement add transaction logic.`
  },
  {
    id: 'ai-document-analyzer', title: 'AI Document Analyzer', slug: 'ai-document-analyzer', category: 'AI Apps', type: 'SaaS', difficulty: 'Advanced', technologies: ['Next.js', 'LangChain', 'OpenAI API', 'Pinecone'], estimatedTime: '~2 hours', tags: ['AI', 'Documents', 'RAG'], features: ['Загрузка PDF', 'Чат с документом', 'Саммаризация'], useCase: 'Общение с большими PDF-документами для быстрого извлечения информации.', popularity: 94, description: 'Загрузите PDF и общайтесь с ним для извлечения инсайтов и кратких пересказов.',
    prompt: `### ROLE\nYou are an AI engineer and full-stack developer.\n\n### OBJECTIVE\nBuild a RAG (Retrieval-Augmented Generation) application to chat with uploaded PDFs.\n\n### PRODUCT REQUIREMENTS\n- File upload for PDFs.\n- Document parsing and chunking.\n- Vector database integration for embeddings.\n- Chat interface to ask questions about the document.\n\n### UX/UI REQUIREMENTS\n- Split view: Document preview on left, Chat on right.\n- Typing indicators.\n- Citation links in chat responses.\n\n### TECH STACK\n- Next.js 14+ (App Router).\n- Tailwind CSS v3+ CSS v3+\n- LangChain.js.\n- OpenAI (Embeddings & GPT-4o-mini).\n- Pinecone (Vector DB).\n- pdf-parse.\n\n### DATA MODEL\n- Document: { id, filename, uploadedAt }\n- ChatMessage: { id, role, content, citations }\n\n### CONSTRAINTS & RULES
- DO NOT write custom CSS. Use Tailwind utility classes strictly.
- Keep components small and modular.
- Do NOT use third-party libraries unless explicitly mentioned in TECH STACK.

### FINAL REQUIREMENTS\n1. Init Next.js.\n2. Build PDF upload and parsing pipeline.\n3. Implement embedding and Pinecone upsert.\n4. Build chat interface.\n5. Implement LangChain RAG chain for answering.`
  },
  {
    id: 'telegram-mini-app', title: 'Telegram Mini App - Store', slug: 'telegram-mini-app', category: 'Telegram', type: 'Mini App', difficulty: 'Intermediate', technologies: ['React', 'Telegram Web Apps API', 'Tailwind'], estimatedTime: '~1 hour', tags: ['Telegram', 'E-commerce', 'TWA'], features: ['Список товаров', 'Корзина', 'Оплата в Telegram'], useCase: 'Магазин, работающий прямо внутри Telegram.', popularity: 88, description: 'Telegram Mini App для продажи цифровых или физических продуктов.',
    prompt: `### ROLE\nYou are a frontend developer specializing in Telegram Mini Apps (TWA).\n\n### OBJECTIVE\nBuild a Telegram Mini App storefront.\n\n### PRODUCT REQUIREMENTS\n- Product listing with images and prices.\n- Shopping cart functionality.\n- Integration with Telegram MainButton for checkout.\n- Pass data back to the bot upon checkout.\n\n### UX/UI REQUIREMENTS\n- Match Telegram's native theme (use WebApp.themeParams).\n- Fast, app-like feel.\n- Haptic feedback on button presses.\n\n### TECH STACK\n- React (Vite).\n- Tailwind CSS v3+ CSS v3+\n- @twa-dev/sdk.\n\n### DATA MODEL\n- Product: { id, title, price, image }\n- CartItem: { productId, qty }\n\n### CONSTRAINTS & RULES
- DO NOT write custom CSS. Use Tailwind utility classes strictly.
- Keep components small and modular.
- Do NOT use third-party libraries unless explicitly mentioned in TECH STACK.

### FINAL REQUIREMENTS\n1. Setup React with TWA SDK.\n2. Map Tailwind colors to Telegram theme variables.\n3. Build product catalog and cart.\n4. Configure Telegram MainButton to trigger checkout flow.`
  },
  {
    id: 'password-manager-ui', title: 'Password Manager UI', slug: 'password-manager-ui', category: 'Developer Tools', type: 'Dashboard', difficulty: 'Beginner', technologies: ['React', 'Tailwind', 'Framer Motion'], estimatedTime: '~45 min', tags: ['Security', 'UI'], features: ['Генератор паролей', 'Оценка надежности', 'Просмотр хранилища'], useCase: 'Безопасный офлайн-генератор паролей и хранилище.', popularity: 65, description: 'Стильный интерфейс для создания и управления паролями.',
    prompt: `### ROLE\nYou are a UI/UX developer.\n\n### OBJECTIVE\nBuild a frontend-only Password Manager and Generator UI.\n\n### PRODUCT REQUIREMENTS\n- Vault view showing saved accounts.\n- Password generator with length, symbols, numbers toggles.\n- Password strength meter.\n- Click-to-copy functionality.\n\n### UX/UI REQUIREMENTS\n- Dark theme, high contrast.\n- Blurred glassmorphism elements.\n- Smooth animations for copying and strength meter changes.\n\n### TECH STACK\n- React.\n- Tailwind CSS v3+ CSS v3+\n- Framer Motion.\n- zxcvbn (for strength estimation).\n\n### CONSTRAINTS & RULES
- DO NOT write custom CSS. Use Tailwind utility classes strictly.
- Keep components small and modular.
- Do NOT use third-party libraries unless explicitly mentioned in TECH STACK.

### FINAL REQUIREMENTS\n1. Setup project.\n2. Build the generator component with reactive strength meter.\n3. Build the vault list view.\n4. Add Framer Motion animations for interactions.`
  },
  {
    id: 'api-monitoring-dashboard', title: 'API Monitoring Dashboard', slug: 'api-monitoring-dashboard', category: 'Dashboards', type: 'Dashboard', difficulty: 'Intermediate', technologies: ['Vue.js', 'Tailwind', 'Chart.js'], estimatedTime: '~1 hour', tags: ['DevOps', 'API'], features: ['Отслеживание аптайма', 'Графики задержек', 'Статус эндпоинтов'], useCase: 'Мониторинг состояния API и времени отклика.', popularity: 72, description: 'Дашборд для визуализации аптайма и задержек API.',
    prompt: `### ROLE\nYou are a frontend engineer.\n\n### OBJECTIVE\nBuild an API Monitoring Dashboard.\n\n### PRODUCT REQUIREMENTS\n- List of endpoints with current status (Up/Down).\n- Latency line chart over the last 24h.\n- Uptime percentage metric.\n- Incident log.\n\n### UX/UI REQUIREMENTS\n- Dashboard layout with a sidebar.\n- Use green/red indicators clearly.\n- Tooltips on charts.\n\n### TECH STACK\n- Vue.js or React.\n- Tailwind CSS v3+ CSS v3+\n- Chart.js or Recharts.\n\n### CONSTRAINTS & RULES
- DO NOT write custom CSS. Use Tailwind utility classes strictly.
- Keep components small and modular.
- Do NOT use third-party libraries unless explicitly mentioned in TECH STACK.

### FINAL REQUIREMENTS\n1. Create mock data for API health (status, latency ping arrays).\n2. Build the main dashboard view.\n3. Integrate the latency chart.\n4. Build the incident history table.`
  },
  {
    id: 'ai-image-generator', title: 'AI Image Prompt Generator', slug: 'ai-image-generator', category: 'AI Apps', type: 'Web App', difficulty: 'Beginner', technologies: ['Next.js', 'Tailwind', 'OpenAI API'], estimatedTime: '~45 min', tags: ['AI', 'Images', 'Prompting'], features: ['Выбор стилей', 'Генерация картинок', 'Галерея'], useCase: 'Помощь пользователям в создании лучших промптов и изображений с DALL-E.', popularity: 87, description: 'Приложение для создания детальных промптов и генерации изображений.',
    prompt: `### ROLE\nYou are a full-stack developer.\n\n### OBJECTIVE\nBuild a tool that helps users construct detailed image prompts and generates the image using DALL-E 3.\n\n### PRODUCT REQUIREMENTS\n- Form with fields: Subject, Style (e.g., Cyberpunk, Oil Painting), Lighting, Camera Angle.\n- Construct a final prompt string from the fields.\n- Generate image button.\n- Display generated image with a download button.\n\n### UX/UI REQUIREMENTS\n- Creative, vibrant design.\n- Loading skeleton for image generation.\n\n### TECH STACK\n- Next.js 14+ (App Router).\n- Tailwind CSS v3+ CSS v3+\n- OpenAI API.\n\n### CONSTRAINTS & RULES
- DO NOT write custom CSS. Use Tailwind utility classes strictly.
- Keep components small and modular.
- Do NOT use third-party libraries unless explicitly mentioned in TECH STACK.

### FINAL REQUIREMENTS\n1. Setup the Next.js form.\n2. Implement the prompt construction logic.\n3. Create the API route to call DALL-E 3.\n4. Build the image display and download functionality.`
  },
  {
    id: 'crm-freelancers', title: 'CRM for Freelancers', slug: 'crm-freelancers', category: 'SaaS', type: 'Dashboard', difficulty: 'Advanced', technologies: ['Next.js', 'Tailwind', 'Supabase'], estimatedTime: '~2 hours', tags: ['CRM', 'Freelance', 'Business'], features: ['Управление клиентами', 'Отслеживание проектов', 'Счета'], useCase: 'Управление клиентами, проектами и счетами в одном месте.', popularity: 84, description: 'Легкая CRM, разработанная специально для фрилансеров.',
    prompt: `### ROLE\nYou are a senior full-stack developer.\n\n### OBJECTIVE\nBuild a CRM tailored for freelancers.\n\n### PRODUCT REQUIREMENTS\n- Client directory (Name, Email, Company, Notes).\n- Project pipeline (Kanban or list view: Lead, Active, Completed).\n- Simple invoicing module.\n- Dashboard with total revenue and active projects.\n\n### UX/UI REQUIREMENTS\n- Professional SaaS interface.\n- Sidebar navigation.\n- Modals for adding clients/projects.\n\n### TECH STACK\n- Next.js 14+ (App Router)\n- Tailwind CSS v3+ CSS v3+\n- Supabase (Auth + PostgreSQL).\n\n### DATA MODEL\n- Client: { id, name, email }\n- Project: { id, clientId, title, status, value }\n- Invoice: { id, projectId, amount, status }\n\n### CONSTRAINTS & RULES
- DO NOT write custom CSS. Use Tailwind utility classes strictly.
- Keep components small and modular.
- Do NOT use third-party libraries unless explicitly mentioned in TECH STACK.

### FINAL REQUIREMENTS\n1. Setup Next.js and Supabase.\n2. Implement Auth.\n3. Build database schema and API routes.\n4. Create the Dashboard, Clients, and Projects views.\n5. Implement CRUD for all entities.`
  },
  {
    id: 'booking-system', title: 'Service Booking System', slug: 'booking-system', category: 'E-commerce', type: 'Web App', difficulty: 'Advanced', technologies: ['React', 'Next.js', 'Stripe', 'Tailwind'], estimatedTime: '~2 hours', tags: ['Booking', 'Платежи'], features: ['Календарь', 'Слоты времени', 'Оплата Stripe'], useCase: 'Возможность клиентам бронировать и оплачивать консультации или услуги.', popularity: 78, description: 'Система бронирования на основе календаря с интегрированными платежами.',
    prompt: `### ROLE\nYou are a full-stack developer.\n\n### OBJECTIVE\nBuild a booking system where users can select a date/time and pay for a service.\n\n### PRODUCT REQUIREMENTS\n- Calendar view to select a date.\n- Available time slots for the selected date.\n- Form for user details.\n- Stripe integration for payment.\n- Confirmation page.\n\n### UX/UI REQUIREMENTS\n- Clean, trustworthy checkout flow.\n- Clear unavailable states for booked slots.\n\n### TECH STACK\n- Next.js 14+ (App Router).\n- Tailwind CSS v3+ CSS v3+\n- date-fns.\n- Stripe Payment Links or Elements.\n\n### DATA MODEL\n- Booking: { id, date, time, customerName, customerEmail, status (pending/paid) }\n\n### CONSTRAINTS & RULES
- DO NOT write custom CSS. Use Tailwind utility classes strictly.
- Keep components small and modular.
- Do NOT use third-party libraries unless explicitly mentioned in TECH STACK.

### FINAL REQUIREMENTS\n1. Setup project.\n2. Build calendar and time slot selection logic.\n3. Integrate Stripe for checkout.\n4. Create success/failure routes.`
  },
  {
    id: 'github-analytics', title: 'GitHub Repo Analytics', slug: 'github-analytics', category: 'Developer Tools', type: 'Web App', difficulty: 'Intermediate', technologies: ['React', 'GitHub API', 'Recharts'], estimatedTime: '~1 hour', tags: ['GitHub', 'Analytics'], features: ['История звезд', 'Статистика контрибьюторов', 'Статистика языков'], useCase: 'Аналитика по URL-адресу любого репозитория.', popularity: 71, description: 'Визуализация данных из любого публичного репозитория GitHub.',
    prompt: `### ROLE\nYou are a frontend developer.\n\n### OBJECTIVE\nBuild a tool that fetches data from the GitHub API and visualizes it.\n\n### PRODUCT REQUIREMENTS\n- Input field for repository (e.g., facebook/react).\n- Fetch and display: Star count, Forks, Open Issues, License.\n- Chart: Star history (simulated if API doesn't provide it easily, or use stargazers endpoint).\n- Chart: Language breakdown.\n\n### UX/UI REQUIREMENTS\n- GitHub-inspired dark theme.\n- Loading states while fetching data.\n\n### TECH STACK\n- React or Next.js.\n- Tailwind CSS v3+ CSS v3+\n- GitHub REST API.\n- Recharts.\n\n### CONSTRAINTS & RULES
- DO NOT write custom CSS. Use Tailwind utility classes strictly.
- Keep components small and modular.
- Do NOT use third-party libraries unless explicitly mentioned in TECH STACK.

### FINAL REQUIREMENTS\n1. Build the search input.\n2. Integrate GitHub API fetching (handle rate limits gracefully).\n3. Render statistics cards.\n4. Build the charts for languages and stars.`
  },
  {
    id: 'json-formatter', title: 'JSON Formatter & Validator', slug: 'json-formatter', category: 'Developer Tools', type: 'Utility', difficulty: 'Beginner', technologies: ['React', 'Tailwind', 'Monaco Editor'], estimatedTime: '~45 min', tags: ['Utility', 'Dev', 'JSON'], features: ['Форматирование', 'Минификация', 'Валидация'], useCase: 'Быстрое форматирование, валидация и минификация JSON-строк.', popularity: 68, description: 'Быстрый клиентский инструмент форматирования и валидации JSON.',
    prompt: `### ROLE\nYou are a frontend developer.\n\n### OBJECTIVE\nBuild a developer utility to format and validate JSON.\n\n### PRODUCT REQUIREMENTS\n- Two-pane layout: Input on left, Output on right.\n- Buttons: Format, Minify, Clear.\n- Error banner if JSON is invalid.\n\n### UX/UI REQUIREMENTS\n- Code editor feel.\n- Syntax highlighting for the output.\n\n### TECH STACK\n- React.\n- Tailwind CSS v3+ CSS v3+\n- @monaco-editor/react (or simple textareas if keeping it very lightweight).\n\n### CONSTRAINTS & RULES
- DO NOT write custom CSS. Use Tailwind utility classes strictly.
- Keep components small and modular.
- Do NOT use third-party libraries unless explicitly mentioned in TECH STACK.

### FINAL REQUIREMENTS\n1. Setup React.\n2. Implement the split pane layout.\n3. Add logic to try/catch JSON.parse().\n4. Add formatting (JSON.stringify with spaces) and minification logic.\n5. Integrate Monaco editor for syntax highlighting.`
  }
];
