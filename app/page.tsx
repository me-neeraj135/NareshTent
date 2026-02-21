import Navbar from "@/components/common/Navbar";
import HeroCarousel from "@/components/common/HeroCarousel";
import Elevating from "@/components/common/Elevating";
import Expertise from "@/components/common/Expertise";
import Portfolio from "@/components/common/Portfolio";
import WhatWeOffer from "@/components/common/offer";
import CTASection from "@/components/common/CTASection";
import Footer from "@/components/common/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Naresh Tent House — Architects of Grand Celebrations",
  description:
    "Naresh Tent House is Uttar Pradesh's premier wedding design and event planning company. Bespoke decor, luxury lighting, floral artistry, and full event infrastructure for weddings, receptions, and parties.",
  keywords: ["wedding decor", "tent house", "event planner UP", "wedding decorator Hamirpur", "Naresh Tent House"],
  openGraph: {
    title: "Naresh Tent House — Architects of Grand Celebrations",
    description: "Transforming visions into breathtaking realities. Premium wedding and event design in Uttar Pradesh.",
    type: "website",
    locale: "en_IN",
  },
};

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroCarousel />
      <Elevating />
      <Expertise />
      <Portfolio />
      <WhatWeOffer />
      <CTASection />
      <Footer />
    </main>
  );
}
