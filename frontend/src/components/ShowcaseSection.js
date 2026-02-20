"use client";
import { useEffect, useRef } from "react";

export default function ShowcaseSection() {
    const trackRef = useRef(null);
    const stepRef = useRef(0);
    const animRef = useRef({ rafId: 0, timeoutId: 0, paused: false, running: false, start: null });

    const projects = [
        { id: 1, title: "Mobile Application Development", category: "Excellent Performance", bg: "bg-[#0c6b4e]" },
        { id: 2, title: "Cloud Computing System", category: "Excellent Performance", bg: "bg-[#2e2b5b]" },
        { id: 3, title: "Mobile Application Development", category: "Excellent Performance", bg: "bg-[#7c3aed]" },
        { id: 4, title: "Cloud Computing System", category: "Excellent Performance", bg: "bg-[#2e2b5b]" },
        { id: 5, title: "Data Analytics Platform", category: "Data Science", bg: "bg-[#0c6b4e]" },
        { id: 6, title: "E-Commerce Solution", category: "Business Growth", bg: "bg-[#7c3aed]" },
        { id: 7, title: "SaaS Dashboard", category: "Excellent Performance", bg: "bg-[#2e2b5b]" },
        { id: 8, title: "Fintech Mobile App", category: "Excellent Performance", bg: "bg-[#0c6b4e]" },
        { id: 9, title: "Healthcare Portal", category: "Excellent Performance", bg: "bg-[#7c3aed]" },
        { id: 10, title: "AI Operations Suite", category: "Data Science", bg: "bg-[#2e2b5b]" },
        { id: 11, title: "Retail POS System", category: "Business Growth", bg: "bg-[#0c6b4e]" },
        { id: 12, title: "Cloud Migration", category: "Excellent Performance", bg: "bg-[#7c3aed]" },
    ];

    const renderMock = (index) => {
        if (index % 3 === 0) {
            return (
                <div className="w-36 h-56 bg-black/60 rounded-3xl border border-white/10 shadow-2xl flex items-center justify-center">
                    <div className="w-28 h-44 bg-emerald-900/60 rounded-2xl border border-white/10" />
                </div>
            );
        }
        if (index % 3 === 1) {
            return (
                <div className="w-56 h-36 bg-slate-900/70 rounded-2xl border border-white/10 shadow-2xl flex items-center justify-center">
                    <span className="text-white/70 font-serif text-2xl italic">Webfolio</span>
                </div>
            );
        }
        return (
            <div className="relative w-60 h-40">
                <div className="absolute left-0 top-6 w-40 h-24 bg-white/15 rounded-2xl -rotate-6 border border-white/20" />
                <div className="absolute right-0 top-0 w-44 h-28 bg-white/20 rounded-2xl rotate-6 border border-white/30" />
            </div>
        );
    };

    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;
        const anim = animRef.current;

        const measureStep = () => {
            const cards = track.querySelectorAll("[data-card]");
            if (cards.length < 2) return;
            const cardStep = cards[1].offsetLeft - cards[0].offsetLeft;
            stepRef.current = cardStep * 3;
        };

        measureStep();
        window.addEventListener("resize", measureStep);
        return () => window.removeEventListener("resize", measureStep);
    }, []);

    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;
        const anim = animRef.current;

        const duration = 1100;
        const pause = 1000;

        const animateStep = () => {
            if (anim.paused) {
                anim.running = false;
                return;
            }

            anim.running = true;
            const step = stepRef.current;
            if (!step) {
                anim.timeoutId = window.setTimeout(animateStep, pause);
                return;
            }

            const half = track.scrollWidth / 2;
            const start = track.scrollLeft;
            let target = start + step;

            if (target >= half) {
                track.scrollLeft = 0;
                target = step;
            }

            const startTime = performance.now();
            const easeInOut = (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);

            const tick = (now) => {
                if (anim.paused) {
                    anim.running = false;
                    return;
                }

                const progress = Math.min((now - startTime) / duration, 1);
                const eased = easeInOut(progress);
                track.scrollLeft = start + (target - start) * eased;

                if (progress < 1) {
                    anim.rafId = requestAnimationFrame(tick);
                } else {
                    anim.timeoutId = window.setTimeout(animateStep, pause);
                }
            };

            anim.rafId = requestAnimationFrame(tick);
        };

        anim.start = animateStep;
        anim.timeoutId = window.setTimeout(animateStep, 700);

        return () => {
            if (anim.rafId) cancelAnimationFrame(anim.rafId);
            if (anim.timeoutId) clearTimeout(anim.timeoutId);
        };
    }, []);

    const loopedProjects = [...projects, ...projects];

    const handlePause = () => {
        const anim = animRef.current;
        anim.paused = true;
        if (anim.rafId) cancelAnimationFrame(anim.rafId);
        if (anim.timeoutId) clearTimeout(anim.timeoutId);
        anim.running = false;
    };

    const handleResume = () => {
        const anim = animRef.current;
        anim.paused = false;
        if (!anim.running && anim.start) {
            anim.timeoutId = window.setTimeout(() => {
                if (!anim.paused && anim.start) anim.start();
            }, 160);
        }
    };

    return (
        <section className="bg-[#110e2e] py-24">
            <div className="px-6">
                <div className="max-w-7xl mx-auto text-center mb-12">
                    <div className="inline-block bg-slate-700/50 px-4 py-1.5 rounded-full text-xs font-bold mb-4 border border-slate-600 text-white">
                        Work Showcase
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white">
                        Comprehensive IT Solution
                        <br />
                        Growth & Efficiency
                    </h2>
                </div>

                <div
                    ref={trackRef}
                    className="overflow-hidden w-screen relative left-1/2 -translate-x-1/2"
                    onMouseEnter={handlePause}
                    onMouseLeave={handleResume}
                >
                    <div className="flex gap-8 w-max px-6">
                        {loopedProjects.map((project, index) => (
                            <div
                                key={`${project.id}-${index}`}
                                className="group"
                                onMouseEnter={handlePause}
                                onMouseLeave={handleResume}
                            >
                                <div
                                    data-card
                                    className={`relative aspect-square w-64 md:w-72 lg:w-80 rounded-3xl ${project.bg} overflow-hidden shadow-2xl flex items-center justify-center`}
                                >
                                    <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white text-slate-900 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                        &rarr;
                                    </button>
                                    <div className="absolute inset-0 opacity-30">
                                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
                                    </div>
                                    {renderMock(index)}
                                </div>
                                <div className="mt-5 text-white">
                                    <p className="text-sm opacity-80 mb-1">{project.category}</p>
                                    <h3 className="text-xl font-semibold">{project.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
