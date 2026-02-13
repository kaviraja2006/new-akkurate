"use client";
import React, { useEffect, useRef, useState } from "react";

export default function RoadmapLine({ className = "", delay = 0 }) {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.1,
                rootMargin: "0px"
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <div
            ref={ref}
            className={`${className} overflow-hidden`}
        >
            <div
                className={`h-full w-full transition-all duration-[2000ms] ease-out`}
                style={{
                    transitionDelay: `${delay}ms`,
                    width: isVisible ? "100%" : "0%",
                }}
            >
                <svg width="100%" height="100%" viewBox="0 0 1000 100" preserveAspectRatio="none">
                    <path d="M0,50 C250,100 750,0 1000,50" stroke="white" strokeWidth="2" fill="none" strokeDasharray="5,5" />
                </svg>
            </div>
        </div>
    );
}
