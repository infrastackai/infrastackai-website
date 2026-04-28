import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-xl w-full space-y-8">
        <h1 className="text-2xl md:text-3xl font-medium tracking-tight">
          Infrastack is between chapters.
        </h1>

        <p className="text-base md:text-lg leading-relaxed text-zinc-600">
          We spent the last two years building an AI observability platform and
          AI SRE agents. Heads-down on the next thing.
        </p>

        <div className="text-base md:text-lg flex items-center gap-4">
          <Link href="/about" className="hover:underline">
            About
          </Link>
          <span className="text-zinc-400" aria-hidden="true">
            •
          </span>
          <a href="mailto:aykut@infrastack.ai" className="hover:underline">
            aykut@infrastack.ai
          </a>
        </div>
      </div>
    </main>
  );
}
