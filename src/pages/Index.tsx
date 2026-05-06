import { useEffect } from "react";
import { useLocation } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
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
