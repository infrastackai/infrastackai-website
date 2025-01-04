"use client";
import { ArrowUpRight, Briefcase } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const variants = {
  hidden: { filter: "blur(10px)", transform: "translateY(20%)", opacity: 0 },
  visible: { filter: "blur(0)", transform: "translateY(0)", opacity: 1 },
};

export default function JoinOurCrew() {
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
      className="flex flex-col space-y-4 mb-24 mt-24 items-center"
    >
      <div className="">
        {/* Integrates with the tools you already use */}
        <p className="text-center font-semibold trackin text-5xl bg-gradient-to-b from-black via-black via-[29%] to-neutral-500 bg-clip-text text-transparent dark:from-white dark:via-white dark:to-neutral-500">
          Join our crew
        </p>
      </div>
      <div className="text-muted-foreground text-lg font-[family-name:var(--font-geist-mono)] w-[80%] text-center">
        We are building a team of passionate individuals who are excited about
        the future of AI in software operations <br />
        And we need talented people like you to join us on this journey
      </div>
      <div></div>
      <div></div>
      <div className="flex-1 bg-background min-w-[400px]  border p-6 hover:border-primary rounded-xl items-center flex flex-row space-x-4">
        <div className="p-2 bg-violet-500 rounded-xl w-fit">
          <Briefcase className="h-6 w-6 text-white" />
        </div>
        <div className="flex flex-col">
          <p className="font-semibold trackin text-2xl bg-gradient-to-b from-black via-black via-[29%] to-neutral-500 bg-clip-text text-transparent dark:from-white dark:via-white dark:to-neutral-500">
            AI Engineer
          </p>
          <p className="text-muted-foreground text-lg font-[family-name:var(--font-geist-mono)]">
            Global
          </p>
        </div>{" "}
        {/* <p className="text-muted-foreground text-lg font-[family-name:var(--font-geist-mono)]">
                Global
              </p> */}
      </div>
      <div className="flex-1 bg-background min-w-[400px]  border p-6 hover:border-primary rounded-xl items-center flex flex-row space-x-4">
        <div className="p-2 bg-violet-500 rounded-xl w-fit">
          <Briefcase className="h-6 w-6 text-white" />
        </div>
        <div className="flex flex-col">
          <p className="font-semibold trackin text-2xl bg-gradient-to-b from-black via-black via-[29%] to-neutral-500 bg-clip-text text-transparent dark:from-white dark:via-white dark:to-neutral-500">
            AI Engineering Intern
          </p>
          <p className="text-muted-foreground text-lg font-[family-name:var(--font-geist-mono)]">
            San Francisco, CA
          </p>
        </div>
      </div>
      <div className="flex-1 bg-background min-w-[400px]  border p-6 hover:border-primary rounded-xl items-center flex flex-row space-x-4">
        <div className="p-2 bg-violet-500 rounded-xl w-fit">
          <Briefcase className="h-6 w-6 text-white" />
        </div>
        <div className="flex flex-col">
          <p className="font-semibold trackin text-2xl bg-gradient-to-b from-black via-black via-[29%] to-neutral-500 bg-clip-text text-transparent dark:from-white dark:via-white dark:to-neutral-500">
            Full-Stack Engineer
          </p>
          <p className="text-muted-foreground text-lg font-[family-name:var(--font-geist-mono)]">
            Global
          </p>
        </div>
        {/* <p className="text-muted-foreground text-lg font-[family-name:var(--font-geist-mono)]">
                San Francisco, CA <br />
                Ankara, Türkiye
              </p> */}
      </div>
      <div className="flex-1 bg-background min-w-[400px]  border p-6 hover:border-primary rounded-xl items-center flex flex-row space-x-4">
        <div className="p-2 bg-violet-500 rounded-xl w-fit">
          <Briefcase className="h-6 w-6 text-white" />
        </div>
        <div className="flex flex-col">
          <p className="font-semibold trackin text-2xl bg-gradient-to-b from-black via-black via-[29%] to-neutral-500 bg-clip-text text-transparent dark:from-white dark:via-white dark:to-neutral-500">
            Head of Growth
          </p>
          <p className="text-muted-foreground text-lg font-[family-name:var(--font-geist-mono)]">
            Global
          </p>
        </div>
        {/* <p className="text-muted-foreground text-lg font-[family-name:var(--font-geist-mono)]">
                San Francisco, CA <br />
                Ankara, Türkiye
              </p> */}
      </div>
      <Link
        href={`https://infrastackai.notion.site/Careers-at-InfraStack-AI-2f07b3b32b0740c9b16aafa09d7bd864`}
        target="_blank"
        className="text-violet-500 flex items-center justify-start text-lg font-[family-name:var(--font-geist-sans)] hover:underline"
      >
        Go to Careers <ArrowUpRight className="h-6 w-6 inline" />
      </Link>
    </motion.div>
  );
}
