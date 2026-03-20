import { SupportedAgents } from "@/components/brutalist/SupportedAgents";

export function HowToUse() {
  return (
    <>
      {/* Supported Agents */}
      <section className="border-b border-zinc-800 bg-zinc-900/50 p-6">
        <h2 className="mb-6 text-xl font-bold text-zinc-100 uppercase">
          <span className="text-purple-500">&gt;&gt;</span> Supported_Agents
        </h2>
        <SupportedAgents />
      </section>

      {/* How To Use */}
      <section className="border-b border-zinc-800 p-6">
        <h2 className="mb-6 text-xl font-bold text-zinc-100 uppercase">
          <span className="text-purple-500">&gt;&gt;</span> How_To_Use
        </h2>

        {/* Step 1: Install */}
        <div className="mb-px bg-zinc-800">
          <div className="bg-zinc-950 p-6 font-mono text-sm">
            <p className="mb-3 text-xs tracking-wider text-zinc-500 uppercase">
              <span className="text-cyan-500">01</span> Install
            </p>
            <p className="text-zinc-300">
              <span className="text-zinc-600">$</span> olore install prisma
            </p>
            <p className="mt-2 text-xs text-zinc-600">
              Downloads version-pinned docs to ~/.olore/ and symlinks them into
              every agent&apos;s skill directory. Claude Code, Codex, OpenCode —
              all get the docs instantly.
            </p>
          </div>
        </div>

        {/* Step 2: Inject (optional) */}
        <div className="mb-px bg-zinc-800">
          <div className="bg-zinc-950 p-6 font-mono text-sm">
            <p className="mb-3 text-xs tracking-wider text-zinc-500 uppercase">
              <span className="text-cyan-500">02</span> Inject{" "}
              <span className="text-zinc-700">(optional)</span>
            </p>
            <p className="text-zinc-300">
              <span className="text-zinc-600">$</span> olore inject prisma
            </p>
            <p className="mt-2 text-xs text-zinc-600">
              Adds a reference table to AGENTS.md so agents know docs exist and
              invoke them automatically. Commit it — your whole team gets the
              docs.
            </p>
          </div>
        </div>

        {/* Step 3: Code */}
        <div className="bg-zinc-800">
          <div className="bg-zinc-950 p-6 font-mono text-sm">
            <p className="mb-3 text-xs tracking-wider text-zinc-500 uppercase">
              <span className="text-cyan-500">03</span> Code
            </p>
            <p className="text-zinc-400">
              Your agent has the right docs. No hallucinated APIs. No outdated
              patterns.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
