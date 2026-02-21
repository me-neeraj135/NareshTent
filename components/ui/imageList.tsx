interface ImageListProps {
    itemData: { img: string; title: string; id: number }[];
}

export default function ImageList({ itemData }: ImageListProps) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {itemData.map((item, index) => (
                <div
                    key={item.id}
                    className="group relative overflow-hidden aspect-[4/5] glass-card animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.08}s` }}
                >
                    <img
                        src={`${item.img}`}
                        alt={item.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Reveal overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-7">
                        <span className="text-[9px] font-bold uppercase tracking-[0.45em] text-[#c5a059] mb-2">
                            Category
                        </span>
                        <h3 className="text-2xl font-serif text-white">
                            {item.title}
                        </h3>
                    </div>

                    {/* Bottom gold line on hover */}
                    <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#c5a059] group-hover:w-full transition-all duration-500" />
                </div>
            ))}
        </div>
    );
}
