import ServiceCard from "../ui/ServiceCard";
import { MdCelebration } from "react-icons/md";
import { GiFlowerPot, GiCandleLight } from "react-icons/gi";
import { TbStar, TbCamera, TbConfetti } from "react-icons/tb";

const services = [
    {
        icon: <MdCelebration />,
        title: "Wedding Design",
        description: "Transforming your dream wedding into a breathtaking reality with bespoke thematic decor and meticulous attention to every detail.",
    },
    {
        icon: <GiFlowerPot />,
        title: "Floral Artistry",
        description: "Masterfully crafted floral arrangements — from intimate centerpieces to grand stage backdrops — that evoke beauty and elegance.",
    },
    {
        icon: <GiCandleLight />,
        title: "Lighting Design",
        description: "Innovative lighting setups that set the perfect mood, from warm candlelit ambiance to dramatic architectural illumination.",
    },
    {
        icon: <TbStar />,
        title: "Stage & Mandap",
        description: "Custom-built stages and mandap structures with premium materials and luxury finishes that command attention.",
    },
    {
        icon: <TbCamera />,
        title: "Backdrop & Hanger",
        description: "Stunning backdrop designs and exhibition hangers that create the perfect frame for your most cherished moments.",
    },
    {
        icon: <TbConfetti />,
        title: "Full Event Setup",
        description: "End-to-end event infrastructure including seating, tenting, air-conditioning and complete venue transformation.",
    },
];

export default function Expertise() {
    return (
        <section id="expertise" className="section-pad relative bg-[#050505] overflow-hidden">
            {/* Dot grid */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-[0.028]"
                style={{
                    backgroundImage: "radial-gradient(#c5a059 1px, transparent 1px)",
                    backgroundSize: "38px 38px",
                }}
            />

            <div className="container-custom relative z-10">
                {/* Header */}
                <div className="mb-12 max-w-xl">
                    <span className="section-label animate-fade-in">Our Expertise</span>
                    <h2
                        className="font-serif text-white leading-[1.05] animate-fade-in-up"
                        style={{ fontSize: "clamp(2.4rem, 5.5vw, 4.25rem)" }}
                    >
                        Curated{" "}
                        <span className="text-stroke italic">Segments</span>
                    </h2>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
                    {services.map((s, i) => (
                        <div
                            key={i}
                            className="animate-fade-in-up"
                            style={{ animationDelay: `${i * 0.08}s` }}
                        >
                            <ServiceCard {...s} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}