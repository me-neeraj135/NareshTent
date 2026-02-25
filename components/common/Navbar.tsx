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
                className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ${scrolled
                    ? "bg-background/90 backdrop-blur-2xl border-b border-primary/20 py-4"
                    : "bg-transparent py-8"
                    }`}
            >
                {/* Scroll Progress Bar (Gold) */}
                <div
                    className="absolute bottom-0 left-0 h-[1.5px] bg-primary transition-all duration-300"
                    style={{ width: `${scrollProgress}%` }}
                />

                <div className="container-custom">
                    <nav className="flex items-center justify-between gap-10">
                        {/* ── Logo ── */}
                        <Link href="/" className="group flex-shrink-0 flex flex-col leading-none">
                            <span className="text-[2rem] font-serif tracking-widest text-gold leading-none transition-all">
                                NARESH
                            </span>
                            <span className="text-[9px] uppercase tracking-[0.8em] text-primary font-bold mt-1.5 opacity-80">
                                TENT HOUSE
                            </span>
                        </Link>

                        {/* ── Desktop Nav Links ── */}
                        <ul className="hidden lg:flex items-center gap-14">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="relative group/link text-[10px] font-bold uppercase tracking-[0.45em] text-foreground/40 hover:text-foreground transition-all duration-500 py-2"
                                    >
                                        <span className="relative z-10">{link.name}</span>
                                        <span className="absolute bottom-0 left-0 w-0 h-px bg-primary transition-all duration-500 group-hover/link:w-full" />
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        {/* ── Desktop Actions ── */}
                        <div className="hidden lg:flex items-center gap-10 flex-shrink-0">
                            <a
                                href="tel:+916388722101"
                                className="flex items-center gap-4 text-foreground/40 hover:text-primary transition-all duration-500 group"
                            >
                                <Phone size={14} className="text-primary group-hover:scale-110 transition-transform" />
                                <span className="text-[12px] tracking-[0.2em] font-medium">+91 63887 22101</span>
                            </a>

                            <Link
                                href="#contact"
                                className="relative inline-flex items-center px-10 py-3.5 text-[10px] font-bold uppercase tracking-[0.4em] text-background bg-primary overflow-hidden transition-all duration-500 hover:bg-primary-light active:scale-95 shadow-[0_0_20px_rgba(197,160,89,0.2)]"
                            >
                                Consultation
                            </Link>
                        </div>

                        {/* ── Mobile Hamburger ── */}
                        <button
                            className="lg:hidden relative p-3 text-primary group"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle menu"
                        >
                            <span className="relative block w-6 h-5">
                                <span className={`absolute left-0 w-full h-[1px] bg-current transition-all duration-300 ${isOpen ? "top-2.5 rotate-45" : "top-0"}`} />
                                <span className={`absolute left-0 w-full h-[1px] bg-current transition-all duration-300 top-2.5 ${isOpen ? "opacity-0" : "opacity-100"}`} />
                                <span className={`absolute left-0 w-full h-[1px] bg-current transition-all duration-300 ${isOpen ? "top-2.5 -rotate-45" : "top-5"}`} />
                            </span>
                        </button>
                    </nav>
                </div>
            </header>

            {/* ── Mobile Full-Screen Menu ── */}
            <div
                className={`fixed inset-0 z-[150] bg-background/98 backdrop-blur-3xl flex flex-col items-center justify-center transition-all duration-1000 lg:hidden ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
                    }`}
            >
                {/* Close Overlay */}
                <button
                    className="absolute top-8 right-8 text-primary/40 hover:text-primary p-4 transition-colors"
                    onClick={() => setIsOpen(false)}
                >
                    <X size={40} strokeWidth={1} />
                </button>

                <nav className="flex flex-col items-center gap-14">
                    {navLinks.map((link, i) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className={`text-5xl font-serif text-foreground/40 hover:text-primary transition-all duration-700 transform ${isOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                            style={{ transitionDelay: `${i * 100}ms` }}
                        >
                            {link.name}
                        </Link>
                    ))}

                    <div className={`mt-16 flex flex-col items-center gap-10 w-full px-12 transition-all duration-1000 delay-500 transform ${isOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
                        <a
                            href="tel:+916388722101"
                            className="flex items-center gap-5 text-foreground/30 hover:text-primary"
                        >
                            <Phone size={24} className="text-primary" />
                            <span className="text-xl tracking-[0.1em] text-foreground">+91 63887 22101</span>
                        </a>
                        <Link
                            href="#contact"
                            onClick={() => setIsOpen(false)}
                            className="w-full max-w-[300px] text-center py-6 text-xs font-bold uppercase tracking-[0.5em] bg-primary text-background transition-all hover:bg-primary-light active:scale-95 shadow-2xl"
                        >
                            Private Consultation
                        </Link>
                    </div>
                </nav>
            </div>
        </>
    );
}