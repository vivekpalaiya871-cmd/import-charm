import { Star } from "lucide-react";

const stories = [
  {
    name: "Arbind Pal",
    proc: "Maternity · Safe Delivery",
    quote:
      "I am happy and so blessed that my wife delivered our baby boy in this hospital. The doctors, nurses and other staff were very cooperative — they took great care of my wife and she delivered the baby safely.",
  },
  {
    name: "Ashraf Khan",
    proc: "Multispeciality Care",
    quote:
      "Excellent patient care. From the moment I stepped into the hospital, I was greeted with a warm welcome and friendly smile. The staff went above and beyond to ensure I felt comfortable and reassured throughout my stay.",
  },
  {
    name: "Manish Rao",
    proc: "Plastic Surgery · Abdominoplasty",
    quote:
      "Had my plastic surgery (Abdominoplasty) at this center — very nice ambience and a wonderful team. For good results, consult here.",
  },
];

export const Stories = () => (
  <section id="stories" className="py-28 bg-gradient-to-b from-background to-muted/30">
    <div className="container mx-auto px-6">
      <div className="max-w-2xl mb-14">
        <p className="text-sm uppercase tracking-[0.25em] text-secondary font-semibold mb-4">Patient Stories</p>
        <h2 className="font-display text-4xl md:text-5xl text-ink leading-tight">
          Lives <span className="text-gradient italic">restored</span>, families relieved.
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {stories.map((s, i) => (
          <article key={s.name} className="bg-card rounded-2xl p-8 border border-border hover:shadow-soft transition-all duration-500 hover:-translate-y-1">
            <div className="flex gap-1 mb-5">
              {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-secondary text-secondary" />)}
            </div>
            <p className="font-display text-lg text-foreground leading-relaxed mb-6">"{s.quote}"</p>
            <div className="pt-5 border-t border-border">
              <div className="font-medium text-ink">{s.name}</div>
              <div className="text-sm text-muted-foreground">{s.proc}</div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
