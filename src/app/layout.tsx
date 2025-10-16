import type { Metadata } from "next";
import "./globals.css";
import Navigation from "../components/layout/Navigation";
import Footer from "../components/layout/Footer";
import ParticlesBackground from "../components/ui/ParticlesBackground";
import WhatsAppButton from "../components/ui/WhatsAppButton";

export const metadata: Metadata = {
  metadataBase: new URL("https://rahatekom.vercel.app"),
  title: "Rahat Ekom - Creative Web Developer & Designer",
  description: "Portfolio of Rahat Ekom - Creative Web Developer and Designer specializing in React, Next.js, Three.js, and modern web technologies. Crafting immersive digital experiences.",
  keywords: ["web developer", "web designer", "React", "Next.js", "Three.js", "portfolio", "creative developer"],
  authors: [{ name: "Rahat Ekom" }],
  openGraph: {
    title: "Rahat Ekom - Creative Web Developer & Designer",
    description: "Portfolio of Rahat Ekom - Crafting immersive digital experiences with cutting-edge technologies.",
    type: "website",
    url: "https://rahatekom.vercel.app",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rahat Ekom Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rahat Ekom - Creative Web Developer & Designer",
    description: "Portfolio of Rahat Ekom - Crafting immersive digital experiences with cutting-edge technologies.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">
        <ParticlesBackground />
        <Navigation />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}

