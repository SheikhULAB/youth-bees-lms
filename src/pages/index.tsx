import { CourseMarketplace } from "../components/CourseMarketPlace";
import { CTASection } from "../components/CTASection";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { Navigation } from "../components/Navigation";
import { PartnerSection } from "../components/PartnerSection";
import { ServicesSection } from "../components/ServicesSection";
import { StatsSection } from "../components/StatsSection";
import { TestimonialsSection } from "../components/TestimonailsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <Navigation />
      <Hero />
      <StatsSection />
      <CourseMarketplace />
      <ServicesSection />
      <PartnerSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;

