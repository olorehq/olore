import { Book, Cpu, Database, Globe, Shield, Zap } from "lucide-react";
import { CopyCommand } from "../../components/modern/CopyCommand";
import { TerminalDemo } from "../../components/modern/TerminalDemo";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-zinc-100 selection:bg-white/20">
      {/* Background Grid */}
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <main className="relative z-10">
        {/* Navigation */}
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <div className="font-mono text-xl font-bold tracking-tighter">
            olore
          </div>
          <div className="flex gap-6 text-sm font-medium text-zinc-400">
            <a
              href="https://github.com/olorehq/olore"
              className="transition-colors hover:text-white"
            >
              GitHub
            </a>
            <a href="/docs" className="transition-colors hover:text-white">
              Docs
            </a>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="px-6 pt-20 pb-32">
          <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
            <div className="flex flex-col gap-8">
              <div className="space-y-4">
                <h1 className="bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-5xl font-bold tracking-tighter text-transparent md:text-7xl">
                  The Package Manager
                  <br />
                  for Agent Context
                </h1>
                <p className="max-w-lg text-xl leading-relaxed text-zinc-400">
                  Install official documentation directly into your LLM's
                  context window. <br />
                  <span className="font-medium text-white">
                    Local-first. Offline-ready. Versioned.
                  </span>
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <CopyCommand />
              </div>

              <div className="flex items-center gap-4 font-mono text-xs text-zinc-500">
                <span className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-green-500" />
                  Works with Cursor/Windsurf
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-blue-500" />
                  Zero Config
                </span>
              </div>
            </div>

            <div className="relative">
              <TerminalDemo />
              {/* Decorative elements */}
              <div className="absolute -top-20 -right-20 -z-10 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />
              <div className="absolute -bottom-20 -left-20 -z-10 h-64 w-64 rounded-full bg-purple-500/10 blur-3xl" />
            </div>
          </div>
        </section>

        {/* Problem/Solution Section (Before & After) */}
        <section className="border-t border-zinc-900 px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-16 text-center text-3xl font-bold tracking-tight">
              Stop Hallucinations at the Source
            </h2>

            <div className="grid gap-12 lg:grid-cols-2">
              {/* Problem */}
              <div className="space-y-4">
                <div className="mb-2 flex items-center gap-2 font-mono text-sm text-red-500">
                  <span className="h-2 w-2 rounded-full bg-red-500"></span>
                  Without Docs: Hallucinated Imports
                </div>
                <div className="rounded-xl border border-red-900/30 bg-red-950/10 p-6 font-mono text-sm text-zinc-400">
                  <div className="mb-2 text-red-400">
                    // ❌ Agents guess based on outdated training data
                  </div>
                  <span className="text-blue-400">import</span> {"{"}{" "}
                  <span className="text-yellow-200">useRouter</span> {"}"}{" "}
                  <span className="text-blue-400">from</span>{" "}
                  <span className="text-green-400">'next/router'</span>;
                  <br />
                  <br />
                  <span className="text-purple-400">const</span> router ={" "}
                  <span className="text-yellow-200">useRouter</span>();
                  <br />
                  <span className="text-zinc-500">
                    // Error: NextRouter was not mounted.
                  </span>
                </div>
              </div>

              {/* Solution */}
              <div className="space-y-4">
                <div className="mb-2 flex items-center gap-2 font-mono text-sm text-green-500">
                  <span className="h-2 w-2 rounded-full bg-green-500"></span>
                  With OpenLore: Correct Implementation
                </div>
                <div className="rounded-xl border border-green-900/30 bg-green-950/10 p-6 font-mono text-sm text-zinc-300">
                  <div className="mb-2 text-green-400">
                    // ✅ Agent references installed @olore/nextjs
                  </div>
                  <span className="text-blue-400">import</span> {"{"}{" "}
                  <span className="text-yellow-200">useRouter</span> {"}"}{" "}
                  <span className="text-blue-400">from</span>{" "}
                  <span className="text-green-400">'next/navigation'</span>;
                  <br />
                  <br />
                  <span className="text-purple-400">const</span> router ={" "}
                  <span className="text-yellow-200">useRouter</span>();
                  <br />
                  <span className="text-zinc-500">
                    // Works correctly in Next.js 14 App Router
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="border-t border-zinc-900 bg-zinc-900/20 px-6 py-24">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-16 text-center text-3xl font-bold tracking-tight">
              The Modern Doc Stack
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-zinc-800 text-zinc-400">
                    <th className="px-4 py-4 font-normal">Features</th>
                    <th className="w-32 px-4 py-4 text-center font-normal">
                      Manual Copy
                    </th>
                    <th className="w-32 px-4 py-4 text-center font-normal">
                      Local RAG
                    </th>
                    <th className="w-32 rounded-t-lg bg-zinc-900/50 px-4 py-4 text-center font-semibold text-white">
                      olore
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-900">
                  <tr>
                    <td className="px-4 py-4 text-zinc-300">Works offline</td>
                    <td className="px-4 py-4 text-center text-green-500">✅</td>
                    <td className="px-4 py-4 text-center text-green-500">
                      ✅ (If hard)
                    </td>
                    <td className="bg-zinc-900/50 px-4 py-4 text-center text-green-500">
                      ✅ Native
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 text-zinc-300">
                      Context Strategy
                    </td>
                    <td className="px-4 py-4 text-center text-yellow-500">
                      User Paste
                    </td>
                    <td className="px-4 py-4 text-center text-yellow-500">
                      Fragmented
                    </td>
                    <td className="bg-zinc-900/50 px-4 py-4 text-center text-green-500">
                      Full Package
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 text-zinc-300">Setup Effort</td>
                    <td className="px-4 py-4 text-center text-red-500">High</td>
                    <td className="px-4 py-4 text-center text-red-500">
                      Very High
                    </td>
                    <td className="bg-zinc-900/50 px-4 py-4 text-center text-green-500">
                      1 Command
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-4 text-zinc-300">Architecture</td>
                    <td className="px-4 py-4 text-center text-zinc-500">
                      Ad-hoc
                    </td>
                    <td className="px-4 py-4 text-center text-zinc-500">
                      Complex DB
                    </td>
                    <td className="bg-zinc-900/50 px-4 py-4 text-center text-green-500">
                      Filesystem
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Supported Packages */}
        <section className="border-t border-zinc-900 px-6 py-24">
          <div className="mx-auto max-w-7xl text-center">
            <h2 className="mb-12 text-3xl font-bold tracking-tight">
              Official Packages
            </h2>
            <div className="flex flex-wrap justify-center gap-4 font-mono text-sm text-zinc-400">
              {[
                "nextjs",
                "prisma",
                "stripe",
                "supabase",
                "tailwindcss",
                "shadcn-ui",
                "framer-motion",
                "react-query",
                "zod",
                "typescript",
              ].map((pkg) => (
                <div
                  key={pkg}
                  className="cursor-default rounded-full border border-zinc-800 bg-zinc-900/50 px-4 py-2 transition-colors hover:bg-zinc-800 hover:text-white"
                >
                  @olore/{pkg}
                </div>
              ))}
            </div>
            <p className="mt-8 text-zinc-500">
              + Generate your own packages with{" "}
              <code className="text-zinc-300">olore build</code>
            </p>
          </div>
        </section>

        {/* Features Grid */}
        <section className="border-t border-zinc-900 bg-zinc-900/20 px-6 py-24">
          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={<Zap className="h-5 w-5" />}
              title="Instant Setup"
              description="One command installs formatted documentation directly into your project's .olore directory."
            />
            <FeatureCard
              icon={<Globe className="h-5 w-5" />}
              title="Universal Support"
              description="Since it's just files, it works with Cursor, Windsurf, VS Code, and any other agentic tool."
            />
            <FeatureCard
              icon={<Database className="h-5 w-5" />}
              title="Private Docs"
              description="Generate packages for your internal APIs. No data ever leaves your machine."
            />
            <FeatureCard
              icon={<Shield className="h-5 w-5" />}
              title="No Hallucinations"
              description="Stop guessing. Give your AI the exact API reference it needs to write correct code."
            />
            <FeatureCard
              icon={<Book className="h-5 w-5" />}
              title="Curated Packages"
              description="Official doc packages for Prisma, Next.js, Stripe, LangChain, and more."
            />
            <FeatureCard
              icon={<Cpu className="h-5 w-5" />}
              title="Agent Native"
              description="Documentation designed specifically for LLM consumption, not human reading."
            />
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-zinc-900 py-12 text-center text-sm text-zinc-600">
          <p>
            © {new Date().getFullYear()} olore. "May the Skill be with you."
          </p>
        </footer>
      </main>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="group rounded-2xl border border-zinc-900 bg-zinc-950 p-6 transition-colors hover:border-zinc-800">
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-900 text-zinc-400 transition-colors group-hover:text-white">
        {icon}
      </div>
      <h3 className="mb-2 font-semibold text-zinc-200">{title}</h3>
      <p className="text-sm leading-relaxed text-zinc-500">{description}</p>
    </div>
  );
}
