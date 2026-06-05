"use client";

import { useState } from "react";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { Menu, X, Sparkles } from "lucide-react";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const { isLoaded, isSignedIn } = useUser();
  const router = useRouter();

  const go = (path: string) => {
    if (isLoaded && isSignedIn) {
      router.push("/dashboard");
    } else {
      router.push(path);
    }
    setOpen(false);
  };

  const links = [
    { href: "#features", label: "Features" },
    { href: "#", label: "Pricing" },
    { href: "#", label: "Resources" },
  ];

  return (
    <header className="fixed top-3 z-50 w-full md:top-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-full border border-border bg-card/70 px-4 backdrop-blur-xl shadow-[0_8px_30px_-12px_rgba(0,0,0,0.5)]">
          <Link href="/" className="flex items-center gap-2 font-display font-bold tracking-tight">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/20 text-primary ring-1 ring-primary/40">
              <Sparkles className="h-4 w-4" />
            </span>
            Connect AI
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-2">
            <button
              onClick={() => go("/auth/sign-in")}
              className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition"
            >
              Sign in
            </button>
            <button
              onClick={() => go("/auth/sign-up")}
              className="rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground hover:bg-primary/90 transition"
            >
              Get started
            </button>
          </div>

          <button
            className="lg:hidden inline-flex items-center justify-center rounded-lg p-2 text-foreground"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden mt-2 rounded-2xl border border-border bg-card/90 backdrop-blur-xl p-4 space-y-1">
            {links.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/40"
              >
                {l.label}
              </Link>
            ))}
            <button
              onClick={() => go("/auth/sign-in")}
              className="w-full text-left rounded-lg px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/40"
            >
              Sign in
            </button>
            <button
              onClick={() => go("/auth/sign-up")}
              className="w-full rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground hover:bg-primary/90 transition"
            >
              Get started
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
