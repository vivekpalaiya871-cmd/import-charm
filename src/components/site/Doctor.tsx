import { Award, GraduationCap, Quote, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import doctorOrtho from "@/assets/doctor-ortho.png";

const skills = [
  "Simple and Complex fracture fixation",
  "Hip, Knee and Shoulder Joint Replacement Surgeries",
  "Deformity Correction Surgeries",
  "Congenital & Post-traumatic deformities of Lower Limb",
  "CTEV foot correction",
  "Arthroscopic & Sports injury treatment",
];

export const Doctor = () => (
  <section id="doctors" className="py-28 bg-muted/40 relative overflow-hidden">
    <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
    <div className="container mx-auto px-6 relative">
      <div className="max-w-2xl mb-16">
        <p className="text-sm uppercase tracking-[0.25em] text-secondary font-semibold mb-4">Meet The Surgeon</p>
        <h2 className="font-display text-4xl md:text-5xl text-ink leading-tight">
          Expert hands. <span className="text-gradient italic">Compassionate</span> hearts.
        </h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="absolute -inset-6 bg-gradient-primary rounded-[2rem] opacity-20 blur-2xl" />
          <div className="relative aspect-[4/5] max-w-md rounded-[2rem] overflow-hidden shadow-elegant border-4 border-card">
            <img src={doctorOrtho} alt="Dr. Orthopaedic Surgeon, Meera Ji Hospital" className="w-full h-full object-cover" loading="lazy" width={768} height={960} />
          </div>
          <div className="absolute -bottom-6 -right-2 md:right-12 bg-card rounded-2xl px-6 py-4 shadow-elegant border border-border">
            <div className="flex items-center gap-3">
              <Award className="w-8 h-8 text-secondary" />
              <div>
                <div className="font-display text-lg text-ink">MS Ortho</div>
                <div className="text-xs text-muted-foreground">Joint Replacement Specialist</div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-card/60 px-4 py-1.5 text-xs font-medium text-primary mb-5">
            <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
            Orthopaedic & Joint Replacement Surgeon
          </div>
          <h3 className="font-display text-3xl md:text-4xl text-ink mb-5 leading-tight">
            Dr. Gopalji Gupta
          </h3>
          <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
            Two decades of expertise in orthopaedics — from complex trauma fixation to total joint
            replacements and paediatric deformity correction. Known for precision, gentle bedside
            manner, and life-changing outcomes.
          </p>

          <div className="border-l-4 border-secondary pl-5 mb-8 italic">
            <Quote className="w-6 h-6 text-secondary/40 mb-1" />
            <p className="text-base text-foreground/90 font-display">
              "Mobility is dignity. Every patient deserves to walk again — without pain."
            </p>
          </div>

          <div className="bg-card rounded-2xl p-6 border border-border mb-6">
            <div className="text-xs uppercase tracking-[0.2em] text-secondary font-semibold mb-4">Skills & Procedures</div>
            <ul className="grid sm:grid-cols-1 gap-3">
              {skills.map((s) => (
                <li key={s} className="flex items-start gap-3 text-foreground/90">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            <div className="flex items-start gap-3">
              <GraduationCap className="w-5 h-5 text-primary mt-1" />
              <div>
                <div className="font-medium text-foreground">MS Orthopaedics</div>
                <div className="text-sm text-muted-foreground">Fellowship — Joint Replacement</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Award className="w-5 h-5 text-primary mt-1" />
              <div>
                <div className="font-medium text-foreground">5,000+ Procedures</div>
                <div className="text-sm text-muted-foreground">Trauma & joint surgeries</div>
              </div>
            </div>
          </div>

          <Button variant="outlinePrimary" size="lg" asChild>
            <a href="#contact">Consult the Doctor</a>
          </Button>
        </div>
      </div>
    </div>
  </section>
);
