import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function HomePage() {
  return (
    <div className="relative flex min-h-screen px-8 py-16 md:px-16 md:py-24">
      <main className="max-w-2xl">
        <p className="text-sm leading-relaxed text-white md:text-base">
          Infrastack AI is a team of engineers and researchers building agentic AI applications for modern software systems.
          Our focus is creating reliable AI agents that can observe, reason, and take action inside complex production environments.
        </p>

        <div className="mt-8">
          <h2 className="text-xs uppercase tracking-wider text-zinc-500 md:text-sm">
            Products
          </h2>
          <div className="mt-4">
            <Link href="https://codewolf.ai" target="_blank" rel="noopener noreferrer" className="text-emerald-600 hover:text-emerald-500 transition-colors">
              <h3 className="text-sm md:text-base">
                Codewolf.ai
              </h3>
            </Link>
            <p className="mt-1 text-xs leading-relaxed text-white md:text-sm">
              Autonomous AI agents that investigate, fix, prevent, and optimize production directly in Slack.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-xs uppercase tracking-wider text-zinc-500 md:text-sm">
            Contact
          </h2>
          <p className="mt-4 text-sm md:text-base">
            <a href="mailto:hello@infrastack.ai" className="text-emerald-600 hover:text-emerald-500 transition-colors inline-flex items-center gap-1">
              hello@infrastack.ai
              <ArrowUpRight className="h-3 w-3" />
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}
