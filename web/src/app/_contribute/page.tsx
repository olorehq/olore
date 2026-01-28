import Link from "next/link";

export default function ContributePage() {
  return (
    <div className="min-h-screen bg-zinc-950 font-mono text-zinc-300 selection:bg-cyan-500/30 selection:text-cyan-200">
      <main className="mx-auto min-h-screen max-w-7xl border-x border-zinc-800">
        {/* Navigation */}
        <nav className="flex items-center justify-between border-b border-zinc-800 px-6 py-4">
          <Link
            href="/brutalist"
            className="text-xl font-bold tracking-widest text-zinc-100 transition-colors hover:text-cyan-400"
          >
            <span className="text-zinc-500">[</span> O(pen)LORE{" "}
            <span className="text-zinc-500">]</span>
          </Link>
          <div className="flex gap-8 text-sm uppercase">
            <a
              href="https://github.com/olorehq/olore"
              className="px-2 py-1 transition-colors hover:text-cyan-400"
            >
              <span className="mr-1 text-zinc-600">[</span> GitHub{" "}
              <span className="ml-1 text-zinc-600">]</span>
            </a>
            <a
              href="/docs"
              className="px-2 py-1 transition-colors hover:text-cyan-400"
            >
              <span className="mr-1 text-zinc-600">[</span> Docs{" "}
              <span className="ml-1 text-zinc-600">]</span>
            </a>
          </div>
        </nav>

        {/* Header */}
        <section className="border-b border-zinc-800 p-12">
          <h1 className="mb-6 text-4xl font-bold tracking-tighter text-zinc-100 uppercase md:text-6xl">
            Contribute
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-zinc-400">
            <span className="text-purple-500">&gt;</span> Add docs for libraries
            you use.
            <br />
            <span className="text-purple-500">&gt;</span> Help other devs avoid
            hallucinated code.
            <br />
            <span className="text-purple-500">&gt;</span> 10 lines of JSON.
          </p>
        </section>

        {/* 3 Steps */}
        <section className="border-b border-zinc-800">
          <div className="border-b border-zinc-800 p-6">
            <h2 className="text-xl font-bold text-zinc-100 uppercase">
              <span className="text-purple-500">&gt;&gt;</span> Three_Steps
            </h2>
          </div>
          <div className="grid divide-y divide-zinc-800 md:grid-cols-3 md:divide-x md:divide-y-0">
            <Step
              num="01"
              title="Fork & Copy"
              desc="Fork the repo. Copy vault/configs/zod.json as your template."
            />
            <Step
              num="02"
              title="Edit Config"
              desc="Change name, repo, and path to point to your library docs."
            />
            <Step
              num="03"
              title="Submit PR"
              desc="Open a pull request. We build and review the package."
            />
          </div>
        </section>

        {/* Config Example */}
        <section className="border-b border-zinc-800">
          <div className="border-b border-zinc-800 p-6">
            <h2 className="text-xl font-bold text-zinc-100 uppercase">
              <span className="text-purple-500">&gt;&gt;</span> Config_Template
            </h2>
          </div>
          <div className="bg-zinc-900/30 p-8">
            <pre className="overflow-x-auto font-mono text-sm leading-relaxed text-zinc-400">
              {`{
  `}
              <span className="text-purple-400">"$schema"</span>
              {`: `}
              <span className="text-green-400">"./config.schema.json"</span>
              {`,
  `}
              <span className="text-purple-400">"name"</span>
              {`: `}
              <span className="text-green-400">"your-library"</span>
              {`,
  `}
              <span className="text-purple-400">"_source"</span>
              {`: {
    `}
              <span className="text-purple-400">"type"</span>
              {`: `}
              <span className="text-green-400">"github"</span>
              {`,
    `}
              <span className="text-purple-400">"repo"</span>
              {`: `}
              <span className="text-green-400">"owner/repo"</span>
              {`,
    `}
              <span className="text-purple-400">"path"</span>
              {`: `}
              <span className="text-green-400">"docs"</span>
              {`
  },
  `}
              <span className="text-purple-400">"versions"</span>
              {`: {
    `}
              <span className="text-purple-400">"latest"</span>
              {`: { `}
              <span className="text-purple-400">"ref"</span>
              {`: `}
              <span className="text-green-400">"main"</span>
              {` }
  }
}`}
            </pre>
          </div>
        </section>

        {/* How It Works */}
        <section className="border-b border-zinc-800">
          <div className="border-b border-zinc-800 p-6">
            <h2 className="text-xl font-bold text-zinc-100 uppercase">
              <span className="text-purple-500">&gt;&gt;</span> How_It_Works
            </h2>
          </div>
          <div className="grid divide-y divide-zinc-800 md:grid-cols-3 md:divide-x md:divide-y-0">
            <div className="group p-8">
              <div className="mb-6 h-3 w-3 bg-zinc-800 transition-colors group-hover:bg-cyan-500" />
              <h3 className="mb-2 font-bold text-zinc-200 uppercase transition-colors group-hover:text-cyan-400">
                You Add Config
              </h3>
              <p className="text-sm text-zinc-500">
                Point to a library&apos;s docs folder
              </p>
            </div>
            <div className="group p-8">
              <div className="mb-6 h-3 w-3 bg-zinc-800 transition-colors group-hover:bg-cyan-500" />
              <h3 className="mb-2 font-bold text-zinc-200 uppercase transition-colors group-hover:text-cyan-400">
                We Build It
              </h3>
              <p className="text-sm text-zinc-500">
                AI filters and structures the docs
              </p>
            </div>
            <div className="group p-8">
              <div className="mb-6 h-3 w-3 bg-zinc-800 transition-colors group-hover:bg-cyan-500" />
              <h3 className="mb-2 font-bold text-zinc-200 uppercase transition-colors group-hover:text-cyan-400">
                Devs Get Accurate Code
              </h3>
              <p className="text-sm text-zinc-500">No more hallucinated APIs</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-zinc-900/50 p-12 text-center">
          <a
            href="https://github.com/olorehq/olore/fork"
            className="inline-block border border-zinc-600 px-8 py-4 text-xl font-bold text-zinc-200 uppercase transition-all hover:border-cyan-500 hover:bg-zinc-900 hover:text-cyan-400"
          >
            <span className="mr-2 text-zinc-600">[</span> Fork & Start
            Contributing <span className="ml-2 text-zinc-600">]</span>
          </a>
          <p className="mt-6 text-sm text-zinc-500">
            Questions?{" "}
            <a
              href="https://github.com/olorehq/olore/discussions"
              className="underline transition-colors hover:text-cyan-400"
            >
              Open a discussion
            </a>
          </p>
        </section>

        <footer className="border-t border-zinc-800">
          <div className="flex flex-col items-center justify-between gap-6 p-8 text-xs text-zinc-500 uppercase md:flex-row">
            <div className="flex items-center gap-4">
              <span className="opacity-75">Open Source Forever</span>
              <a
                href="https://github.com/olorehq/olore/blob/main/LICENSE"
                className="transition-colors hover:text-cyan-400"
              >
                AGPL-3.0
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

function Step({
  num,
  title,
  desc,
}: {
  num: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="group p-8 transition-colors hover:bg-zinc-900/50">
      <div className="mb-4 text-4xl font-bold text-zinc-600 opacity-20 transition-colors group-hover:text-cyan-500/50">
        {num}
      </div>
      <h3 className="mb-2 text-lg font-bold text-zinc-300 uppercase transition-colors group-hover:text-cyan-400">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-zinc-500 transition-colors group-hover:text-zinc-400">
        {desc}
      </p>
    </div>
  );
}
