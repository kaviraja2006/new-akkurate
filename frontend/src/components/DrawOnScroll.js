"use client";
import React, { useEffect, useRef, useState } from "react";

export default function DrawOnScroll({ children, className = "", delay = 0 }) {
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
            className={`${className} transition-all duration-[2000ms] ease-out`}
            style={{
                transitionDelay: `${delay}ms`,
                clipPath: isVisible ? "inset(0 0 0 0)" : "inset(0 100% 0 0)",
                opacity: 1 // Always visible opacity-wise, masked by clip-path
            }}
        >
            {children}
        </div>
    );
}
