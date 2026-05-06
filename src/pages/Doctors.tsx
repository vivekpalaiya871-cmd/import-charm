import { Link } from "@tanstack/react-router";
import { Award, GraduationCap, CheckCircle2, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import doctorOrtho from "@/assets/doctor-ortho.png";
import doctorShashi from "@/assets/doctor-shashi.jpg";
import doctorVijay from "@/assets/doctor-vijay.jpg";

type Doctor = {
  id: string;
  name: string;
  qualification: string;
  role: string;
  speciality: string;
  image: string;
  bio: string;
  skills: string[];
  experience?: string;
};

const doctors: Doctor[] = [
  {
    id: "gopalji-gupta",
    name: "Dr. Gopalji Gupta",
    qualification: "MBBS, MS, MCh (Plastic Surgery)",
    role: "Founder & Owner — Meera Ji Hospital · Senior Consultant",
    speciality: "Cosmetic, Plastic, Aesthetic, Reconstructive Surgery & Burns",
    image: doctorOrtho,
    experience: "10+ years",
    bio: "Dr. Gopalji Gupta is the founder and owner of Meera Ji Hospital. A board-certified Cosmetic & Plastic Surgeon with over 10 years of experience, he firmly believes in offering the best treatments and cosmetic procedures using the latest technology. He presently also serves as Senior Consultant in the Department of Plastic, Aesthetic, Reconstructive Surgery and Burns at Park Hospital, Gurugram.\n\nMedical Training:\n• MBBS — Chhatrapati Sahuji Maharaj Medical University (former KGMC), Lucknow, 2009\n• MS General Surgery — Banaras Hindu University, Varanasi, 2014\n• MCh Plastic Surgery — SMS Medical College & Hospital, Jaipur, 2019\n\nAffiliations: Association of Plastic Surgeons of India (APSI), Association of Surgeons of India (ASI), Delhi Medical Council.",
    skills: [
      "Reconstructive surgeries",
      "Burns management & post-burn reconstruction",
      "Microvascular hand surgeries (crush injuries, maxillofacial trauma)",
      "Aesthetic & non-surgical procedures of face, breast & abdomen",
      "Liposuction, Lasers, Botox, Fillers",
      "Hair Restoration Surgery (Hair Transplant)",
      "Oncoplastic surgeries & wound management",
      "Congenital deformities of face and limbs",
      "Abdominoplasty (Tummy Tuck)",
      "Blepharoplasty (Eyelids)",
      "Breast Augmentation, Lift (Mastopexy) & Reconstruction",
      "Buttocks Lift",
      "Cleft Lip and Palate Repair",
      "Cosmetic Rhinoplasty",
      "Ear Surgery (Pinnaplasty)",
      "Forehead / Brow Lift",
      "Hair Transplant & Hand Microsurgery",
      "Lip Augmentation, Male Breast Reduction (Gynecomastia)",
      "Mentoplasty & Scar Revision",
    ],
  },
  {
    id: "shashi-kant",
    name: "Dr. Shashi Kant",
    qualification: "MBBS, MS, M.Ch (Neuro Surgery)",
    role: "Consultant",
    speciality: "Neurosurgery",
    image: doctorShashi,
    experience: "10+ years",
    bio: "Consultant Neurosurgeon with extensive training in brain and spine surgery. Skilled in microsurgical techniques and complex neurological care.",
    skills: [
      "Brain tumor surgery",
      "Spine surgery & microdiscectomy",
      "Head injury & trauma management",
      "Hydrocephalus & shunt procedures",
      "Peripheral nerve surgery",
    ],
  },
  {
    id: "vijay-singh",
    name: "Dr. Vijay Singh",
    qualification: "MBBS, MS, M.Ch (Urology)",
    role: "Consultant Urologist",
    speciality: "Urology & Kidney Transplant",
    image: doctorVijay,
    experience: "13+ years (4 years as Urology Specialist)",
    bio: "Dr. Vijay Singh is a skilled and experienced Urologist with over 13 years of overall experience, including 4 years as a specialist in Urology. He specializes in advanced endourology and minimally invasive urological procedures.",
    skills: [
      "Advanced Endourology",
      "PCNL (Percutaneous Nephrolithotomy)",
      "RIRS (Retrograde Intrarenal Surgery)",
      "TURP (Transurethral Resection of Prostate)",
      "Urethroplasty",
      "Minimally Invasive Urological Procedures",
      "Uro-Oncology",
      "Kidney Transplant Surgery",
    ],
  },
];

const Doctors = () => (
  <main className="min-h-screen bg-background">
    <Navbar />

    {/* Header */}
    <section className="relative pt-20 pb-16 bg-gradient-to-b from-muted/40 to-background overflow-hidden">
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.25em] text-secondary font-semibold mb-4">Our Specialists</p>
          <h1 className="font-display text-5xl md:text-6xl text-ink leading-[1.05] mb-5">
            Meet our team of <span className="text-gradient italic">expert doctors</span>.
          </h1>
          <p className="text-lg text-muted-foreground">
            Skilled, compassionate consultants delivering world-class care with a personal touch.
          </p>
          <p className="font-devanagari text-lg text-muted-foreground mt-2">हमारे विशेषज्ञ चिकित्सक</p>
        </div>
      </div>
    </section>

    {/* Doctor cards */}
    <section className="py-20">
      <div className="container mx-auto px-6 space-y-24">
        {doctors.map((doc, idx) => (
          <article
            key={doc.id}
            id={doc.id}
            className={`grid lg:grid-cols-5 gap-12 items-center ${idx % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}
          >
            <div className="lg:col-span-2 relative">
              <div className="absolute -inset-6 bg-gradient-primary rounded-[2rem] opacity-20 blur-2xl" />
              <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-elegant border-4 border-card">
                <img
                  src={doc.image}
                  alt={`${doc.name}, ${doc.speciality}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width={768}
                  height={960}
                />
              </div>
              <div className="absolute -bottom-6 -right-2 md:right-12 bg-card rounded-2xl px-6 py-4 shadow-elegant border border-border">
                <div className="flex items-center gap-3">
                  <Award className="w-8 h-8 text-secondary" />
                  <div>
                    <div className="font-display text-lg text-ink">{doc.qualification.split(",")[0]}</div>
                    <div className="text-xs text-muted-foreground">{doc.role}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-card/60 px-4 py-1.5 text-xs font-medium text-primary mb-5">
                <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                {doc.speciality}
              </div>
              <h2 className="font-display text-3xl md:text-4xl text-ink mb-3 leading-tight">{doc.name}</h2>
              <p className="text-sm uppercase tracking-wider text-muted-foreground mb-5">{doc.qualification}</p>
              <p className="text-muted-foreground text-lg mb-6 leading-relaxed whitespace-pre-line">{doc.bio}</p>

              <div className="bg-card rounded-2xl p-6 border border-border mb-6">
                <div className="text-xs uppercase tracking-[0.2em] text-secondary font-semibold mb-4">Skills & Procedures</div>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {doc.skills.map((s) => (
                    <li key={s} className="flex items-start gap-3 text-foreground/90">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {doc.experience && (
                <div className="flex items-start gap-3 mb-8">
                  <GraduationCap className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <div className="font-medium text-foreground">Experience</div>
                    <div className="text-sm text-muted-foreground">{doc.experience}</div>
                  </div>
                </div>
              )}

              <Button variant="hero" size="lg" asChild>
                <a href="/#contact">Book Consultation</a>
              </Button>
            </div>
          </article>
        ))}
      </div>
    </section>

    <Footer />
  </main>
);

export default Doctors;
