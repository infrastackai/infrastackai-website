import Link from "next/link";

const NOTION_CAREERS =
  "https://www.notion.so/infrastackai/Careers-at-InfraStack-AI-2f07b3b32b0740c9b16aafa09d7bd864";

const roles = [
  {
    title: "AI Engineer Intern",
    location: "SF · in person",
    href: NOTION_CAREERS,
  },
  {
    title: "GTM Intern",
    location: "SF · in person",
    href: NOTION_CAREERS,
  },
  {
    title: "General Application",
    location: "Global",
    href: NOTION_CAREERS,
  },
];

export default function JobsPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-xl w-full space-y-8">
        <p className="text-base md:text-lg leading-relaxed text-zinc-600">
          Join a small, stellar team working on a novel product from the ground
          up. Heads-down, high-trust, fast-moving.
        </p>

        <ul className="space-y-4 text-base md:text-lg">
          {roles.map((role) => (
            <li key={role.title}>
              <a
                href={role.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {role.title}
              </a>
              <span className="text-sm text-zinc-500 ml-2">
                {role.location}
              </span>
            </li>
          ))}
        </ul>

        <div className="text-sm text-zinc-500">
          <Link href="/" className="hover:underline">
            ← Back
          </Link>
        </div>
      </div>
    </main>
  );
}
