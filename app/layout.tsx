import { Playfair_Display, Montserrat } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import FloatingWhatsApp from "../components/ui/FloatingWhatsApp";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-playfair",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Naresh Tent House — Architects of Grand Celebrations",
  description:
    "Naresh Tent House is a premier wedding design and event planning company. We craft breathtaking celebrations with bespoke decor, lighting, and full event infrastructure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${montserrat.variable} antialiased`}>
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
