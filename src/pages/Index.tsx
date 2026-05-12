import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Navbar } from "@/components/site/Navbar";
import { SEO } from "@/components/SEO";
import { Hero } from "@/components/site/Hero";
import { Departments } from "@/components/site/Departments";
import { Doctor } from "@/components/site/Doctor";
import { Stories } from "@/components/site/Stories";
import { Tariff } from "@/components/site/Tariff";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

const Index = () => {
  const { hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }, [hash]);
  return (
    <main className="min-h-screen bg-background">
    <SEO
      title="Meeraji Hospital | Best Multispeciality, Trauma & Maternity Hospital in Delhi NCR"
      description="Meeraji Hospital — leading multispeciality, trauma & maternity centre in Delhi NCR. Plastic & reconstructive surgery by Dr. Gopal Gupta, 24×7 emergency, ICU, gynaecology & orthopaedics. Call 9643 740 400."
      keywords="Meeraji Hospital, best hospital Delhi NCR, multispeciality hospital, trauma centre, maternity hospital, plastic surgery Delhi, Dr Gopal Gupta, 24x7 emergency hospital"
    />
    <Navbar />
    <Hero />
    <Departments />
    <Doctor />
    <Stories />
    <Tariff />
    <Contact />
    <Footer />
    </main>
  );
};

export default Index;
