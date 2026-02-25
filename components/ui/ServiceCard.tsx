"use client";

import { ReactNode } from "react";
import { MoveRight } from "lucide-react";

interface ServiceCardProps {
    icon?: ReactNode;
    title: string;
    description: string;
    image?: string;
}

export default function ServiceCard({ icon, title, description, image }: ServiceCardProps) {
    return (
        <article className="glass-card group relative flex flex-col h-full p-6 sm:p-10 overflow-hidden
                            transition-all duration-1000 cursor-default border-primary/10">

            {/* ── Background Image (Subtle Reveal) ── */}
            {image && (
                <div className="absolute inset-0 z-0">
                    <img
                        src={image}
                        alt=""
                        className="h-full w-full object-cover transition-all duration-[2000ms]
                                   opacity-0 group-hover:opacity-20 scale-110 group-hover:scale-100 grayscale hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-transparent" />
                </div>
            )}

            <div className="relative z-10 flex flex-col h-full">
                {/* ── Icon container (Imperial Gold) ── */}
                {icon && (
                    <div
                        className="mb-6 sm:mb-12 flex h-14 w-14 sm:h-20 sm:w-20 items-center justify-center
                                   border border-primary/20 bg-primary/5
                                   text-primary text-xl sm:text-3xl
                                   transition-all duration-700
                                   group-hover:border-primary/60
                                   group-hover:bg-primary group-hover:text-background 
                                   group-hover:shadow-[0_0_30px_rgba(197,160,89,0.3)]"
                    >
                        {icon}
                    </div>
                )}

                {/* ── Title ── */}
                <h3
                    className="mb-4 sm:mb-6 font-serif text-[1.4rem] sm:text-[1.8rem] leading-tight text-white tracking-wide
                               transition-colors duration-500 group-hover:text-primary"
                >
                    {title}
                </h3>

                {/* ── Description ── */}
                <p className="flex-1 text-[14px] sm:text-[16px] leading-relaxed text-foreground/50 transition-colors duration-500 group-hover:text-foreground/80 font-light">
                    {description}
                </p>

                {/* ── CTA row ── */}
                <div className="mt-8 sm:mt-12 flex items-center gap-4 sm:gap-5 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.4em] sm:tracking-[0.5em] text-primary/60 transition-all duration-500 group-hover:text-primary group-hover:gap-8">
                    <span>Signature Experience</span>
                    <MoveRight
                        size={14}
                        className="transition-all duration-500"
                    />
                </div>
            </div>

            {/* ── Imperial Accent ── */}
            <div className="absolute top-0 left-0 h-px w-0 bg-primary transition-all duration-1000 group-hover:w-full" />
            <div className="absolute bottom-0 right-0 h-px w-0 bg-primary transition-all duration-1000 group-hover:w-full" />

        </article>
    );
}