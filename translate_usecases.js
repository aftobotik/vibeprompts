const fs = require('fs');
const path = require('path');

const translations = {
  // batch5
  'Generate study materials from notes.': 'Генерация учебных материалов из заметок.',
  'Monitor server stats visually.': 'Визуальный мониторинг статистики сервера.',
  'Postman alternative in the browser.': 'Альтернатива Postman прямо в браузере.',
  'Sell products via Telegram chat.': 'Продажа товаров через чат в Telegram.',
  'Receive system alerts in Telegram.': 'Получение системных оповещений в Telegram.',
  'Draft professional emails quickly.': 'Быстрое составление профессиональных email-писем.',
  'Automate deep web research.': 'Автоматизация глубокого поиска в интернете.',
  'A sleek personal website for developers.': 'Стильный персональный сайт для разработчиков.',
  'Generate tracked URLs for marketing.': 'Создание ссылок с отслеживанием для маркетинга.',
  'Manage database records directly.': 'Прямое управление записями базы данных.',
  'Compare outputs from GPT and Claude side-by-side.': 'Сравнение ответов GPT и Claude бок о бок.',
  'Manage web scraping tasks.': 'Управление задачами веб-скрапинга.',
  'Generate e-commerce product listings automatically.': 'Автоматическая генерация карточек товаров для интернет-магазинов.',
  'Manage clients and send payable invoices.': 'Управление клиентами и отправка счетов на оплату.',
  'Manage tasks visually.': 'Визуальное управление задачами.',
  'Track daily spending.': 'Отслеживание ежедневных расходов.',
  'A developer blog.': 'Блог разработчика.',
  'Check local weather.': 'Проверка местной погоды.',
  'Focus for 25 minutes.': 'Фокусировка на 25 минут.',
  'Create short links.': 'Создание коротких ссылок.',
  
  // batch4
  'Visually construct complex SQL queries.': 'Визуальное конструирование сложных SQL-запросов.',
  'Internal wiki for team documentation.': 'Внутренняя вики для командной документации.',
  'Collect and prioritize user feedback.': 'Сбор и приоритизация отзывов пользователей.',
  'Practice job interviews with an AI.': 'Тренировка собеседований с ИИ.',
  'Sell and deliver a video course.': 'Продажа и предоставление доступа к видеокурсу.',
  'Create events and manage RSVPs.': 'Создание мероприятий и управление списками гостей.',
  'Buy and sell digital assets (e.g., templates, icons).': 'Покупка и продажа цифровых активов (например, шаблонов, иконок).',
  'Keep track of monthly SaaS subscriptions.': 'Учет ежемесячных подписок на SaaS-сервисы.',
  'Monitor and control autonomous AI agents.': 'Мониторинг и управление автономными ИИ-агентами.',
  'Generate a landing page from a single text prompt.': 'Генерация лендинга из одного текстового промпта.',
  
  // batch3
  'Track personal expenses and income visually.': 'Визуальное отслеживание личных расходов и доходов.',
  'Chat with your large PDFs to extract information quickly.': 'Общение с большими PDF-документами для быстрого извлечения информации.',
  'A storefront that runs natively inside Telegram.': 'Магазин, работающий прямо внутри Telegram.',
  'A secure, offline-first password generator and vault UI.': 'Безопасный офлайн-генератор паролей и хранилище.',
  'Monitor API health and response times.': 'Мониторинг состояния API и времени отклика.',
  'Help users generate better prompts and images using DALL-E.': 'Помощь пользователям в создании лучших промптов и изображений с DALL-E.',
  'Manage clients, projects, and invoices in one place.': 'Управление клиентами, проектами и счетами в одном месте.',
  'Allow clients to book and pay for consultations or services.': 'Возможность клиентам бронировать и оплачивать консультации или услуги.',
  'Enter a repo URL and get beautiful analytics.': 'Аналитика по URL-адресу любого репозитория.',
  'Quickly format, validate, and minify JSON strings.': 'Быстрое форматирование, валидация и минификация JSON-строк.',
  
  // batch2
  'For professionals who want to extract key decisions and tasks from long meetings.': 'Для специалистов, желающих извлекать ключевые решения и задачи из долгих встреч.',
  'Freelancers needing a quick, professional invoice without signing up for a heavy SaaS.': 'Для фрилансеров, которым нужен быстрый профессиональный счет без регистрации в сложных SaaS.',
  'SEO specialists and content creators planning their blog architecture.': 'Для SEO-специалистов и контент-мейкеров, планирующих архитектуру блога.',
  'Creators needing a customizable landing page for their social links.': 'Для креаторов, которым нужна настраиваемая страница-визитка со ссылками на соцсети.',
  'Individuals wanting to track daily habits without complex setups.': 'Для тех, кто хочет отслеживать ежедневные привычки без сложных настроек.',
  
  // batch1
  'For job seekers to quickly generate professional resumes tailored to specific job descriptions.': 'Для соискателей, чтобы быстро генерировать профессиональные резюме под конкретные вакансии.',
  'Marketers and creators needing quick drafts for various platforms.': 'Для маркетологов и креаторов, которым нужны быстрые черновики для разных платформ.',
  'A personal pocket assistant for quick information retrieval on the go.': 'Личный карманный помощник для быстрого поиска информации на ходу.',
  'For marketplace owners to track GMV, user growth, and transaction volume.': 'Для владельцев маркетплейсов для отслеживания GMV, роста пользователей и объема транзакций.',
  'Manage complex projects or daily tasks with a visual board.': 'Управление сложными проектами или ежедневными задачами с помощью визуальной доски.'
};

const dataDir = path.join(__dirname, 'src', 'data');
const files = fs.readdirSync(dataDir).filter(f => f.startsWith('prompts_batch') && f.endsWith('.ts'));

for (const file of files) {
  const filePath = path.join(dataDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  for (const [en, ru] of Object.entries(translations)) {
    // Escape special chars for regex
    const escapedEn = en.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`useCase:\\s*['"]${escapedEn}['"]`, 'g');
    
    if (regex.test(content)) {
      content = content.replace(regex, `useCase: '${ru}'`);
      changed = true;
    }
  }

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${file}`);
  }
}
