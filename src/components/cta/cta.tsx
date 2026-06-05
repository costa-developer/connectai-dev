import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Cta() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-card/60 px-6 py-16 md:px-16 md:py-20 text-center backdrop-blur">
          <div className="absolute inset-0 -z-10 midnight-glow opacity-80" aria-hidden />
          <div
            className="absolute inset-0 -z-10 opacity-[0.08] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:36px_36px]"
            aria-hidden
          />
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">
            Ready to put your sales <span className="text-gradient">on autopilot?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
            Free during early access. Connect your first domain in under two minutes.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-3">
            <Link
              href="/auth/sign-up"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_10px_40px_-10px_hsl(var(--primary)/0.6)] hover:bg-primary/90 transition"
            >
              Get started free
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/auth/sign-in"
              className="inline-flex items-center justify-center rounded-full border border-border bg-background/40 px-7 py-3.5 text-sm font-semibold hover:bg-card transition"
            >
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
