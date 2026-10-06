import { Sora, Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-display",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

export const metadata = {
  metadataBase: new URL('https://rankcine.com'),
  title: "Rank Cine — Watch. Rank. Be Heard.",
  description: "An AI-powered platform that evaluates content quality through user engagement, demographic insights, and intelligent 0.5 consensus ranking algorithms.",
  keywords: ["movie rankings", "content evaluation", "rate to earn", "creator analytics", "Rank Cine", "film reviews", "AI content analysis"],
  authors: [{ name: "Rank Cine" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rankcine.com",
    title: "Rank Cine — Watch. Rank. Be Heard.",
    description: "Evaluate content across technical parameters, hit the consensus peak, and unlock exclusive brand sponsor rewards.",
    siteName: "Rank Cine",
    images: [
      {
        url: "/images/BrandPhone.png", // Next.js will resolve this against metadataBase
        width: 1200,
        height: 630,
        alt: "Rank Cine Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rank Cine — Watch. Rank. Be Heard.",
    description: "Evaluate content across technical parameters, hit the consensus peak, and unlock exclusive brand sponsor rewards.",
    images: ["/images/BrandPhone.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable}`}>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}