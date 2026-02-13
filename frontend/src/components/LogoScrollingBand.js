"use client";
import React from "react";
import Image from "next/image";

export default function LogoScrollingBand() {
    const logos = [
        "https://res.cloudinary.com/ddnxhn442/image/upload/v1771016116/Screenshot_2026-02-06_183110_emyrg4.png",
        "https://res.cloudinary.com/ddnxhn442/image/upload/v1771016115/Screenshot_2026-02-14_022459_tb30gb.png",
        "https://res.cloudinary.com/ddnxhn442/image/upload/v1771016115/Screenshot_2026-02-14_022422_dux91x.png",
        "https://res.cloudinary.com/ddnxhn442/image/upload/v1771016115/Screenshot_2026-02-14_022449_ljkf5f.png",
        "https://res.cloudinary.com/ddnxhn442/image/upload/v1771016115/Screenshot_2026-02-14_022438_bsgfxo.png",
    ];

    // Duplicating items enough times to ensure smooth scrolling
    const repeatedLogos = [...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos, ...logos];

    return (
        <div className="w-full overflow-hidden bg-white border-b border-gray-100 py-8">
            <div className="relative flex w-max animate-scroll whitespace-nowrap items-center pause-on-hover">
                {repeatedLogos.map((logo, index) => (
                    <div
                        key={index}
                        className="mx-8 md:mx-12 relative h-12 w-32 md:h-16 md:w-40 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
                    >
                        <Image
                            src={logo}
                            alt={`Partner Logo ${index}`}
                            fill
                            className="object-contain"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
