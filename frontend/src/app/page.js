import Navbar from "../components/Navbar";
import AutoScrollingBand from "../components/AutoScrollingBand";
import HeroSection from "../components/HeroSection";
import LogoScrollingBand from "../components/LogoScrollingBand";
import StatsSection from "../components/StatsSection";
import RoadmapSection from "../components/RoadmapSection";
import ServicesSection from "../components/ServicesSection";
import PlatformSection from "../components/PlatformSection";
import ShowcaseSection from "../components/ShowcaseSection";
import TestimonialsSection from "../components/TestimonialsSection";
import BlogSection from "../components/BlogSection";
import CallToActionSection from "../components/CallToActionSection";
import Footer from "../components/Footer";
import ScrollToTopOnLoad from "../components/ScrollToTopOnLoad";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <ScrollToTopOnLoad />
      <Navbar />
      <AutoScrollingBand />
      <HeroSection />
      <LogoScrollingBand />
      <StatsSection />
      <RoadmapSection />
      <ServicesSection />
      <PlatformSection />
      <ShowcaseSection />
      <TestimonialsSection />
      <BlogSection />
      <CallToActionSection />
      <Footer />
    </main>
  );
}
