export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-200/20 dark:border-slate-800/50 bg-white/5 dark:bg-slate-950/20 backdrop-blur-md py-8 mt-auto relative z-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500 dark:text-slate-400">
        <div>
          <span className="font-bold text-slate-900 dark:text-slate-100">VibePrompts</span> © {new Date().getFullYear()}
        </div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-indigo-500 transition-colors">Privacy</a>
          <a href="#" className="hover:text-indigo-500 transition-colors">Terms</a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-indigo-500 transition-colors">GitHub</a>
        </div>
      </div>
    </footer>
  );
}
