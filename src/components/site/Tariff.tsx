const rows = [
  { en: "OPD Charges", hi: "ओ पी डी", price: "₹ 700" },
  { en: "Emergency Fees", hi: "आपातकालीन फीस", price: "₹ 1,000" },
  { en: "Admission Fees", hi: "दाख़िला फीस", price: "₹ 1,000" },
  { en: "Day Care", hi: "डे केयर", price: "₹ 2,000" },
  { en: "Semi Private Room", hi: "सेमी प्राइवेट रूम", price: "₹ 3,000 / day" },
  { en: "Private Room", hi: "प्राइवेट रूम", price: "₹ 3,500 / day" },
  { en: "Private with AC", hi: "डीलक्स रूम", price: "₹ 4,000 / day" },
  { en: "ICU", hi: "आई सी यू", price: "₹ 4,900 / day" },
  { en: "NICU", hi: "एन आई सी यू", price: "₹ 4,900 / day" },
];

export const Tariff = () => (
  <section id="tariff" className="py-28">
    <div className="container mx-auto px-6">
      <div className="max-w-3xl mx-auto text-center mb-14">
        <p className="text-sm uppercase tracking-[0.25em] text-secondary font-semibold mb-4">Transparent Pricing</p>
        <h2 className="font-display text-4xl md:text-5xl text-ink mb-4">Hospital Tariff</h2>
        <p className="text-muted-foreground">Clear, honest, no surprises. All charges displayed upfront in both English and हिन्दी.</p>
      </div>

      <div className="max-w-4xl mx-auto bg-card rounded-3xl shadow-soft border border-border overflow-hidden">
        <div className="bg-gradient-primary px-8 py-6 text-primary-foreground flex items-center justify-between">
          <div>
            <div className="font-display text-2xl">Meera Ji Hospital</div>
            <div className="text-sm opacity-80">हस्पताल मूल्य सूची</div>
          </div>
          <div className="text-right text-sm opacity-90">
            Effective<br />2026
          </div>
        </div>
        <div className="divide-y divide-border">
          {rows.map((r, i) => (
            <div key={r.en} className="flex items-center justify-between px-8 py-5 hover:bg-muted/40 transition-colors">
              <div>
                <div className="font-medium text-foreground">{r.en}</div>
                <div className="font-devanagari text-sm text-muted-foreground">{r.hi}</div>
              </div>
              <div className="font-display text-lg text-primary tabular-nums">{r.price}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
