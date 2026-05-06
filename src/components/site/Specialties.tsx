import { Heart, Scissors, Baby, Brain, Bone, Stethoscope, Eye, Activity } from "lucide-react";

const items = [
  { icon: Scissors, title: "Plastic & Reconstructive", desc: "Burns, microsurgery, cleft, scar revision." },
  { icon: Heart, title: "Cardiology", desc: "Diagnostics, interventional cardiology, ECG." },
  { icon: Baby, title: "Obstetrics & NICU", desc: "Maternity care with Level-II NICU." },
  { icon: Brain, title: "Neurology", desc: "Stroke care, headache & seizure management." },
  { icon: Bone, title: "Orthopaedics", desc: "Joint replacement, trauma & sports injuries." },
  { icon: Stethoscope, title: "General Medicine", desc: "OPD, internal medicine, preventive health." },
  { icon: Eye, title: "ENT & Ophthalmology", desc: "Vision care, audiology and ENT surgeries." },
  { icon: Activity, title: "24×7 Emergency", desc: "Trauma response, ambulance & critical care." },
];

export const Specialties = () => (
  <section id="specialties" className="py-28 relative">
    <div className="container mx-auto px-6">
      <div className="max-w-2xl mb-16">
        <p className="text-sm uppercase tracking-[0.25em] text-secondary font-semibold mb-4">Our Specialties</p>
        <h2 className="font-display text-4xl md:text-5xl text-ink leading-tight mb-4">
          Comprehensive care, under <span className="text-gradient italic">one roof</span>.
        </h2>
        <p className="text-muted-foreground text-lg">
          From routine consultations to complex reconstructive procedures — every department is staffed with senior specialists.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {items.map(({ icon: Icon, title, desc }, i) => (
          <div
            key={title}
            className="group relative bg-card rounded-2xl p-6 border border-border hover:border-primary/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-soft"
            style={{ animationDelay: `${i * 50}ms` }}
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-gold rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center mb-5 group-hover:bg-gradient-primary transition-all duration-500">
              <Icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
            </div>
            <h3 className="font-display text-xl text-ink mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
