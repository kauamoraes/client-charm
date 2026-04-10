import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import LogoBar from "@/components/landing/LogoBar";
import Features from "@/components/landing/Features";
import Testimonials from "@/components/landing/Testimonials";
import Pricing from "@/components/landing/Pricing";
import FAQ from "@/components/landing/FAQ";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";

const Index = () => (
  <>
    <Navbar />
    <main>
      <Hero />
      <LogoBar />
      <Features />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTASection />
    </main>
    <Footer />
  </>
);

export default Index;
