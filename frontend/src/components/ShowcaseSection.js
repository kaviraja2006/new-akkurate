"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import RevealOnScroll from "./RevealOnScroll";

export default function ShowcaseSection() {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    // Maps the vertical scroll progress (0 to 1) to horizontal translation (1% to -95%)
    // Adjust -95% based on the number of items and their width to ensure the last item is fully visible
    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-75%"]);

    const projects = [
        {
            id: 1,
            title: "Cloud Computing System",
            category: "Excellent Performance",
            bg: "bg-[#2e2b5b]", // Dark Purple
            accent: "bg-green-400", // Green Circle
            imagePlaceholder: "Webfolio Mockup",
            imageBg: "bg-slate-900",
        },
        {
            id: 2,
            title: "Mobile Application Development",
            category: "Excellent Performance",
            bg: "bg-[#8b5cf6]", // Lighter Purple
            accent: "bg-white", // White circle or UI elements
            imagePlaceholder: "App Interface",
            imageBg: "bg-white",
            fullCard: true // Special layout for the middle card with UI elements
        },
        {
            id: 3,
            title: "Cloud Computing System",
            category: "Excellent Performance",
            bg: "bg-[#2e2b5b]", // Dark Purple
            accent: "bg-green-400",
            imagePlaceholder: "Webfolio Mockup",
            imageBg: "bg-slate-900",
        },
        {
            id: 4,
            title: "Mobile Application Development",
            category: "Excellent Performance",
            bg: "bg-[#059669]", // Green
            accent: "bg-white",
            imagePlaceholder: "Phone Mockup",
            imageBg: "bg-slate-900",
        },
        // Adding more dummy projects to make the scroll longer and more obvious
        {
            id: 5,
            title: "Data Analytics Platform",
            category: "Data Science",
            bg: "bg-[#2e2b5b]",
            accent: "bg-purple-400",
            imagePlaceholder: "Data Dash",
            imageBg: "bg-slate-900",
        },
        {
            id: 6,
            title: "E-Commerce Solution",
            category: "Business Growth",
            bg: "bg-[#8b5cf6]",
            accent: "bg-pink-400",
            imagePlaceholder: "Shop UI",
            imageBg: "bg-white",
        }
    ];

    return (
        // The container has a large height (300vh) to allow for vertical scrolling time
        <section ref={targetRef} className="bg-[#110e2e] relative h-[300vh]">

            {/* Sticky container that stays in view while scrolling */}
            <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">

                <div className="max-w-7xl mx-auto px-6 text-center mb-12 w-full">
                    <RevealOnScroll>
                        <div className="inline-block bg-slate-700/50 px-4 py-1.5 rounded-full text-xs font-bold mb-4 border border-slate-600 text-white">
                            Web Showcase
                        </div>
                    </RevealOnScroll>
                    <RevealOnScroll delay={100}>
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white">
                            Comprehensive IT <br />
                            Solution <br />
                            Growth & Efficiency
                        </h2>
                    </RevealOnScroll>
                </div>

                {/* Horizontal Scroll Track */}
                <motion.div style={{ x }} className="flex gap-8 px-12 md:px-24 w-max">
                    {projects.map((project, index) => (
                        <div key={index} className={`flex-shrink-0 w-[85vw] md:w-[600px] aspect-[16/9] rounded-3xl p-8 relative overflow-hidden group transition-transform hover:scale-[1.02] ${project.bg} text-white`}>

                            {/* Card Content Top */}
                            <div className="relative z-10 h-full flex flex-col justify-between">
                                {/* Mockup Area */}
                                <div className="absolute inset-x-8 top-8 bottom-0">
                                    {/* Background Circle/Shape */}
                                    <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full ${project.accent} opacity-20 blur-3xl`}></div>

                                    {/* Laptop/Device Mockup */}
                                    <div className="absolute bottom-0 left-0 right-0 h-4/5 bg-slate-900 rounded-t-xl border-t-[12px] border-x-[12px] border-slate-700 p-2 shadow-2xl transform translate-y-20 group-hover:translate-y-10 transition-transform duration-700">
                                        <div className="w-full h-full bg-slate-800 rounded relative overflow-hidden flex items-center justify-center">
                                            <span className="font-serif text-4xl italic opacity-50">Webfolio.</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Header Content */}
                                <div className="relative z-20">
                                    <p className="text-sm opacity-80 mb-2 uppercase tracking-wider">{project.category}</p>
                                    <h3 className="text-2xl font-bold">{project.title}</h3>
                                </div>
                            </div>

                            {/* Specific UI for the "Purple" card (Mobile App) */}
                            {project.fullCard && (
                                <div className="absolute inset-0 bg-transparent flex flex-col p-8">
                                    <div className="absolute top-8 right-8 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full p-3 transition-colors cursor-pointer">
                                        <span className="text-white font-bold text-xl">↗</span>
                                    </div>

                                    {/* UI Mockups floating */}
                                    <div className="absolute inset-0 flex items-center justify-center z-0">
                                        <div className="w-64 h-80 bg-white/10 rounded-2xl rotate-[-6deg] backdrop-blur-sm border border-white/20 absolute -left-4"></div>
                                        <div className="w-64 h-80 bg-white/20 rounded-2xl rotate-[6deg] backdrop-blur-md border border-white/30 flex items-center justify-center relative shadow-2xl">
                                            <div className="text-center">
                                                <div className="w-16 h-16 bg-white/30 rounded-full mx-auto mb-4 animate-pulse"></div>
                                                <div className="w-32 h-3 bg-white/30 rounded mx-auto mb-2"></div>
                                                <div className="w-24 h-3 bg-white/30 rounded mx-auto"></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="relative z-20 mt-auto pointer-events-none">
                                        <p className="text-sm opacity-80 mb-2 uppercase tracking-wider">{project.category}</p>
                                        <h3 className="text-2xl font-bold">{project.title}</h3>
                                    </div>
                                </div>
                            )}

                        </div>
                    ))}
                </motion.div>

                {/* Scroll Indicator helper */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/30 text-sm animate-pulse">
                    Scroll Down to Explore
                </div>
            </div>
        </section>
    );
}
