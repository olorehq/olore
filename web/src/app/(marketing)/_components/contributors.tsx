export function Contributors() {
  return (
    <section className="border-t border-zinc-800 p-8">
      <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
        <div>
          <h2 className="mb-2 text-lg font-bold text-zinc-100 uppercase">
            <span className="text-purple-500">&gt;&gt;</span> Contributors
          </h2>
          <p className="text-sm text-zinc-500">
            Built by the community, for the community.
          </p>
        </div>
        <a
          href="https://github.com/olorehq/olore/graphs/contributors"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://contrib.rocks/image?repo=olorehq/olore&max=12"
            alt="Contributors"
            className="opacity-60 grayscale transition-opacity hover:opacity-100 hover:grayscale-0"
          />
        </a>
      </div>
    </section>
  );
}
