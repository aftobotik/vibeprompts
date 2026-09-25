const fs = require('fs');
const path = require('path');

const translations = {
  'SaaS application that helps users build ATS-friendly resumes using AI.': 'SaaS-приложение, которое помогает пользователям создавать резюме, оптимизированные для ATS, с помощью ИИ.',
  'A platform for generating blog posts, social media captions, and ad copy.': 'Платформа для генерации постов в блог, подписей для соцсетей и рекламных текстов.',
  'A versatile Telegram bot that answers questions, summarizes links, and generates images.': 'Универсальный Telegram-бот, который отвечает на вопросы, кратко пересказывает ссылки и генерирует изображения.',
  'A comprehensive admin dashboard for monitoring marketplace metrics.': 'Комплексная панель администратора для мониторинга метрик маркетплейса.',
  'A drag-and-drop Trello alternative for personal task management.': 'Альтернатива Trello с функцией drag-and-drop для личного управления задачами.',
  'Upload meeting audio or transcripts and get actionable summaries.': 'Загружайте аудио или расшифровки встреч и получайте практичные краткие итоги.',
  'A beautiful, client-side invoice creator with PDF export.': 'Красивый клиентский генератор счетов с экспортом в PDF.',
  'A tool to generate and manage a topical map for SEO.': 'Инструмент для создания и управления тематической картой для SEO.',
  'A Linktree alternative for creators to share all their links in one place.': 'Альтернатива Linktree для креаторов, чтобы делиться всеми ссылками в одном месте.',
  'A beautifully simple grid-based habit tracker.': 'Красиво оформленный и простой трекер привычек на основе сетки.',
  'A dashboard to track personal expenses, income, and budgets with charts.': 'Дашборд для отслеживания личных расходов, доходов и бюджетов с помощью графиков.',
  'Upload a PDF and chat with it to extract insights and summaries.': 'Загрузите PDF и общайтесь с ним для извлечения инсайтов и кратких пересказов.',
  'A Telegram Mini App for selling digital or physical products.': 'Telegram Mini App для продажи цифровых или физических продуктов.',
  'A sleek interface for generating and managing passwords.': 'Стильный интерфейс для создания и управления паролями.',
  'A dashboard to visualize API uptime and latency.': 'Дашборд для визуализации аптайма и задержек API.',
  'An app to construct detailed image prompts and generate images.': 'Приложение для создания детальных промптов и генерации изображений.',
  'A lightweight CRM designed specifically for solo freelancers.': 'Легкая CRM, разработанная специально для фрилансеров.',
  'A calendar-based booking system with integrated payments.': 'Система бронирования на основе календаря с интегрированными платежами.',
  'Visualize data from any public GitHub repository.': 'Визуализация данных из любого публичного репозитория GitHub.',
  'A fast, client-side JSON formatting and validation tool.': 'Быстрый клиентский инструмент форматирования и валидации JSON.',
  'A visual tool to build SQL queries without writing code.': 'Визуальный инструмент для создания SQL-запросов без написания кода.',
  'A fast, markdown-based internal wiki for teams.': 'Быстрая внутренняя вики на основе markdown для команд.',
  'A feature request and upvoting board.': 'Доска для запросов функций и голосования за них.',
  'Simulate technical or behavioral interviews with an AI.': 'Симуляция технических или поведенческих интервью с ИИ.',
  'A platform to host and sell a digital video course.': 'Платформа для размещения и продажи цифровых видеокурсов.',
  'A simple app to host events and track attendees.': 'Простое приложение для проведения мероприятий и отслеживания участников.',
  'A storefront for digital downloads.': 'Витрина для цифровых товаров.',
  'Track all your recurring subscriptions and their costs.': 'Отслеживайте все ваши регулярные подписки и их стоимость.',
  'A dashboard to monitor autonomous AI tasks and logs.': 'Дашборд для мониторинга автономных задач ИИ и логов.',
  'Enter a prompt and get a fully coded, responsive landing page.': 'Введите промпт и получите полностью сверстанный адаптивный лендинг.',
  'Turn notes into flashcards and quizzes automatically.': 'Автоматически превращайте заметки в карточки и квизы.',
  'A dashboard for server metrics.': 'Дашборд для метрик сервера.',
  'Test REST APIs directly from the browser.': 'Тестируйте REST API прямо из браузера.',
  'A bot for selling goods natively in Telegram.': 'Бот для нативной продажи товаров в Telegram.',
  'A simple bot that forwards webhooks to a chat.': 'Простой бот, пересылающий вебхуки в чат.',
  'Generate email replies based on tone and context.': 'Генерация ответов на email на основе тональности и контекста.',
  'Give a topic, and AI searches the web to compile a report.': 'Задайте тему, и ИИ выполнит поиск в сети для составления отчета.',
  'A highly animated, modern developer portfolio template.': 'Современный шаблон портфолио разработчика с множеством анимаций.',
  'A fast UTM parameter generator.': 'Быстрый генератор UTM-меток.',
  'A generic admin panel for PostgreSQL databases.': 'Универсальная панель администратора для баз данных PostgreSQL.',
  'Test prompts against multiple LLMs simultaneously.': 'Тестируйте промпты на нескольких LLM одновременно.',
  'A UI to trigger and view results of web scrapers.': 'Интерфейс для запуска и просмотра результатов веб-скрапинга.',
  'Create product titles, descriptions, and images from a single keyword.': 'Создавайте названия продуктов, описания и изображения из одного ключевого слова.',
  'A complete invoicing solution with payment links.': 'Полноценное решение для выставления счетов с платежными ссылками.',
  'A drag-and-drop task board.': 'Доска задач с функцией drag-and-drop.',
  'A simple list of expenses with a total.': 'Простой список расходов с итоговой суммой.',
  'A fast blog powered by local markdown files.': 'Быстрый блог на основе локальных markdown файлов.',
  'A beautiful weather app.': 'Красивое приложение погоды.',
  'A minimal focus timer.': 'Минималистичный таймер для фокусировки.',
  'A custom link shortener.': 'Пользовательский сокращатель ссылок.'
};

for (let i = 1; i <= 5; i++) {
  const filePath = path.join(__dirname, `src/data/prompts_batch${i}.ts`);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    let updated = content;
    for (const [eng, rus] of Object.entries(translations)) {
      updated = updated.replace(`description: '${eng}'`, `description: '${rus}'`);
    }
    if (content !== updated) {
        fs.writeFileSync(filePath, updated);
        console.log(`Updated ${filePath}`);
    } else {
        console.log(`No changes needed for ${filePath}`);
    }
  }
}
