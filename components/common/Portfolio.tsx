import ImageList from "../ui/imageList";

export default function Portfolio() {
    const itemData = [
        { id: 1, img: "/images/p1.png", title: "Stage" },
        { id: 2, img: "/images/p2.png", title: "Haldi" },
        { id: 3, img: "/images/p3.jpeg", title: "Corridor" },
        { id: 4, img: "/images/p4.jpeg", title: "Haldi" },
        { id: 5, img: "/images/p5.jpeg", title: "Mandapm" },
        { id: 6, img: "/images/p2.png", title: "Haldi" },
    ];

    const filters = ["Haldi", "Mandapm", "Stages", "Corridor"];

    return (
        <section id="portfolio" className="section-pad bg-[#0a0a0a]">
            <div className="container-custom">

                {/* Header row */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
                    <div>
                        <span className="section-label animate-fade-in">Portfolio</span>
                        <h2 className="font-serif text-white leading-[1.05] animate-fade-in-up
                                       text-[clamp(2.4rem,5.5vw,4.5rem)]">
                            Visual{" "}
                            <span className="italic text-stroke">Masterpieces.</span>
                        </h2>
                    </div>

                    {/* Filters */}
                    <div className="flex flex-wrap gap-2.5 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                        {filters.map((f) => (
                            <button
                                key={f}
                                className="group relative overflow-hidden border border-white/15 px-6 py-2
                                           text-[10px] font-bold uppercase tracking-[0.3em] text-white/55
                                           transition-colors duration-400 hover:text-black"
                            >
                                <span className="relative z-10 transition-colors duration-400 group-hover:text-black">
                                    {f}
                                </span>
                                <div className="absolute inset-0 bg-[#c5a059] -translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-out" />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Gallery */}
                <div className="animate-fade-in-up" style={{ animationDelay: "0.25s" }}>
                    <ImageList itemData={itemData} />
                </div>
            </div>
        </section>
    );
}