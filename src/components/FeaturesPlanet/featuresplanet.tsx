import { BarChart3, Bot, Globe2, MessageSquare, ShieldCheck, Workflow } from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "AI chat that converts",
    body: "Trained on your site content — your bot answers questions, qualifies leads, and books appointments while you sleep.",
  },
  {
    icon: MessageSquare,
    title: "Unified inbox",
    body: "Every conversation across every domain in one place. Jump in live whenever the AI hands over.",
  },
  {
    icon: Workflow,
    title: "Automated follow-up",
    body: "Schedule email campaigns and bulk sends straight from the dashboard — no separate tool needed.",
  },
  {
    icon: BarChart3,
    title: "Insights that matter",
    body: "Track conversions, response time, and the questions customers actually ask in real time.",
  },
  {
    icon: Globe2,
    title: "Unlimited domains",
    body: "Manage every website you run from a single account — perfect for agencies and operators.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise-grade auth",
    body: "Backed by Clerk, with secure sign-in, role management, and team collaboration built in.",
  },
];

export default function FeaturesPlanet() {
  return (
    <section id="features" className="relative py-20 md:py-28">
      <div
        className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
        aria-hidden
      />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary-foreground/90 mb-5">
            Why Connect AI
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight">
            Everything you need to <span className="text-gradient">turn chat into revenue</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            From the first hello to the final invoice — one platform handles the whole conversation
            loop.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => (
            <article
              key={f.title}
              className="group relative rounded-2xl border border-border bg-card/40 p-6 backdrop-blur transition hover:border-primary/40 hover:bg-card/70"
            >
              <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/30">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.body}</p>
              <div className="pointer-events-none absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
