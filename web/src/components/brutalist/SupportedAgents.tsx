"use client";

import { useState } from "react";

const agents = [
  {
    name: "CLAUDE CODE",
    primary: "Reads CLAUDE.md automatically",
    fallback: "olore-zod-latest",
  },
  {
    name: "CODEX",
    primary: "Reads AGENTS.md automatically",
    fallback: "olore-zod-latest",
  },
  {
    name: "OPENCODE",
    primary: "Reads AGENTS.md automatically",
    fallback: "olore-zod-latest",
  },
];

export function SupportedAgents() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const activeAgent = activeIndex !== null ? agents[activeIndex] : null;

  const handleClick = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <>
      <div className="flex flex-wrap gap-8 text-sm font-bold text-zinc-400 md:text-base">
        {agents.map((agent, index) => (
          <span
            key={agent.name}
            className={`group cursor-pointer transition-colors ${
              activeIndex === index ? "text-cyan-400" : "hover:text-cyan-400"
            }`}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
            onClick={() => handleClick(index)}
          >
            <span
              className={`transition-colors ${
                activeIndex === index
                  ? "text-cyan-400/50"
                  : "text-zinc-700 group-hover:text-cyan-400/50"
              }`}
            >
              [
            </span>{" "}
            {agent.name}{" "}
            <span
              className={`transition-colors ${
                activeIndex === index
                  ? "text-cyan-400/50"
                  : "text-zinc-700 group-hover:text-cyan-400/50"
              }`}
            >
              ]
            </span>
          </span>
        ))}
      </div>
      <div className="mt-4 h-12 font-mono text-sm">
        {activeAgent ? (
          <>
            <p className="text-zinc-400">
              <span className="text-cyan-500/70">reference →</span>{" "}
              {activeAgent.primary}
            </p>
            <p className="text-zinc-600">
              <span className="text-zinc-700">skill →</span>{" "}
              {activeAgent.fallback}
            </p>
          </>
        ) : (
          <p className="text-zinc-600">
            <span className="text-zinc-700">&gt;</span>{" "}
            <span className="italic">
              tap or hover to see how each agent uses olore
            </span>
          </p>
        )}
      </div>
    </>
  );
}
