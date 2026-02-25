"use client";

import ServiceCard from "../ui/ServiceCard";
import { MdCelebration } from "react-icons/md";
import { GiFlowerPot, GiCandleLight } from "react-icons/gi";
import { TbStar, TbCamera, TbConfetti } from "react-icons/tb";
import { useScrollReveal } from "../../hooks/useScrollReveal";

const services = [
    {
        icon: <MdCelebration />,
        title: "Empire Wedding Couture",
        description: "Bespoke thematic environments crafted with imperial precision for your most sacred celebration.",
        image: "https://images.unsplash.com/photo-1519741347686-c1e0aadf4611?w=800&q=80&auto=format&fit=crop",
    },
    {
        icon: <GiFlowerPot />,
        title: "Royal Floral Sculptures",
        description: "Exquisite botanical installations and ceiling-mounted masterpieces that breathe life into the palace.",
        image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80&auto=format&fit=crop",
    },
    {
        icon: <GiCandleLight />,
        title: "Champagne Ambiance",
        description: "Masterfully orchestrated night lighting and crystal chandelier designs for an eternal glow.",
        image: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=800&q=80&auto=format&fit=crop",
    },
    {
        icon: <TbStar />,
        title: "Palatial Mandaps",
        description: "Regal structures inspired by heritage and divine symmetry, serving as the heart of your ritual.",
        image: "https://images.unsplash.com/photo-1544078751-58fee2d8a03b?w=800&q=80&auto=format&fit=crop",
    },
    {
        icon: <TbCamera />,
        title: "Signature Vistas",
        description: "Curated photographic backdrops and cinematic layouts that frame every moment as a legacy.",
        image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80&auto=format&fit=crop",
    },
    {
        icon: <TbConfetti />,
        title: "Discreet Concierge",
        description: "Seamless orchestration and private management of grand transformations for the chosen few.",
        image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&q=80&auto=format&fit=crop",
    },
];

export default function Expertise() {
    const revealRef = useScrollReveal();

    return (
        <section id="expertise" className="section-pad relative bg-background overflow-hidden">
            {/* Background Texture & Glows */}
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: `radial-gradient(var(--primary) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#f2e1e1]/40 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#d9e0d3]/30 rounded-full blur-[150px] pointer-events-none" />

            <div className="container-custom relative z-10" ref={revealRef}>
                {/* Header */}
                <div className="mb-16 sm:mb-24 max-w-4xl reveal-on-scroll">
                    <span className="section-label">Our Masterpieces</span>
                    <h2
                        className="font-serif text-white leading-tight mb-10"
                        style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)" }}
                    >
                        Signature <span className="text-gold italic">Wedding Services.</span>
                    </h2>
                    <p className="text-foreground/40 text-[19px] font-light max-w-2xl leading-relaxed">
                        We orchestrate high-profile celebrations with structural precision and
                        ethereal beauty. Each service is a pillar of our commitment to ancestral
                        magnificence and contemporary luxury.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-2 md:px-0">
                    {services.map((s, i) => (
                        <div
                            key={i}
                            className="reveal-on-scroll"
                            style={{ transitionDelay: `${i * 150}ms` }}
                        >
                            <ServiceCard {...s} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}