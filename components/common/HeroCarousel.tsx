"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [
    {
        image: "/images/banner1.jpg",
        title: "Crafting Royal Celebrations <br/> Beyond Imagination",
        subtitle: "The Pinnacle of Event Artistry",
    },
    {
        image: "/images/banner2.jpg",
        title: "Where Grandeur Becomes <br/> a Sacred Legacy",
        subtitle: "Timeless Luxury for the Chosen Few",
    },
    {
        image: "/images/banner3.jpg",
        title: "Imperial Decor for the <br/> World's Elite",
        subtitle: "The Naresh Standard of Excellence",
    },
];

export default function HeroCarousel() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 8000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section aria-label="Hero" className="relative h-screen min-h-[700px] w-full overflow-hidden bg-background">
            {/* ── Slide Content ── */}
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-[2500ms] cubic-bezier(0.16, 1, 0.3, 1) ${index === current ? "opacity-100 scale-100 z-10" : "opacity-0 scale-110 z-0 pointer-events-none"
                        }`}
                >
                    {/* Background Image with Cinematic Overlay */}
                    <div className="absolute inset-0">
                        <Image
                            src={slide.image}
                            alt={slide.title}
                            fill
                            className={`object-cover transition-transform duration-[12000ms] ease-linear ${index === current ? "scale-105" : "scale-110"}`}
                            priority={index === 0}
                            sizes="100vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
                        <div className="absolute inset-0 bg-black/30" />
                    </div>

                    {/* Text Content */}
                    <div className="relative flex h-full flex-col items-center justify-center text-center px-6">
                        <div className="container-custom">
                            <span
                                className="mb-10 block text-[10px] sm:text-xs font-bold uppercase tracking-[1em] text-primary-light animate-fade-in"
                                style={{ animationDelay: '0.5s' }}
                            >
                                {slide.subtitle}
                            </span>
                            <h1
                                className="mb-16 font-serif leading-[1.05] tracking-tight text-white reveal-on-scroll"
                                style={{
                                    fontSize: "clamp(2.2rem, 5vw, 2.8rem)",
                                    animation: index === current ? "fadeInUp 1.8s cubic-bezier(0.19, 1, 0.22, 1) forwards" : "none"
                                }}
                                dangerouslySetInnerHTML={{ __html: slide.title }}
                            />

                            <div className="flex flex-wrap justify-center gap-10 mt-20 overflow-hidden">
                                <Link
                                    href="#contact"
                                    className="px-14 py-5 text-[10px] font-bold uppercase tracking-[0.5em] bg-primary text-background transition-all hover:bg-white active:scale-95 shadow-[0_20px_60px_rgba(0,0,0,0.5)] animate-fade-in-up"
                                    style={{ animationDelay: '1s' }}
                                >
                                    Private Consultation
                                </Link>
                                <Link
                                    href="#portfolio"
                                    className="px-14 py-5 text-[10px] font-bold uppercase tracking-[0.5em] text-white border border-white/30 backdrop-blur-md transition-all hover:bg-white hover:text-background active:scale-95 animate-fade-in-up"
                                    style={{ animationDelay: '1.3s' }}
                                >
                                    View Legacy
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* ── Slide Nav ── */}
            <div className="absolute bottom-16 left-1/2 flex -translate-x-1/2 gap-8 z-30">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        className={`h-[1px] w-16 transition-all duration-1000 ${i === current ? "bg-primary w-28" : "bg-white/10 hover:bg-white/40"
                            }`}
                        aria-label={`Go to slide ${i + 1}`}
                    />
                ))}
            </div>

            {/* ── Scroll Hint ── */}
            <div className="absolute bottom-16 right-16 hidden xl:flex flex-col items-center gap-8 z-30 opacity-40">
                <span className="text-[10px] uppercase tracking-[0.8em] text-white [writing-mode:vertical-lr] font-medium">
                    Descent
                </span>
                <div className="h-24 w-px bg-gradient-to-b from-primary to-transparent" />
            </div>
        </section>
    );
}