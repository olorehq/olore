"use client";

import { clsx } from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Copy, Terminal } from "lucide-react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

export function CopyCommand() {
  const [copied, setCopied] = useState(false);
  const command = "olore install zod";

  const handleCopy = async () => {
    await navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group relative">
      <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-zinc-700 to-zinc-800 opacity-20 blur transition duration-500 group-hover:opacity-40"></div>
      <div className="relative flex items-center gap-3 rounded-lg border border-zinc-800 bg-black p-1.5 pr-1.5 pl-4 shadow-2xl">
        <Terminal className="h-4 w-4 text-zinc-500" />
        <code className="mr-8 font-mono text-sm text-zinc-300 selection:bg-white/20 selection:text-white">
          {command}
        </code>
        <button
          onClick={handleCopy}
          className={cn(
            "ml-auto flex h-8 w-8 items-center justify-center rounded-md transition-all duration-200",
            copied
              ? "bg-green-500/10 text-green-400"
              : "bg-zinc-900 text-zinc-400 hover:bg-zinc-800 hover:text-white"
          )}
          aria-label="Copy command"
        >
          <AnimatePresence mode="wait" initial={false}>
            {copied ? (
              <motion.div
                key="check"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
              >
                <Check className="h-4 w-4" />
              </motion.div>
            ) : (
              <motion.div
                key="copy"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
              >
                <Copy className="h-4 w-4" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>
    </div>
  );
}
