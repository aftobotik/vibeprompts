const fs = require('fs');
const path = require('path');

const translations = {
  // Keep some universally understood concepts
  'Drag & Drop': 'Drag & Drop',
  'Local Storage': 'Local Storage',
  'MDX': 'MDX',
  
  // Transliterate or translate with common IT slang
  'Webhooks': 'Вебхуки',
  'PDF Export': 'Экспорт в PDF',
  'Auth': 'Авторизация',
  'Database': 'База данных',
  'Summarization': 'Саммаризация',
  'Live Preview': 'Живое превью',
  'Paywall': 'Пейволл',
  
  // Standard translations
  'Flashcards': 'Флеш-карточки',
  'Quizzes': 'Квизы',
  'CPU Usage': 'Загрузка CPU',
  'Memory': 'Память',
  'Headers': 'Заголовки (Headers)',
  'Body': 'Тело запроса (Body)',
  'Response': 'Ответ (Response)',
  'Catalog': 'Каталог',
  'Cart': 'Корзина',
  'Alerts': 'Оповещения',
  'Reply Gen': 'Генерация ответа',
  'Tone Selector': 'Выбор тона',
  'Web Search': 'Поиск в сети',
  'Projects': 'Проекты',
  'Animations': 'Анимации',
  'URL Gen': 'Генерация ссылок',
  'History': 'История',
  'Table View': 'Просмотр таблиц',
  'Query Run': 'Выполнение запросов',
  'Compare': 'Сравнение',
  'Chat': 'Чат',
  'Jobs': 'Задачи (Jobs)',
  'Results': 'Результаты',
  'Image Gen': 'Генерация картинок',
  'Copy Gen': 'Генерация текстов',
  'Clients': 'Клиенты',
  'Recurring': 'Регулярные платежи',
  'Payments': 'Платежи',
  'Form': 'Форма',
  'List': 'Список',
  'Syntax Highlighting': 'Подсветка синтаксиса',
  'Search': 'Поиск',
  'Forecast': 'Прогноз',
  'Timer': 'Таймер',
  'Sounds': 'Звуки',
  'Shorten': 'Сокращение ссылок',
  'Redirects': 'Редиректы',
  'Visual Builder': 'Визуальный билдер',
  'Export SQL': 'Экспорт SQL',
  'Table Schema': 'Схема таблиц',
  'Markdown Editor': 'Markdown редактор',
  'Categories': 'Категории',
  'Upvoting': 'Голосование',
  'Roadmap': 'Дорожная карта',
  'Comments': 'Комментарии',
  'Voice Input': 'Голосовой ввод',
  'AI Interviewer': 'ИИ-интервьюер',
  'Feedback Report': 'Отчет с отзывами',
  'Video Player': 'Видеоплеер',
  'Progress Tracking': 'Отслеживание прогресса',
  'RSVP': 'RSVP (Ответы)',
  'Guest List': 'Список гостей',
  'Event Details': 'Детали мероприятия',
  'Product Upload': 'Загрузка товаров',
  'Downloads': 'Загрузки',
  'Cost Calculation': 'Расчет стоимости',
  'Reminders': 'Напоминания',
  'Currency': 'Валюты',
  'Task Queue': 'Очередь задач',
  'Live Logs': 'Лайв-логи',
  'Agent Status': 'Статус агента',
  'Prompt to Site': 'Промпт в сайт',
  'Code Export': 'Экспорт кода',
  'Expense Tracking': 'Учет расходов',
  'Income Tracking': 'Учет доходов',
  'Budgeting': 'Бюджетирование',
  'PDF Upload': 'Загрузка PDF',
  'Chat with Document': 'Чат с документом',
  'Product List': 'Список товаров',
  'Telegram Checkout': 'Оплата в Telegram',
  'Password Generation': 'Генератор паролей',
  'Strength Meter': 'Оценка надежности',
  'Vault View': 'Просмотр хранилища',
  'Uptime Tracking': 'Отслеживание аптайма',
  'Latency Charts': 'Графики задержек',
  'Endpoint Status': 'Статус эндпоинтов',
  'Style Selectors': 'Выбор стилей',
  'Image Generation': 'Генерация картинок',
  'Gallery': 'Галерея',
  'Client Management': 'Управление клиентами',
  'Project Tracking': 'Отслеживание проектов',
  'Invoicing': 'Счета',
  'Calendar': 'Календарь',
  'Time Slots': 'Слоты времени',
  'Stripe Checkout': 'Оплата Stripe',
  'Star History': 'История звезд',
  'Contributor Stats': 'Статистика контрибьюторов',
  'Language Breakdown': 'Статистика языков',
  'Format': 'Форматирование',
  'Minify': 'Минификация',
  'Validate': 'Валидация',
  'Audio Upload': 'Загрузка аудио',
  'Transcription': 'Транскрибация',
  'Action Items': 'Action items',
  'Custom Logo': 'Кастомный логотип',
  'Keyword Grouping': 'Группировка ключей',
  'Status Tracking': 'Отслеживание статусов',
  'Custom Themes': 'Кастомные темы',
  'Analytics Mock': 'Мок-аналитика',
  'Shareable URL': 'Ссылка для шеринга',
  'Contribution Grid': 'График коммитов',
  'Daily Streaks': 'Дневные страйки',
  'AI Suggestions': 'AI-подсказки',
  'Multiple Templates': 'Несколько шаблонов',
  'Copy to Clipboard': 'Скопировать',
  'Web Browsing': 'Веб-браузинг',
  'Charts': 'Графики',
  'Data Tables': 'Таблицы данных',
  'Export': 'Экспорт',
  'Custom Columns': 'Кастомные колонки'
};

const dataDir = path.join(__dirname, 'src', 'data');
const files = fs.readdirSync(dataDir).filter(f => f.startsWith('prompts_batch') && f.endsWith('.ts'));

for (const file of files) {
  const filePath = path.join(dataDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  // We are looking for features: ['A', 'B'] 
  // Let's replace translations anywhere inside features array.
  // Easiest is to just do a string replacement on the array content, or a global replacement if the feature is exact.
  
  for (const [en, ru] of Object.entries(translations)) {
    // Only replace inside the features array to be safe, or just globally since these are exact strings in quotes
    const searchString1 = `'${en}'`;
    const searchString2 = `"${en}"`;
    const replaceString = `'${ru}'`;
    
    if (content.includes(searchString1)) {
      content = content.replaceAll(searchString1, replaceString);
      changed = true;
    }
    if (content.includes(searchString2)) {
      content = content.replaceAll(searchString2, replaceString);
      changed = true;
    }
  }

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${file}`);
  }
}
