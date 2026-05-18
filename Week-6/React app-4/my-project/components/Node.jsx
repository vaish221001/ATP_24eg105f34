export default function Node() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
      <div className="flex items-center gap-4">
        <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-2xl text-green-600">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M11.5 2C10.5 2 9.5 2.5 9 3.3L3.5 12.5C3.1 13.1 3.1 13.9 3.5 14.5L9 23.7C9.5 24.5 10.5 25 11.5 25S13.5 24.5 14 23.7L19.5 14.5C19.9 13.9 19.9 13.1 19.5 12.5L14 3.3C13.5 2.5 12.5 2 11.5 2z"/></svg>
        </div>
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Node.js Ecosystem</h2>
      </div>
      <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
        Node.js is an open-source, cross-platform JavaScript runtime environment that executes JavaScript code outside a web browser. It allows developers to use JavaScript to write command line tools and for server-side scripting.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
        <div className="p-4 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
          <h4 className="font-bold text-slate-900 dark:text-white">Express.js</h4>
          <p className="text-sm text-slate-600 dark:text-slate-400">Minimal and flexible web application framework.</p>
        </div>
        <div className="p-4 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
          <h4 className="font-bold text-slate-900 dark:text-white">Socket.io</h4>
          <p className="text-sm text-slate-600 dark:text-slate-400">Real-time, bidirectional, and event-based communication.</p>
        </div>
      </div>
    </div>
  );
}
