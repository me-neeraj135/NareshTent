"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { IoLocationOutline, IoCallOutline, IoMailOutline } from "react-icons/io5";

export default function Footer() {
    const socials = ["Instagram", "Facebook", "LinkedIn"];
    const [year, setYear] = useState<number | string>(new Date().getFullYear());

    useEffect(() => {
        setYear(new Date().getFullYear());
    }, []);

    return (
        <footer
            id="contact"
            className="relative bg-background border-t border-primary/20 overflow-hidden py-8"
        >
            {/* Cinematic Glows */}
            <div
                className="pointer-events-none absolute -bottom-24 -right-24 h-[600px] w-[600px]
                           rounded-full bg-primary/5 blur-[160px] opacity-40"
                aria-hidden="true"
            />
            <div
                className="pointer-events-none absolute -top-24 -left-24 h-[500px] w-[500px]
                           rounded-full bg-primary/5 blur-[150px] opacity-20"
                aria-hidden="true"
            />

            <div className="container-custom relative z-10 pt-[clamp(6rem,12vw,12rem)] pb-[clamp(4rem,8vw,8rem)]">

                {/* ── Main grid ── */}
                <div className="grid gap-12 sm:gap-20 lg:grid-cols-12 mb-16 sm:mb-24">

                    {/* Brand */}
                    <div className="lg:col-span-5 flex flex-col gap-10">
                        <Link href="/" className="inline-flex flex-col leading-none group">
                            <span className="text-[3rem] font-serif tracking-widest text-gold
                                            transition-all duration-500">
                                NARESH
                            </span>
                            <span className="mt-2 text-[10px] uppercase tracking-[0.8em] text-primary font-bold">
                                Tent House
                            </span>
                        </Link>

                        <p className="text-[17px] font-light leading-[1.8] text-white/40 max-w-sm italic">
                            Architects of celestial celebrations and structural legacies for the chosen few.
                            Where grandeur transcends time.
                        </p>

                        <nav aria-label="Social links" className="flex items-center gap-10 mt-6">
                            {socials.map((s) => (
                                <Link
                                    key={s}
                                    href="#"
                                    className="text-[10px] uppercase tracking-[0.5em] text-white/30
                                               hover:text-primary transition-colors duration-500"
                                >
                                    {s}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Contact + Location */}
                    <div className="lg:col-span-4 flex flex-col gap-16">
                        {/* Consultation */}
                        <div>
                            <h3 className="mb-10 text-[10px] uppercase tracking-[0.7em] text-primary font-bold">
                                Private Inquiry
                            </h3>
                            <ul className="flex flex-col gap-8">
                                <li>
                                    <a href="tel:+916388722101"
                                        className="group flex items-center gap-6 text-white/40 hover:text-white transition-colors duration-500">
                                        <span className="h-14 w-14 flex-shrink-0 flex items-center justify-center
                                                        border border-primary/20 text-primary
                                                        transition-all duration-500 group-hover:bg-primary group-hover:text-background group-hover:shadow-[0_0_20px_rgba(197,160,89,0.3)]">
                                            <IoCallOutline size={20} />
                                        </span>
                                        <span className="text-[16px] tracking-[0.1em]">+91 63887 22101</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="mailto:me.naresh141@gmail.com"
                                        className="group flex items-center gap-6 text-white/40 hover:text-white transition-colors duration-500">
                                        <span className="h-14 w-14 flex-shrink-0 flex items-center justify-center
                                                        border border-primary/20 text-primary
                                                        transition-all duration-500 group-hover:bg-primary group-hover:text-background group-hover:shadow-[0_0_20px_rgba(197,160,89,0.3)]">
                                            <IoMailOutline size={20} />
                                        </span>
                                        <span className="text-[16px] tracking-[0.1em]">me.naresh141@gmail.com</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Location */}
                    <div className="lg:col-span-3">
                        <h3 className="mb-10 text-[10px] uppercase tracking-[0.7em] text-primary font-bold">
                            Address
                        </h3>
                        <div className="group flex items-start gap-6 text-white/40">
                            <div className="h-14 w-14 flex-shrink-0 flex items-center justify-center
                                            border border-primary/20 text-primary transition-all duration-500">
                                <IoLocationOutline size={20} />
                            </div>
                            <address className="not-italic text-[16px] leading-[1.9] text-white/40 font-light">
                                <span className="text-white font-medium tracking-wide">Ushaat Street</span><br />
                                Nauranga,Rath, Uttar Pradesh<br />
                                210428, India
                            </address>
                        </div>
                    </div>
                </div>

                {/* ── Bottom bar ── */}
                <div className="pt-12 border-t border-primary/10 flex flex-col md:flex-row justify-between items-center gap-8">
                    <p className="text-[10px] uppercase tracking-[0.4em] text-white/20" suppressHydrationWarning>
                        &copy; {year} Naresh Imperial. All rights reserved.
                    </p>
                    <div className="flex items-center gap-12">
                        {["Privacy Policy", "Terms of Service"].map((link) => (
                            <Link
                                key={link}
                                href="#"
                                className="text-[10px] uppercase tracking-[0.4em] text-white/20
                                           hover:text-primary transition-colors duration-300"
                            >
                                {link}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}