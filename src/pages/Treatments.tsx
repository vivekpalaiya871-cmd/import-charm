import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2, Stethoscope, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import gynBefore from "@/assets/case-gyn-before.jpg";
import gynAfter from "@/assets/case-gyn-after.jpg";
import tummyTuck from "@/assets/case-tummy-tuck.jpeg";
import noseTumor from "@/assets/case-nose-tumor.jpeg";
import burnRecovery from "@/assets/case-burn-recovery.jpeg";
import earRepair from "@/assets/case-ear-repair.jpeg";

type Case = {
  id: string;
  title: string;
  surgeon: string;
  speciality: string;
  duration: string;
  date: string;
  before?: string;
  after?: string;
  collage?: string;
  summaryEn: string;
  summaryHi: string;
  procedure: string[];
  outcome: string[];
};

const cases: Case[] = [
  {
    id: "bilateral-gynecomastia",
    title: "Bilateral Gynecomastia Correction",
    surgeon: "Dr. Gopalji Gupta — Plastic Surgeon",
    speciality: "Cosmetic & Reconstructive Surgery",
    duration: "~2 hours",
    date: "Recent Case · 2026",
    before: gynBefore,
    after: gynAfter,
    summaryEn:
      "A young male patient presented with bilateral gynecomastia (enlargement of male breast tissue) causing significant chest contour asymmetry and self-image concerns. A combined approach of liposuction with gland excision was performed under general anaesthesia, restoring a flat, masculine chest contour with minimal scarring.",
    summaryHi:
      "एक युवा पुरुष रोगी को दोनों तरफ गाइनेकोमास्टिया (पुरुष स्तन ऊतक का बढ़ना) की समस्या थी, जिससे छाती के आकार में असमानता और आत्म-छवि की चिंता हो रही थी। जनरल एनेस्थीसिया में लाइपोसक्शन और ग्रंथि हटाने की संयुक्त प्रक्रिया से छाती का चपटा, मर्दाना आकार बहाल किया गया, बहुत कम निशान के साथ।",
    procedure: [
      "Pre-op evaluation, hormonal profile & cardiac clearance",
      "Tumescent infiltration of both chest regions",
      "Power-assisted liposuction of fat component",
      "Periareolar incision & subcutaneous gland excision",
      "Layered closure with absorbable sutures",
      "Compression vest for 4 weeks post-op",
    ],
    outcome: [
      "Symmetrical, flat chest contour",
      "Minimal scarring (hidden in areolar margin)",
      "Day-care procedure — discharged within 24 hours",
      "Return to desk work in 5–7 days",
      "Excellent patient satisfaction",
    ],
  },
  {
    id: "abdominoplasty-tummy-tuck",
    title: "Abdominoplasty (Tummy Tuck) — Before & After",
    surgeon: "Dr. Gopalji Gupta — Plastic Surgeon",
    speciality: "Body Contouring Surgery",
    duration: "~3 hours",
    date: "Recent Case · 2026",
    collage: tummyTuck,
    summaryEn:
      "A female patient with massive abdominal skin laxity and stretch marks following pregnancy and weight loss underwent a full abdominoplasty. Excess skin and fat were removed, the abdominal muscles tightened, and a flat, contoured abdomen restored.",
    summaryHi:
      "गर्भावस्था और वजन कम होने के बाद पेट की त्वचा ढीली होने और स्ट्रेच मार्क्स से परेशान महिला रोगी का पूर्ण एब्डोमिनोप्लास्टी (टमी टक) किया गया। अतिरिक्त त्वचा और चर्बी हटाकर पेट की मांसपेशियों को कसा गया, जिससे चपटा और सुडौल पेट बहाल हुआ।",
    procedure: [
      "Pre-op assessment & medical fitness clearance",
      "Marking of skin excision & umbilicus position",
      "Lower abdominal incision (hidden under bikini line)",
      "Removal of excess skin & fat apron",
      "Rectus muscle plication (tightening)",
      "Drain placement & layered closure",
    ],
    outcome: [
      "Flat, well-contoured abdomen",
      "Stretch marks below umbilicus removed",
      "Scar concealed within bikini line",
      "Significant boost in self-confidence",
      "Return to light work in 2–3 weeks",
    ],
  },
  {
    id: "facial-tumor-excision",
    title: "Facial Tumor Excision & Reconstruction",
    surgeon: "Dr. Gopalji Gupta — Plastic Surgeon",
    speciality: "Onco-Reconstructive Surgery",
    duration: "~4 hours",
    date: "Recent Case · 2026",
    collage: noseTumor,
    summaryEn:
      "An elderly patient presented with a large, ulcerated tumor of the nose and central face. A wide local excision was performed with safe oncological margins, followed by local flap reconstruction to restore facial contour and function. Post-operative recovery was uneventful with excellent aesthetic outcome.",
    summaryHi:
      "एक बुज़ुर्ग महिला रोगी की नाक और चेहरे के मध्य भाग पर बड़ा, घावयुक्त ट्यूमर था। सुरक्षित कैंसर मार्जिन के साथ ट्यूमर निकाला गया और लोकल फ्लैप द्वारा चेहरे का पुनर्निर्माण किया गया। ऑपरेशन के बाद रिकवरी बहुत अच्छी रही और चेहरे का रूप पुनः स्थापित हुआ।",
    procedure: [
      "Biopsy & oncological staging",
      "Wide local excision with frozen-section control",
      "Local advancement / rotation flap design",
      "Layered reconstruction of nasal & cheek units",
      "Suture removal at day 7–10",
      "Long-term follow-up & scar care",
    ],
    outcome: [
      "Complete tumor clearance",
      "Restored facial symmetry & contour",
      "Patient resumed daily life independently",
      "Minimal, well-healed scars",
      "Cancer-free on follow-up",
    ],
  },
  {
    id: "post-burn-reconstruction",
    title: "Major Burn Injury — Recovery & Reconstruction",
    surgeon: "Dr. Gopalji Gupta — Plastic Surgeon",
    speciality: "Burns & Reconstructive Surgery",
    duration: "Multi-stage · 6+ months",
    date: "Long-term Case · 2025–26",
    collage: burnRecovery,
    summaryEn:
      "A young patient was admitted with extensive deep burns covering the face, chest, back and limbs. With staged debridement, dressings, skin grafting and rehabilitation over several months, the patient achieved remarkable recovery — regaining mobility, function and confidence.",
    summaryHi:
      "एक युवा रोगी को चेहरे, छाती, पीठ और हाथ-पैर पर बहुत गहरे जलने की चोट के साथ भर्ती किया गया। कई महीनों तक चरणबद्ध डिब्राइडमेंट, ड्रेसिंग, स्किन ग्राफ्टिंग और पुनर्वास से रोगी ने उल्लेखनीय रिकवरी की — गतिशीलता, कार्यक्षमता और आत्मविश्वास पुनः प्राप्त हुआ।",
    procedure: [
      "ICU stabilization & fluid resuscitation",
      "Serial debridement of necrotic tissue",
      "Antibiotic & nutritional support",
      "Split-thickness skin grafting (multiple sittings)",
      "Pressure garments & physiotherapy",
      "Scar release & contracture surgery as needed",
    ],
    outcome: [
      "Survived a life-threatening burn injury",
      "Skin coverage achieved across all major areas",
      "Independent walking & arm movement restored",
      "Continued scar maturation with rehab",
      "Returning to normal daily activities",
    ],
  },
  {
    id: "ear-lobe-keloid-repair",
    title: "Ear Lobe Keloid Excision & Repair",
    surgeon: "Dr. Gopalji Gupta — Plastic Surgeon",
    speciality: "Cosmetic Reconstructive Surgery",
    duration: "~45 minutes",
    date: "Day-care Case · 2026",
    collage: earRepair,
    summaryEn:
      "A young woman developed a large, painful keloid on the ear after piercing. The keloid was excised under local anaesthesia, the ear contour reconstructed with fine plastic surgery techniques, and adjuvant therapy advised to prevent recurrence. The ear healed beautifully with a near-invisible scar.",
    summaryHi:
      "कान छिदवाने के बाद एक युवती के कान पर बड़ा और दर्दनाक केलॉइड बन गया था। लोकल एनेस्थीसिया में केलॉइड निकाला गया, फाइन प्लास्टिक सर्जरी तकनीक से कान का आकार बहाल किया गया, और दोबारा होने से रोकने के लिए सहायक उपचार सलाह दी गई। कान सुंदर रूप से ठीक हो गया, निशान लगभग अदृश्य है।",
    procedure: [
      "Clinical assessment & photo-documentation",
      "Local anaesthesia infiltration",
      "Intra-marginal keloid excision",
      "Layered reconstruction of helix & lobule",
      "Pressure clip + post-op steroid protocol",
      "Follow-up at 2 weeks, 6 weeks & 3 months",
    ],
    outcome: [
      "Complete keloid removal",
      "Natural ear shape restored",
      "Near-invisible, well-hidden scar",
      "Patient able to wear earrings again",
      "Low recurrence with adjuvant therapy",
    ],
  },
];

const Treatments = () => (
  <main className="min-h-screen bg-background">
    <Navbar />

    <section className="relative pt-20 pb-16 bg-gradient-to-b from-muted/40 to-background overflow-hidden">
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        <p className="text-sm uppercase tracking-[0.25em] text-secondary font-semibold mb-4">Treatments & Case Studies</p>
        <h1 className="font-display text-5xl md:text-6xl text-ink leading-[1.05] mb-5 max-w-3xl">
          Real patients. <span className="text-gradient italic">Real outcomes.</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Documented surgical cases by our consultants — outcomes you can trust.
        </p>
        <p className="font-devanagari text-lg text-muted-foreground mt-2">वास्तविक मरीज़, वास्तविक परिणाम</p>
      </div>
    </section>

    <section className="py-20">
      <div className="container mx-auto px-6 space-y-24">
        {cases.map((c) => (
          <article key={c.id} id={c.id} className="grid lg:grid-cols-12 gap-10">
            {/* Media */}
            <div className="lg:col-span-6">
              {c.collage ? (
                <figure className="relative">
                  <div className="absolute -inset-3 bg-gradient-primary rounded-2xl opacity-15 blur-xl" />
                  <div className="relative rounded-2xl overflow-hidden border-4 border-card shadow-elegant">
                    <img src={c.collage} alt={c.title} className="w-full h-auto object-contain bg-muted" loading="lazy" />
                    <span className="absolute top-3 left-3 bg-card/90 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-primary">
                      Case Photos
                    </span>
                  </div>
                </figure>
              ) : (
                <div className="grid grid-cols-2 gap-4">
                  {[{ label: "Before", img: c.before! }, { label: "After", img: c.after! }].map((s) => (
                    <figure key={s.label} className="relative">
                      <div className="absolute -inset-3 bg-gradient-primary rounded-2xl opacity-15 blur-xl" />
                      <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border-4 border-card shadow-elegant">
                        <img src={s.img} alt={`${c.title} — ${s.label}`} className="w-full h-full object-cover" loading="lazy" />
                        <span className="absolute top-3 left-3 bg-card/90 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-primary">
                          {s.label}
                        </span>
                      </div>
                    </figure>
                  ))}
                </div>
              )}
            </div>

            {/* Details */}
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-card/60 px-4 py-1.5 text-xs font-medium text-primary mb-5">
                <Stethoscope className="w-3.5 h-3.5" /> {c.speciality}
              </div>
              <h2 className="font-display text-3xl md:text-4xl text-ink mb-3 leading-tight">{c.title}</h2>
              <p className="text-sm text-muted-foreground mb-6">By {c.surgeon}</p>

              <div className="flex flex-wrap gap-4 mb-6 text-sm">
                <span className="inline-flex items-center gap-2 bg-muted/60 rounded-full px-4 py-1.5"><Calendar className="w-4 h-4 text-secondary" /> {c.date}</span>
                <span className="inline-flex items-center gap-2 bg-muted/60 rounded-full px-4 py-1.5"><Clock className="w-4 h-4 text-secondary" /> {c.duration}</span>
              </div>

              <p className="text-foreground/90 leading-relaxed mb-3">{c.summaryEn}</p>
              <p className="font-devanagari text-muted-foreground leading-relaxed mb-6">{c.summaryHi}</p>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-card border border-border rounded-2xl p-5">
                  <div className="text-xs uppercase tracking-[0.2em] text-secondary font-semibold mb-3">Procedure</div>
                  <ul className="space-y-2">
                    {c.procedure.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-sm text-foreground/90">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" /> {p}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-card border border-border rounded-2xl p-5">
                  <div className="text-xs uppercase tracking-[0.2em] text-secondary font-semibold mb-3">Outcome</div>
                  <ul className="space-y-2">
                    {c.outcome.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-sm text-foreground/90">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" /> {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8">
                <Button variant="hero" size="lg" asChild>
                  <a href="/#contact">Book a Consultation</a>
                </Button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>

    <Footer />
  </main>
);

export default Treatments;
