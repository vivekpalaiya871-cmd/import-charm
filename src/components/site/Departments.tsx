import {
  Stethoscope, Baby, HeartPulse, Activity, Scissors, Bone, Syringe, Ear,
  ScanLine, Pill, X, CheckCircle2,
} from "lucide-react";

const specialities = [
  { icon: Scissors, en: "General & Laparoscopy Surgery", hi: "जनरल व लेपरोस्कोपिक सर्जरी" },
  { icon: Baby, en: "Obstetrics & Gynaecology", hi: "प्रसूति एवं स्त्री रोग" },
  { icon: Stethoscope, en: "General Medicine", hi: "जनरल मेडिसिन" },
  { icon: HeartPulse, en: "Paediatrics", hi: "बाल रोग विज्ञान" },
  { icon: Activity, en: "Urology", hi: "यूरोलॉजी" },
  { icon: Scissors, en: "Plastic & Reconstructive Surgery", hi: "प्लास्टिक सर्जरी" },
  { icon: Bone, en: "Orthopaedic Surgery", hi: "हड्डी रोग" },
  { icon: Syringe, en: "Anesthesiology", hi: "एनेस्थिसियोलॉजी" },
  { icon: Ear, en: "Otorhinolaryngology (ENT)", hi: "कान, नाक, गला" },
];

const support = [
  { icon: ScanLine, en: "Ultrasound", hi: "अल्ट्रासाउंड" },
  { icon: Pill, en: "Pharmacy", hi: "दवाईयाँ" },
  { icon: ScanLine, en: "X-ray", hi: "एक्सरे" },
  { icon: HeartPulse, en: "ECG", hi: "ईसीजी" },
  { icon: Activity, en: "Laboratory Services", hi: "लेबोरेट्री सेवाएँ" },
];

const notInScope = [
  { en: "Brain Surgery", hi: "मस्तिष्क की सर्जरी" },
  { en: "Cardiac Surgery", hi: "हृदय की सर्जरी" },
  { en: "Lung Surgery", hi: "फेफड़े की सर्जरी" },
  { en: "Transplant Surgery", hi: "ट्रांसप्लांट सर्जरी" },
  { en: "Multi Organ Trauma", hi: "बहु अंग ट्रॉमा" },
  { en: "Multi Organ Failure", hi: "बहु अंग फेलयर" },
  { en: "Pregnancy with Heart Disease", hi: "हृदय रोग के साथ गर्भावस्था" },
  { en: "Massive Myocardial Infarction", hi: "गंभीर दिल का दौरा" },
  { en: "Cardiogenic Shock", hi: "हृदय संबंधी सदमे" },
];

export const Departments = () => (
  <section id="departments" className="py-28 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
    <div className="absolute top-40 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
    <div className="container mx-auto px-6 relative">
      <div className="max-w-2xl mb-16">
        <p className="text-sm uppercase tracking-[0.25em] text-secondary font-semibold mb-4">Departments</p>
        <h2 className="font-display text-4xl md:text-5xl text-ink leading-tight mb-4">
          Scope of <span className="text-gradient italic">services</span>.
        </h2>
        <p className="font-devanagari text-xl text-muted-foreground">उपलब्ध सेवाएँ</p>
      </div>

      {/* Specialities */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-8">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider">Specialities</span>
          <span className="font-devanagari text-muted-foreground">स्पेशियालिटी</span>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {specialities.map(({ icon: Icon, en, hi }) => (
            <div key={en} className="card-3d group relative bg-card rounded-2xl p-6 border border-border hover:border-primary/30 shadow-3d hover:shadow-3d-lg">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-gold rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="flex items-start gap-4">
                <div className="icon-3d w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display text-lg text-ink leading-tight">{en}</h3>
                  <p className="font-devanagari text-sm text-muted-foreground mt-1">{hi}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Support Services */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-8">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider">Support Services</span>
          <span className="font-devanagari text-muted-foreground">सहायक सेवाएँ</span>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {support.map(({ icon: Icon, en, hi }) => (
            <div key={en} className="card-3d bg-card rounded-2xl p-5 border border-border text-center shadow-3d hover:shadow-3d-lg group">
              <Icon className="w-7 h-7 mx-auto mb-3 text-secondary" />
              <div className="font-medium">{en}</div>
              <div className="font-devanagari text-sm opacity-70 mt-1">{hi}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Not in Scope */}
      <div className="bg-card border border-destructive/20 rounded-3xl p-8 md:p-10 shadow-soft">
        <div className="flex items-center gap-3 mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-destructive/10 text-destructive text-xs font-bold uppercase tracking-wider">
            <X className="w-3.5 h-3.5" /> Not in Scope
          </span>
          <span className="font-devanagari text-muted-foreground">सेवा में नहीं</span>
        </div>
        <p className="text-sm text-muted-foreground mb-6 max-w-2xl">
          For these conditions, we will provide initial stabilization and refer you to a higher-level facility.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {notInScope.map((n) => (
            <div key={n.en} className="flex items-start gap-3 p-3 rounded-xl bg-muted/40">
              <X className="w-5 h-5 text-destructive mt-0.5 shrink-0" />
              <div>
                <div className="font-medium text-foreground">{n.en}</div>
                <div className="font-devanagari text-sm text-muted-foreground">{n.hi}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trust strip */}
      <div className="mt-12 flex items-start gap-3 text-sm text-muted-foreground max-w-3xl">
        <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 shrink-0" />
        <p>We believe in honest, transparent care — clearly stating what we do and what we don't, so families can make informed decisions.</p>
      </div>
    </div>
  </section>
);
