import Link from "next/link";
import { MessageSquare } from "lucide-react";

export default function WhatsAppButton() {
    const phoneNumber = "916388722101";
    const message = encodeURIComponent(
        "Hello Naresh Tent House! I'd like to inquire about your premium event services."
    );

    return (
        <Link
            href={`https://wa.me/${phoneNumber}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 overflow-hidden border border-primary/20 px-9 py-4 font-bold uppercase tracking-[0.3em] text-[#2d2a26]/70 transition-all duration-500 hover:text-white"
        >
            {/* Slide-up fill using the deep charcoal for high contrast */}
            <div className="absolute inset-0 bg-[#2d2a26] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />

            {/* Content */}
            <MessageSquare
                size={16}
                className="relative z-10 text-primary transition-transform duration-500 group-hover:rotate-12 group-hover:text-primary-light"
            />
            <span className="relative z-10 text-[11px] tracking-[0.4em]">Inquire Now</span>
        </Link>
    );
}