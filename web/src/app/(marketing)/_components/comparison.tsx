export function Comparison() {
  return (
    <>
      {/* Before / After Brutalist */}
      {/* accuracy: not_stormtrooper_level */}
      <section className="grid border-b border-zinc-800 font-mono text-xs lg:grid-cols-2">
        <div className="border-b border-zinc-800 bg-zinc-900/30 p-8 lg:border-r lg:border-b-0">
          <h3 className="mb-4 font-bold text-red-500/80 uppercase">
            [ NO DOCS ] 53% PASS RATE
          </h3>
          <div className="text-zinc-400 opacity-75">
            <span className="text-zinc-600">&gt;</span>{" "}
            <span className="text-zinc-500">
              {"// Agent has no version-pinned docs"}
            </span>
            <br />
            <span className="text-zinc-600">&gt;</span>{" "}
            <span className="text-zinc-500">
              {"// Relies on training data..."}
            </span>
            <br />
            <br />
            <span className="text-zinc-600">&gt;</span>{" "}
            <span className="text-purple-400">import</span> {"{"} z {"}"}{" "}
            <span className="text-purple-400">from</span> {"'zod'"};<br />
            <span className="text-zinc-600">&gt;</span>{" "}
            <span className="text-purple-400">const</span> s =
            z.string().date();
            <br />
            <br />
            <span className="border border-red-500/30 bg-red-500/20 px-1 text-red-400">
              ERROR
            </span>{" "}
            Property &apos;date&apos; does not exist on type
            &apos;ZodString&apos;.
          </div>
        </div>
        <div
          className="bg-zinc-950 p-8"
          title="Some soldiers finally learned to aim"
        >
          <h3 className="mb-4 font-bold text-green-500/80 uppercase">
            [ WITH OLORE ] 100% PASS RATE
          </h3>
          <div className="text-zinc-300 opacity-75">
            <span className="text-zinc-600">&gt;</span>{" "}
            <span className="text-zinc-500">
              {"// Docs available via skills"}
            </span>
            <br />
            <span className="text-zinc-600">&gt;</span>{" "}
            <span className="text-zinc-500">
              {"// Agent uses the right API"}
            </span>
            <br />
            <br />
            <span className="text-zinc-600">&gt;</span>{" "}
            <span className="text-purple-400">import</span> {"{"} z {"}"}{" "}
            <span className="text-purple-400">from</span> {"'zod'"};<br />
            <span className="text-zinc-600">&gt;</span>{" "}
            <span className="text-purple-400">const</span> s = z.string().regex(
            {"/\\d{4}-\\d{2}-\\d{2}/"});
            <br />
            <br />
            <span className="border border-green-500/30 bg-green-500/20 px-1 text-green-400">
              OK
            </span>{" "}
            Valid code for Zod v3.
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="border-b border-zinc-800">
        <div className="border-b border-zinc-800 p-6">
          <h2 className="text-xl font-bold text-zinc-100 uppercase">
            <span className="text-purple-500">&gt;&gt;</span> System_Comparison
          </h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left font-mono text-sm uppercase">
            <thead>
              <tr className="border-b border-zinc-800 text-zinc-500">
                <th className="border-r border-zinc-800 px-6 py-4 font-bold">
                  Spec
                </th>
                <th className="w-48 border-r border-zinc-800 px-6 py-4 font-normal">
                  Context7
                </th>
                <th className="w-48 bg-zinc-900/50 px-6 py-4 font-bold text-cyan-400">
                  OLORE
                </th>
              </tr>
            </thead>
            <tbody className="text-zinc-400">
              <tr className="border-b border-zinc-800">
                <td className="border-r border-zinc-800 px-6 py-4 text-zinc-500">
                  Reliability
                </td>
                <td className="border-r border-zinc-800 px-6 py-4">
                  AGENT MUST INVOKE
                </td>
                <td className="bg-zinc-900/30 px-6 py-4 font-bold text-zinc-200">
                  PASSIVE DISCOVERY
                </td>
              </tr>
              <tr className="border-b border-zinc-800">
                <td className="border-r border-zinc-800 px-6 py-4 text-zinc-500">
                  Network
                </td>
                <td className="border-r border-zinc-800 px-6 py-4">REQUIRED</td>
                <td className="bg-zinc-900/30 px-6 py-4 font-bold text-zinc-200">
                  OFFLINE
                </td>
              </tr>
              <tr className="border-b border-zinc-800">
                <td className="border-r border-zinc-800 px-6 py-4 text-zinc-500">
                  Version
                </td>
                <td className="border-r border-zinc-800 px-6 py-4">
                  LATEST ONLY
                </td>
                <td className="bg-zinc-900/30 px-6 py-4 font-bold text-zinc-200">
                  PINNED
                </td>
              </tr>
              <tr className="border-b border-zinc-800">
                <td className="border-r border-zinc-800 px-6 py-4 text-zinc-500">
                  Setup
                </td>
                <td className="border-r border-zinc-800 px-6 py-4">
                  MCP CONFIG
                </td>
                <td className="bg-zinc-900/30 px-6 py-4 font-bold text-zinc-200">
                  ONE COMMAND
                </td>
              </tr>
              <tr className="border-b border-zinc-800">
                <td className="border-r border-zinc-800 px-6 py-4 text-zinc-500">
                  Private Docs
                </td>
                <td className="border-r border-zinc-800 px-6 py-4">NO</td>
                <td className="bg-zinc-900/30 px-6 py-4 font-bold text-zinc-200">
                  YES
                </td>
              </tr>
              <tr>
                <td className="border-r border-zinc-800 px-6 py-4 text-zinc-500">
                  Context
                </td>
                <td className="border-r border-zinc-800 px-6 py-4">SNIPPETS</td>
                <td className="bg-zinc-900/30 px-6 py-4 font-bold text-zinc-200">
                  FULL DOCS
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}
