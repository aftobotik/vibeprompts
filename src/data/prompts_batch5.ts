import { Prompt } from '../lib/types';

export const promptsBatch5: Prompt[] = [
  {
    id: 'ai-study-assistant', title: 'AI Study Assistant', slug: 'ai-study-assistant', category: 'Productivity', type: 'App', difficulty: 'Intermediate', technologies: ['React', 'OpenAI'], estimatedTime: '~1h', tags: ['AI', 'Education'], features: ['Флеш-карточки', 'Квизы'], useCase: 'Генерация учебных материалов из заметок.', popularity: 80, description: 'Автоматически превращайте заметки в карточки и квизы.',
    prompt: `### ROLE\nYou are an AI developer.\n\n### OBJECTIVE\nBuild an app that converts text notes into study flashcards using AI.\n\n### REQUIREMENTS\n- Text input for notes.\n- AI call to generate Q&A pairs.\n- Flashcard UI with flip animation.\n- Score tracking.`
  },
  {
    id: 'server-monitoring', title: 'Server Monitoring', slug: 'server-monitoring', category: 'Dashboards', type: 'Dashboard', difficulty: 'Beginner', technologies: ['Vue', 'Chart.js'], estimatedTime: '~1h', tags: ['DevOps'], features: ['Загрузка CPU', 'Память'], useCase: 'Визуальный мониторинг статистики сервера.', popularity: 60, description: 'Дашборд для метрик сервера.',
    prompt: `### ROLE\nYou are a frontend dev.\n\n### OBJECTIVE\nBuild a server metrics dashboard.\n\n### REQUIREMENTS\n- Gauges for CPU and RAM.\n- Line charts for network traffic.\n- Mock data generation.`
  },
  {
    id: 'api-testing-tool', title: 'API Testing Tool', slug: 'api-testing-tool', category: 'Developer Tools', type: 'Utility', difficulty: 'Advanced', technologies: ['React', 'Fetch'], estimatedTime: '~2h', tags: ['API', 'Dev'], features: ['Заголовки (Headers)', 'Тело запроса (Body)', 'Ответ (Response)'], useCase: 'Альтернатива Postman прямо в браузере.', popularity: 75, description: 'Тестируйте REST API прямо из браузера.',
    prompt: `### ROLE\nYou are a full-stack dev.\n\n### OBJECTIVE\nBuild a lightweight Postman clone.\n\n### REQUIREMENTS\n- URL input and method selector.\n- Key-value inputs for headers and query params.\n- JSON editor for body.\n- Response viewer with syntax highlighting.`
  },
  {
    id: 'telegram-shop-bot', title: 'Telegram Shop Bot', slug: 'telegram-shop-bot', category: 'Telegram', type: 'Bot', difficulty: 'Intermediate', technologies: ['Node.js', 'Telegraf'], estimatedTime: '~1.5h', tags: ['E-commerce', 'Bot'], features: ['Каталог', 'Корзина'], useCase: 'Продажа товаров через чат в Telegram.', popularity: 82, description: 'Бот для нативной продажи товаров в Telegram.',
    prompt: `### ROLE\nYou are a backend dev.\n\n### OBJECTIVE\nBuild a Telegram e-commerce bot.\n\n### REQUIREMENTS\n- Command /catalog to list items.\n- Inline keyboards to add to cart.\n- Checkout flow using Telegram Payments API.`
  },
  {
    id: 'telegram-notification', title: 'Telegram Notifier', slug: 'telegram-notification', category: 'Telegram', type: 'Bot', difficulty: 'Beginner', technologies: ['Node.js'], estimatedTime: '~30m', tags: ['Bot', 'Utility'], features: ['Вебхуки', 'Оповещения'], useCase: 'Получение системных оповещений в Telegram.', popularity: 70, description: 'Простой бот, пересылающий вебхуки в чат.',
    prompt: `### ROLE\nYou are a backend dev.\n\n### OBJECTIVE\nBuild a webhook-to-Telegram forwarder.\n\n### REQUIREMENTS\n- Express server to receive POST requests.\n- Parse payload and send as formatted message to a specific Telegram chat ID.`
  },
  {
    id: 'ai-email-assistant', title: 'AI Email Assistant', slug: 'ai-email-assistant', category: 'AI Apps', type: 'Utility', difficulty: 'Intermediate', technologies: ['Next.js', 'OpenAI'], estimatedTime: '~1h', tags: ['AI', 'Email'], features: ['Генерация ответа', 'Выбор тона'], useCase: 'Быстрое составление профессиональных email-писем.', popularity: 86, description: 'Генерация ответов на email на основе тональности и контекста.',
    prompt: `### ROLE\nYou are a frontend dev.\n\n### OBJECTIVE\nBuild an AI email drafter.\n\n### REQUIREMENTS\n- Input for "Received Email" and "Main points for reply".\n- Selector for tone (Professional, Friendly, Firm).\n- Output text area with copy button.`
  },
  {
    id: 'ai-research-assistant', title: 'AI Research Assistant', slug: 'ai-research-assistant', category: 'AI Apps', type: 'Web App', difficulty: 'Advanced', technologies: ['Next.js', 'LangChain'], estimatedTime: '~2.5h', tags: ['AI', 'Research'], features: ['Поиск в сети', 'Саммаризация'], useCase: 'Автоматизация глубокого поиска в интернете.', popularity: 90, description: 'Задайте тему, и ИИ выполнит поиск в сети для составления отчета.',
    prompt: `### ROLE\nYou are an AI engineer.\n\n### OBJECTIVE\nBuild an autonomous research agent interface.\n\n### REQUIREMENTS\n- Input topic.\n- Backend uses Tavily/SerpAPI to search.\n- LLM synthesizes results into a markdown report.\n- Progress UI showing "Searching...", "Reading...", "Writing...".`
  },
  {
    id: 'developer-portfolio', title: 'Developer Portfolio', slug: 'developer-portfolio', category: 'Web Apps', type: 'Website', difficulty: 'Beginner', technologies: ['Next.js', 'Framer Motion'], estimatedTime: '~1h', tags: ['Portfolio', 'UI'], features: ['Проекты', 'Анимации'], useCase: 'Стильный персональный сайт для разработчиков.', popularity: 88, description: 'Современный шаблон портфолио разработчика с множеством анимаций.',
    prompt: `### ROLE\nYou are a UI dev.\n\n### OBJECTIVE\nBuild a premium developer portfolio.\n\n### REQUIREMENTS\n- Hero section with typing effect.\n- Projects grid with hover details.\n- Tech stack marquee.\n- Dark theme with neon accents.`
  },
  {
    id: 'utm-builder', title: 'UTM Link Builder', slug: 'utm-builder', category: 'Marketing', type: 'Utility', difficulty: 'Beginner', technologies: ['React'], estimatedTime: '~30m', tags: ['Marketing', 'Utility'], features: ['Генерация ссылок', 'История'], useCase: 'Создание ссылок с отслеживанием для маркетинга.', popularity: 55, description: 'Быстрый генератор UTM-меток.',
    prompt: `### ROLE\nYou are a frontend dev.\n\n### OBJECTIVE\nBuild a UTM link generator.\n\n### REQUIREMENTS\n- Inputs for URL, Source, Medium, Campaign.\n- Real-time generation of the final URL.\n- Copy to clipboard button.`
  },
  {
    id: 'database-admin', title: 'Database Admin Panel', slug: 'database-admin', category: 'Developer Tools', type: 'Dashboard', difficulty: 'Advanced', technologies: ['React', 'Node.js', 'PostgreSQL'], estimatedTime: '~2h', tags: ['База данных', 'Admin'], features: ['Просмотр таблиц', 'Выполнение запросов'], useCase: 'Прямое управление записями базы данных.', popularity: 77, description: 'Универсальная панель администратора для баз данных PostgreSQL.',
    prompt: `### ROLE\nYou are a full-stack dev.\n\n### OBJECTIVE\nBuild a web-based DB admin panel.\n\n### REQUIREMENTS\n- Connect via connection string.\n- List tables.\n- View table rows with pagination.\n- Run raw SQL queries and view results in a table.`
  },
  {
    id: 'multi-model-playground', title: 'Multi-model Playground', slug: 'multi-model-playground', category: 'AI Apps', type: 'Utility', difficulty: 'Advanced', technologies: ['Next.js', 'OpenAI', 'Anthropic'], estimatedTime: '~2h', tags: ['AI', 'Models'], features: ['Сравнение', 'Чат'], useCase: 'Сравнение ответов GPT и Claude бок о бок.', popularity: 93, description: 'Тестируйте промпты на нескольких LLM одновременно.',
    prompt: `### ROLE\nYou are an AI dev.\n\n### OBJECTIVE\nBuild a side-by-side LLM playground.\n\n### REQUIREMENTS\n- Single prompt input.\n- Two response panels (e.g., GPT-4o vs Claude 3.5).\n- Send prompt to both APIs concurrently.\n- Stream responses into their respective panels.`
  },
  {
    id: 'web-scraping-dashboard', title: 'Web Scraping Dashboard', slug: 'web-scraping-dashboard', category: 'Dashboards', type: 'Dashboard', difficulty: 'Intermediate', technologies: ['Next.js', 'Puppeteer'], estimatedTime: '~1.5h', tags: ['Scraping', 'Data'], features: ['Задачи (Jobs)', 'Результаты'], useCase: 'Управление задачами веб-скрапинга.', popularity: 73, description: 'Интерфейс для запуска и просмотра результатов веб-скрапинга.',
    prompt: `### ROLE\nYou are a full-stack dev.\n\n### OBJECTIVE\nBuild a dashboard for managing scrapers.\n\n### REQUIREMENTS\n- Input URL and CSS selector.\n- Button to run scraper.\n- Table displaying scraped data results.\n- History of scraping jobs.`
  },
  {
    id: 'ai-product-card', title: 'AI Product Card Gen', slug: 'ai-product-card', category: 'E-commerce', type: 'Utility', difficulty: 'Intermediate', technologies: ['Next.js', 'OpenAI'], estimatedTime: '~1h', tags: ['E-commerce', 'AI'], features: ['Генерация картинок', 'Генерация текстов'], useCase: 'Автоматическая генерация карточек товаров для интернет-магазинов.', popularity: 85, description: 'Создавайте названия продуктов, описания и изображения из одного ключевого слова.',
    prompt: `### ROLE\nYou are an AI dev.\n\n### OBJECTIVE\nBuild a product listing generator.\n\n### REQUIREMENTS\n- Input product idea (e.g., "Smart Coffee Mug").\n- Generate SEO title and description (LLM).\n- Generate product image (DALL-E).\n- Display as a beautiful e-commerce product card.`
  },
  {
    id: 'invoice-saas', title: 'Invoice SaaS', slug: 'invoice-saas', category: 'SaaS', type: 'Web App', difficulty: 'Advanced', technologies: ['Next.js', 'Stripe', 'Supabase'], estimatedTime: '~2.5h', tags: ['Finance', 'SaaS'], features: ['Клиенты', 'Регулярные платежи', 'Платежи'], useCase: 'Управление клиентами и отправка счетов на оплату.', popularity: 81, description: 'Полноценное решение для выставления счетов с платежными ссылками.',
    prompt: `### ROLE\nYou are a full-stack SaaS dev.\n\n### OBJECTIVE\nBuild an invoicing platform.\n\n### REQUIREMENTS\n- Create invoices with line items.\n- Send invoice via email (SendGrid/Resend).\n- Include a Stripe payment link in the invoice.\n- Track status (Draft, Sent, Paid).`
  },
  {
    id: 'kanban-board', title: 'Simple Kanban Board', slug: 'kanban-board', category: 'Productivity', type: 'Web App', difficulty: 'Intermediate', technologies: ['React', 'dnd-kit'], estimatedTime: '~1h', tags: ['Tasks'], features: ['Drag & Drop'], useCase: 'Визуальное управление задачами.', popularity: 78, description: 'Доска задач с функцией drag-and-drop.',
    prompt: `### ROLE\nYou are a frontend dev.\n\n### OBJECTIVE\nBuild a Kanban board.\n\n### REQUIREMENTS\n- Columns: Todo, Doing, Done.\n- Add tasks.\n- Drag tasks between columns.\n- Persist state.`
  },
  {
    id: 'expense-tracker', title: 'Expense Tracker', slug: 'expense-tracker', category: 'Dashboards', type: 'Web App', difficulty: 'Beginner', technologies: ['Vue', 'Tailwind'], estimatedTime: '~45m', tags: ['Finance'], features: ['Форма', 'Список'], useCase: 'Отслеживание ежедневных расходов.', popularity: 65, description: 'Простой список расходов с итоговой суммой.',
    prompt: `### ROLE\nYou are a frontend dev.\n\n### OBJECTIVE\nBuild an expense tracker.\n\n### REQUIREMENTS\n- Input form (amount, category, date).\n- List of expenses.\n- Total calculation at the top.`
  },
  {
    id: 'markdown-blog', title: 'Static Markdown Blog', slug: 'markdown-blog', category: 'Web Apps', type: 'Website', difficulty: 'Intermediate', technologies: ['Next.js', 'MDX'], estimatedTime: '~1h', tags: ['Blog', 'Content'], features: ['MDX', 'Подсветка синтаксиса'], useCase: 'Блог разработчика.', popularity: 72, description: 'Быстрый блог на основе локальных markdown файлов.',
    prompt: `### ROLE\nYou are a frontend dev.\n\n### OBJECTIVE\nBuild a blog using Next.js App Router and MDX.\n\n### REQUIREMENTS\n- Read .mdx files from a local directory.\n- Render list of posts.\n- Render individual post page with syntax highlighting for code blocks.`
  },
  {
    id: 'weather-dashboard', title: 'Weather Dashboard', slug: 'weather-dashboard', category: 'Web Apps', type: 'App', difficulty: 'Beginner', technologies: ['React', 'OpenWeather API'], estimatedTime: '~45m', tags: ['Utility'], features: ['Поиск', 'Прогноз'], useCase: 'Проверка местной погоды.', popularity: 61, description: 'Красивое приложение погоды.',
    prompt: `### ROLE\nYou are a frontend dev.\n\n### OBJECTIVE\nBuild a weather app.\n\n### REQUIREMENTS\n- Search city.\n- Fetch current weather and 5-day forecast.\n- Display temperature, humidity, and weather icons.`
  },
  {
    id: 'pomodoro-timer', title: 'Pomodoro Timer', slug: 'pomodoro-timer', category: 'Productivity', type: 'Utility', difficulty: 'Beginner', technologies: ['React'], estimatedTime: '~30m', tags: ['Time'], features: ['Таймер', 'Звуки'], useCase: 'Фокусировка на 25 минут.', popularity: 67, description: 'Минималистичный таймер для фокусировки.',
    prompt: `### ROLE\nYou are a frontend dev.\n\n### OBJECTIVE\nBuild a Pomodoro timer.\n\n### REQUIREMENTS\n- 25 min work timer, 5 min break timer.\n- Start, Pause, Reset buttons.\n- Play a sound when timer ends.`
  },
  {
    id: 'link-shortener', title: 'URL Shortener', slug: 'link-shortener', category: 'Web Apps', type: 'App', difficulty: 'Intermediate', technologies: ['Next.js', 'PostgreSQL'], estimatedTime: '~1.5h', tags: ['Utility'], features: ['Сокращение ссылок', 'Редиректы'], useCase: 'Создание коротких ссылок.', popularity: 74, description: 'Пользовательский сокращатель ссылок.',
    prompt: `### ROLE\nYou are a full-stack dev.\n\n### OBJECTIVE\nBuild a URL shortener.\n\n### REQUIREMENTS\n- Input long URL, generate random short slug.\n- Save to DB.\n- Dynamic route that catches the slug, looks up the long URL, and redirects.`
  }
];
