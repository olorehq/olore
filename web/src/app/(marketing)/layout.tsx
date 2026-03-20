import Link from "next/link";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-zinc-950 font-mono text-zinc-300 selection:bg-cyan-500/30 selection:text-cyan-200">
      <main className="mx-auto min-h-screen max-w-7xl border-x border-zinc-800">
        {/* Navigation */}
        <nav className="flex items-center justify-between border-b border-zinc-800 px-6 py-4">
          <Link
            href="/"
            className="text-xl font-bold tracking-widest text-zinc-100"
          >
            <span className="text-zinc-500">[</span> O(pen)LORE{" "}
            <span className="text-zinc-500">]</span>
          </Link>
          <div className="flex gap-3 text-xs uppercase sm:gap-8 sm:text-sm">
            <Link
              href="/registry"
              className="px-1 py-1 transition-colors hover:text-cyan-400 sm:px-2"
            >
              <span className="mr-1 hidden text-zinc-600 sm:inline">[</span>
              Registry
              <span className="ml-1 hidden text-zinc-600 sm:inline">]</span>
            </Link>
            <a
              href="https://github.com/olorehq/olore"
              className="px-1 py-1 transition-colors hover:text-cyan-400 sm:px-2"
            >
              <span className="mr-1 hidden text-zinc-600 sm:inline">[</span>
              GitHub
              <span className="ml-1 hidden text-zinc-600 sm:inline">]</span>
            </a>
          </div>
        </nav>

        {children}

        {/* Footer */}
        <footer className="border-t border-zinc-800">
          <div className="flex flex-col items-center justify-between gap-6 p-8 text-xs text-zinc-500 uppercase md:flex-row">
            <div className="flex items-center gap-4">
              <span className="opacity-75">Open Source Forever</span>
              <a
                href="https://github.com/olorehq/olore/blob/main/LICENSE"
                className="transition-colors hover:text-cyan-400"
              >
                MIT
              </a>
            </div>
            <div className="flex items-center gap-6">
              <a
                href="https://github.com/olorehq/olore"
                className="px-2 py-1 transition-colors hover:text-cyan-400"
              >
                GitHub
              </a>
              <a
                href="https://github.com/olorehq/olore/discussions"
                className="px-2 py-1 transition-colors hover:text-cyan-400"
              >
                Discussions
              </a>
            </div>
          </div>
          <div className="border-t border-zinc-800/50 p-4 text-center text-xs text-zinc-700">
            Made by contributors around the world
          </div>
        </footer>
      </main>
    </div>
  );
}
