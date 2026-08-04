import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import RankerIntro from "@/components/ranker/RankerIntro";

// Lives at the /ranker URL (app/ranker/page.js → "/ranker").
export default function RankerPage() {
  return (
    <main>
      <Navbar />
      <RankerIntro />
      <Footer />
    </main>
  );
}
