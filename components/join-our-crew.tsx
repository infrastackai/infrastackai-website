"use client";
import { ArrowUpRight, Briefcase } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const variants = {
  hidden: { filter: "blur(10px)", transform: "translateY(20%)", opacity: 0 },
  visible: { filter: "blur(0)", transform: "translateY(0)", opacity: 1 },
};

export default function JoinOurCrew() {
  const [mounted, setMounted] = useState(false);
  const { theme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;


  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{
        staggerChildren: 0.04,
        duration: 1,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      variants={variants}
      viewport={{ once: true }}
      className="flex flex-col space-y-3 sm:space-y-4 mb-16 md:mb-36 items-center"
    >
      <div className="">
        {/* Integrates with the tools you already use */}
        <p className="text-center font-semibold trackin text-4xl md:text-5xl bg-gradient-to-b from-black via-black via-[29%] to-neutral-500 bg-clip-text text-transparent dark:from-white dark:via-white dark:to-neutral-500">
          Join our crew
        </p>
      </div>
      <div className="text-muted-foreground sm:text-lg font-[family-name:var(--font-geist-mono)] w-[90%] sm:w-[70%] text-center">
        We are building a team of passionate individuals who are excited about
        the future of AI in software operations
        and we need talented people like you to join us on this journey
      </div>
      <div></div>
      <div></div>
      <Link target="_blank" href={'https://infrastackai.notion.site/Careers-at-InfraStack-AI-2f07b3b32b0740c9b16aafa09d7bd864'}>
        <div className="flex-1 bg-background min-w-[360px] md:min-w-[460px] border glow-hover p-4 md:p-6 rounded-xl items-center flex flex-row space-x-4">
          <div className="p-2 border rounded-xl w-fit">
            <Image
              src={
                currentTheme === "light"
                  ? "/logo-violet.svg"
                  : "/logo-dark-theme.svg"
              }
              alt="InfraStack Logo"
              width={40}
              height={40}
              className="h-10"
            />
          </div>
          <div className="flex flex-col">
            <p className="font-semibold text-xl md:text-2xl bg-gradient-to-b from-black via-black via-[29%] to-neutral-500 bg-clip-text text-transparent dark:from-white dark:via-white dark:to-neutral-500">
            Lead Founding Engineer
            </p>
            <p className="text-muted-foreground text-base md:text-lg font-[family-name:var(--font-geist-mono)]">
              San Francisco, CA
            </p>
          </div>
        </div>
      </Link>
      <Link target="_blank" href={'https://infrastackai.notion.site/Careers-at-InfraStack-AI-2f07b3b32b0740c9b16aafa09d7bd864'}>
        <div className="flex-1 bg-background min-w-[360px] md:min-w-[460px] border glow-hover p-4 md:p-6 rounded-xl items-center flex flex-row space-x-4">
          <div className="p-2 border rounded-xl w-fit">
            <Image
              src={
                currentTheme === "light"
                  ? "/logo-violet.svg"
                  : "/logo-dark-theme.svg"
              }
              alt="InfraStack Logo"
              width={40}
              height={40}
              className="h-10"
            />
          </div>
          <div className="flex flex-col">
            <p className="font-semibold text-xl md:text-2xl bg-gradient-to-b from-black via-black via-[29%] to-neutral-500 bg-clip-text text-transparent dark:from-white dark:via-white dark:to-neutral-500">
              AI Engineer - Intern
            </p>
            <p className="text-muted-foreground text-base md:text-lg font-[family-name:var(--font-geist-mono)]">
              San Francisco, CA
            </p>
          </div>
        </div>
      </Link>
      <Link target="_blank" href={'https://infrastackai.notion.site/Careers-at-InfraStack-AI-2f07b3b32b0740c9b16aafa09d7bd864'}>
        <div className="flex-1 bg-background min-w-[360px] md:min-w-[460px] border glow-hover p-4 md:p-6 rounded-xl items-center flex flex-row space-x-4">
          <div className="p-2 border rounded-xl w-fit">
            <Image
              src={
                currentTheme === "light"
                  ? "/logo-violet.svg"
                  : "/logo-dark-theme.svg"
              }
              alt="InfraStack Logo"
              width={40}
              height={40}
              className="h-10"
            />
          </div>
          <div className="flex flex-col">
            <p className="font-semibold text-xl md:text-2xl bg-gradient-to-b from-black via-black via-[29%] to-neutral-500 bg-clip-text text-transparent dark:from-white dark:via-white dark:to-neutral-500">
              AI Engineer
            </p>
            <p className="text-muted-foreground text-base md:text-lg font-[family-name:var(--font-geist-mono)]">
              Türkiye
            </p>
          </div>
        </div>
      </Link>
      <Link
        href={`mailto:careers@infrastack.ai?subject=Job Application&body=I am interested in applying for the Engineer position. Please find my resume attached.`}
        target="_blank"
        className="text-violet-500 flex items-center justify-start text-lg font-[family-name:var(--font-geist-sans)] hover:underline"
      >
        Apply now <ArrowUpRight className="h-6 w-6 inline" />
      </Link>
    </motion.div>
  );
}
