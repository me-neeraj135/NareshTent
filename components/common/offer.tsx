"use client";

import { MdArchitecture } from "react-icons/md";
import { GiWoodFrame } from "react-icons/gi";
import { PiLightbulbFilament } from "react-icons/pi";
import { TbAirConditioning } from "react-icons/tb";
import { SiGotomeeting } from "react-icons/si";
import { FaChair } from "react-icons/fa";
import { useScrollReveal } from "../../hooks/useScrollReveal";

const offers = [
    { icon: <MdArchitecture />, label: "Palatial Exhibition Hangers", delay: 0 },
    { icon: <GiWoodFrame />, label: "Golden Platforms", delay: 100 },
    { icon: <PiLightbulbFilament />, label: "Crystal Art Lighting", delay: 200 },
    { icon: <TbAirConditioning />, label: "Climate Perfection", delay: 300 },
    { icon: <SiGotomeeting />, label: "Imperial Entryways", delay: 400 },
    { icon: <FaChair />, label: "Elite Lounge Collection", delay: 500 },
];

const galleryImages = [
    {
        src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&q=80&auto=format&fit=crop",
        alt: "Grand Exhibition Hanger", aspect: "aspect-[3/4]",
    },
    {
        src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80&auto=format&fit=crop",
        alt: "Luxury Event Lighting", aspect: "aspect-square",
    },
    {
        src: "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=800&q=80&auto=format&fit=crop",
        alt: "Premium Wedding Lounge", aspect: "aspect-square",
    },
    {
        src: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=800&q=80&auto=format&fit=crop",
        alt: "Thematic Entrance Design", aspect: "aspect-[3/4]",
    },
];

export default function WhatWeOffer() {
    const revealRef = useScrollReveal();

    return (
        <section id="offers" className="section-pad bg-background overflow-hidden">
            <div className="container-custom" ref={revealRef}>
                <div className="grid items-center gap-16 sm:gap-24 lg:grid-cols-2 lg:gap-32">

                    {/* ── LEFT ── */}
                    <div className="reveal-on-scroll">
                        <span className="section-label">Imperial Facilities</span>

                        <h2
                            className="mb-14 font-serif text-white leading-tight"
                            style={{ fontSize: "clamp(2.6rem, 6vw, 4.5rem)" }}
                        >
                            Infrastructure for<br />
                            <span className="text-gold italic">Divine Majesty.</span>
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-12">
                            {offers.map((item) => (
                                <div
                                    key={item.label}
                                    className="group flex items-center gap-6 transition-transform duration-700 hover:translate-x-3"
                                >
                                    <div className="flex-shrink-0 h-16 w-16 flex items-center justify-center
                                                    border border-primary/20 bg-primary/5 text-primary text-2xl
                                                    transition-all duration-700
                                                    group-hover:bg-primary group-hover:text-background group-hover:border-primary
                                                    group-hover:shadow-[0_0_30px_rgba(197,160,89,0.3)]">
                                        {item.icon}
                                    </div>
                                    <span className="text-[14px] font-bold uppercase tracking-[0.3em] text-foreground/30 group-hover:text-white transition-colors duration-500">
                                        {item.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ── RIGHT IMAGE MOSAIC ── */}
                    <div className="grid grid-cols-2 gap-6 reveal-on-scroll" style={{ transitionDelay: '200ms' }}>
                        <div className="flex flex-col gap-6">
                            {galleryImages.slice(0, 2).map((img, i) => (
                                <div key={i} className={`overflow-hidden glass-card group ${img.aspect}`}>
                                    <img src={img.src} alt={img.alt} loading="lazy"
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col gap-6 pt-12">
                            {galleryImages.slice(2, 4).map((img, i) => (
                                <div key={i} className={`overflow-hidden glass-card group ${img.aspect}`}>
                                    <img src={img.src} alt={img.alt} loading="lazy"
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}