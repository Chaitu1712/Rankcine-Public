import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import SeeItInMotion from "@/components/home/SeeItInMotion";
import Library from "@/components/home/Library";
import EcosystemRoles from "@/components/home/EcosystemRoles";
import WhyRankcine from "@/components/home/WhyRankcine";

// This page only lays out sections in order — it should never contain
// section-specific markup itself. If a section needs to change, edit
// the component file, not this page.
export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <HowItWorks />
      <SeeItInMotion />
      <Library />
      <EcosystemRoles />
      <WhyRankcine />
      <Footer />
    </main>
  );
}
