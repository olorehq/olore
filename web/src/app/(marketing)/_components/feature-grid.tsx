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

export function FeatureGrid() {
  return (
    <section>
      <div className="border-b border-zinc-800 p-6">
        <h2 className="text-xl font-bold text-zinc-100 uppercase">
          <span className="text-purple-500">&gt;&gt;</span> Capabilities
        </h2>
      </div>
      <div className="grid divide-y divide-zinc-800 md:grid-cols-3 md:divide-x md:divide-y-0">
        <FeatureItem
          title="Build From Any Repo"
          desc="Point at a GitHub repo, get a ready-to-use doc package. Automated build pipeline handles download, filtering, and skill generation."
        />
        <FeatureItem
          title="Offline-First"
          desc="All documentation stored locally. No internet connection required after install. No MCP server to configure."
        />
        <FeatureItem
          title="Version Pinned"
          desc="Pin docs to your exact library version. No hallucinating future APIs or deprecated patterns."
        />
        <FeatureItem
          title="Private Docs"
          desc="Generate packages for your internal APIs. No data ever leaves your machine."
        />
        <FeatureItem
          title="Multi-Agent"
          desc="One install, every agent. Works with Claude Code, Codex, OpenCode, and any tool that supports Agent Skills."
        />
        <FeatureItem
          title="Passive Discovery"
          desc="Inject a reference table into AGENTS.md so agents know docs exist. They invoke the right skill automatically."
        />
      </div>
    </section>
  );
}
