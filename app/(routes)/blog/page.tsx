import { ArticleSection } from "@/app/_components/ArticleSection";
import { Hero } from "@/app/_components/Hero";

export default function Page() {
  return (
    <main className={'py-24'}>
      <Hero />
      <ArticleSection />
    </main>
  );
}
