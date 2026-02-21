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
            className="group relative inline-flex items-center gap-3 overflow-hidden border border-[#c5a059]/40 px-9 py-3.5 font-bold uppercase tracking-[0.25em] text-white transition-all duration-500 hover:text-black"
        >
            {/* Slide-up fill */}
            <div className="absolute inset-0 bg-[#c5a059] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />

            {/* Content */}
            <MessageSquare
                size={16}
                className="relative z-10 transition-transform duration-500 group-hover:rotate-12"
            />
            <span className="relative z-10 text-[11px]">Inquire Now</span>
        </Link>
    );
}