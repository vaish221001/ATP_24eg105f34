export default function Vue() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
      <div className="flex items-center gap-4">
        <div className="p-3 bg-emerald-50 dark:bg-emerald-900/20 rounded-2xl text-emerald-600">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M21 2H18.5L12 13L5.5 2H3L12 17.5L21 2Z"/><path d="M16 2H13L12 4L11 2H8L12 9L16 2Z"/></svg>
        </div>
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Vue Interface</h2>
      </div>
      <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
        Vue.js is an open-source model–view–viewmodel JavaScript framework for building user interfaces and single-page applications. It was created by Evan You, and is maintained by him and the rest of the active core team members.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
        <div className="p-4 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
          <h4 className="font-bold text-slate-900 dark:text-white">Vue Router</h4>
          <p className="text-sm text-slate-600 dark:text-slate-400">The official router for Vue.js.</p>
        </div>
        <div className="p-4 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
          <h4 className="font-bold text-slate-900 dark:text-white">Pinia</h4>
          <p className="text-sm text-slate-600 dark:text-slate-400">The intuitive store for Vue.js.</p>
        </div>
      </div>
    </div>
  );
}
