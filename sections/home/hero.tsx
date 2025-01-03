"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const transition = { duration: 1, ease: [0.25, 0.1, 0.25, 1] };
const variants = {
  hidden: { filter: "blur(10px)", transform: "translateY(20%)", opacity: 0 },
  visible: { filter: "blur(0)", transform: "translateY(0)", opacity: 1 },
};

const text = "Your AI-Ops Agents";

export default function HeroContainer() {
  const words = text.split(" ");

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{ staggerChildren: 0.04 }}
      viewport={{ once: true }}
    >
      <h1 className="mb-6 text-6xl font-bold md:text-7xl font-[family-name:var(--font-geist-sans)]">
        {words.map((word, index) => (
          <React.Fragment key={index}>
            <motion.span
              className="inline-block"
              transition={transition}
              variants={variants}
            >
              {word}
            </motion.span>
            {index < words.length - 1 && " "}
          </React.Fragment>
        ))}
      </h1>
      <motion.p
        className="text-xl font-semibold mb-8 leading-9  dark:bg-black dark:bg-opacity-50 bg-white bg-opacity-50 p-2 rounded-2xl"
        transition={transition}
        variants={variants}
      >
        <span className="bg-gradient-to-r from-violet-500 to-violet-500  dark:bg-violet-500 border rounded-lg p-1 pl-2 pr-2 text-white">
          From chaos to calm
        </span>{" "}
        Harness the power of AI Agents to transform{" "}
        <span className="bg-violet-500 dark:bg-violet-500 border rounded-lg p-1 pl-2 pr-2 text-white ">
          Infra
        </span>
        ,{" "}
        <span className="bg-violet-500 dark:bg-violet-500 border rounded-lg p-1 pl-2 pr-2 text-white ">
          SRE
        </span>{" "}
        &{" "}
        <span className="bg-violet-500 dark:bg-violet-500 border rounded-lg p-1 pl-2 pr-2 text-white">
          DevOps
        </span>{" "}
        into autonomous actions—automating Infrastructure tasks, triaging alerts
        & root-causes, detecting vulnerabilities, investigating user issues, and
        reducing MTTR.
      </motion.p>
      <div className="flex gap-4">
        <motion.div transition={transition} variants={variants}>
          <Button
            variant="outline"
            size="lg"
            className="bg-violet-500 hover:bg-[#7D53DE] text-white h-12"
          >
            Get Started - Free Trial
          </Button>
        </motion.div>
        <motion.div transition={transition} variants={variants}>
          <Button variant="outline" size="lg" className="h-12">
            Request a Demo
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
}
