"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import Link from "next/link";
import posthog from "posthog-js";

const transition = { duration: 1, ease: [.25, .1, .25, 1] };
const variants = {
    hidden: { filter: "blur(10px)", transform: "translateY(20%)", opacity: 0 },
    visible: { filter: "blur(0)", transform: "translateY(0)", opacity: 1 },
};

const text = "Automated Operations";

export default function HeroBox() {
    const words = text.split(" ");

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{ staggerChildren: 0.04 }}
            viewport={{ once: true }}
        >
            <h1 className="text-center mb-6 text-5xl font-semibold md:text-6xl lg:text-7xl xl:text-8xl font-[family-name:var(--font-geist-sans)]  ">
                {words.map((word, index) => (
                    <React.Fragment key={index}>
                        <motion.span className="inline-block" transition={transition} variants={variants}>
                            {word}
                        </motion.span>
                        {index < words.length - 1 && ' '}
                    </React.Fragment>
                ))}
            </h1>
            <motion.p className="text-center text-lg md:lg:text-xl lg:text-2xl leading-9 md:leading-12 lg:leading-10 font-semibold mb-4 sm:mb-6  dark:bg-black dark:bg-opacity-50 bg-white bg-opacity-50 p-2" transition={transition} variants={variants}>
                <span className="bg-gradient-to-r from-violet-500 to-violet-500  dark:bg-violet-500 border rounded-lg p-1 pl-2 pr-2 text-white">From chaos to calm</span> Harness AI to transform <span className="bg-violet-500 dark:bg-violet-500 border rounded-lg p-1 pl-2 pr-2 text-white ">EngOps</span> into intelligent, autonomous workflows<br className="" />Automate routine tasks, rapidly triage alerts, proactively detect vulnerabilities, and significantly reduce costs <br className="" />So your team can focus on building, not firefighting
            </motion.p>
            <div className="flex gap-4 items-center flex-row justify-center">
                <motion.div transition={transition} variants={variants}>
                    <Link href={'/request-early-access'}>
                        <Button onClick={() => {
                            posthog.capture('request_early_access_clicked')
                        }} variant="outline" size="lg" className="infrastack-button text-white h-12">
                            Request Early Access
                        </Button>
                    </Link>
                </motion.div>
                {/* <motion.div transition={transition} variants={variants}>
                    <Button variant="outline" size="lg" className="bg-violet-500 hover:bg-[#7D53DE] text-white h-12">
                        Get Started - Free Trial
                    </Button>
                </motion.div> */}
                {/* <motion.div transition={transition} variants={variants}>
                    <Button variant="outline" size="lg" className="h-12" >
                        Request a Demo
                    </Button>
                </motion.div> */}
            </div>
        </motion.div>
    )
}