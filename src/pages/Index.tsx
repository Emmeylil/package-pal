import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ValueProps from "@/components/ValueProps";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Stations from "@/components/Stations";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-secondary">
      <Navbar />
      <Hero />
      <ValueProps />
      <HowItWorks />
      <Pricing />
      <Stations />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
