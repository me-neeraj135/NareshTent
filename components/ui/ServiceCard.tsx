"use client";

import { ReactNode } from "react";
import { MoveRight } from "lucide-react";

interface ServiceCardProps {
    icon?: ReactNode;
    title: string;
    description: string;
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
    return (
        <article className="glass-card group relative flex flex-col h-full p-4 overflow-hidden
                            transition-all duration-500 hover:-translate-y-2 cursor-default ">




            {/* ── Top-right glow orb ── */}
            <div
                className="pointer-events-none absolute -top-12 -right-12 h-40 w-40 rounded-full
                           bg-[#c5a059]/10 blur-3xl transition-all duration-700
                           group-hover:bg-[#c5a059]/25 group-hover:scale-125"
                aria-hidden="true"
            />

            {/* ── Gold accent corner ── */}
            <div
                className="absolute top-0 left-0 h-[2px] w-0 bg-gradient-to-r from-[#c5a059] to-transparent
                           transition-all duration-700 group-hover:w-full"
                aria-hidden="true"
            />

            {/* ── Icon container ── */}
            {icon && (
                <div
                    className="mb-7 flex h-[60px] w-[60px] items-center justify-center
                               border border-[#c5a059]/30
                               bg-gradient-to-br from-[#c5a059]/15 to-[#c5a059]/5
                               text-[#c5a059] text-2xl
                               transition-all duration-500
                               group-hover:border-[#c5a059]/70
                               group-hover:bg-gradient-to-br group-hover:from-[#c5a059] group-hover:to-[#a68640]
                               group-hover:text-black group-hover:shadow-lg group-hover:shadow-[#c5a059]/25"
                >
                    {icon}
                </div>
            )}

            {/* ── Title ── */}
            <h3
                className="mb-2 font-serif text-[1.3rem] leading-tight text-white
                           transition-colors duration-300 group-hover:text-[#e7d3b0]"
            >
                {title}
            </h3>

            {/* ── Description ── */}
            <p className="flex-1 text-sm leading-[1.85] text-white/65 transition-colors duration-400 group-hover:text-white/80">
                {description}
            </p>

            {/* ── CTA row ── */}
            <div className="mt-7 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.32em] text-[#c5a059]">
                <span>Explore More</span>
                <MoveRight
                    size={13}
                    className="transition-all duration-400 group-hover:translate-x-2 group-hover:text-white"
                />
            </div>

            {/* ── Bottom shimmer line ── */}
            <div
                className="absolute bottom-0 left-0 h-[1.5px] w-0 transition-all duration-500 group-hover:w-full"
                style={{
                    background: "linear-gradient(90deg, transparent, #c5a059, transparent)",
                }}
                aria-hidden="true"
            />

        </article>


    );
}