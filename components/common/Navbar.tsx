"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
    { name: "Expertise", href: "#expertise" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Offers", href: "#offers" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 60);
            const total = document.documentElement.scrollHeight - window.innerHeight;
            setScrollProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${scrolled
                        ? "bg-black/85 backdrop-blur-2xl border-b border-white/5 py-3"
                        : "bg-transparent py-6"
                    }`}
            >
                {/* Scroll Progress Bar */}
                <div
                    className="absolute bottom-0 left-0 h-[1.5px] bg-[#c5a059] transition-all duration-200"
                    style={{ width: `${scrollProgress}%` }}
                />

                <div className="container-custom">
                    <nav className="flex items-center justify-between gap-6">
                        {/* ── Logo ── */}
                        <Link href="/" className="group flex-shrink-0 flex flex-col leading-none">
                            <span className="text-[1.6rem] font-black tracking-tighter text-[#c5a059] leading-none transition-opacity group-hover:opacity-80">
                                NARESH
                            </span>
                            <span className="text-[9px] uppercase tracking-[0.55em] text-[#e7d3b0]/60 font-medium mt-0.5">
                                Tent House
                            </span>
                        </Link>

                        {/* ── Desktop Nav Links ── */}
                        <ul className="hidden md:flex items-center gap-10">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-[11px] font-semibold uppercase tracking-[0.28em] text-white/50 hover:text-[#c5a059] transition-all duration-300"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        {/* ── Desktop Actions ── */}
                        <div className="hidden md:flex items-center gap-4 flex-shrink-0">
                            <a
                                href="tel:+916388722101"
                                className="flex items-center gap-2 text-white/50 hover:text-white transition-colors duration-300"
                            >
                                <Phone size={14} className="text-[#c5a059]" />
                                <span className="text-[11px] tracking-wide">+91 63887 22101</span>
                            </a>

                            <Link
                                href="#contact"
                                className="relative inline-flex items-center px-7 py-2.5 text-[10px] font-bold uppercase tracking-[0.25em] text-black bg-[#c5a059] overflow-hidden transition-all duration-300 hover:bg-[#e7d3b0]"
                            >
                                Inquire Now
                            </Link>
                        </div>

                        {/* ── Mobile Hamburger ── */}
                        <button
                            className="md:hidden p-2 text-white hover:text-[#c5a059] transition-colors"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X size={22} /> : <Menu size={22} />}
                        </button>
                    </nav>
                </div>
            </header>

            {/* ── Mobile Full-Screen Menu ── */}
            <div
                className={`fixed inset-0 z-[90] bg-black/97 backdrop-blur-2xl flex flex-col items-center justify-center transition-all duration-500 md:hidden ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    }`}
            >
                {/* Close button */}
                <button
                    className="absolute top-6 right-6 text-white/60 hover:text-white p-2"
                    onClick={() => setIsOpen(false)}
                >
                    <X size={24} />
                </button>

                <nav className="flex flex-col items-center gap-10">
                    {navLinks.map((link, i) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="text-3xl font-serif text-white/80 hover:text-[#c5a059] transition-colors duration-300"
                            style={{ animationDelay: `${i * 0.08}s` }}
                        >
                            {link.name}
                        </Link>
                    ))}

                    <div className="mt-6 flex flex-col items-center gap-5 w-full px-8">
                        <a
                            href="tel:+916388722101"
                            className="flex items-center gap-3 text-white/60"
                        >
                            <Phone size={16} className="text-[#c5a059]" />
                            <span className="text-sm tracking-wide">+91 63887 22101</span>
                        </a>
                        <Link
                            href="#contact"
                            onClick={() => setIsOpen(false)}
                            className="w-full text-center py-4 text-xs font-bold uppercase tracking-[0.3em] bg-[#c5a059] text-black hover:bg-[#e7d3b0] transition-colors"
                        >
                            Inquire Now
                        </Link>
                    </div>
                </nav>
            </div>
        </>
    );
}