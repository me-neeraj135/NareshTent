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
  title: "Naresh Imperial — Architects of Celestial Celebrations",
  description:
    "The pinnacle of ultra-luxury wedding architecture and event design. Crafting palatial heritage events for the world's most discerning families through bespoke structural artistry and imperial precision.",
  keywords: ["luxury wedding decor", "royal wedding planner", "imperial event design", "palatial mandaps", "exclusive event infrastructure", "Naresh Imperial"],
  openGraph: {
    title: "Naresh Imperial — Architects of Celestial Celebrations",
    description: "Translating ancestral majesty into structural reality. Bespoke ultra-luxury wedding design for a chosen few.",
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
