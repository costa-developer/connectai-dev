import Image from "next/image";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Connect AI replaced three different tools for us. The inbox alone saves my team five hours a day.",
    name: "Alex Johnson",
    role: "Head of Sales, TechCorp",
    avatar: "/images/avatar-01.jpg",
  },
  {
    quote:
      "We rolled it out across all eight client sites in an afternoon. Our agency margins are up 22%.",
    name: "Priya Shah",
    role: "Founder, Northwind Agency",
    avatar: "/images/avatar-02.jpg",
  },
  {
    quote:
      "Best onboarding flow I've seen in a SaaS. The booking integration just works out of the box.",
    name: "Marcus Lee",
    role: "Ops Lead, Helio Studio",
    avatar: "/images/avatar-03.jpg",
  },
];

export default function LargeTestimonial() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center mb-14">
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">
            Loved by teams that <span className="text-gradient">ship fast</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="relative rounded-2xl border border-border bg-card/40 p-6 backdrop-blur"
            >
              <Quote className="h-6 w-6 text-primary/50 mb-4" />
              <blockquote className="text-sm text-foreground/90 leading-relaxed">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <Image
                  src={t.avatar}
                  alt={t.name}
                  width={36}
                  height={36}
                  className="rounded-full ring-1 ring-primary/30"
                />
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
