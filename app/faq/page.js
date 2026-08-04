import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhyRankcineTabs from "@/components/faq/WhyRankcineTabs";

// Lives at the /faq URL (this file's folder name IS the route —
// that's how the Next.js App Router works: app/faq/page.js → "/faq").
export default function FaqPage() {
  return (
    <main>
      <Navbar />
      <WhyRankcineTabs />
      <Footer />
    </main>
  );
}
