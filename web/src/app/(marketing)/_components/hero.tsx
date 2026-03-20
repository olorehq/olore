import fs from "fs";
import path from "path";

import { CopyCommand } from "@/components/brutalist/CopyCommand";
import { TerminalDemo } from "@/components/brutalist/TerminalDemo";

function getCliVersion(): string {
  try {
    const pkgPath = path.resolve(process.cwd(), "../cli/package.json");
    const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf-8")) as {
      version: string;
    };
    return pkg.version;
  } catch {
    return "0.0.0";
  }
}

export async function Hero() {
  const cliVersion = getCliVersion();

  return (
    <section className="grid border-b border-zinc-800 lg:grid-cols-2">
      <div className="flex flex-col justify-center border-r border-b border-zinc-800 p-12 pl-6 lg:border-r lg:border-r-0 lg:border-b-0">
        <pre className="mb-6 hidden text-[10px] leading-none text-cyan-500/80 opacity-75 sm:block sm:text-xs">
          {`
 ██████╗ ██╗      ██████╗ ██████╗ ███████╗
██╔═══██╗██║     ██╔═══██╗██╔══██╗██╔════╝
██║   ██║██║     ██║   ██║██████╔╝█████╗
██║   ██║██║     ██║   ██║██╔══██╗██╔══╝
╚██████╔╝███████╗╚██████╔╝██║  ██║███████╗
 ╚═════╝ ╚══════╝ ╚═════╝ ╚═╝  ╚═╝╚══════╝
`}
        </pre>
        {/* OSS Badges */}
        <div className="mb-8 flex flex-wrap gap-3">
          <a
            href="https://github.com/olorehq/olore"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://img.shields.io/github/stars/olorehq/olore?style=flat&logo=github&label=Stars&color=18181b&labelColor=09090b"
              alt="GitHub stars"
              className="h-5 opacity-80 transition-opacity hover:opacity-100"
            />
          </a>
          <a
            href="https://github.com/olorehq/olore/blob/main/LICENSE"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://img.shields.io/github/license/olorehq/olore?style=flat&color=18181b&labelColor=09090b"
              alt="License"
              className="h-5 opacity-80 transition-opacity hover:opacity-100"
            />
          </a>
          <span className="border border-zinc-800 px-2 py-0.5 text-xs text-zinc-500">
            v{cliVersion}
          </span>
        </div>
        <h1 className="mb-6 text-4xl font-bold tracking-tighter text-zinc-100 uppercase md:text-6xl">
          Stop the
          <br />
          <span className="text-cyan-500">hallucinations.</span>
        </h1>
        <p className="mb-8 max-w-md text-lg leading-relaxed text-zinc-400">
          <span className="text-purple-500">&gt;</span> Version-pinned docs for
          AI coding agents.
          <br />
          <span className="text-purple-500">&gt;</span> Inject a reference table
          so agents find them.
          <br />
          <span className="text-purple-500">&gt;</span> For Claude Code, Codex,
          OpenCode.
        </p>

        <div className="flex flex-col gap-2">
          <p className="text-xs tracking-wider text-zinc-500 uppercase">
            Quick Start
          </p>
          <CopyCommand command="npm install -g @olorehq/olore" />
          <CopyCommand command="olore install zod" />
        </div>
      </div>

      <div className="bg-opacity-5 flex items-center justify-center bg-[url('/grid.svg')] bg-center p-12">
        <div className="w-full max-w-md">
          <TerminalDemo />
        </div>
      </div>
    </section>
  );
}
