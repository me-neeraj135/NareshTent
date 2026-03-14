"use client";

import ServiceCard from "../ui/ServiceCard";
import { TbCamera, TbVideo, TbMusic } from "react-icons/tb";
import { GiStarsStack } from "react-icons/gi";
import { useScrollReveal } from "../../hooks/useScrollReveal";

const services = [
    {
        icon: <TbCamera />,
        title: "Imperial Photography",
        description: "Curated frames and timeless captures that immortalize your most sacred moments in pure elegance.",
        image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80&auto=format&fit=crop",
    },
    {
        icon: <TbVideo />,
        title: "Cinematic Videography",
        description: "Bespoke cinematic story-telling and visual masterpieces that frame every emotion as an eternal legacy.",
        image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&q=80&auto=format&fit=crop",
    },
    {
        icon: <TbMusic />,
        title: "Elite DJ & Sound",
        description: "Masterfully orchestrated audio experiences and grand entertainment for a royal celebration.",
        image: "https://images.unsplash.com/photo-1545128485-c400e7702796?w=800&q=80&auto=format&fit=crop",
    },
    {
        icon: <GiStarsStack />,
        title: "Fireworks & Pyrotechnics",
        description: "Spectacular aerial fireworks and sophisticated stage pyrotechnics designed to complement your grandest moments.",
        image: "https://images.unsplash.com/photo-1498550744921-75f79806b8a7?w=800&q=80&auto=format&fit=crop",
    }
];

export default function MediaSection() {
    const revealRef = useScrollReveal();

    return (
        <section id="media" className="section-pad relative bg-background overflow-hidden border-t border-primary/10">
            {/* Background Texture & Glows */}
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: `radial-gradient(var(--primary) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#f2e1e1]/20 rounded-full blur-[120px] pointer-events-none" />

            <div className="container-custom relative z-10" ref={revealRef}>
                {/* Header */}
                <div className="mb-16 sm:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-12 reveal-on-scroll">
                    <div className="max-w-3xl">
                        <span className="section-label">Capture & Celebrate</span>
                        <h2
                            className="font-serif text-white leading-tight mb-6"
                            style={{ fontSize: "clamp(2.8rem, 7vw, 4.5rem)" }}
                        >
                            Media, Fireworks & <br />
                            <span className="text-gold italic">Entertainment.</span>
                        </h2>
                        <p className="text-foreground/40 text-[19px] font-light leading-relaxed">
                            Discover our world-class visual storytelling, breathtaking grand fireworks, and elite entertainment services.
                        </p>
                    </div>
                    <div className="flex-shrink-0 pb-4">
                        <a
                            href="/media"
                            className="inline-flex items-center gap-4 px-8 py-4 text-[10px] font-bold uppercase tracking-[0.4em] text-background bg-primary transition-all duration-500 hover:bg-primary-light hover:scale-105"
                        >
                            View All Media Gallery
                        </a>
                    </div>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-2 md:px-0">
                    {services.map((s, i) => (
                        <div
                            key={i}
                            className="reveal-on-scroll h-full"
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
