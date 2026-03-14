import Navbar from "@/components/common/Navbar";
import MediaContent from "@/components/media/MediaContent";
import CTASection from "@/components/common/CTASection";
import Footer from "@/components/common/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Media Collection | Naresh Imperial",
    description: "Explore our archive of celestial celebrations, cinematic videography, elite DJ nights, and grand fireworks.",
};

export default function MediaPage() {
    return (
        <main>
            <Navbar />
            <MediaContent />
            <CTASection />
            <Footer />
        </main>
    );
}
