import { Prompt } from '@/lib/types';
import { categoryTranslations, difficultyTranslations } from '@/lib/translations';
import { X, Copy, Check, Download, Box, Layout, ShieldAlert, Terminal } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PromptModalProps {
  prompt: Prompt | null;
  onClose: () => void;
}

export default function PromptModal({ prompt, onClose }: PromptModalProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!prompt) return;
    
    document.body.style.overflow = 'hidden';
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [prompt, onClose]);

  if (!prompt) return null;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(prompt.prompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text', err);
    }
  };

  const handleDownload = () => {
    const blob = new Blob([prompt.prompt], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${prompt.slug}-prompt.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white dark:bg-[#0a0f1a] w-full max-w-5xl max-h-[90vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-slate-200/50 dark:border-slate-800/80"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-slate-200 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/50 shrink-0">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="px-2.5 py-1 rounded-md text-xs font-medium bg-indigo-100 text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-300">
                  {categoryTranslations[prompt.category] || prompt.category}
                </span>
                <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                  {difficultyTranslations[prompt.difficulty] || prompt.difficulty}
                </span>
              </div>
              <h2 className="text-2xl font-bold">{prompt.title}</h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex flex-col md:flex-row flex-1 overflow-hidden min-h-0">
            {/* Sidebar Info */}
            <div className="w-full md:w-1/3 border-r border-slate-200 dark:border-slate-800/80 p-6 overflow-y-auto bg-slate-50/30 dark:bg-slate-900/20 flex-1 md:flex-none min-h-0">
              <div className="mb-8">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">Описание</h4>
                <p className="text-sm leading-relaxed text-slate-800 dark:text-slate-200">{prompt.description}</p>
              </div>

              <div className="mb-8">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">Технологии</h4>
                <div className="flex flex-wrap gap-2">
                  {prompt.technologies.map(tech => (
                    <span key={tech} className="px-2 py-1 rounded-md bg-slate-200/50 dark:bg-slate-800 border border-slate-300/50 dark:border-slate-700 text-xs font-mono">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">Ключевые фичи</h4>
                <ul className="space-y-2">
                  {prompt.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">Сценарий использования</h4>
                <p className="text-sm italic text-slate-600 dark:text-slate-300">"{prompt.useCase}"</p>
              </div>
            </div>

            {/* Prompt Editor */}
            <div className="w-full md:w-2/3 flex flex-col bg-[#1e1e1e] text-slate-300 relative group flex-1 md:flex-none min-h-0">
              <div className="flex items-center justify-between p-3 border-b border-slate-800 bg-[#252526] shrink-0">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-slate-400" />
                  <span className="text-sm font-mono text-slate-400">prompt.txt</span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleDownload}
                    className="p-1.5 rounded hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
                    title="Download .txt"
                  >
                    <Download className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium transition-colors"
                  >
                    {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    {copied ? 'Copied' : 'Copy Prompt'}
                  </button>
                </div>
              </div>
              
              <div className="flex-1 overflow-y-auto p-6 font-mono text-sm leading-relaxed selection:bg-indigo-500/40 min-h-0">
                <pre className="whitespace-pre-wrap break-words">{prompt.prompt}</pre>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
