'use client';

import { motion } from 'framer-motion';
import { Terminal, Code2, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="pt-32 pb-16 md:pt-48 md:pb-20 px-4 max-w-7xl mx-auto relative z-10">
      <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
        
        {/* Left Side (Text) */}
        <div className="flex-1 text-center md:text-left flex flex-col items-center md:items-start">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400 text-xs font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
            v1.0 Live: 50 Prompts added
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6">
            50 готовых промптов для <span className="text-gradient">вайбкодинга</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-700 dark:text-slate-200 max-w-2xl mb-10 leading-relaxed">
            От идеи до работающего приложения — одним точным промптом. One-shot prompts для создания сайтов, SaaS, Telegram-ботов, AI-инструментов, дашбордов и других приложений.
          </p>
          

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 lg:gap-12 text-sm text-slate-500 dark:text-slate-400">
            {[
              { num: '50', label: 'Промптов' },
              { num: '10', label: 'Категорий' },
              { num: '4', label: 'Уровня сложности' },
              { num: '20+', label: 'Технологий' },
            ].map((stat, i) => (
              <div key={i} className="relative group flex flex-col items-center md:items-start gap-1 p-2 -m-2 rounded-xl transition-all duration-300 cursor-default">
                <div className="absolute inset-0 bg-indigo-500/0 group-hover:bg-indigo-500/10 dark:group-hover:bg-indigo-500/20 blur-xl rounded-full transition-all duration-500 opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100"></div>
                <span className="relative text-2xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">{stat.num}</span>
                <span className="relative group-hover:text-indigo-700 dark:group-hover:text-indigo-300 transition-colors duration-300">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side (Animation) */}
        <div className="flex-1 w-full relative hidden md:block">
           <div className="relative w-full max-w-lg mx-auto">
              {/* Glow effect behind the card */}
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 blur-3xl rounded-full translate-y-4"></div>
              
              <motion.div 
                initial={{ y: 0 }}
                animate={{ y: [-10, 10, -10] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                className="relative glass-card border border-white/20 dark:border-slate-700/50 rounded-2xl overflow-hidden shadow-2xl bg-white/40 dark:bg-slate-900/40 backdrop-blur-xl"
              >
                {/* Mock Window Header */}
                <div className="flex items-center gap-2 p-4 border-b border-white/10 dark:border-slate-700/50 bg-white/20 dark:bg-slate-800/50">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-400/80"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-400/80"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400/80"></div>
                  </div>
                  <div className="flex-1 text-center flex items-center justify-center gap-2 text-xs font-mono text-slate-600 dark:text-slate-400">
                    <Terminal className="w-3.5 h-3.5" /> app_generation.sh
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6 font-mono text-sm">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="flex flex-col gap-5"
                  >
                    <div className="text-indigo-600 dark:text-indigo-400 flex items-center gap-2">
                      <Sparkles className="w-4 h-4" /> 
                      <span className="font-semibold">Vibe check initiated...</span>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <span className="text-green-500">➜</span>
                        <div className="h-2.5 bg-slate-300 dark:bg-slate-700 rounded w-3/4 animate-pulse"></div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-green-500">➜</span>
                        <div className="h-2.5 bg-slate-300 dark:bg-slate-700 rounded w-1/2 animate-pulse" style={{ animationDelay: '150ms' }}></div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-indigo-500">➜</span>
                        <div className="h-2.5 bg-indigo-200 dark:bg-indigo-900/50 rounded w-5/6 animate-pulse" style={{ animationDelay: '300ms' }}></div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-slate-400">➜</span>
                        <div className="h-2.5 bg-slate-200 dark:bg-slate-800 rounded w-2/3 animate-pulse" style={{ animationDelay: '450ms' }}></div>
                      </div>
                    </div>
                    
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 2, duration: 0.5 }}
                      className="mt-2 p-4 rounded-xl bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-100 dark:border-indigo-500/20"
                    >
                      <div className="flex items-center gap-2 text-indigo-700 dark:text-indigo-300 font-medium mb-1.5">
                        <Code2 className="w-4 h-4" /> Ready to build
                      </div>
                      <div className="text-slate-600 dark:text-slate-400 text-xs">
                        Deployment successful. App is running.
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
              
              {/* Floating decorative elements */}
              <motion.div
                animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                className="absolute -right-6 -top-6 p-4 glass-card rounded-2xl text-4xl shadow-xl z-20 hidden lg:block"
              >
                🚀
              </motion.div>
              
              <motion.div
                animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.5 }}
                className="absolute -left-6 -bottom-6 p-4 glass-card rounded-2xl text-4xl shadow-xl z-20 hidden lg:block"
              >
                ✨
              </motion.div>
           </div>
        </div>
      </div>
    </section>
  );
}
