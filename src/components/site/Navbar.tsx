import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/site/Logo";

const links = [
  { label: "Home", href: "/" },
  { label: "Departments", href: "/departments" },
  { label: "Doctors", href: "/doctors" },
  { label: "Treatments", href: "/treatments" },
  { label: "Patient Stories", href: "/#stories" },
  { label: "Tariff", href: "/#tariff" },
  { label: "Blog", href: "/blog" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
  <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/50">
    <div className="container mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between gap-2">
      <Link to="/" className="flex items-center gap-2 sm:gap-3 group min-w-0">
        <Logo size={44} className="sm:!w-[52px] sm:!h-[52px] shrink-0" />
        <div className="leading-tight min-w-0">
          <div className="font-display text-base sm:text-xl font-semibold text-primary tracking-tight truncate">Meera Ji</div>
          <div className="text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-muted-foreground truncate">Hospital · since 1998</div>
        </div>
      </Link>
      <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
        {links.map((l) => (
          <a key={l.href} href={l.href} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative group">
            {l.label}
            <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-secondary group-hover:w-full transition-all duration-300" />
          </a>
        ))}
      </nav>
      <div className="flex items-center gap-2 sm:gap-3 shrink-0">
        <a href="tel:9643740400" className="hidden md:flex items-center gap-2 text-sm font-medium text-primary">
          <Phone className="w-4 h-4" /> 9643 740 400
        </a>
        <a
          href="tel:9643740400"
          aria-label="Call hospital"
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground shadow-3d"
        >
          <Phone className="w-4 h-4" />
        </a>
        <Button variant="hero" size="default" asChild className="hidden sm:inline-flex">
          <Link to="/contact">Book Appointment</Link>
        </Button>
        <button
          className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-border bg-card text-foreground"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>
    </div>
    {open && (
      <div className="lg:hidden border-t border-border/50 bg-background/95 backdrop-blur-md max-h-[calc(100vh-4rem)] overflow-y-auto">
        <nav className="container mx-auto px-4 sm:px-6 py-4 flex flex-col gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-3 px-2 text-base font-medium text-foreground/80 hover:text-primary border-b border-border/30 last:border-0 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <div className="flex flex-col sm:flex-row gap-3 pt-4 mt-2">
            <Button variant="hero" size="default" asChild className="w-full sm:w-auto">
              <Link to="/contact" onClick={() => setOpen(false)}>Book Appointment</Link>
            </Button>
            <a
              href="tel:9643740400"
              className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-md border border-primary/30 text-primary font-medium"
            >
              <Phone className="w-4 h-4" /> 9643 740 400
            </a>
          </div>
        </nav>
      </div>
    )}
  </header>
  );
};
