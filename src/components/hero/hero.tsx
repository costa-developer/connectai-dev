"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

const avatars = [1, 2, 3, 4, 5, 6];

export default function HeroHome() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10 midnight-glow opacity-90" aria-hidden />
      <div
        className="absolute inset-x-0 top-0 -z-10 h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent"
        aria-hidden
      />
      {/* Subtle grid */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.07] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:48px_48px]"
        aria-hidden
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 text-center">
        {/* Eyebrow pill */}
        <div className="mx-auto mb-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary-foreground/90 backdrop-blur">
          <Sparkles className="h-3.5 w-3.5 text-primary" />
          <span>New — Conversation analytics powered by AI</span>
        </div>

        {/* Avatars */}
        <div className="mb-8 flex justify-center -space-x-3">
          {avatars.map((i) => (
            <Image
              key={i}
              className="box-content rounded-full border-2 border-card ring-1 ring-primary/30"
              src={`/images/avatar-0${i}.jpg`}
              width={36}
              height={36}
              alt={`Avatar ${i}`}
              priority
            />
          ))}
        </div>

        <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] text-foreground">
          The AI sales assistant
          <br />
          that <span className="text-gradient">never sleeps.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base md:text-lg text-muted-foreground">
          Connect AI captures leads, qualifies prospects, books meetings, and follows up with
          customers automatically — on every domain you own.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/auth/sign-up"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_10px_40px_-10px_hsl(var(--primary)/0.6)] hover:bg-primary/90 transition"
          >
            Start free
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link
            href="#features"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-7 py-3.5 text-sm font-semibold text-foreground hover:bg-card transition"
          >
            See how it works
          </Link>
        </div>

        <p className="mt-5 text-xs text-muted-foreground">
          Free during early access · No credit card required
        </p>
      </div>

      {/* Dashboard preview */}
      <div className="mt-20 flex justify-center px-4">
        <div className="relative w-full max-w-6xl">
          <div className="absolute -inset-1 -z-10 rounded-2xl bg-gradient-to-r from-primary/40 via-fuchsia-500/20 to-cyan-400/40 blur-2xl opacity-60" />
          <div className="relative rounded-2xl border border-border bg-card/60 p-2 backdrop-blur shadow-2xl">
            <Image
              src="/images/app-ui.png"
              alt="Connect AI dashboard"
              width={1440}
              height={800}
              className="rounded-xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
