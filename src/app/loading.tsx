export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-gradient-to-br from-slate-900 via-slate-950 to-black">
      <div className="relative h-16 w-16">
        <div className="absolute inset-0 rounded-full border-4 border-slate-700"></div>
        <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-indigo-500"></div>
      </div>
      <div className="text-center text-4xl font-bold tracking-wide text-white animate-pulse">
        Loading<span className="text-indigo-400">...</span>
      </div>
      <p className="text-sm text-slate-400">Please wait a moment</p>
    </div>
  );
}