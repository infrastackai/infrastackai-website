"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import Image from "next/image";

const transition = { duration: 1, ease: [.25, .1, .25, 1] };
const variants = {
    hidden: { filter: "blur(10px)", transform: "translateY(20%)", opacity: 0 },
    visible: { filter: "blur(0)", transform: "translateY(0)", opacity: 1 },
};

const text = "Your AI-0ps Agents—Arriving in Q1 2025";

export default function HeroBox() {
    const words = text.split(" ");

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{ staggerChildren: 0.04 }}
            viewport={{ once: true }}
            className="relative flex items-center flex-col space-y-4"
        >
            <div className="flex items-center">
                <Image src="/logo-violet.svg" alt="InfraStack Logo" width={40} height={40} className="h-10" />
                <p className="text-4xl font-bold ml-1 font-[family-name:var(--font-geist-sans)]">InfraStack</p>
            </div>
            <h1 className="mb-6 text-5xl font-bold md:text-5xl font-[family-name:var(--font-geist-sans)]">
                {words.map((word, index) => (
                    <React.Fragment key={index}>
                        <motion.span className="inline-block" transition={transition} variants={variants}>
                            {word}
                        </motion.span>
                        {index < words.length - 1 && ' '}
                    </React.Fragment>
                ))}
            </h1>
            <motion.p className="text-left text-xl font-semibold mb-8 leading-9  dark:bg-black dark:bg-opacity-50 bg-white bg-opacity-50 p-2 rounded-2xl" transition={transition} variants={variants}>
            <span className="bg-gradient-to-r from-violet-500 to-violet-500  dark:bg-violet-500 border rounded-lg p-1 pl-2 pr-2 text-white bg-opacity-80">From chaos to calm</span> Harness the power of AI Agents to transform <span className="bg-violet-500 dark:bg-violet-500 border rounded-lg p-1 pl-2 pr-2 text-white ">Infra</span>, <span className="bg-violet-500 dark:bg-violet-500 border rounded-lg p-1 pl-2 pr-2 text-white ">SRE</span> & <span className="bg-violet-500 dark:bg-violet-500 border rounded-lg p-1 pl-2 pr-2 text-white">DevOps</span> into autonomous actions—automating Infrastructure tasks, triaging alerts & root-causes, detecting vulnerabilities, investigating user issues, and reducing MTTR.
            </motion.p>
        </motion.div>
    )
}