import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
    return (
        <section className="relative overflow-hidden bg-black" style={{ padding: 0 }}>
            {/* Background */}
            <div className="absolute inset-0">
                <img
                    alt="Grand wedding event venue"
                    src="https://images.unsplash.com/flagged/photo-1566150217714-ebfea356f885?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    className="h-full w-full object-cover brightness-[0.18]"
                    loading="lazy"
                    decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
            </div>

            {/* Content */}
            <div className="section-pad relative z-10">
                <div className="container-custom text-center">
                    <div className="max-w-3xl mx-auto">
                        <span className="section-label mb-7 block animate-fade-in">Start Your Journey</span>

                        <h2 className="mb-8 font-serif text-white leading-[0.9] tracking-tighter animate-fade-in-up
                                       text-[clamp(3rem,10vw,8rem)]">
                            Begin Your<br />
                            <span className="italic text-[#e7d3b0]">Legacy.</span>
                        </h2>

                        <p className="mb-12 text-base md:text-lg font-light text-white/50 max-w-lg mx-auto leading-relaxed animate-fade-in-up"
                            style={{ animationDelay: "0.15s" }}>
                            Whether an intimate gathering or a royal-scale wedding —
                            let Naresh Tent House architect your perfect day.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up"
                            style={{ animationDelay: "0.3s" }}>
                            <Link
                                href="https://wa.me/916388722101?text=Hello!%20I%27d%20like%20to%20inquire%20about%20your%20event%20services."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center gap-2.5 bg-[#c5a059] px-10 py-4
                                           text-[11px] font-bold uppercase tracking-[0.3em] text-black
                                           transition-all duration-300 hover:bg-[#e7d3b0]"
                            >
                                Start Planning
                                <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                            </Link>

                            <Link
                                href="tel:+916388722101"
                                className="inline-flex items-center gap-2.5 border border-white/20 px-10 py-4
                                           text-[11px] font-bold uppercase tracking-[0.3em] text-white/65
                                           transition-all duration-300 hover:border-[#c5a059] hover:text-[#c5a059]"
                            >
                                Call Us Now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}