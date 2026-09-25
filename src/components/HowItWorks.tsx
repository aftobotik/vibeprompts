import { Copy, Terminal, Bot, Zap, Rocket } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: <Terminal className="w-6 h-6 text-indigo-500" />,
      title: "Выбери задачу",
      description: "Найди подходящий промпт в каталоге под твой тип приложения."
    },
    {
      icon: <Copy className="w-6 h-6 text-indigo-500" />,
      title: "Скопируй",
      description: "Открой карточку и скопируй готовый one-shot prompt в один клик."
    },
    {
      icon: <Bot className="w-6 h-6 text-indigo-500" />,
      title: "Отправь AI",
      description: "Вставь промпт в ChatGPT, Claude, Gemini или другой AI-агент."
    },
    {
      icon: <Zap className="w-6 h-6 text-indigo-500" />,
      title: "Генерация",
      description: "AI прочитает все требования и напишет архитектуру и код."
    },
    {
      icon: <Rocket className="w-6 h-6 text-indigo-500" />,
      title: "Запуск",
      description: "Получи готовое работающее приложение за несколько минут."
    }
  ];

  return (
    <section id="how-it-works" className="w-full max-w-7xl mx-auto px-4 pt-12 pb-24 md:pt-16 md:pb-24 relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Как это работает</h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Вайбкодинг — это когда ты описываешь задачу, а AI пишет код. Наши промпты содержат все необходимые технические требования для идеального результата.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
        {steps.map((step, index) => (
          <div key={index} className="glass-card p-6 rounded-2xl flex flex-col relative text-center items-center">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center mb-4">
              {step.icon}
            </div>
            <span className="absolute top-4 right-4 text-xs font-mono font-bold text-slate-300 dark:text-slate-700">
              0{index + 1}
            </span>
            <h3 className="font-bold mb-2">{step.title}</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
