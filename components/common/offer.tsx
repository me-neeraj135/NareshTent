import { MdArchitecture } from "react-icons/md";
import { GiWoodFrame } from "react-icons/gi";
import { PiLightbulbFilament } from "react-icons/pi";
import { TbAirConditioning } from "react-icons/tb";
import { SiGotomeeting } from "react-icons/si";
import { FaChair } from "react-icons/fa";

const offers = [
    { icon: <MdArchitecture />, label: "Exhibition Hangers", delay: "0s" },
    { icon: <GiWoodFrame />, label: "Wooden Platforms", delay: "0.07s" },
    { icon: <PiLightbulbFilament />, label: "Designer Lighting", delay: "0.14s" },
    { icon: <TbAirConditioning />, label: "Air Conditioning", delay: "0.21s" },
    { icon: <SiGotomeeting />, label: "Thematic Entry Gates", delay: "0.28s" },
    { icon: <FaChair />, label: "Custom Furniture", delay: "0.35s" },
];

const galleryImages = [
    {
        src: "https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?w=800&q=80&auto=format&fit=crop",
        alt: "Wedding decor", aspect: "aspect-[3/4]",
    },
    {
        src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80&auto=format&fit=crop",
        alt: "Floral arrangement", aspect: "aspect-square",
    },
    {
        src: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=800&q=80&auto=format&fit=crop",
        alt: "Stage lighting", aspect: "aspect-square",
    },
    {
        src: "https://images.unsplash.com/photo-1544078751-58fee2d8a03b?w=800&q=80&auto=format&fit=crop",
        alt: "Reception hall", aspect: "aspect-[3/4]",
    },
];

export default function WhatWeOffer() {
    return (
        <section id="offers" className="section-pad bg-[#060606]">
            <div className="container-custom">
                <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

                    {/* ── LEFT ── */}
                    <div>
                        <span className="section-label animate-fade-in">What We Offer</span>

                        <h2
                            className="mb-11 font-serif text-white leading-[1.05] animate-fade-in-up"
                            style={{ fontSize: "clamp(2.4rem, 5.5vw, 4rem)" }}
                        >
                            Bespoke Event<br />Infrastructure
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-7">
                            {offers.map((item) => (
                                <div
                                    key={item.label}
                                    className="group flex items-center gap-4 animate-fade-in-up"
                                    style={{ animationDelay: item.delay }}
                                >
                                    <div className="flex-shrink-0 h-11 w-11 flex items-center justify-center
                                                    border border-[#c5a059]/25 bg-[#c5a059]/8 text-[#c5a059] text-lg
                                                    transition-all duration-400
                                                    group-hover:bg-[#c5a059] group-hover:text-black group-hover:border-[#c5a059]">
                                        {item.icon}
                                    </div>
                                    <span className="text-sm font-medium text-white/72 tracking-wide group-hover:text-white transition-colors duration-300">
                                        {item.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ── RIGHT IMAGE MOSAIC ── */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col gap-4">
                            {galleryImages.slice(0, 2).map((img, i) => (
                                <div key={i} className={`overflow-hidden glass-card group ${img.aspect}`}>
                                    <img src={img.src} alt={img.alt} loading="lazy"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-107" />
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col gap-4 pt-10">
                            {galleryImages.slice(2, 4).map((img, i) => (
                                <div key={i} className={`overflow-hidden glass-card group ${img.aspect}`}>
                                    <img src={img.src} alt={img.alt} loading="lazy"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-107" />
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}