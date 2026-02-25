"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface ImageModalProps {
    isOpen: boolean;
    onClose: () => void;
    images: { img: string; title: string; id: number }[];
    currentIndex: number;
    onNavigate: (index: number) => void;
}

export default function ImageModal({
    isOpen,
    onClose,
    images,
    currentIndex,
    onNavigate,
}: ImageModalProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);

    // Handle Esc key
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
            if (e.key === "ArrowLeft") onNavigate((currentIndex - 1 + images.length) % images.length);
            if (e.key === "ArrowRight") onNavigate((currentIndex + 1) % images.length);
        };
        if (isOpen) window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isOpen, currentIndex, images.length, onClose, onNavigate]);

    if (!mounted || !isOpen) return null;

    const currentImage = images[currentIndex];

    const handlePrev = (e: React.MouseEvent) => {
        e.stopPropagation();
        onNavigate((currentIndex - 1 + images.length) % images.length);
    };

    const handleNext = (e: React.MouseEvent) => {
        e.stopPropagation();
        onNavigate((currentIndex + 1) % images.length);
    };

    // Render Portal
    return createPortal(
        <div
            className="fixed inset-0 z-[1000] flex flex-col items-center justify-center bg-black/95 backdrop-blur-md transition-all duration-500 animate-fade-in"
            style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh' }}
            onClick={onClose}
        >
            {/* Close Button */}
            <button
                onClick={onClose}
                className="absolute top-6 right-6 z-[1010] p-4 text-white/50 hover:text-white transition-all hover:scale-110 active:scale-90"
                aria-label="Close modal"
            >
                <X size={32} strokeWidth={1} />
            </button>

            {/* Navigation Buttons - Hidden on small mobile or repositioned */}
            <button
                onClick={handlePrev}
                className="absolute left-4 sm:left-10 z-[1010] p-4 text-white/30 hover:text-white hover:bg-white/10 rounded-full transition-all hidden md:flex items-center justify-center"
                aria-label="Previous image"
            >
                <ChevronLeft size={48} strokeWidth={1} />
            </button>

            <button
                onClick={handleNext}
                className="absolute right-4 sm:left-auto sm:right-10 z-[1010] p-4 text-white/30 hover:text-white hover:bg-white/10 rounded-full transition-all hidden md:flex items-center justify-center"
                aria-label="Next image"
            >
                <ChevronRight size={48} strokeWidth={1} />
            </button>

            {/* Image Container */}
            <div
                className="relative w-full h-full flex flex-col items-center justify-center p-4 sm:p-12 md:p-20"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="relative w-full h-full max-w-6xl max-h-[70vh] flex items-center justify-center overflow-hidden">
                    <Image
                        src={currentImage.img}
                        alt={currentImage.title}
                        fill
                        className="object-contain"
                        sizes="100vw"
                        priority
                    />
                </div>

                {/* Caption Overlay */}
                <div className="mt-8 text-center max-w-2xl animate-fade-in-up">
                    <span className="text-[10px] uppercase tracking-[0.5em] text-[#6b7a5e] font-bold mb-3 block">
                        Naresh Tent House
                    </span>
                    <h3 className="text-2xl sm:text-4xl font-serif text-white tracking-wide leading-tight px-4">
                        {currentImage.title}
                    </h3>
                    <div className="mt-4 flex items-center justify-center gap-6">
                        <button onClick={handlePrev} className="md:hidden text-white/40 p-2"><ChevronLeft size={24} /></button>
                        <p className="text-white/30 text-[11px] uppercase tracking-[0.3em] font-medium min-w-[60px]">
                            {currentIndex + 1} / {images.length}
                        </p>
                        <button onClick={handleNext} className="md:hidden text-white/40 p-2"><ChevronRight size={24} /></button>
                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
}
