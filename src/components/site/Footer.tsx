import { Logo } from "@/components/site/Logo";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => (
  <footer className="bg-background border-t border-border py-14">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-10 mb-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <Logo size={42} />
            <div>
              <div className="font-display text-lg text-primary">Meeraji Hospital-Multispeciality, Trauma and Maternity Centre</div>
              <div className="text-xs text-muted-foreground">Compassion. Expertise. Healing.</div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
            A trusted multi-specialty hospital known for plastic & reconstructive surgery, 24×7 emergency, and warm, family-style care.
          </p>
        </div>
        <div>
          <div className="font-medium text-foreground mb-4">Quick Links</div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#specialties" className="hover:text-primary">Specialties</a></li>
            <li><a href="#doctors" className="hover:text-primary">Our Doctors</a></li>
            <li><a href="#tariff" className="hover:text-primary">Tariff</a></li>
            <li><a href="#contact" className="hover:text-primary">Contact</a></li>
          </ul>
        </div>
        <div>
          <div className="font-medium text-foreground mb-4">Connect</div>
          <div className="flex gap-3">
            {[Facebook, Instagram, Twitter].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
          <div className="text-sm text-muted-foreground mt-4">meerajihospital@gmail.com<br />9643 740 400</div>
          <Link
            to="/blog"
            className="inline-block mt-4 text-xs px-3 py-1.5 rounded-md border border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all"
          >
            Admin Login
          </Link>
        </div>
      </div>
      <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-muted-foreground">
        <div>© 2026 Meeraji Hospital-Multispeciality, Trauma and Maternity Centre. All rights reserved.</div>
        <div className="font-devanagari">सेवा परमो धर्मः</div>
      </div>
    </div>
  </footer>
);
