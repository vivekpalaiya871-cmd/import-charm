import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export const Contact = () => (
  <section id="contact" className="py-28 bg-primary text-primary-foreground relative overflow-hidden">
    <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-secondary/20 blur-3xl" />
    <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-primary-foreground/5 blur-3xl" />

    <div className="container mx-auto px-6 relative">
      <div className="grid lg:grid-cols-2 gap-16">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-secondary font-semibold mb-4">Get In Touch</p>
          <h2 className="font-display text-4xl md:text-5xl mb-6 leading-tight">
            We're here, <span className="italic text-secondary">always</span>.
          </h2>
          <p className="opacity-80 text-lg mb-10 max-w-md">
            Call us for emergency, walk in for OPD, or send us a message — we typically respond within an hour.
          </p>

          <div className="space-y-6">
            <a href="tel:9643740400" className="flex items-start gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-secondary text-secondary-foreground flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider opacity-70">Emergency · 24×7</div>
                <div className="font-display text-2xl">9643 740 400</div>
              </div>
            </a>
            <a href="mailto:meerajihospital@gmail.com" className="flex items-start gap-4 group">
              <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center shrink-0 group-hover:bg-secondary group-hover:text-secondary-foreground transition-all">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider opacity-70">Email</div>
                <div className="font-display text-xl">meerajihospital@gmail.com</div>
              </div>
            </a>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider opacity-70">Visit</div>
                <div className="font-display text-xl">Meera Ji Hospital, Delhi NCR</div>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider opacity-70">OPD Hours</div>
                <div className="font-display text-xl">Mon–Sat · 9 AM – 7 PM</div>
              </div>
            </div>
          </div>
        </div>

        <form
          onSubmit={(e) => { e.preventDefault(); alert("Thank you. We'll call you back shortly."); }}
          className="bg-card text-card-foreground rounded-3xl p-8 md:p-10 shadow-elegant"
        >
          <h3 className="font-display text-2xl text-ink mb-6">Request an Appointment</h3>
          <div className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <Input placeholder="Full name" required className="h-12" />
              <Input placeholder="Phone number" type="tel" required className="h-12" />
            </div>
            <Input placeholder="Email (optional)" type="email" className="h-12" />
            <Input placeholder="Preferred department" className="h-12" />
            <Textarea placeholder="Briefly describe your concern…" rows={4} />
            <Button variant="hero" size="xl" type="submit" className="w-full">
              Send Request
            </Button>
            <p className="text-xs text-muted-foreground text-center">
              For emergencies, please call <a href="tel:9643740400" className="text-primary font-medium">9643 740 400</a> directly.
            </p>
          </div>
        </form>
      </div>
    </div>
  </section>
);
