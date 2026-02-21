import Link from "next/link";
import { IoLocationOutline, IoCallOutline, IoMailOutline } from "react-icons/io5";
import { FiArrowUpRight } from "react-icons/fi";

export default function Footer() {
    const serviceAreas = ["Nauranga", "Rath", "Rath-Block"];
    const socials = ["Instagram", "Facebook", "LinkedIn"];
    const legal = ["Privacy", "Terms", "Sitemap"];

    return (
        <footer
            id="contact"
            className="relative bg-[#070707] border-t border-white/8 overflow-hidden"
        >
            {/* Ambient glow */}
            <div
                className="pointer-events-none absolute -bottom-24 -right-24 h-[480px] w-[480px]
                           rounded-full bg-[#c5a059]/5 blur-[160px]"
                aria-hidden="true"
            />

            <div className="container-custom relative z-10 pt-24 pb-12">

                {/* ── Gold rule ── */}
                <div className="gold-line mb-16" />

                {/* ── Main grid ── */}
                <div className="grid gap-14 lg:grid-cols-12 mb-16">

                    {/* Brand */}
                    <div className="lg:col-span-4 flex flex-col gap-7">
                        <Link href="/" className="inline-flex flex-col leading-none group">
                            <span className="text-[2.4rem] font-black tracking-tighter text-[#c5a059]
                                            transition-opacity duration-300 group-hover:opacity-80">
                                NARESH
                            </span>
                            <span className="mt-1 text-[9px] uppercase tracking-[0.55em] text-[#e7d3b0]/50 font-sans font-medium">
                                Tent House
                            </span>
                        </Link>

                        <p className="text-sm font-light leading-[1.9] text-white/60 max-w-xs">
                            Redefining the architecture of celebrations — from grand exhibition hangers
                            to bespoke thematic decor — crafting experiences that last a lifetime.
                        </p>

                        <nav aria-label="Social links" className="flex items-center gap-6">
                            {socials.map((s) => (
                                <Link
                                    key={s}
                                    href="#"
                                    className="text-[10px] uppercase tracking-[0.35em] text-white/38
                                               hover:text-[#c5a059] transition-colors duration-300"
                                >
                                    {s}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Contact + Location */}
                    <div className="lg:col-span-4 flex flex-col gap-10">
                        {/* Consultation */}
                        <div>
                            <h3 className="mb-6 text-[10px] uppercase tracking-[0.5em] text-[#c5a059] font-bold font-sans">
                                Consultation
                            </h3>
                            <ul className="flex flex-col gap-5">
                                <li>
                                    <a href="tel:+916388722101"
                                        className="group flex items-center gap-4 text-white/60 hover:text-white transition-colors duration-300">
                                        <div className="h-10 w-10 flex-shrink-0 flex items-center justify-center
                                                        border border-[#c5a059]/25 text-[#c5a059]
                                                        transition-all duration-300 group-hover:border-[#c5a059] group-hover:bg-[#c5a059]/10">
                                            <IoCallOutline size={16} />
                                        </div>
                                        <span className="text-sm tracking-wide">+91 63887 22101</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="mailto:me.naresh141@gmail.com"
                                        className="group flex items-center gap-4 text-white/60 hover:text-white transition-colors duration-300">
                                        <div className="h-10 w-10 flex-shrink-0 flex items-center justify-center
                                                        border border-[#c5a059]/25 text-[#c5a059]
                                                        transition-all duration-300 group-hover:border-[#c5a059] group-hover:bg-[#c5a059]/10">
                                            <IoMailOutline size={16} />
                                        </div>
                                        <span className="text-sm tracking-wide">me.naresh141@gmail.com</span>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Location */}
                        <div>

                            <div className="group flex items-start gap-4 text-white/60">
                                <div className="h-10 w-10 flex-shrink-0 flex items-center justify-center
                                                border border-[#c5a059]/25 text-[#c5a059] mt-0.5
                                                transition-all duration-300 group-hover:border-[#c5a059] group-hover:bg-[#c5a059]/10">
                                    <IoLocationOutline size={16} />
                                </div>
                                <address className="not-italic text-sm leading-[1.85]">
                                    Ushaat Street, Nauranga,<br />
                                    Uttar Pradesh 210428
                                </address>
                            </div>
                        </div>
                    </div>

                    {/* Service Areas */}
                    <div className="lg:col-span-4">
                        <h3 className="mb-6 text-[10px] uppercase tracking-[0.5em] text-[#c5a059] font-bold font-sans">
                            Service Areas
                        </h3>
                        <div className="flex flex-col">
                            {serviceAreas.map((area) => (
                                <div
                                    key={area}
                                    className="group flex items-center justify-between py-3.5
                                               border-b border-white/7 transition-colors duration-300
                                               hover:border-[#c5a059]/30 cursor-default"
                                >
                                    <span className="text-sm text-white/58 group-hover:text-white transition-colors duration-300">
                                        {area}
                                    </span>
                                    <FiArrowUpRight
                                        size={14}
                                        className="text-[#c5a059] opacity-0 translate-y-1
                                                   group-hover:opacity-100 group-hover:translate-y-0
                                                   transition-all duration-300"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ── Bottom bar ── */}
                <div className="gold-line mb-8" />
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-[10px] uppercase tracking-[0.45em] text-white/30">
                        © 2026 Naresh Tent House. All rights reserved.
                    </p>
                    <nav className="flex gap-8" aria-label="Legal links">
                        {legal.map((item) => (
                            <Link
                                key={item}
                                href="#"
                                className="text-[10px] uppercase tracking-[0.28em] text-white/30
                                           hover:text-[#c5a059] transition-colors duration-300"
                            >
                                {item}
                            </Link>
                        ))}
                    </nav>
                </div>

            </div>
        </footer>
    );
}