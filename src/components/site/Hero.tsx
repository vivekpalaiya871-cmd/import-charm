import { Phone, Calendar, Award, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hospital-hero.jpg";

export const Hero = () => (
  <section id="home" className="relative bg-hero overflow-hidden">
    <div className="absolute inset-0 paisley-pattern opacity-60" />
    {/* decorative blobs */}
    <div className="absolute top-20 -left-20 w-96 h-96 rounded-full bg-secondary/20 blur-3xl animate-float" />
    <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/10 blur-3xl" />

    <div className="container mx-auto px-4 sm:px-6 pt-10 sm:pt-14 pb-16 sm:pb-20 relative">
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        <div className="lg:col-span-7 animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-card/60 px-3 sm:px-4 py-1.5 text-[11px] sm:text-xs font-medium text-primary mb-6 sm:mb-8">
            <span className="h-1.5 w-1.5 rounded-full bg-secondary animate-pulse" />
            <span className="truncate">NABH-aligned multi-specialty care · Delhi NCR</span>
          </div>

          <p className="font-devanagari text-lg sm:text-xl md:text-2xl text-primary/80 mb-3">
            जहाँ चिकित्सा करुणा से मिलती है
          </p>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] text-ink mb-6 tracking-tight text-3d">
            Generations of trust.<br />
            <span className="text-gradient italic font-medium">Healing</span> with grace.
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed">
            A sanctuary of advanced multi-specialty care, renowned for plastic & reconstructive surgery led by{" "}
            <span className="text-foreground font-medium">Dr. Gopal Gupta</span>. From emergency to recovery — we walk every step with you.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10">
            <Button variant="hero" size="lg" asChild className="w-full sm:w-auto min-w-[200px]">
              <a href="#contact"><Calendar className="w-4 h-4" /> Book Appointment</a>
            </Button>
            <Button variant="emergency" size="lg" asChild className="w-full sm:w-auto min-w-[200px]">
              <a href="tel:9643740400"><Phone className="w-4 h-4" /> Emergency Call</a>
            </Button>
          </div>

          <div className="flex flex-wrap items-center gap-x-8 gap-y-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2"><Award className="w-4 h-4 text-secondary" /> 25+ years of service</div>
            <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-secondary" /> 24×7 Emergency & ICU</div>
            <div className="flex items-center gap-2"><Award className="w-4 h-4 text-secondary" /> 15K+ successful surgeries</div>
          </div>
        </div>

        <div className="lg:col-span-5 relative animate-fade-up" style={{ animationDelay: "150ms" }}>
          <div className="absolute -inset-4 bg-gradient-gold rounded-[2rem] blur-2xl opacity-40" />
          <div className="relative aspect-[4/3] lg:aspect-[5/6] rounded-[2rem] overflow-hidden shadow-3d-lg border border-primary/10 card-3d">
            <img src={heroImg} alt="Meeraji Hospital-Multispeciality, Trauma and Maternity Centre interior" className="w-full h-full object-cover" width={1280} height={1280} />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </div>
  </section>
);
