"use client";

import { motion } from "framer-motion";
import { Circle, Clock, PoundSterling } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../../lib/utils";

function HeroGeometric({
    badge = "Design Collective",
    title1 = "Elevate Your Digital Vision",
    title2 = "Crafting Exceptional Websites",
}: {
    badge?: string;
    title1?: string;
    title2?: string;
}) {
    const fadeUpVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                delay: 0.5 + i * 0.2,
                ease: [0.25, 0.4, 0.25, 1],
            },
        }),
    };

    return (
        <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#030303]">
            {/* Background gradients */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black">
                    <div className="absolute inset-x-0 top-0 h-[70%] opacity-30">
                        <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl"></div>
                        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-pink-600 rounded-full filter blur-3xl"></div>
                    </div>
                </div>
                <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-black via-black to-transparent"></div>
            </div>

            <div className="relative z-10 container mx-auto px-4 md:px-6">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.div
                        custom={0}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 mb-8 md:mb-12"
                    >
                        <Circle className="h-2 w-2 fill-purple-600" />
                        <span className="text-sm text-white/80 tracking-wide">
                            {badge}
                        </span>
                    </motion.div>

                    <motion.div
                        custom={1}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 font-inter">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-purple-600">
                                {title1}
                            </span>
                            <br />
                            <span className="text-white">
                                {title2}
                            </span>
                        </h1>
                    </motion.div>

                    <motion.div
                        custom={2}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <p className="text-base sm:text-lg md:text-lg text-zinc-400 mb-8 leading-relaxed font-light">
  Custom websites with integrated appointment scheduling for your mobile detailing business – built in days, at a fraction of the cost.
</p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
                            <a 
                                href="#contact"
                                className="w-full sm:w-auto px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-full transition-colors"
                            >
                                Get Started
                            </a>
                            <a 
                                href="#pricing"
                                className="w-full sm:w-auto px-8 py-3 bg-zinc-900 hover:bg-zinc-800 text-white font-medium rounded-full transition-colors border border-zinc-800"
                            >
                                View Pricing
                            </a>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                            <div className="flex items-center gap-3 bg-zinc-900/50 px-6 py-4 rounded-2xl border border-zinc-800">
                                <Clock className="h-6 w-6 text-purple-500" />
                                <div className="text-left">
                                    <div className="text-xl font-semibold text-purple-500">3-5 Days</div>
                                    <div className="text-sm text-zinc-400">From concept to launch</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 bg-zinc-900/50 px-6 py-4 rounded-2xl border border-zinc-800">
                                <PoundSterling className="h-6 w-6 text-purple-500" />
                                <div className="text-left">
                                    <div className="text-xl font-semibold text-purple-500">60% Lower</div>
                                    <div className="text-sm text-zinc-400">Than traditional costs</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />
        </div>
    );
}

export { HeroGeometric };