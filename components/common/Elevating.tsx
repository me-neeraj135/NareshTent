"use client";

import { BsStars } from "react-icons/bs";
import Button from "../ui/Button";
import { useScrollReveal } from "../../hooks/useScrollReveal";

export default function Elevating() {
    const revealRef = useScrollReveal();

    return (
        <section
            id="elevating"
            className="section-pad relative bg-background overflow-hidden"
        >
            {/* Romantic Watercolor Glow */}
            <div
                className="pointer-events-none absolute inset-0 flex items-center justify-center"
                aria-hidden="true"
            >
                <div className="h-[700px] w-[700px] rounded-full bg-[#6b7a5e]/5 blur-[100px] animate-pulse" />
            </div>

            {/* Decorative Botanical SVGs */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
                <svg style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }} aria-hidden="true">
                    <defs>
                        <linearGradient id="gradSage" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#2D5A27" />
                            <stop offset="33%" stopColor="#4A7C59" />
                            <stop offset="66%" stopColor="#8FCB9B" />
                            <stop offset="100%" stopColor="#D2E8E3" />
                        </linearGradient>
                        <linearGradient id="gradRose" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#9D446E" />
                            <stop offset="33%" stopColor="#E29578" />
                            <stop offset="66%" stopColor="#FFDDD2" />
                            <stop offset="100%" stopColor="#83C5BE" />
                        </linearGradient>
                        <linearGradient id="gradGold" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#FFD700" />
                            <stop offset="50%" stopColor="#FFB703" />
                            <stop offset="100%" stopColor="#FB8500" />
                        </linearGradient>
                        <linearGradient id="gradViolet" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#3A0CA3" />
                            <stop offset="33%" stopColor="#7209B7" />
                            <stop offset="66%" stopColor="#B5179E" />
                            <stop offset="100%" stopColor="#F72585" />
                        </linearGradient>
                        <linearGradient id="gradBlue" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#4CC9F0" />
                            <stop offset="50%" stopColor="#4361EE" />
                            <stop offset="100%" stopColor="#3F37C9" />
                        </linearGradient>
                    </defs>
                </svg>

                {/* Petal 1 - Top Left */}
                <svg className="absolute top-[15%] left-[10%] h-24 w-24 opacity-70 animate-float drop-shadow-[0_0_20px_rgba(74,124,89,0.6)]" viewBox="0 0 100 100" fill="url(#gradSage)">
                    <path d="M50 0C60 30 90 40 50 100C10 40 40 30 50 0Z" />
                </svg>

                {/* Petal 2 - Bottom Right */}
                <svg className="absolute bottom-[20%] right-[10%] h-32 w-32 opacity-60 animate-drift drop-shadow-[0_0_25px_rgba(226,149,120,0.5)]" viewBox="0 0 100 100" fill="url(#gradRose)" style={{ animationDelay: '-3s' }}>
                    <path d="M50 0C80 20 100 50 50 100C0 50 20 20 50 0Z" />
                </svg>

                {/* Flower 1 - Center Left */}
                <svg className="absolute top-[45%] left-[5%] h-20 w-20 opacity-60 animate-drift drop-shadow-[0_0_20px_rgba(114,9,183,0.5)]" viewBox="0 0 100 100" fill="url(#gradViolet)" style={{ animationDelay: '-7s' }}>
                    <path d="M50 50C50 30 70 10 90 30C70 50 50 70 30 50C10 30 30 10 50 30M50 50C30 50 10 70 30 90C50 70 70 50 50 30M50 50C50 70 30 90 10 70C30 50 50 30 70 50C90 70 70 90 50 70" />
                </svg>

                {/* Star - Top Right */}
                <svg className="absolute top-[10%] right-[15%] h-24 w-24 opacity-70 animate-float drop-shadow-[0_0_20px_rgba(255,183,3,0.7)]" viewBox="0 0 100 100" fill="url(#gradGold)" style={{ animationDelay: '-1.5s' }}>
                    <path d="M50 10L61 35L87 35L66 51L74 76L50 61L26 76L34 51L13 35L39 35Z" />
                </svg>

                {/* Blue Glow - Middle Right */}
                <svg className="absolute top-[35%] right-[5%] h-20 w-20 opacity-50 animate-float drop-shadow-[0_0_20px_rgba(67,97,238,0.5)]" viewBox="0 0 100 100" fill="url(#gradBlue)" style={{ animationDelay: '-4s' }}>
                    <circle cx="50" cy="50" r="30" />
                    <path d="M50 10 L60 40 L90 50 L60 60 L50 90 L40 60 L10 50 L40 40 Z" fill="white" opacity="0.4" />
                </svg>

                {/* Extra accent - Bottom Left */}
                <svg className="absolute bottom-[10%] left-[15%] h-16 w-16 opacity-50 animate-float drop-shadow-[0_0_15px_rgba(247,37,133,0.5)]" viewBox="0 0 100 100" fill="url(#gradViolet)" style={{ animationDelay: '-5s' }}>
                    <circle cx="50" cy="50" r="40" stroke="url(#gradViolet)" strokeWidth="2" fill="none" opacity="0.6" />
                    <path d="M50 10 L50 90 M10 50 L90 50" stroke="url(#gradViolet)" strokeWidth="3" />
                </svg>
            </div>

            <div className="container-custom relative z-10" ref={revealRef}>
                <div className="mx-auto flex max-w-4xl flex-col items-center text-center">

                    <span className="section-label">Our Heritage</span>

                    <h2
                        className="mb-10 font-serif leading-tight text-white reveal-on-scroll"
                        style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)" }}
                    >
                        The Architecture of<br />
                        <span className="text-gold italic">Pure Imperial Legacy.</span>
                    </h2>

                    <div className="mb-12 h-px w-32 bg-gradient-to-r from-transparent via-primary to-transparent" />

                    <p className="max-w-2xl text-[18px] font-light leading-relaxed text-foreground/60 reveal-on-scroll">
                        Established for the chosen few, we translate ancestral majesty into structural reality.
                        Our creations are not merely decorations; they are the stage for once-in-a-lifetime legacies,
                        where every gold thread and velvet petal is orchestrating a story of eternal grandeur.
                    </p>

                    {/* CTA */}
                    <div className="reveal-on-scroll pt-15" style={{ transitionDelay: "300ms" }}>
                        <Button />
                    </div>

                    {/* Vertical branding */}
                    <div
                        className="mt-12 sm:mt-20 flex flex-col items-center gap-5 reveal-on-scroll"
                        style={{ transitionDelay: "500ms" }}
                    >
                        <div className="h-20 w-px bg-gradient-to-b from-[#6b7a5e]/30 to-transparent" />
                        <span className="text-[10px] uppercase tracking-[0.7em] text-[#6b7a5e]/50 font-sans font-bold">
                            The NTH Standard
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}