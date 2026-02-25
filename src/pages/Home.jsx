import HeroCarousel from "../components/HeroCarousel";
import AboutPreview from "../components/AboutPreview";
import UpcomingProject from "../components/UpcomingProject";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <main className="bg-bg text-white overflow-hidden">
      {/* GLOBAL GRAIN (VERY SUBTLE) */}
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "url('https://grainy-gradients.vercel.app/noise.svg')",
        }}
      />

      {/* HERO */}
      <HeroCarousel />

      {/* ABOUT */}
      <section className="relative pt-12 pb-16 md:py-28 px-6 md:px-16 -mt-2 sm:mt-0">
        <AboutPreview />
      </section>

      {/* SEPARATOR */}
      <div className="h-px w-full bg-gold/15 max-w-6xl mx-auto" />

      {/* UPCOMING PROJECT */}
      <section className="relative py-20 md:py-28 px-6 md:px-16 bg-surface">
        <UpcomingProject />
      </section>

      {/* SEPARATOR */}
      <div className="h-px w-full bg-gold/15 max-w-6xl mx-auto" />

      {/* WHY CHOOSE US */}
      <section className="relative py-20 md:py-28 px-6 md:px-16">
        <WhyChooseUs />
      </section>

      {/* SEPARATOR */}
      <div className="h-px w-full bg-gold/15 max-w-6xl mx-auto" />

      {/* TESTIMONIALS */}
      <section className="relative py-20 md:py-28 px-6 md:px-16 bg-surface">
        <Testimonials />
      </section>
    </main>
  );
}
