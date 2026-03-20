"use client";

import { clsx } from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

export function CopyCommand({
  command = "olore install zod",
}: {
  command?: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex w-full max-w-xl items-center gap-0 border border-zinc-700 bg-zinc-950 p-0">
      <div className="flex h-12 w-12 items-center justify-center border-r border-zinc-700">
        <span className="font-mono font-bold text-zinc-200">{">"}</span>
      </div>
      <code className="flex-1 px-4 font-mono text-sm text-zinc-100 selection:bg-cyan-500/30 selection:text-cyan-200">
        {command}
      </code>
      <button
        onClick={handleCopy}
        className={cn(
          "flex h-12 w-12 items-center justify-center border-l border-zinc-700 transition-all duration-0",
          copied
            ? "bg-zinc-700 text-zinc-100"
            : "bg-zinc-950 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100"
        )}
        aria-label="Copy command"
      >
        <AnimatePresence mode="wait" initial={false}>
          {copied ? (
            <motion.div
              key="check"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Check className="h-5 w-5" />
            </motion.div>
          ) : (
            <motion.div
              key="copy"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <Copy className="h-5 w-5" />
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </div>
  );
}
