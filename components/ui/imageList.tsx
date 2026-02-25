import { useState } from "react";
import ImageModal from "./ImageModal";

interface ImageListProps {
    itemData: { img: string; title: string; id: number }[];
}

export default function ImageList({ itemData }: ImageListProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const openModal = (index: number) => {
        setCurrentIndex(index);
        setIsModalOpen(true);
    };

    return (
        <>
            <div className="columns-2 md:columns-3 gap-4 sm:gap-8 space-y-4 sm:space-y-8">
                {itemData.map((item, index) => (
                    <div
                        key={item.id}
                        className="break-inside-avoid group relative overflow-hidden rounded-sm glass-card cursor-zoom-in border-transparent"
                        style={{ transitionDelay: `${(index % 6) * 100}ms` }}
                        onClick={() => openModal(index)}
                    >
                        <img
                            src={`${item.img}`}
                            alt={item.title}
                            loading="lazy"
                            className="w-full h-auto object-cover transition-transform duration-[1500ms] group-hover:scale-110 group-hover:rotate-1"
                        />

                        {/* Imperial Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-1000 flex flex-col justify-end p-10 text-center">
                            <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-700">
                                <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-primary block mb-3">
                                    The Royal Gallery
                                </span>
                                <h3 className="text-2xl sm:text-3xl font-serif text-white tracking-wide leading-tight px-4">
                                    {item.title}
                                </h3>
                            </div>
                        </div>

                        {/* Gold corner accent Reveal */}
                        <div className="absolute top-6 left-6 h-6 w-6 border-t border-l border-primary/0 transition-all duration-700 group-hover:border-primary/40 pointer-events-none" />
                        <div className="absolute bottom-6 right-6 h-6 w-6 border-b border-r border-primary/0 transition-all duration-700 group-hover:border-primary/40 pointer-events-none" />
                    </div>
                ))}
            </div>

            <ImageModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                images={itemData}
                currentIndex={currentIndex}
                onNavigate={(index) => setCurrentIndex(index)}
            />
        </>
    );
}
