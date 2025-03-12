import { ArrowUpRight, Download, HandHeart, Milestone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Page() {

  const investors = [
    {
      name: 'David Cramer',
      link: 'https://cra.mr/',
      title: 'Founder of Sentry'
    },
    {
      name: 'Jude Gomila',
      link: 'http://www.judegomila.com/',
      title: 'Founder & Unicorn Investor'
    },
    {
      name: 'David Siegel',
      link: 'https://www.linkedin.com/in/dvdsgl',
      title: 'Founder & CEO of GlideApps'
    },
    {
      name: 'Amanda Robson',
      link: 'https://www.linkedin.com/in/amanda-robson-7227685b',
      title: 'Founder of MTF VC'
    },
    {
      name: 'Sachi Shah',
      link: 'https://www.linkedin.com/in/sachi-shah-26920336',
      title: 'Kleiner Perkins Scout'
    },
    {
      name: 'Founders of Drata',
      link: 'https://www.linkedin.com/in/danielzev',
      title: 'Wildcard Capital'
    },
    {
      name: 'Eva Sasson',
      link: 'https://www.linkedin.com/in/esasson',
      title: 'Dev Experience at Square'
    },
    {
      name: 'Delly Tamer',
      link: 'https://www.linkedin.com/in/delly-tamer',
      title: 'Early Netflix & Founder of Biztera'
    },
    {
      name: 'Bowen Dwelle',
      link: 'https://www.linkedin.com/in/bowendwelle/',
      title: 'Exited Founder & Writer'
    },
    {
      name: 'Sourabh Bajaj',
      link: 'https://www.linkedin.com/in/sbajaj9',
      title: 'Co-Founder & CTO of Uplimit'
    },
    {
      name: 'Frank Kuehnel',
      link: 'https://www.linkedin.com/in/frank-kuehnel-74a191',
      title: 'Ex-Google & CTO'
    },
    {
      name: 'Mark Mccubbin',
      link: 'https://www.linkedin.com/in/markmccubbin',
      title: 'Co-Founder & CTO of SuperDuperSecret'
    },
    {
      name: `Jazzlyn O'Reilly`,
      link: 'https://www.linkedin.com/in/jazzlyno/',
      title: 'Co-Founder & CEO of SuperDuperSecret'
    },
    {
      name: 'Ali Uygar Kucukemre',
      link: 'https://www.linkedin.com/in/aliuygarkucukemre/',
      title: 'CTO at Reaven Tech'
    },
    {
      name: 'Tyler Koblasa',
      link: 'https://www.linkedin.com/in/tylerkoblasa/',
      title: 'Founder & CEO of Orcaru AI'
    },
    {
      name: 'Louis Todd Morelli',
      link: 'https://www.linkedin.com/in/l-t-morelli-946a513/',
      title: 'President’s White House Staff'
    },
    {
      name: 'Kevin Keller',
      link: 'https://www.linkedin.com/in/kevinkeller/',
      title: 'General Counsel at Forward Networks'
    }
  ]

  return (
    <div className="flex-grow">
      <div className="mt-[150px] mb-[100px]  mx-auto flex flex-col items-center gap-3">
      <div className="p-4 bg-violet-500 rounded-lg">
          <Milestone className="h-[60px] w-[60px] text-white" />
        </div>
        <div className="mt-2"></div>
        <p className="text-center font-semibold text-4xl md:text-5xl  bg-gradient-to-b from-black via-black via-[29%] to-neutral-500 bg-clip-text text-transparent dark:from-white dark:via-white dark:to-neutral-500">
          Our mission
        </p>
        <p className="text-muted-foreground sm:text-lg font-[family-name:var(--font-geist-mono)] w-[90%] md:w-[60%] text-center">
          At InfraStack AI, we envision a future where developers build without limits. Our AI-driven automation platform eliminates the friction of repetitive tasks and complex infrastructure workflows, unleashing creativity and innovation at scale. We empower organizations and individuals to focus on what matters most—boldly building what was previously unimaginable.
        </p>
        <div className="relative w-[80%] md:w-[30%] mt-4 mb-4">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-border to-transparent h-[1px]" />
        </div>
        <div className="mt-4"></div>
        <div className="p-4 bg-violet-500 rounded-lg">
          <Image src="/logo/logo-white.svg" alt="logo" height={60} width={60} />
        </div>
        <div className="mt-2"></div>
        <p className="text-center font-semibold text-3xl md:text-4xl  bg-gradient-to-b from-black via-black via-[29%] to-neutral-500 bg-clip-text text-transparent dark:from-white dark:via-white dark:to-neutral-500">
          Our team
        </p>
        <p className="text-muted-foreground sm:text-lg font-[family-name:var(--font-geist-mono)] w-[90%] md:w-[60%] text-center">
          We’re a team of builders who genuinely love what we do—passionate about great products, thoughtful design, and an exceptional developer experience. We obsess over details, solve tough problems creatively, and always keep developers at the heart of everything we create, all while having fun along the way.
        </p>
        <Link
          href={`https://www.linkedin.com/company/infrastack-ai/people`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-violet-500 flex items-center justify-start text-lg font-[family-name:var(--font-geist-sans)] hover:underline "
        >
          Connect with our team members <ArrowUpRight className="h-5 w-5 inline ml-[6px]" />
        </Link>
        <div className="relative w-[80%] md:w-[30%] mt-4 mb-4">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-border to-transparent h-[1px]" />
        </div>
        <div className="mt-8"></div>
        <p className="text-center font-semibold text-3xl md:text-4xl  bg-gradient-to-b from-black via-black via-[29%] to-neutral-500 bg-clip-text text-transparent dark:from-white dark:via-white dark:to-neutral-500">
          Our investors
        </p>
        <div className="mt-4"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#F3F1E8] rounded-lg p-3 pl-5 pr-5 flex items-center justify-center">
            <Image src="/investors/bowery-capital.svg" alt="logo" height={80} width={160} />
          </div>
          <div className="bg-black rounded-lg p-3 pl-5 pr-5 flex items-center justify-center">
            <Image src="/investors/ripple-vc.png" alt="logo" height={80} width={160} />
          </div>
        </div>
        <div className="mt-1"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {investors.map((investor) => (
          <Link key={investor.name} target="_blank" href={investor.link}>
            <div className="flex-1 bg-background hover:bg-background/50  p-3 pl-5 pr-5 rounded-xl items-center flex flex-row space-x-4">
              <div className="p-2 border rounded-xl w-fit">
                <Image
                  src={'/logo-violet.svg'}
                  alt="InfraStack Logo"
                  width={40}
                  height={40}
                  className="h-10 dark:hidden"
                />
                <Image
                  src={'/logo-dark-theme.svg'}
                  alt="InfraStack Logo"
                  width={40}
                  height={40}
                  className="h-10 hidden dark:block"
                />
              </div>
              <div className="flex flex-col">
                <p className="font-semibold text-xl md:text-2xl bg-gradient-to-b from-black via-black via-[29%] to-neutral-500 bg-clip-text text-transparent dark:from-white dark:via-white dark:to-neutral-500">
                {investor.name}
                </p>
                <p className="text-muted-foreground text-base md:text-lg font-[family-name:var(--font-geist-mono)]">
                {investor.title}
                </p>
              </div>
            </div>
          </Link>
        ))}
        </div>
      </div>
    </div >
  )
}