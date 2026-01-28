"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-950 font-mono text-zinc-300">
      <div className="text-center">
        <pre className="mb-8 text-xs leading-none text-red-500/60">
          {`
 ███████╗██████╗ ██████╗
 ██╔════╝██╔══██╗██╔══██╗
 █████╗  ██████╔╝██████╔╝
 ██╔══╝  ██╔══██╗██╔══██╗
 ███████╗██║  ██║██║  ██║
 ╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝
`}
        </pre>
        <h1 className="mb-4 text-4xl font-bold text-zinc-100 uppercase">
          <span className="text-zinc-600">[</span> Error{" "}
          <span className="text-zinc-600">]</span>
        </h1>
        <p className="mb-8 text-zinc-500">
          <span className="text-red-500">&gt;</span> Something went wrong.
        </p>
        <button
          onClick={() => reset()}
          className="inline-block border border-zinc-600 px-6 py-3 text-sm font-bold text-zinc-200 uppercase transition-all hover:border-cyan-500 hover:bg-zinc-900 hover:text-cyan-400"
        >
          <span className="mr-2 text-zinc-600">[</span> Try Again{" "}
          <span className="ml-2 text-zinc-600">]</span>
        </button>
      </div>
    </div>
  );
}
