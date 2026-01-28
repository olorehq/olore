import { CopyCommand } from "../components/brutalist/CopyCommand";
import { SupportedAgents } from "../components/brutalist/SupportedAgents";
import { TerminalDemo } from "../components/brutalist/TerminalDemo";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 font-mono text-zinc-300 selection:bg-cyan-500/30 selection:text-cyan-200">
      <main className="mx-auto min-h-screen max-w-7xl border-x border-zinc-800">
        {/* Navigation */}
        <nav className="flex items-center justify-between border-b border-zinc-800 px-6 py-4">
          <div className="text-xl font-bold tracking-widest text-zinc-100">
            <span className="text-zinc-500">[</span> O(pen)LORE{" "}
            <span className="text-zinc-500">]</span>
          </div>
          <div className="flex gap-8 text-sm uppercase">
            <a
              href="https://github.com/olorehq/olore"
              className="px-2 py-1 transition-colors hover:text-cyan-400"
            >
              <span className="mr-1 text-zinc-600">[</span> GitHub{" "}
              <span className="ml-1 text-zinc-600">]</span>
            </a>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="grid border-b border-zinc-800 lg:grid-cols-2">
          <div className="flex flex-col justify-center border-r border-b border-zinc-800 p-12 pl-6 lg:border-r lg:border-r-0 lg:border-b-0">
            <pre className="mb-6 hidden text-[10px] leading-none text-cyan-500/80 opacity-75 sm:block sm:text-xs">
              {`
 ██████╗ ██╗      ██████╗ ██████╗ ███████╗
██╔═══██╗██║     ██╔═══██╗██╔══██╗██╔════╝
██║   ██║██║     ██║   ██║██████╔╝█████╗
██║   ██║██║     ██║   ██║██╔══██╗██╔══╝
╚██████╔╝███████╗╚██████╔╝██║  ██║███████╗
 ╚═════╝ ╚══════╝ ╚═════╝ ╚═╝  ╚═╝╚══════╝
`}
            </pre>
            {/* OSS Badges */}
            <div className="mb-8 flex flex-wrap gap-3">
              <a
                href="https://github.com/olorehq/olore"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://img.shields.io/github/stars/olorehq/olore?style=flat&logo=github&label=Stars&color=18181b&labelColor=09090b"
                  alt="GitHub stars"
                  className="h-5 opacity-80 transition-opacity hover:opacity-100"
                />
              </a>
              <a
                href="https://github.com/olorehq/olore/blob/main/LICENSE"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://img.shields.io/github/license/olorehq/olore?style=flat&color=18181b&labelColor=09090b"
                  alt="License"
                  className="h-5 opacity-80 transition-opacity hover:opacity-100"
                />
              </a>
              <span className="border border-zinc-800 px-2 py-0.5 text-xs text-zinc-500">
                v0.1.0
              </span>
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tighter text-zinc-100 uppercase md:text-6xl">
              Docs as
              <br />
              <span className="text-cyan-500">Agent Skills</span>
            </h1>
            <p className="mb-8 max-w-md text-lg leading-relaxed text-zinc-400">
              <span className="text-purple-500">&gt;</span> Version-pinned
              documentation.
              <br />
              <span className="text-purple-500">&gt;</span> Works offline.{" "}
              <br />
              <span className="text-purple-500">&gt;</span> For Claude Code,
              Codex, OpenCode.
            </p>

            <CopyCommand />
          </div>

          <div className="bg-opacity-5 flex items-center justify-center bg-[url('/grid.svg')] bg-center p-12">
            <div className="w-full max-w-md">
              <TerminalDemo />
            </div>
          </div>
        </section>

        {/* Supported Agents */}
        <section className="border-b border-zinc-800 bg-zinc-900/50 p-6">
          <h2 className="mb-6 text-xl font-bold text-zinc-100 uppercase">
            <span className="text-purple-500">&gt;&gt;</span> Supported_Agents
          </h2>
          <SupportedAgents />
        </section>

        {/* Before / After Brutalist */}
        {/* accuracy: not_stormtrooper_level */}
        <section className="grid border-b border-zinc-800 font-mono text-xs lg:grid-cols-2">
          <div className="border-b border-zinc-800 bg-zinc-900/30 p-8 lg:border-r lg:border-b-0">
            <h3 className="mb-4 font-bold text-red-500/80 uppercase">
              [ FAIL ] CONTEXT7 (LATEST DOCS)
            </h3>
            <div className="text-zinc-400 opacity-75">
              <span className="text-zinc-600">&gt;</span>{" "}
              <span className="text-zinc-500">{"// You are using Zod v3"}</span>
              <br />
              <span className="text-zinc-600">&gt;</span>{" "}
              <span className="text-purple-400">import</span> {"{"} z {"}"}{" "}
              <span className="text-purple-400">from</span> {"'zod'"};<br />
              <span className="text-zinc-600">&gt;</span>{" "}
              <span className="text-purple-400">const</span> s =
              z.string().date();
              <br />
              <br />
              <span className="border border-red-500/30 bg-red-500/20 px-1 text-red-400">
                ERROR
              </span>{" "}
              Property &apos;date&apos; does not exist on type
              &apos;ZodString&apos;.
            </div>
          </div>
          <div
            className="bg-zinc-950 p-8"
            title="Some soldiers finally learned to aim"
          >
            <h3 className="mb-4 font-bold text-green-500/80 uppercase">
              [ SUCCESS ] OLORE (PINNED v3)
            </h3>
            <div className="text-zinc-300 opacity-75">
              <span className="text-zinc-600">&gt;</span>{" "}
              <span className="text-zinc-500">
                {"// Agent reads olore-zod-3 skill"}
              </span>
              <br />
              <span className="text-zinc-600">&gt;</span>{" "}
              <span className="text-purple-400">import</span> {"{"} z {"}"}{" "}
              <span className="text-purple-400">from</span> {"'zod'"};<br />
              <span className="text-zinc-600">&gt;</span>{" "}
              <span className="text-purple-400">const</span> s =
              z.string().regex({"/\\d{4}-\\d{2}-\\d{2}/"});
              <br />
              <br />
              <span className="border border-green-500/30 bg-green-500/20 px-1 text-green-400">
                OK
              </span>{" "}
              Valid code for Zod v3.
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="border-b border-zinc-800">
          <div className="border-b border-zinc-800 p-6">
            <h2 className="text-xl font-bold text-zinc-100 uppercase">
              <span className="text-purple-500">&gt;&gt;</span>{" "}
              System_Comparison
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left font-mono text-sm uppercase">
              <thead>
                <tr className="border-b border-zinc-800 text-zinc-500">
                  <th className="border-r border-zinc-800 px-6 py-4 font-bold">
                    Spec
                  </th>
                  <th className="w-48 border-r border-zinc-800 px-6 py-4 font-normal">
                    Context7
                  </th>
                  <th className="w-48 bg-zinc-900/50 px-6 py-4 font-bold text-cyan-400">
                    OLORE
                  </th>
                </tr>
              </thead>
              <tbody className="text-zinc-400">
                <tr className="border-b border-zinc-800">
                  <td className="border-r border-zinc-800 px-6 py-4 text-zinc-500">
                    Network
                  </td>
                  <td className="border-r border-zinc-800 px-6 py-4">
                    REQUIRED
                  </td>
                  <td className="bg-zinc-900/30 px-6 py-4 font-bold text-zinc-200">
                    OFFLINE
                  </td>
                </tr>
                <tr className="border-b border-zinc-800">
                  <td className="border-r border-zinc-800 px-6 py-4 text-zinc-500">
                    Version
                  </td>
                  <td className="border-r border-zinc-800 px-6 py-4">
                    LATEST ONLY
                  </td>
                  <td className="bg-zinc-900/30 px-6 py-4 font-bold text-zinc-200">
                    PINNED
                  </td>
                </tr>
                <tr className="border-b border-zinc-800">
                  <td className="border-r border-zinc-800 px-6 py-4 text-zinc-500">
                    Setup
                  </td>
                  <td className="border-r border-zinc-800 px-6 py-4">
                    MCP CONFIG
                  </td>
                  <td className="bg-zinc-900/30 px-6 py-4 font-bold text-zinc-200">
                    ONE COMMAND
                  </td>
                </tr>
                <tr className="border-b border-zinc-800">
                  <td className="border-r border-zinc-800 px-6 py-4 text-zinc-500">
                    Private Docs
                  </td>
                  <td className="border-r border-zinc-800 px-6 py-4">NO</td>
                  <td className="bg-zinc-900/30 px-6 py-4 font-bold text-zinc-200">
                    YES
                  </td>
                </tr>
                <tr>
                  <td className="border-r border-zinc-800 px-6 py-4 text-zinc-500">
                    Context
                  </td>
                  <td className="border-r border-zinc-800 px-6 py-4">
                    SNIPPETS
                  </td>
                  <td className="bg-zinc-900/30 px-6 py-4 font-bold text-zinc-200">
                    FULL DOCS
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Supported Packages */}
        <section className="border-b border-zinc-800 p-6">
          <h2 className="mb-6 text-xl font-bold text-zinc-100 uppercase">
            <span className="text-purple-500">&gt;&gt;</span> Official_Packages
          </h2>
          <div className="flex flex-wrap gap-2 font-mono text-xs">
            {[
              "zod",
              "prisma",
              "nextjs",
              "langchain",
              "tanstack-form",
              "claude-code",
              "codex",
              "opencode",
            ].map((pkg) => (
              <span
                key={pkg}
                className="cursor-default border border-zinc-800 bg-zinc-900/50 px-3 py-1 text-zinc-400 transition-colors hover:border-cyan-500/50 hover:text-cyan-400"
              >
                olore-{pkg}
              </span>
            ))}
          </div>
        </section>

        {/* Features Features */}
        <section>
          <div className="border-b border-zinc-800 p-6">
            <h2 className="text-xl font-bold text-zinc-100 uppercase">
              <span className="text-purple-500">&gt;&gt;</span> Capabilities
            </h2>
          </div>
          <div className="grid divide-y divide-zinc-800 md:grid-cols-3 md:divide-x md:divide-y-0">
            <FeatureItem
              title="Instant Setup"
              desc="One command installs formatted documentation directly into your agent's context."
            />
            <FeatureItem
              title="Offline-First"
              desc="Optimized for local skills. No internet connection required after install."
            />
            <FeatureItem
              title="Private Docs"
              desc="Generate packages for your internal APIs. No data ever leaves your machine."
            />
            <FeatureItem
              title="Accurate APIs"
              desc="Pin your documentation to your exact version. No more hallucinating future features."
            />
            <FeatureItem
              title="Curated Packages"
              desc="Official doc packages for Prisma, Next.js, LangChain, Zod, and more."
            />
            <FeatureItem
              title="Local First"
              desc="Documentation stored locally. Fast, offline, secure, and always versioned."
            />
          </div>
        </section>

        {/* Contributors */}
        <section className="border-t border-zinc-800 p-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div>
              <h2 className="mb-2 text-lg font-bold text-zinc-100 uppercase">
                <span className="text-purple-500">&gt;&gt;</span> Contributors
              </h2>
              <p className="text-sm text-zinc-500">
                Built by the community, for the community.
              </p>
            </div>
            <a
              href="https://github.com/olorehq/olore/graphs/contributors"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://contrib.rocks/image?repo=olorehq/olore&max=12"
                alt="Contributors"
                className="opacity-60 grayscale transition-opacity hover:opacity-80 hover:opacity-100 hover:grayscale-0"
              />
            </a>
          </div>
        </section>

        {/* Contribute CTA */}
        <section className="border-t border-zinc-800 bg-zinc-900/50 p-12 text-center">
          <h2 className="mb-4 font-mono text-2xl font-bold text-zinc-100 uppercase">
            <span className="text-purple-500">$</span> rm -rf hallucinations
          </h2>
          <p className="mb-6 text-zinc-400">
            Hits the target. Every time.{" "}
            <span className="text-zinc-600">(Shocking, we know.)</span>
          </p>
          <a
            href="https://github.com/olorehq/olore/blob/main/CONTRIBUTING.md"
            className="inline-block border border-zinc-600 px-6 py-3 font-bold text-zinc-200 uppercase transition-all hover:border-cyan-500 hover:bg-zinc-900 hover:text-cyan-400"
          >
            <span className="mr-2 text-zinc-600">[</span> Add a Library{" "}
            <span className="ml-2 text-zinc-600">]</span>
          </a>
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

function FeatureItem({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="group flex min-h-[200px] cursor-default flex-col justify-between p-8 transition-colors hover:bg-zinc-900/50">
      <div>
        <div className="mb-6 h-3 w-3 bg-zinc-800 transition-colors group-hover:bg-cyan-500" />
        <h3 className="mb-4 text-lg font-bold text-zinc-300 uppercase transition-colors group-hover:text-cyan-400">
          {title}
        </h3>
      </div>
      <p className="text-sm leading-relaxed text-zinc-500 transition-colors group-hover:text-zinc-400">
        {desc}
      </p>
    </div>
  );
}
