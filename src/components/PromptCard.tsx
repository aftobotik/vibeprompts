import { Prompt } from '@/lib/types';
import { categoryTranslations, difficultyTranslations } from '@/lib/translations';
import { Clock, Code2, ArrowUpRight } from 'lucide-react';

interface PromptCardProps {
  prompt: Prompt;
  index: number;
  onClick: () => void;
}

export default function PromptCard({ prompt, index, onClick }: PromptCardProps) {
  const difficultyColors = {
    Beginner: 'bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20',
    Intermediate: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20',
    Advanced: 'bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20',
    Expert: 'bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20',
  };

  return (
    <div 
      onClick={onClick}
      className="glass-card rounded-2xl p-6 cursor-pointer group flex flex-col h-full transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
    >
      {/* Background Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-indigo-500/0 group-hover:bg-indigo-500/10 dark:group-hover:bg-indigo-500/20 blur-3xl rounded-full transition-all duration-700 opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-150 pointer-events-none z-0"></div>

      <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity z-10">
        <ArrowUpRight className="w-5 h-5 text-indigo-500" />
      </div>
      
      <div className="flex justify-between items-start mb-4 relative z-10">
        <span className="text-xs font-mono text-slate-500 dark:text-slate-300">
          {String(index + 1).padStart(2, '0')}
        </span>
        <div className="flex gap-2">
          <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-slate-200/50 dark:bg-slate-800/50 border border-slate-300/50 dark:border-slate-700/50">
            {categoryTranslations[prompt.category] || prompt.category}
          </span>
          <span className={`px-2.5 py-1 rounded-full text-xs font-medium border ${difficultyColors[prompt.difficulty]}`}>
            {difficultyTranslations[prompt.difficulty] || prompt.difficulty}
          </span>
        </div>
      </div>

      <h3 className="text-xl font-bold mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors relative z-10">
        {prompt.title}
      </h3>
      
      <p className="text-sm text-slate-700 dark:text-slate-200 mb-6 flex-grow line-clamp-2 relative z-10">
        {prompt.description}
      </p>

      <div className="mt-auto pt-4 border-t border-slate-200/50 dark:border-slate-700/50 flex items-center justify-between relative z-10">
        <div className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-300">
          <Clock className="w-3.5 h-3.5" />
          {prompt.estimatedTime.replace('hours', 'часов').replace('hour', 'час').replace('min', 'мин')}
        </div>
        <div className="flex items-center gap-1.5 text-xs text-slate-600 dark:text-slate-300">
          <Code2 className="w-3.5 h-3.5" />
          {prompt.technologies.slice(0, 2).join(', ')}
          {prompt.technologies.length > 2 && ' +'}
        </div>
      </div>
    </div>
  );
}
