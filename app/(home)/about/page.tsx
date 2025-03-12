import { ArrowUpRight, Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex-grow">
      <div className="mt-[150px] mb-[100px]  mx-auto flex flex-col items-center gap-3">
        <p className="text-center font-semibold text-4xl md:text-5xl  bg-gradient-to-b from-black via-black via-[29%] to-neutral-500 bg-clip-text text-transparent dark:from-white dark:via-white dark:to-neutral-500">
          Our mission
        </p>
        <p className="text-muted-foreground sm:text-lg font-[family-name:var(--font-geist-mono)] w-[90%] md:w-[60%] text-center">
          In a complex world demanding constant innovation, we envision a future where developers are free to create without constraints. Our AI-powered automation platform, transforms repetitive, everyday operations—from simple tasks to highly complex workflows. We empower individuals and organizations to dream bigger, innovate boldly, and continuously redefine what's achievable.
        </p>
        <div className="border-b border-dashed border-border md:w-[30%] w-[80%] mt-4 mb-4" />
        <div className="mt-4"></div>
        <div className="p-4 bg-violet-500 rounded-lg">
          <Image src="/logo/logo-white.svg" alt="logo" height={60} width={60} />
        </div>
        <div className="mt-2"></div>
        <p className="text-center font-semibold text-3xl md:text-4xl  bg-gradient-to-b from-black via-black via-[29%] to-neutral-500 bg-clip-text text-transparent dark:from-white dark:via-white dark:to-neutral-500">
          Our team
        </p>
        <p className="text-muted-foreground sm:text-lg font-[family-name:var(--font-geist-mono)] w-[90%] md:w-[60%] text-center">
          We are passionate builders, creators by nature, driven by extreme enthusiasm for product excellence and meticulous attention to detail. We thrive on discovering unique, out-of-the-box solutions and crafting innovative approaches to legacy challenges.
        </p>
        <Link
          href={`https://www.linkedin.com/company/infrastack-ai/people`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-violet-500 flex items-center justify-start text-lg font-[family-name:var(--font-geist-sans)] hover:underline "
        >
          Connect with our team members <ArrowUpRight className="h-5 w-5 inline ml-[6px]" />
        </Link>
        <div className="border-b border-dashed border-border md:w-[30%] w-[80%] mt-4 mb-4" />
        <div className="mt-8"></div>
        <p className="text-center font-semibold text-3xl md:text-4xl  bg-gradient-to-b from-black via-black via-[29%] to-neutral-500 bg-clip-text text-transparent dark:from-white dark:via-white dark:to-neutral-500">
          Our investors
        </p>
        <div className="mt-4"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#F3F1E8] rounded-lg p-3 flex items-center justify-center">
            <Image src="/investors/bowery-capital.svg" alt="logo" height={80} width={160} />
          </div>
          <div className="bg-black rounded-lg p-3 flex items-center justify-center">
            <Image src="/investors/ripple-vc.png" alt="logo" height={80} width={160} />
          </div>
        </div>
      </div>
    </div>
  )
}