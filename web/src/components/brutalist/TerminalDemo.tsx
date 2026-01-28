"use client";

import { useEffect, useState } from "react";

const steps = [
  { text: "> olore install zod", delay: 1000 },
  { text: "Resolving packages...", delay: 400 },
  { text: "[OK] zod (latest)", delay: 300 },
  { text: "Linked to ~/.claude/skills/olore-zod-latest", delay: 600 },
  { text: "> olore --help", delay: 1200 },
  { text: "Usage: olore [options] [command]", delay: 200 },
  { text: "...", delay: 300 },
  { text: "May the Skill be with you.", delay: 800 },
  { text: "> ", delay: 3000 },
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
      setLines((prev) => [...prev, { text: step.text }]);
      setCurrentStep((prev) => prev + 1);
    }, step.delay);

    return () => clearTimeout(timeout);
  }, [currentStep]);

  return (
    <div className="w-full border border-white bg-black p-1">
      {/* Title Bar - Brutalist */}
      <div className="mb-1 flex items-center justify-between border-b border-white bg-black px-2 py-1 text-white">
        <span className="font-mono text-xs uppercase">[ TERMINAL ]</span>
        <span className="font-mono text-xs uppercase">80x24</span>
      </div>

      {/* Terminal Content */}
      <div className="flex h-64 flex-col overflow-hidden bg-black p-2 font-mono text-sm text-white">
        {lines.map((line, i) => (
          <div key={i} className="whitespace-pre">
            {line.text}
            {i === lines.length - 1 && currentStep < steps.length && (
              <span className="ml-1 inline-block h-4 w-2.5 animate-pulse bg-white align-middle" />
            )}
          </div>
        ))}
        {lines.length === 0 && (
          <span className="inline-block h-4 w-2.5 animate-pulse bg-white align-middle" />
        )}
      </div>
    </div>
  );
}
