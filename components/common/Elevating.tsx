import { BsStars } from "react-icons/bs";
import Button from "../ui/Button";

export default function Elevating() {
    return (
        <section
            id="elevating"
            className="section-pad relative bg-[#0a0a0a] overflow-hidden"
        >
            {/* Radial glow — CSS animation, no JS needed */}
            <div
                className="pointer-events-none absolute inset-0 flex items-center justify-center"
                aria-hidden="true"
            >
                <div className="h-[550px] w-[550px] rounded-full bg-[#c5a059]/6 blur-[140px] animate-glow-pulse" />
            </div>

            <div className="container-custom relative z-10">
                <div className="mx-auto flex max-w-2xl flex-col items-center text-center">

                    {/* Stars divider */}
                    <div className="mb-8 flex items-center gap-5 text-[#c5a059] animate-fade-in">
                        <div className="h-px w-10 bg-[#c5a059]/40" />
                        <BsStars className="text-xl opacity-80" />
                        <div className="h-px w-10 bg-[#c5a059]/40" />
                    </div>

                    {/* Heading */}
                    <h2
                        className="mb-6 font-serif text-white tracking-tighter leading-[0.95] animate-fade-in-up"
                        style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)" }}
                    >
                        Elevating Moments<br />
                        Into{" "}
                        <em className="not-italic text-[#e7d3b0]">Memories.</em>
                    </h2>

                    {/* Description — brighter! */}
                    <p
                        className="mb-10 text-base md:text-[1.05rem] font-light leading-[1.9] text-white/70 max-w-xl animate-fade-in-up"
                        style={{ animationDelay: "0.15s" }}
                    >
                        Naresh Tent House is a premier wedding design and event planning powerhouse.
                        We transform visions into breathtaking realities through bespoke upholstery,
                        innovative lighting, and masterful floral arrangements.
                    </p>

                    {/* CTA */}
                    <div className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                        <Button />
                    </div>

                    {/* Vertical branding */}
                    <div
                        className="mt-14 flex flex-col items-center gap-4 animate-fade-in"
                        style={{ animationDelay: "0.5s" }}
                    >
                        <div className="h-14 w-px bg-gradient-to-b from-[#c5a059]/55 to-transparent" />
                        <span className="text-[9px] uppercase tracking-[0.65em] text-[#c5a059]/45 font-sans">
                            The NTH Standard
                        </span>
                    </div>

                </div>
            </div>
        </section>
    );
}