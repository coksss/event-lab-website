import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import EventsSection from "@/components/EventsSection";
import ServicesSection from "@/components/ServicesSection";
import GallerySection from "@/components/GallerySection";
import ReviewsSection from "@/components/ReviewsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <EventsSection />
      <ServicesSection />
      <GallerySection />
      <ReviewsSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
};

export default Index;
