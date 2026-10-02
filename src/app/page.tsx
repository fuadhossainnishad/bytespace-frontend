import { CategoryGrid } from "@/components/home/CategoryGrid";
import { CreatorCta } from "@/components/home/CreatorCta";
import { CourseFilters } from "@/components/home/CourseFilters";
import { CourseGrid } from "@/components/home/CourseGrid";
import { GrowthSection } from "@/components/home/GrowthSection";
import { Hero } from "@/components/home/Hero";
import { LearningIntro } from "@/components/home/LearningIntro";
import { PartnerLogos } from "@/components/home/PartnerLogos";
import { Testimonials } from "@/components/home/Testimonials";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

export default function Home() {
  return (
    <div className="home-page">
      <Header />
      <main id="top">
        <Hero />
        <PartnerLogos />
        <LearningIntro />
        <section className="courses-section" id="courses" aria-label="Featured courses">
          <CourseFilters />
          <CourseGrid />
        </section>
        <LearningIntro variant="paths" />
        <CategoryGrid />
        <GrowthSection />
        <CreatorCta />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
