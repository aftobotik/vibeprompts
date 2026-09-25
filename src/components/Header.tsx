'use client';

import { useTheme } from 'next-themes';
import { Moon, Sun, Search, Terminal, Send } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center border border-indigo-500/30">
            <Terminal className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
          </div>
          <span className="font-bold text-lg tracking-tight">VibePrompts</span>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-700 dark:text-slate-200">
          <a href="#catalog" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Каталог</a>
          <a href="#how-it-works" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Как это работает</a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">GitHub</a>
        </nav>

        <div className="flex items-center gap-2">
          <a 
            href="https://t.me/Aftobotik" 
            target="_blank" 
            rel="noreferrer"
            className="p-2 rounded-md hover:bg-slate-200/50 dark:hover:bg-slate-800/50 transition-colors text-slate-700 dark:text-slate-300"
            aria-label="Telegram"
            title="Мой Telegram"
          >
            <Send className="w-5 h-5" />
          </a>
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-md hover:bg-slate-200/50 dark:hover:bg-slate-800/50 transition-colors"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
