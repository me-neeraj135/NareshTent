"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const slides = [
    {
        image: "/images/slide1.png",
        topText: "ESTABLISHED 2026",
        title: "NARESH",
        subtitle: "Tent House",
        bottomText: "ARCHITECTS OF GRAND CELEBRATIONS",
    },
    {
        image: "/images/slide2.avif",
        topText: "PREMIUM EVENTS",
        title: "NARESH",
        subtitle: "Tent House",
        bottomText: "WEDDINGS · RECEPTIONS · PARTIES",
    },
    {
        image: "/images/slide3.avif",
        topText: "LUXURY SETUPS",
        title: "NARESH",
        subtitle: "Tent House",
        bottomText: "CRAFTED WITH ELEGANCE",
    },
];

export default function HeroCarousel() {
    const [active, setActive] = useState(0);

    useEffect(() => {
        const t = setInterval(() => setActive((p) => (p + 1) % slides.length), 6000);
        return () => clearInterval(t);
    }, []);

    return (
        <section aria-label="Hero" className="relative h-screen min-h-[600px] w-full overflow-hidden" style={{ padding: 0 }}>

            {/* ── Slides ── */}
            {slides.map((slide, i) => (
                <div
                    key={i}
                    className={`absolute inset-0 transition-opacity duration-1000 ${active === i ? "opacity-100 z-10" : "opacity-0 z-0"
                        }`}
                >
                    <Image
                        src={slide.image}
                        alt={slide.title}
                        fill
                        priority={i === 0}
                        className={`object-cover transition-transform duration-[12000ms] ease-linear ${active === i ? "scale-110" : "scale-100"
                            }`}
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/25 to-black/80" />
                </div>
            ))}

            {/* ── Content ── */}
            <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-5">
                <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.65em] text-[#c5a059] animate-fade-in">
                    {slides[active].topText}
                </p>

                <h1 className="font-serif text-white tracking-tighter leading-[0.85] animate-fade-in-up
                               text-[clamp(5rem,18vw,14rem)]">
                    {slides[active].title}
                </h1>

                <h2 className="mt-5 font-serif italic text-[#e7d3b0] animate-fade-in-up
                               text-[clamp(1.5rem,5vw,4rem)]"
                    style={{ animationDelay: "0.15s" }}>
                    {slides[active].subtitle}
                </h2>

                <p className="mt-7 text-[10px] font-medium uppercase tracking-[0.45em] text-white/40 animate-fade-in"
                    style={{ animationDelay: "0.4s" }}>
                    {slides[active].bottomText}
                </p>

                <Link
                    href="#expertise"
                    className="mt-10 inline-flex items-center gap-2.5 bg-[#c5a059] px-9 py-3.5
                               text-[11px] font-bold uppercase tracking-[0.28em] text-black
                               transition-colors duration-300 hover:bg-[#e7d3b0] animate-fade-in"
                    style={{ animationDelay: "0.6s" }}
                >
                    Explore Our Work <ArrowRight size={13} />
                </Link>
            </div>

            {/* ── Left side label ── */}
            <div className="hidden xl:flex absolute left-8 bottom-16 z-20 flex-col items-center gap-3">
                <div className="h-16 w-px bg-gradient-to-b from-[#c5a059]/60 to-transparent" />
                <span className="text-[9px] font-bold uppercase tracking-[0.55em] text-[#c5a059]/50"
                    style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}>
                    EST. 2026
                </span>
            </div>

            {/* ── Progress Navigation ── */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex items-end gap-8 sm:gap-12">
                {slides.map((s, i) => (
                    <button
                        key={i}
                        onClick={() => setActive(i)}
                        className="flex flex-col items-start gap-2.5"
                        aria-label={`Go to slide ${i + 1}`}
                    >
                        <span className={`text-[10px] font-medium transition-colors duration-500 ${active === i ? "text-[#c5a059]" : "text-white/25"
                            }`}>0{i + 1}</span>
                        <div className="relative h-[1.5px] w-20 sm:w-28 bg-white/10 overflow-hidden">
                            <div
                                className={`absolute inset-y-0 left-0 bg-[#c5a059] transition-all ease-linear ${active === i ? "w-full duration-[6000ms]" : "w-0 duration-300"
                                    }`}
                            />
                        </div>
                    </button>
                ))}
            </div>

            {/* ── Scroll hint ── */}
            <div className="hidden lg:flex absolute right-8 bottom-10 z-20 flex-col items-center gap-3">
                <span className="text-[9px] font-bold uppercase tracking-[0.5em] text-white/25"
                    style={{ writingMode: "vertical-rl" }}>
                    Scroll to explore
                </span>
                <div className="h-10 w-px bg-gradient-to-b from-white/25 to-transparent" />
            </div>
        </section>
    );
}