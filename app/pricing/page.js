import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PricingPlans from "@/components/pricing/PricingPlans";

// Lives at the /pricing URL (app/pricing/page.js → "/pricing").
export default function PricingPage() {
  return (
    <main>
      <Navbar />
      <PricingPlans />
      <Footer />
    </main>
  );
}
