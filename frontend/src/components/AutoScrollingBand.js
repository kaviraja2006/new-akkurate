"use client";
import React from "react";
import { FaChartLine } from "react-icons/fa";

export default function AutoScrollingBand() {
    const items = [
        "Smart Data Insights",
        "Growth Driven Decisions",
        "Real Time Analytics",
    ];

    // Duplicating items enough times to ensure smooth scrolling on wider screens
    const repeatedItems = [...items, ...items, ...items, ...items, ...items, ...items, ...items, ...items];

    return (
        <div
            className="w-full overflow-hidden bg-white border-y border-gray-200"
            style={{
                maskImage: "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
                WebkitMaskImage: "linear-gradient(to right, transparent, black 20%, black 80%, transparent)"
            }}
        >
            <div className="relative flex w-max animate-scroll whitespace-nowrap">
                {repeatedItems.map((text, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-3 px-8 md:px-16 py-4 text-sky-500 text-sm md:text-base font-medium tracking-wide"
                    >
                        <FaChartLine className="text-sky-500 text-lg" />
                        <span>{text}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
