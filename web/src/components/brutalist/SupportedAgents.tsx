"use client";

import { useState } from "react";

const agents = [
  { name: "CLAUDE CODE", cmd: "/olore-zod-latest" },
  { name: "CODEX", cmd: "$olore-zod-latest" },
  { name: "OPENCODE", cmd: "olore-zod-latest" },
];

export function SupportedAgents() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const activeAgent = hoveredIndex !== null ? agents[hoveredIndex] : null;

  return (
    <>
      <div className="flex flex-wrap gap-8 text-sm font-bold text-zinc-400 md:text-base">
        {agents.map((agent, index) => (
          <span
            key={agent.name}
            className={`group cursor-default transition-colors ${
              hoveredIndex === index ? "text-cyan-400" : "hover:text-cyan-400"
            }`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <span
              className={`transition-colors ${
                hoveredIndex === index
                  ? "text-cyan-400/50"
                  : "text-zinc-700 group-hover:text-cyan-400/50"
              }`}
            >
              [
            </span>{" "}
            {agent.name}{" "}
            <span
              className={`transition-colors ${
                hoveredIndex === index
                  ? "text-cyan-400/50"
                  : "text-zinc-700 group-hover:text-cyan-400/50"
              }`}
            >
              ]
            </span>
          </span>
        ))}
      </div>
      <div className="mt-4 h-6 font-mono text-sm">
        {activeAgent ? (
          <p className="text-zinc-500">
            <span className="text-cyan-500/70">&gt;</span>{" "}
            <span className="text-zinc-400">{activeAgent.cmd}</span>
          </p>
        ) : (
          <p className="text-zinc-600">
            <span className="text-zinc-700">&gt;</span>{" "}
            <span className="italic">hover to see command</span>
          </p>
        )}
      </div>
    </>
  );
}
