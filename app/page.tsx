import Link from "next/link";

export default function HomePage() {
  return (
    <div className="relative flex min-h-screen px-8 py-16 md:px-16 md:py-24">
      <main className="max-w-2xl">
        <p className="text-sm leading-relaxed text-zinc-400 md:text-base">
          Infrastack AI is a team of engineers and researchers working on agentic AI applications that operate on highly scalable and secure infrastructure environments.
          Our focus is building reliable AI agents that can observe, reason, and take action inside complex software environments.
        </p>

        <div className="mt-8">
          <h2 className="text-xs uppercase tracking-wider text-zinc-600 md:text-sm">
            Products
          </h2>
          <div className="mt-4">
            <Link href="https://codewolf.ai" target="_blank" rel="noopener noreferrer">
              <h3 className="text-sm text-zinc-300 md:text-base">
                Codewolf.ai
              </h3>
            </Link>
            <p className="mt-1 text-xs leading-relaxed text-zinc-500 md:text-sm">
              Autonomous AI agents that investigate, fix, prevent, and optimize production directly in Slack.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-xs uppercase tracking-wider text-zinc-600 md:text-sm">
            Contact
          </h2>
          <p className="mt-4 text-sm text-zinc-400 md:text-base">
            <a href="mailto:hello@infrastack.ai" className="hover:text-zinc-300 transition-colors">
              hello@infrastack.ai
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}
