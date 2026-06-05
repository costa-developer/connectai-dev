import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative mt-10 border-t border-border">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2 space-y-3">
            <div className="font-display text-xl font-bold">Connect AI</div>
            <p className="text-sm text-muted-foreground max-w-sm">
              The AI sales assistant for modern teams. Turn every visitor into a conversation —
              and every conversation into revenue.
            </p>
            <p className="text-xs text-muted-foreground pt-4">
              © {new Date().getFullYear()} Connect AI. All rights reserved.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-3">Product</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#features" className="hover:text-foreground transition">Features</Link></li>
              <li><Link href="/auth/sign-up" className="hover:text-foreground transition">Get started</Link></li>
              <li><Link href="/dashboard" className="hover:text-foreground transition">Dashboard</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-3">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-foreground transition">About</Link></li>
              <li><Link href="#" className="hover:text-foreground transition">Contact</Link></li>
              <li><Link href="#" className="hover:text-foreground transition">Privacy</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
