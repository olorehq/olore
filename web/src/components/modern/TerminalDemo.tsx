"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const steps = [
  { text: "> olore install zod", delay: 1000 },
  { text: "Resolving packages...", delay: 500, color: "text-zinc-400" },
  { text: "✓ zod (latest)", delay: 400, color: "text-green-400" },
  {
    text: "Symlinking to ~/.olore/packages...",
    delay: 600,
    color: "text-zinc-500",
  },
  { text: "Done in 0.8s", delay: 1000, color: "text-blue-400" },
  { text: "> ", delay: 2000 },
];

export function TerminalDemo() {
  const [lines, setLines] = useState<Array<{ text: string; color?: string }>>(
    []
  );
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    if (currentStep >= steps.length) {
      const timeout = setTimeout(() => {
        setLines([]);
        setCurrentStep(0);
      }, 5000); // Restart after 5s
      return () => clearTimeout(timeout);
    }

    const step = steps[currentStep];
    const timeout = setTimeout(() => {
      setLines((prev) => [...prev, { text: step.text, color: step.color }]);
      setCurrentStep((prev) => prev + 1);
    }, step.delay);

    return () => clearTimeout(timeout);
  }, [currentStep]);

  return (
    <div className="mx-auto w-full max-w-lg">
      <div className="relative overflow-hidden rounded-xl border border-zinc-800 bg-black shadow-2xl">
        {/* Title Bar */}
        <div className="flex items-center border-b border-zinc-800 bg-zinc-900/50 px-4 py-3">
          <div className="flex space-x-2">
            <div className="h-3 w-3 rounded-full border border-red-500/50 bg-red-500/20" />
            <div className="h-3 w-3 rounded-full border border-yellow-500/50 bg-yellow-500/20" />
            <div className="h-3 w-3 rounded-full border border-green-500/50 bg-green-500/20" />
          </div>
          <div className="ml-4 font-mono text-xs text-zinc-500">
            olore — -zsh — 80x24
          </div>
        </div>

        {/* Terminal Content */}
        <div className="flex h-64 flex-col overflow-hidden p-4 font-mono text-sm">
          {lines.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className={line.color || "text-zinc-100"}
            >
              {line.text}
              {i === lines.length - 1 && currentStep < steps.length && (
                <span className="ml-1 inline-block h-4 w-2 animate-pulse bg-zinc-500 align-middle" />
              )}
            </motion.div>
          ))}
          {lines.length === 0 && (
            <span className="inline-block h-4 w-2 animate-pulse bg-zinc-500 align-middle" />
          )}
        </div>
      </div>

      {/* Reflection/Glow underneath */}
      <div className="absolute -inset-4 -z-10 bg-zinc-500/20 opacity-20 blur-3xl" />
    </div>
  );
}
