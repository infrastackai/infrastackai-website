"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const variants = {
  hidden: { filter: "blur(10px)", transform: "translateY(20%)", opacity: 0 },
  visible: { filter: "blur(0)", transform: "translateY(0)", opacity: 1 },
};

export default function Integrations() {
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
      className="p-4 flex flex-col space-y-3 sm:space-y-4 mb-24 md:mb-36 items-center"
    >
      {/* <BentoDemo /> */}
      <div className="flex flex-col space-y-4 items-center">
        {/* Integrates with the tools you already use */}
        <h3 className="text-center font-semibold trackin text-3xl sm:text-4xl md:text-5xl bg-gradient-to-b from-black via-black via-[29%] to-neutral-500 bg-clip-text text-transparent dark:from-white dark:via-white dark:to-neutral-500">
          Integrations
        </h3>
        <p className="text-muted-foreground sm:text-lg font-[family-name:var(--font-geist-mono)] md:w-[60%] text-center">
          Integrate seamlessly with your existing cloud providers, monitoring,
          security, and productivity tools to create a unified operational
          environment
        </p>
      </div>
      <div></div>
      <div className="flex items-center flex-col">
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 space-x-4 w-full max-w-[1200px]">
          <div className="flex justify-center items-center w-36 ">
            <Image
              src="/integrations/aws.svg"
              alt="AWS Logo"
              width={80}
              height={50}
            />
          </div>
          <div className="flex  justify-center items-center w-36">
            <Image
              src="/integrations/datadog.svg"
              alt="Datadog Logo"
              width={160}
              height={50}
            />
          </div>
          <div className="flex items-center w-36 justify-center">
            <Image
              src="/integrations/github.svg"
              alt="Github Logo"
              width={140}
              height={50}
            />
          </div>
          <div className="flex items-center w-36 justify-center">
            <Image
              src="/integrations/pagerduty.svg"
              alt="PagerDuty Logo"
              width={150}
              height={50}
            />
          </div>
          <div className="flex items-center w-36 justify-center">
            <Image
              src="/integrations/slack.svg"
              alt="Slack Logo"
              width={150}
              height={50}
            />
          </div>
        </div>
        <Link
          href={`/docs`}
          className="text-violet-500 flex items-center justify-start text-lg font-[family-name:var(--font-geist-sans)] hover:underline"
        >
          View all integrations <ArrowUpRight className="h-6 w-6 inline" />
        </Link>
      </div>
    </motion.div>
  );
}
