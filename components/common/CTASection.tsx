"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useScrollReveal } from "../../hooks/useScrollReveal";

export default function CTASection() {
    const revealRef = useScrollReveal();

    return (
        <section className="relative overflow-hidden bg-background" style={{ padding: 0 }}>
            {/* ── Background with Cinematic Overlay ── */}
            <div className="absolute inset-0">
                <img
                    alt="Palatial wedding venue"
                    src="/images/banner5.jpg"
                    className="h-full w-full object-cover brightness-[0.4] saturate-[0.8] scale-105"
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />
            </div>

            {/* ── Floating Glows ── */}
            <div className="pointer-events-none absolute bottom-0 right-0 h-[600px] w-[600px] rounded-full bg-primary/10 blur-[150px]" aria-hidden="true" />

            {/* ── Content ── */}
            <div className="container-custom section-pad relative z-10" ref={revealRef}>
                <div className="mx-auto max-w-4xl text-center">
                    <span className="mb-10 block text-[10px] sm:text-xs font-bold uppercase tracking-[1em] text-primary reveal-on-scroll">
                        Confidential Inquiry
                    </span>

                    <h2
                        className="mb-12 font-serif leading-tight text-white reveal-on-scroll"
                        style={{ fontSize: "clamp(2.8rem, 7vw, 5.8rem)" }}
                    >
                        Begin Your Journey to <br />
                        <span className="text-gold italic">Celestial Grandeur.</span>
                    </h2>

                    <p className="mx-auto mb-16 max-w-2xl text-lg font-light leading-relaxed text-white/50 reveal-on-scroll" style={{ transitionDelay: '200ms' }}>
                        Whether an intimate gathering or a royal-scale wedding — let Naresh Tent House architect your perfect day.
                    </p>

                    <div className="flex flex-wrap justify-center gap-10 reveal-on-scroll" style={{ transitionDelay: '400ms' }}>
                        <Link
                            href="#contact"
                            className="inline-flex items-center gap-6 bg-primary px-16 py-6 text-[10px] font-bold uppercase tracking-[0.5em] text-background transition-all hover:bg-white active:scale-95 shadow-2xl"
                        >
                            Request Private Consultation <ArrowRight size={14} />
                        </Link>
                    </div>
                </div>
            </div>

            {/* ── Subtle Bottom Border ── */}
            <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        </section>
    );
}