"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Headset } from "lucide-react";
import posthog from "posthog-js";
import { useCalEmbed } from "@/hooks/use-cal";

const transition = { duration: 1, ease: [.25, .1, .25, 1] };
const variants = {
    hidden: { filter: "blur(10px)", transform: "translateY(20%)", opacity: 0 },
    visible: { filter: "blur(0)", transform: "translateY(0)", opacity: 1 },
};

const text = "The Autonomous Enterprise.";

export default function HeroBox() {
    const openCal = useCalEmbed();
    const words = text.split(" ");

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{ staggerChildren: 0.04 }}
            viewport={{ once: true }}
            className="w-full px-4"
        >
            <h1 className="text-center mb-6 text-4xl font-semibold md:text-5xl lg:text-6xl xl:text-7xl font-[family-name:var(--font-geist-sans)]">
                {words.map((word, index) => (
                    <React.Fragment key={index}>
                        <motion.span className="inline-block" transition={transition} variants={variants}>
                            {word}
                        </motion.span>
                        {index < words.length - 1 && ' '}
                    </React.Fragment>
                ))}
            </h1>
            <motion.p className="text-center text-lg md:text-xl lg:text-2xl leading-8 md:leading-10 font-semibold text-muted-foreground mb-6 sm:mb-8 max-w-3xl mx-auto dark:bg-black dark:bg-opacity-50 bg-white bg-opacity-50 p-2" transition={transition} variants={variants}>
                AI Agents that automate entire departments, from support to operations, at a fraction of the cost.
            </motion.p>
            <div className="flex gap-4 items-center flex-row justify-center">
                <motion.div transition={transition} variants={variants}>
                    <Button onClick={() => {
                        posthog.capture('book_a_demo_clicked')
                        openCal()
                    }} variant="outline" size="lg" className="infrastack-button text-white h-12">
                        <Headset /> Talk to our team
                    </Button>
                </motion.div>
            </div>
        </motion.div>
    )
}
