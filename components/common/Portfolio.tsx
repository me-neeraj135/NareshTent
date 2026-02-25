"use client";

import ImageList from "../ui/imageList";
import { useScrollReveal } from "../../hooks/useScrollReveal";

export default function Portfolio() {
    const revealRef = useScrollReveal();

    const itemData = [
        { id: 1, img: "/images/p1.png", title: "Royal Stage", category: "Stages" },
        { id: 2, img: "/images/p2.png", title: "Haldi Decor", category: "Haldi" },
        { id: 3, img: "/images/p3.jpeg", title: "Corridor Art", category: "Corridor" },
        { id: 4, img: "/images/p4.jpeg", title: "Haldi Vibes", category: "Haldi" },
        { id: 5, img: "/images/p5.jpeg", title: "Sacred Mandap", category: "Mandap" },
        { id: 6, img: "/images/banner1.jpg", title: "Floral Entry", category: "Corridor" },
        { id: 7, img: "/images/banner2.jpg", title: "Dining Area", category: "Dining" },
        { id: 8, img: "/images/banner3.jpg", title: "Evening Glow", category: "Corridor" },
        { id: 9, img: "/images/banner4.jpg", title: "Royal Stage", category: "Stages" },
        { id: 10, img: "/images/banner5.jpg", title: "Royal Stage", category: "Stages" },
        { id: 11, img: "/images/banner6.jpg", title: "Royal Stage", category: "Stages" },
        { id: 12, img: "/images/banner7.jpg", title: "Sacred Mandap", category: "Mandap" },
        { id: 13, img: "/images/banner8.jpg", title: "Sacred Entry", category: "Eentry Gate" },
        { id: 14, img: "/images/banner9.jpg", title: "Romantic Stage", category: "Stages" },
    ];

    const filters = ["All", "Haldi", "Mandap", "Stages", "Corridor"];

    return (
        <section id="portfolio" className="section-pad bg-background relative overflow-hidden">
            <div className="container-custom relative z-10" ref={revealRef}>

                {/* Header row */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-16 sm:mb-24 reveal-on-scroll">
                    <div>
                        <span className="section-label">Selected Works</span>
                        <h2 className="font-serif text-white leading-tight
                                       text-[clamp(3rem,7vw,5.5rem)]">
                            Curated <span className="italic text-gold">Stories.</span>
                        </h2>
                    </div>

                    {/* Filters */}
                    <div className="flex flex-wrap gap-6">
                        {filters.map((f, i) => (
                            <button
                                key={f}
                                className="group relative overflow-hidden px-10 py-4
                                           text-[10px] font-bold uppercase tracking-[0.4em] text-foreground/30
                                           transition-all duration-700 hover:text-white"
                            >
                                <span className="relative z-10">{f}</span>
                                {/* Champagne Underline */}
                                <span className="absolute bottom-0 left-0 h-px w-0 bg-primary transition-all duration-700 group-hover:w-full" />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Gallery */}
                <div className="reveal-on-scroll" style={{ transitionDelay: "200ms" }}>
                    <ImageList itemData={itemData} />
                </div>
            </div>
        </section>
    );
}
