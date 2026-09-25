'use client';

import { useState, useMemo } from 'react';
import { Search, Filter, X, ChevronDown } from 'lucide-react';
import PromptCard from './PromptCard';
import PromptModal from './PromptModal';
import { prompts } from '@/data/prompts';
import { Prompt } from '@/lib/types';
import { categoryTranslations, difficultyTranslations } from '@/lib/translations';
import { motion } from 'framer-motion';

export default function Catalog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<'recommended' | 'newest' | 'popular'>('recommended');
  
  const [selectedPrompt, setSelectedPrompt] = useState<Prompt | null>(null);

  // Extract unique categories
  const categories = useMemo(() => Array.from(new Set(prompts.map(p => p.category))), []);
  const difficulties = ['Beginner', 'Intermediate', 'Advanced', 'Expert'];

  // Filter and sort logic
  const filteredPrompts = useMemo(() => {
    let result = prompts;

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(p => 
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tags.some(t => t.toLowerCase().includes(q)) ||
        p.technologies.some(t => t.toLowerCase().includes(q))
      );
    }

    if (selectedCategory) {
      result = result.filter(p => p.category === selectedCategory);
    }

    if (selectedDifficulty) {
      result = result.filter(p => p.difficulty === selectedDifficulty);
    }

    // Sort
    if (sortBy === 'popular') {
      result = [...result].sort((a, b) => (b.popularity || 0) - (a.popularity || 0));
    } else if (sortBy === 'newest') {
      // Mock newest sort (just reverse id)
      result = [...result].sort((a, b) => b.id.localeCompare(a.id));
    }

    return result;
  }, [searchQuery, selectedCategory, selectedDifficulty, sortBy]);

  return (
    <section id="catalog" className="w-full max-w-7xl mx-auto px-4 py-12 relative z-10">
      
      {/* Filters Bar */}
      <div className="flex flex-col md:flex-row gap-4 mb-10 items-center justify-between glass-card p-4 rounded-2xl">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input 
            type="text" 
            placeholder="Найти промпт (например, Telegram)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700/50 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all text-sm"
          />
          {searchQuery && (
            <button onClick={() => setSearchQuery('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600">
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
          <div className="flex items-center gap-2">
            <select 
              value={selectedCategory || ''} 
              onChange={(e) => setSelectedCategory(e.target.value || null)}
              className="px-3 py-2.5 rounded-xl glass-card text-sm focus:outline-none appearance-none pr-8 cursor-pointer transition-all focus:ring-2 focus:ring-indigo-500/50"
              style={{ backgroundImage: 'url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%2364748B%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right .7rem top 50%', backgroundSize: '.65rem auto' }}
            >
              <option value="" className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100">Все категории</option>
              {categories.map(c => <option key={c} value={c} className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100">{categoryTranslations[c] || c}</option>)}
            </select>
          </div>

          <div className="flex items-center gap-2">
            <select 
              value={selectedDifficulty || ''} 
              onChange={(e) => setSelectedDifficulty(e.target.value || null)}
              className="px-3 py-2.5 rounded-xl glass-card text-sm focus:outline-none appearance-none pr-8 cursor-pointer transition-all focus:ring-2 focus:ring-indigo-500/50"
              style={{ backgroundImage: 'url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%2364748B%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right .7rem top 50%', backgroundSize: '.65rem auto' }}
            >
              <option value="" className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100">Любая сложность</option>
              {difficulties.map(d => <option key={d} value={d} className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100">{difficultyTranslations[d] || d}</option>)}
            </select>
          </div>

          <div className="flex items-center gap-2 ml-auto">
            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value as any)}
              className="px-3 py-2.5 rounded-xl glass-card text-sm focus:outline-none appearance-none pr-8 cursor-pointer transition-all focus:ring-2 focus:ring-indigo-500/50 font-medium"
              style={{ backgroundImage: 'url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%2364748B%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right .7rem top 50%', backgroundSize: '.65rem auto' }}
            >
              <option value="recommended" className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100">Рекомендуемые</option>
              <option value="popular" className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100">Популярные</option>
              <option value="newest" className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100">Новые</option>
            </select>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div className="mb-6 text-sm text-slate-500 dark:text-slate-400 font-medium px-2">
        Найдено: {filteredPrompts.length}
      </div>

      {/* Grid */}
      {filteredPrompts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPrompts.map((prompt, index) => (
            <motion.div
              key={prompt.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (index % 10) * 0.05 }}
              className="h-full"
            >
              <PromptCard 
                prompt={prompt} 
                index={index} 
                onClick={() => setSelectedPrompt(prompt)}
              />
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 text-center glass-card rounded-2xl">
          <Filter className="w-12 h-12 text-slate-400 mb-4 opacity-50" />
          <h3 className="text-xl font-bold mb-2">Ничего не найдено</h3>
          <p className="text-slate-500 dark:text-slate-400 mb-6 max-w-md">
            Попробуйте изменить параметры фильтрации или поисковый запрос.
          </p>
          <button 
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory(null);
              setSelectedDifficulty(null);
            }}
            className="px-4 py-2 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 rounded-lg font-medium hover:bg-indigo-500/20 transition-colors"
          >
            Сбросить фильтры
          </button>
        </div>
      )}

      <PromptModal prompt={selectedPrompt} onClose={() => setSelectedPrompt(null)} />
    </section>
  );
}
