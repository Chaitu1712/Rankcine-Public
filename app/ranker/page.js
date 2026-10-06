import RankerIntro from "@/components/ranker/RankerIntro";

export const metadata = {
  title: "Become a Ranker | Rank Cine",
  description: "Evaluate content across technical parameters, build your Accuracy Index, hit the consensus peak, and unlock exclusive brand sponsor rewards.",
  alternates: { canonical: 'https://rankcine.com/ranker' }
};

export default function RankerPage() {
  return (
    <main>
      <RankerIntro />
    </main>
  );
}