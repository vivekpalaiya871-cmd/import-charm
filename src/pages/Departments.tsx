import { Link } from "@tanstack/react-router";
import {
  ArrowLeft, Scissors, Baby, Stethoscope, HeartPulse, Activity, Bone, Syringe, Ear,
  ScanLine, Pill, FlaskConical, X, CheckCircle2, ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

type Service = {
  icon: React.ComponentType<{ className?: string }>;
  en: string;
  hi: string;
  descEn: string;
  descHi: string;
  points: { en: string; hi: string }[];
};

const specialities: Service[] = [
  {
    icon: Scissors,
    en: "General & Laparoscopy Surgery",
    hi: "जनरल व लेपरोस्कोपिक सर्जरी",
    descEn: "Modern key-hole and open surgical care for abdomen, hernia, gallbladder, appendix and more — with faster recovery and minimal scarring.",
    descHi: "पेट, हर्निया, पित्ताशय, अपेंडिक्स आदि की आधुनिक दूरबीन व खुली सर्जरी — कम दर्द, छोटा निशान, जल्दी रिकवरी।",
    points: [
      { en: "Laparoscopic gallbladder & hernia surgery", hi: "दूरबीन से पित्ताशय व हर्निया का ऑपरेशन" },
      { en: "Appendix, piles, fissure & fistula treatment", hi: "अपेंडिक्स, बवासीर, फिशर व फिस्टुला का इलाज" },
      { en: "Daycare procedures with same-day discharge", hi: "एक ही दिन में भर्ती और छुट्टी" },
    ],
  },
  {
    icon: Baby,
    en: "Obstetrics & Gynaecology",
    hi: "प्रसूति एवं स्त्री रोग",
    descEn: "Complete women's health — from regular check-ups to safe deliveries (normal & C-section) and gynaecological surgeries.",
    descHi: "महिलाओं की संपूर्ण स्वास्थ्य देखभाल — नियमित जाँच से लेकर सुरक्षित डिलीवरी (सामान्य व सिज़ेरियन) तथा स्त्री रोग सर्जरी।",
    points: [
      { en: "Normal & C-section deliveries 24×7", hi: "सामान्य व सिज़ेरियन डिलीवरी 24 घंटे" },
      { en: "High-risk pregnancy care", hi: "जोखिमपूर्ण गर्भावस्था की देखभाल" },
      { en: "Hysterectomy, fibroid & ovarian cyst surgery", hi: "बच्चेदानी, गांठ व सिस्ट के ऑपरेशन" },
    ],
  },
  {
    icon: Stethoscope,
    en: "General Medicine",
    hi: "जनरल मेडिसिन",
    descEn: "Diagnosis and treatment of fever, infections, diabetes, blood pressure, asthma and other common adult illnesses.",
    descHi: "बुख़ार, संक्रमण, शुगर, बी.पी., दमा जैसे आम रोगों की जाँच व इलाज।",
    points: [
      { en: "Diabetes & hypertension management", hi: "शुगर व ब्लड प्रेशर का प्रबंधन" },
      { en: "Fever, dengue, typhoid & infections", hi: "बुख़ार, डेंगू, टायफॉइड व संक्रमण" },
      { en: "Routine health check-ups", hi: "नियमित स्वास्थ्य जाँच" },
    ],
  },
  {
    icon: HeartPulse,
    en: "Paediatrics",
    hi: "बाल रोग विज्ञान",
    descEn: "Caring for newborns, infants, children and teens — vaccinations, growth monitoring and treatment of childhood illnesses.",
    descHi: "नवजात शिशु, बच्चों व किशोरों की देखभाल — टीकाकरण, विकास जाँच व बीमारियों का इलाज।",
    points: [
      { en: "Newborn & NICU-level baby care", hi: "नवजात शिशु की विशेष देखभाल" },
      { en: "Complete vaccination as per schedule", hi: "पूर्ण टीकाकरण कार्यक्रम" },
      { en: "Treatment of cough, cold, diarrhoea & fever", hi: "खाँसी, ज़ुकाम, दस्त व बुख़ार का इलाज" },
    ],
  },
  {
    icon: Activity,
    en: "Urology",
    hi: "यूरोलॉजी",
    descEn: "Advanced care for kidney stones, prostate, urinary tract and male reproductive issues — including endoscopic and laser procedures.",
    descHi: "गुर्दे की पथरी, प्रोस्टेट, मूत्र मार्ग व पुरुष रोगों का आधुनिक इलाज — दूरबीन व लेज़र तकनीक से।",
    points: [
      { en: "PCNL & RIRS for kidney stones", hi: "गुर्दे की पथरी हेतु PCNL व RIRS" },
      { en: "TURP for prostate enlargement", hi: "प्रोस्टेट की दूरबीन सर्जरी (TURP)" },
      { en: "Urethroplasty & uro-oncology", hi: "मूत्रमार्ग व यूरो-कैंसर सर्जरी" },
    ],
  },
  {
    icon: Scissors,
    en: "Plastic & Reconstructive Surgery",
    hi: "प्लास्टिक व पुनर्निर्माण सर्जरी",
    descEn: "Reconstructive surgery for burns, injuries, congenital defects and wound care — restoring form and function.",
    descHi: "जलने, चोट, जन्मजात विकार व ज़ख्मों के लिए पुनर्निर्माण सर्जरी — रूप और कार्य दोनों की बहाली।",
    points: [
      { en: "Burn care & post-burn reconstruction", hi: "जले हुए घावों का इलाज व पुनर्निर्माण" },
      { en: "Cleft lip & palate surgery", hi: "कटे होंठ व तालु की सर्जरी" },
      { en: "Hand injuries & complex wound care", hi: "हाथ की चोट व जटिल घाव का उपचार" },
    ],
  },
  {
    icon: Bone,
    en: "Orthopaedic Surgery",
    hi: "हड्डी रोग व ऑर्थोपेडिक सर्जरी",
    descEn: "Comprehensive bone & joint care — fracture fixation, joint replacement, sports injuries and deformity correction.",
    descHi: "हड्डी व जोड़ों की संपूर्ण देखभाल — फ्रैक्चर, जोड़ प्रत्यारोपण, खेल चोट व विकृति सुधार।",
    points: [
      { en: "Hip, knee & shoulder replacement", hi: "कूल्हे, घुटने व कंधे का प्रत्यारोपण" },
      { en: "Simple & complex fracture fixation", hi: "सामान्य व जटिल फ्रैक्चर का इलाज" },
      { en: "CTEV & deformity correction", hi: "जन्मजात पंजे व विकृति सुधार" },
    ],
  },
  {
    icon: Syringe,
    en: "Anesthesiology",
    hi: "एनेस्थिसियोलॉजी",
    descEn: "Safe anaesthesia for surgeries with continuous monitoring — general, spinal, epidural and pain management.",
    descHi: "ऑपरेशन के लिए सुरक्षित एनेस्थीसिया — जनरल, स्पाइनल, एपीड्यूरल व दर्द निवारण।",
    points: [
      { en: "Pre-anaesthesia evaluation", hi: "ऑपरेशन से पूर्व जाँच" },
      { en: "Painless labour (epidural) facility", hi: "दर्दरहित प्रसव (एपीड्यूरल) सुविधा" },
      { en: "ICU-level intra-op monitoring", hi: "ऑपरेशन के दौरान निरंतर निगरानी" },
    ],
  },
  {
    icon: Ear,
    en: "Otorhinolaryngology (ENT)",
    hi: "कान, नाक, गला (ई.एन.टी.)",
    descEn: "Diagnosis & surgery for ear, nose, throat and sinus problems — including tonsils, deviated septum and hearing issues.",
    descHi: "कान, नाक, गला व साइनस की जाँच व सर्जरी — टॉन्सिल, नाक की हड्डी व सुनने की समस्या सहित।",
    points: [
      { en: "Tonsillectomy & adenoid surgery", hi: "टॉन्सिल व एडीनॉइड का ऑपरेशन" },
      { en: "Septoplasty (deviated nasal septum)", hi: "नाक की हड्डी का ऑपरेशन" },
      { en: "Ear infections & hearing assessment", hi: "कान का संक्रमण व सुनने की जाँच" },
    ],
  },
];

const support: Service[] = [
  {
    icon: ScanLine,
    en: "Ultrasound",
    hi: "अल्ट्रासाउंड",
    descEn: "Whole-abdomen, pregnancy and Doppler ultrasound by experienced radiologists.",
    descHi: "अनुभवी रेडियोलॉजिस्ट द्वारा पेट, गर्भावस्था व डॉप्लर अल्ट्रासाउंड।",
    points: [
      { en: "Pregnancy & anomaly scan", hi: "गर्भावस्था व एनॉमली स्कैन" },
      { en: "Whole abdomen & pelvis scan", hi: "पेट व पेल्विस की जाँच" },
      { en: "Same-day reporting", hi: "रिपोर्ट उसी दिन" },
    ],
  },
  {
    icon: Pill,
    en: "Pharmacy",
    hi: "दवाइयाँ (फार्मेसी)",
    descEn: "In-house 24×7 pharmacy stocked with quality medicines, surgical supplies and emergency drugs.",
    descHi: "अस्पताल के अंदर 24 घंटे खुली फार्मेसी — गुणवत्ता वाली दवाएँ व आपातकालीन सामग्री।",
    points: [
      { en: "24×7 medicine availability", hi: "24 घंटे दवा उपलब्ध" },
      { en: "Genuine, billed medications", hi: "असली व बिल सहित दवाइयाँ" },
      { en: "Emergency & surgical supplies", hi: "आपातकालीन व सर्जरी की सामग्री" },
    ],
  },
  {
    icon: ScanLine,
    en: "X-ray",
    hi: "एक्स-रे",
    descEn: "Digital X-ray for chest, bones and abdomen with quick, clear imaging and instant reporting.",
    descHi: "छाती, हड्डियों व पेट की डिजिटल एक्स-रे जाँच — तुरंत साफ़ रिपोर्ट।",
    points: [
      { en: "Digital imaging — low radiation", hi: "डिजिटल इमेजिंग — कम रेडिएशन" },
      { en: "Chest, bone & abdomen X-rays", hi: "छाती, हड्डी व पेट की एक्स-रे" },
      { en: "Instant film & report", hi: "तुरंत फ़िल्म व रिपोर्ट" },
    ],
  },
  {
    icon: HeartPulse,
    en: "ECG",
    hi: "ई.सी.जी.",
    descEn: "12-lead electrocardiogram for evaluating heart rhythm and pre-operative cardiac fitness.",
    descHi: "हृदय की धड़कन और ऑपरेशन से पहले की हृदय जाँच के लिए 12-लीड ई.सी.जी.।",
    points: [
      { en: "12-lead resting ECG", hi: "12-लीड रेस्टिंग ई.सी.जी." },
      { en: "Pre-operative cardiac screening", hi: "ऑपरेशन से पूर्व हृदय जाँच" },
      { en: "Quick reporting by physician", hi: "डॉक्टर द्वारा त्वरित रिपोर्ट" },
    ],
  },
  {
    icon: FlaskConical,
    en: "Laboratory Services",
    hi: "लेबोरेट्री सेवाएँ",
    descEn: "Full pathology lab — blood, urine, biochemistry and microbiology tests with accurate, timely reports.",
    descHi: "पूर्ण पैथोलॉजी लैब — खून, पेशाब, बायोकेमिस्ट्री व माइक्रोबायोलॉजी की सटीक एवं समय पर रिपोर्ट।",
    points: [
      { en: "CBC, sugar, lipid, LFT, KFT", hi: "सीबीसी, शुगर, लिपिड, एलएफटी, केएफटी" },
      { en: "Hormone & thyroid panels", hi: "हार्मोन व थायरॉइड जाँच" },
      { en: "Pre-operative test packages", hi: "ऑपरेशन-पूर्व जाँच पैकेज" },
    ],
  },
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

const ServiceCard = ({ s }: { s: Service }) => {
  const Icon = s.icon;
  return (
    <article className="group relative bg-card rounded-3xl p-7 border border-border hover:border-primary/40 transition-all duration-500 hover:shadow-elegant hover:-translate-y-1 overflow-hidden">
      <div className="absolute -top-16 -right-16 w-40 h-40 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition" />
      <div className="relative">
        <div className="flex items-center gap-4 mb-5">
          <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center shrink-0 shadow-soft">
            <Icon className="w-7 h-7 text-primary-foreground" />
          </div>
          <div>
            <h3 className="font-display text-xl text-ink leading-tight">{s.en}</h3>
            <p className="font-devanagari text-sm text-muted-foreground mt-0.5">{s.hi}</p>
          </div>
        </div>

        <p className="text-foreground/80 leading-relaxed mb-2">{s.descEn}</p>
        <p className="font-devanagari text-muted-foreground leading-relaxed mb-5">{s.descHi}</p>

        <ul className="space-y-2.5 pt-4 border-t border-border/60">
          {s.points.map((p) => (
            <li key={p.en} className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-secondary mt-1 shrink-0" />
              <div>
                <div className="text-sm font-medium text-foreground">{p.en}</div>
                <div className="font-devanagari text-sm text-muted-foreground">{p.hi}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

const DepartmentsPage = () => (
  <main className="min-h-screen bg-background">
    <Navbar />

    {/* Hero */}
    <section className="relative pt-20 pb-20 bg-gradient-to-b from-muted/40 to-background overflow-hidden">
      <div className="absolute -top-32 -right-32 w-[28rem] h-[28rem] bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-[28rem] h-[28rem] bg-secondary/10 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative">
        <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.25em] text-secondary font-semibold mb-4">Departments · विभाग</p>
          <h1 className="font-display text-5xl md:text-6xl text-ink leading-[1.05] mb-5">
            Scope of <span className="text-gradient italic">services</span>.
          </h1>
          <p className="font-devanagari text-2xl text-foreground/80 mb-4">उपलब्ध सेवाएँ</p>
          <p className="text-lg text-muted-foreground">
            A complete look at every speciality, support service and what we do — explained simply in English & Hindi.
          </p>
          <p className="font-devanagari text-base text-muted-foreground mt-2">
            हमारी हर सेवा का पूरा विवरण — सरल हिंदी और अंग्रेज़ी में।
          </p>
        </div>
      </div>
    </section>

    {/* Specialities */}
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-3 mb-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider">Specialities</span>
          <span className="font-devanagari text-muted-foreground">स्पेशियालिटी</span>
          <div className="flex-1 h-px bg-border ml-4" />
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {specialities.map((s) => <ServiceCard key={s.en} s={s} />)}
        </div>
      </div>
    </section>

    {/* Support services */}
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="flex items-center gap-3 mb-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider">Support Services</span>
          <span className="font-devanagari text-muted-foreground">सहायक सेवाएँ</span>
          <div className="flex-1 h-px bg-border ml-4" />
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {support.map((s) => <ServiceCard key={s.en} s={s} />)}
        </div>
      </div>
    </section>

    {/* Not in scope */}
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="bg-card border border-destructive/20 rounded-3xl p-8 md:p-12 shadow-soft">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-destructive/10 text-destructive text-xs font-bold uppercase tracking-wider">
              <X className="w-3.5 h-3.5" /> Not in Scope
            </span>
            <span className="font-devanagari text-muted-foreground">सेवा में नहीं</span>
          </div>
          <p className="text-foreground/80 mb-2 max-w-3xl">
            For these conditions we provide initial stabilization and refer you to a higher-level facility for safer, specialised care.
          </p>
          <p className="font-devanagari text-muted-foreground mb-8 max-w-3xl">
            इन स्थितियों में हम प्राथमिक उपचार देकर मरीज़ को उच्चस्तरीय अस्पताल में रेफर करते हैं ताकि सुरक्षित व विशेष इलाज मिल सके।
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {notInScope.map((n) => (
              <div key={n.en} className="flex items-start gap-3 p-4 rounded-xl bg-muted/40">
                <X className="w-5 h-5 text-destructive mt-0.5 shrink-0" />
                <div>
                  <div className="font-medium text-foreground">{n.en}</div>
                  <div className="font-devanagari text-sm text-muted-foreground">{n.hi}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex items-start gap-3 text-sm text-muted-foreground max-w-3xl">
            <ShieldCheck className="w-5 h-5 text-secondary mt-0.5 shrink-0" />
            <p>
              We believe in honest, transparent care — clearly stating what we do and what we don't, so families can make informed decisions.
              <span className="block font-devanagari mt-1">हम पारदर्शी इलाज में विश्वास रखते हैं — ताकि परिवार सही निर्णय ले सकें।</span>
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-6 text-center max-w-2xl">
        <h2 className="font-display text-3xl md:text-4xl text-ink mb-4">Need help choosing the right department?</h2>
        <p className="font-devanagari text-muted-foreground mb-8">सही विभाग चुनने में मदद चाहिए? हमसे संपर्क करें।</p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button variant="hero" size="lg" asChild>
            <a href="/#contact">Book Appointment</a>
          </Button>
          <Button variant="outlinePrimary" size="lg" asChild>
            <Link to="/doctors">Meet our Doctors</Link>
          </Button>
        </div>
      </div>
    </section>

    <Footer />
  </main>
);

export default DepartmentsPage;