import Navbar from "../components/Navbar";
import AutoScrollingBand from "../components/AutoScrollingBand";
import HeroSection from "../components/HeroSection";
import LogoScrollingBand from "../components/LogoScrollingBand";
import StatsSection from "../components/StatsSection";
import RoadmapSection from "../components/RoadmapSection";
import ServicesSection from "../components/ServicesSection";
import PlatformSection from "../components/PlatformSection";
import InsightsImageSection from "../components/InsightsImageSection";
import ShowcaseSection from "../components/ShowcaseSection";
import TestimonialsSection from "../components/TestimonialsSection";
import BlogSection from "../components/BlogSection";
import CallToActionSection from "../components/CallToActionSection";
import Footer from "../components/Footer";
import ScrollToTopOnLoad from "../components/ScrollToTopOnLoad";
import { FaGear } from "react-icons/fa6";
import ScrollProgressCircle from "../components/ScrollProgressCircle";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <ScrollToTopOnLoad />
      <ScrollProgressCircle />
      <div aria-hidden="true" className="fixed right-0 top-1/2 z-[60] flex h-12 w-12 -translate-y-1/2 items-center justify-center bg-blue-600">
        <FaGear className="text-white text-xl animate-spin [animation-duration:2s]" />
      </div>
      <Navbar />
      <AutoScrollingBand />
      <HeroSection />
      <LogoScrollingBand />
      <StatsSection />
      <RoadmapSection />
      <ServicesSection />
      <PlatformSection />
      <InsightsImageSection />
      <ShowcaseSection />
      <TestimonialsSection />
      <BlogSection />
      <CallToActionSection />
      <Footer />
    </main>
  );
}
