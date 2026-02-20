"use client";
import React, { useEffect, useRef, useState } from "react";

export default function RevealOnScroll({ children, className = "", delay = 0, variant = "fade", threshold = 0.1, rootMargin = "0px 0px -50px 0px" }) {
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
                threshold,
                rootMargin
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

    const variants = {
        fade: isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20",
        scale: isVisible ? "opacity-100 scale-100" : "opacity-0 scale-50",
    };
    const durations = {
        fade: 320,
        scale: 1000,
    };

    return (
        <div
            ref={ref}
            className={`${className} transition-all ease-out transform ${variants[variant] || variants.fade}`}
            style={{
                transitionDelay: `${delay}ms`,
                transitionDuration: `${durations[variant] || durations.fade}ms`,
            }}
        >
            {children}
        </div>
    );
}
