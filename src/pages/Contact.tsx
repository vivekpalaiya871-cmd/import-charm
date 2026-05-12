import { useState } from "react";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { toast } from "@/hooks/use-toast";

const WHATSAPP_NUMBER = "919643740400"; // country code + number
const HOSPITAL_EMAIL = "meerajihospital@gmail.com";

const ContactPage = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    department: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const text =
      `*New Appointment Request — Meeraji Hospital-Multispeciality, Trauma and Maternity Centre*%0A%0A` +
      `*Name:* ${form.name}%0A` +
      `*Phone:* ${form.phone}%0A` +
      `*Email:* ${form.email || "—"}%0A` +
      `*Department:* ${form.department || "—"}%0A` +
      `*Message:* ${form.message || "—"}`;

    // Open WhatsApp
    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
    window.open(waUrl, "_blank");

    // Open email (mailto)
    const subject = encodeURIComponent("New Appointment Request — Meeraji Hospital-Multispeciality, Trauma and Maternity Centre");
    const body = encodeURIComponent(
      `Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nDepartment: ${form.department}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:${HOSPITAL_EMAIL}?subject=${subject}&body=${body}`;

    toast({
      title: "Request sent",
      description: "We've opened WhatsApp and Email so your request reaches us instantly.",
    });
  };

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="bg-hero py-20 relative overflow-hidden">
        <div className="absolute inset-0 paisley-pattern opacity-50" />
        <div className="container mx-auto px-6 relative text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-secondary font-semibold mb-3">Contact Us</p>
          <h1 className="font-display text-5xl md:text-6xl text-ink mb-4">
            Get in <span className="italic text-primary">touch</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Call, WhatsApp, email or visit us — we'll respond promptly. For emergencies, dial 9643 740 400 (24×7).
          </p>
        </div>
      </section>

      {/* Contact grid */}
      <section className="py-20">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12">
          {/* Info */}
          <div className="space-y-6">
            <a href="tel:9643740400" className="flex items-start gap-4 p-6 rounded-2xl border border-border hover:border-primary transition-all bg-card">
              <div className="w-12 h-12 rounded-xl bg-primary text-primary-foreground flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Call · 24×7 Emergency</div>
                <div className="font-display text-2xl text-ink">9643 740 400</div>
              </div>
            </a>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 p-6 rounded-2xl border border-border hover:border-primary transition-all bg-card"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary text-secondary-foreground flex items-center justify-center shrink-0">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">WhatsApp</div>
                <div className="font-display text-2xl text-ink">+91 9643 740 400</div>
              </div>
            </a>

            <a href={`mailto:${HOSPITAL_EMAIL}`} className="flex items-start gap-4 p-6 rounded-2xl border border-border hover:border-primary transition-all bg-card">
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Email</div>
                <div className="font-display text-xl text-ink break-all">{HOSPITAL_EMAIL}</div>
              </div>
            </a>

            <div className="flex items-start gap-4 p-6 rounded-2xl border border-border bg-card">
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Visit</div>
                <div className="font-display text-xl text-ink">Meeraji Hospital-Multispeciality, Trauma and Maternity Centre</div>
                <div className="text-sm text-muted-foreground">Multispeciality, Trauma & Maternity Centre · Delhi NCR</div>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 rounded-2xl border border-border bg-card">
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">OPD Hours</div>
                <div className="font-display text-xl text-ink">Mon – Sat · 9 AM – 7 PM</div>
                <div className="text-sm text-muted-foreground">Emergency · 24×7</div>
              </div>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-card text-card-foreground rounded-3xl p-8 md:p-10 shadow-elegant border border-border h-fit"
          >
            <h3 className="font-display text-3xl text-ink mb-2">Request an Appointment</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Submit karne par form WhatsApp aur Email dono pe seedha hospital tak pohchega.
            </p>
            <div className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <Input name="name" value={form.name} onChange={handleChange} placeholder="Full name" required className="h-12" />
                <Input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone number" type="tel" required className="h-12" />
              </div>
              <Input name="email" value={form.email} onChange={handleChange} placeholder="Email (optional)" type="email" className="h-12" />
              <Input name="department" value={form.department} onChange={handleChange} placeholder="Preferred department (e.g. Plastic Surgery, Urology)" className="h-12" />
              <Textarea name="message" value={form.message} onChange={handleChange} placeholder="Briefly describe your concern…" rows={5} />
              <Button variant="hero" size="xl" type="submit" className="w-full">
                Send via WhatsApp & Email
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                For emergencies, please call{" "}
                <a href="tel:9643740400" className="text-primary font-medium">9643 740 400</a> directly.
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* Map */}
      <section className="pb-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <p className="text-sm uppercase tracking-[0.25em] text-secondary font-semibold mb-2">Find Us</p>
            <h2 className="font-display text-4xl text-ink">
              Hospital <span className="italic text-primary">Location</span>
            </h2>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-elegant border border-border">
            <iframe
              title="Meeraji Hospital-Multispeciality, Trauma and Maternity Centre Location"
              src="https://www.google.com/maps?q=Meeraji+Hospital+Multispeciality+Trauma+and+Maternity+Centre&output=embed"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="mt-4 text-center">
            <a
              href="https://www.google.com/maps/place/Meeraji+Hospital-Multispeciality,Trauma+and+Maternity+Centre/@28.3955763,77.0465793,17z/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
            >
              <MapPin className="w-4 h-4" /> Open in Google Maps
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ContactPage;
