export function Cta() {
  return (
    <section className="border-t border-zinc-800 bg-zinc-900/50 p-12 text-center">
      <h2 className="mb-4 font-mono text-2xl font-bold text-zinc-100 uppercase">
        <span className="text-purple-500">$</span> rm -rf hallucinations
      </h2>
      <p className="mb-6 text-zinc-400">
        Hits the target. Every time.{" "}
        <span className="text-zinc-600">(Shocking, we know.)</span>
      </p>
      <a
        href="https://github.com/olorehq/olore/blob/main/CONTRIBUTING.md"
        className="inline-block border border-zinc-600 px-6 py-3 font-bold text-zinc-200 uppercase transition-all hover:border-cyan-500 hover:bg-zinc-900 hover:text-cyan-400"
      >
        <span className="mr-2 text-zinc-600">[</span> Add a Library{" "}
        <span className="ml-2 text-zinc-600">]</span>
      </a>
    </section>
  );
}
