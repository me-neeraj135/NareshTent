"use client";

import { useScrollReveal } from "../../hooks/useScrollReveal";
import { TbCamera, TbVideo, TbMusic } from "react-icons/tb";
import { GiStarsStack, GiFlowerPot } from "react-icons/gi";

// Rich data block outlining Media Categories
const categories = [
    {
        id: "decor",
        icon: <GiFlowerPot />,
        title: "Palatial Decor & Architecture",
        label: "Ancestral majesty translated into structural reality.",
        description: "Explore our breathtaking heritage designs, bespoke structural artistry, floral entrances, and divine mandaps.",
        items: [
            {
                type: "image",
                src: "/images/banner4.jpg",
                title: "Royal Stage"
            },
            {
                type: "image",
                src: "/images/banner7.jpg",
                title: "Sacred Mandap"
            },
            {
                type: "image",
                src: "/images/p3.jpeg",
                title: "Corridor Art"
            }
        ]
    },
    {
        id: "photography",
        icon: <TbCamera />,
        title: "Imperial Photography",
        label: "Timeless captures immortalized in pure elegance.",
        description: "Our world-class photographers curate frames ensuring every smile, ritual, and tear of joy is documented beautifully.",
        items: [
            {
                type: "image",
                src: "/images/photography/ph1.jpg",
                title: "Groom"
            },
            {
                type: "image",
                src: "/images/photography/ph2.jpg",
                title: "Pre wedding"
            },
            {
                type: "image",
                src: "/images/photography/ph3.jpg",
                title: "Bridal"
            },
            {
                type: "image",
                src: "/images/photography/ph4.jpg",
                title: "Bridal"
            },
            {
                type: "image",
                src: "/images/photography/ph5.jpg",
                title: "Bridal"
            },
            {
                type: "image",
                src: "/images/photography/ph6.jpg",
                title: "Bridal"
            },


        ]
    },
    {
        id: "videography",
        icon: <TbVideo />,
        title: "Cinematic Videography",
        label: "Indian Weddings captured with divine precision.",
        description: "Bespoke cinematic story-telling that frames every emotion as an eternal legacy. We masterfully capture the deep heritage and emotional resonance of Indian traditions.",
        items: [
            {
                type: "video",
                src: "/videos/vd1.mp4", // Placeholder for actual elegant wedding film
                title: ""
            },
            {
                type: "video",
                src: "/videos/vd2.mp4", // Placeholder for actual elegant wedding film
                title: ""
            },
            {
                type: "video",
                src: "/videos/vd3.mp4", // Placeholder for actual elegant wedding film
                title: ""
            },

        ]
    },
    {
        id: "dj",
        icon: <TbMusic />,
        title: "Elite DJ Nights",
        label: "Masterfully orchestrated audio experiences.",
        description: "Pulse-pounding rhythms and grand entertainment tailored for celestial celebrations. Our elite DJs transform your nights into unforgettable, high-energy symphonies.",
        items: [
            {
                type: "image",
                src: "/images/dj/dj1.jpg",
                title: "Main Stage"
            },
            {
                type: "image",
                src: "/images/dj/dj2.jpg", // Placeholder for DJ night
                title: "Symphony of Lights"
            },
            {
                type: "image",
                src: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80",
                title: "Immersive Sound"
            }
        ]
    },
    {
        id: "fireworks",
        icon: <GiStarsStack />,
        title: "Fireworks & Pyrotechnics",
        label: "Illuminating the heavens in your honor.",
        description: "Spectacular aerial fireworks and sophisticated stage pyrotechnics designed to complement your grandest moments—from grand entries to the final farewell.",
        items: [
            {
                type: "image",
                src: "/images/firework/fr1.jpg", // Realistic firework video embed
                title: "Palatial Fireworks"
            },
            {
                type: "image",
                src: "/images/firework/fr2.jpg",
                title: "Skyline Displays"
            },
            {
                type: "image",
                src: "/images/firework/fr3.jpg",
                title: "Cold Spark Pyrotechnics"
            }
        ]
    }
];

export default function MediaContent() {
    const revealRef = useScrollReveal();

    return (
        <section className="pt-40 pb-24 bg-background overflow-hidden relative min-h-screen">
            {/* Background Texture & Glows */}
            <div
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: `radial-gradient(var(--primary) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#f2e1e1]/20 rounded-full blur-[150px] pointer-events-none" />

            <div className="container-custom relative z-10" ref={revealRef}>
                {/* ── Header ── */}
                <div className="mb-24 text-center reveal-on-scroll">
                    <span className="section-label mx-auto mb-4">Media Archive</span>
                    <h1
                        className="font-serif text-white mb-6 leading-tight"
                        style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)" }}
                    >
                        Our <span className="text-gold italic">Visual Legacy.</span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-[18px] text-foreground/50 font-light leading-relaxed">
                        Explore our curated collection showcasing Palatial Decor, Imperial Photography, cinematic videography, elite entertainment, and grand pyrotechnics.
                        Each frame reflects our commitment to unparalleled luxury.
                    </p>
                </div>

                {/* ── Categories ── */}
                <div className="flex flex-col gap-32">
                    {categories.map((cat, index) => (
                        <div key={cat.id} className="reveal-on-scroll" style={{ transitionDelay: `${index * 100}ms` }}>

                            {/* Category Text Header */}
                            <div className="flex flex-col md:flex-row gap-8 mb-12">
                                <div className="md:w-1/3">
                                    <div className="flex items-center gap-4 text-primary text-3xl mb-4">
                                        <div className="p-4 border border-primary/20 bg-primary/5 rounded-none group hover:text-background transition-all">
                                            {cat.icon}
                                        </div>
                                    </div>
                                    <h2 className="font-serif text-3xl text-white mb-2">{cat.title}</h2>
                                    <h3 className="text-[12px] uppercase tracking-[0.3em] font-bold text-primary/70 mb-4">{cat.label}</h3>
                                </div>
                                <div className="md:w-2/3 md:pl-10 border-l border-primary/20 flex items-center">
                                    <p className="text-foreground/60 text-[16px] font-light leading-relaxed max-w-xl">
                                        {cat.description}
                                    </p>
                                </div>
                            </div>

                            {/* Category Media Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {cat.items.map((item, i) => (
                                    <div key={i} className="group relative overflow-hidden glass-card aspect-[4/3] w-full border-primary/10">
                                        {item.type === "video" ? (
                                            <div className="absolute inset-0">
                                                <video
                                                    src={item.src}
                                                    title={item.title}
                                                    autoPlay
                                                    loop
                                                    muted
                                                    playsInline
                                                    className="w-full h-full object-cover transition-all duration-[1000ms] group-hover:scale-105"
                                                />
                                                <div className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-t from-background/90 via-background/40 to-transparent pointer-events-none" />
                                            </div>
                                        ) : (
                                            <div className="absolute inset-0">
                                                <img
                                                    src={item.src}
                                                    alt={item.title}
                                                    className="w-full h-full object-cover transition-all duration-[2000ms] group-hover:scale-105  "
                                                />
                                                <div className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-t from-background/90 via-background/40 to-transparent pointer-events-none" />
                                            </div>
                                        )}
                                        {/* Label */}
                                        <div className="absolute bottom-6 left-6 right-6 z-10 pointer-events-none">
                                            <h4 className="font-serif text-2xl text-white transition-colors duration-500 group-hover:text-gold">
                                                {item.title}
                                            </h4>
                                            <div className="h-px w-0 bg-primary mt-4 transition-all duration-1000 group-hover:w-full" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
