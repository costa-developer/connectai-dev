import { currentUser } from '@clerk/nextjs'
import { redirect } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import React from 'react'

type Props = {
  children: React.ReactNode
}

const Layout = async ({ children }: Props) => {
  const user = await currentUser()
  if (user) redirect('/dashboard')

  return (
    <div className="min-h-screen w-full bg-slate-50 text-slate-800 antialiased">
      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-12">
        {/* LEFT — form column */}
        <div className="col-span-1 flex flex-col lg:col-span-5 xl:col-span-5">
          {/* Minimal top bar */}
          <header className="flex items-center justify-between px-6 py-5 sm:px-10">
            <Link
              href="/"
              className="inline-flex items-center gap-2"
              aria-label="Connect AI home"
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tl from-blue-600 to-cyan-400 text-white font-bold shadow-soft-md">
                C
              </span>
              <span className="text-sm font-bold tracking-tight text-slate-800">
                Connect AI
              </span>
            </Link>
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-800 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="hidden sm:inline">Back to site</span>
            </Link>
          </header>

          {/* Form */}
          <main className="flex flex-1 items-center justify-center px-6 pb-10 sm:px-10">
            <div className="w-full max-w-md">{children}</div>
          </main>

          {/* Slim footer */}
          <footer className="px-6 pb-6 text-center text-xs text-slate-400 sm:px-10">
            © {new Date().getFullYear()} Connect AI · Secure sign-in
          </footer>
        </div>

        {/* RIGHT — brand panel (kept from your original split-screen idea) */}
        <aside
          className="relative hidden overflow-hidden lg:col-span-7 lg:flex xl:col-span-7"
          aria-hidden="true"
        >
          {/* Background image */}
          <Image
            src="/images/curved6.jpg"
            alt=""
            fill
            sizes="(min-width: 1024px) 60vw, 0px"
            priority
            className="object-cover"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-tl from-blue-700/85 via-blue-600/70 to-cyan-400/70" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.25),transparent_60%)]" />

          {/* Content */}
          <div className="relative z-10 flex h-full w-full flex-col justify-between p-12 text-white">
            <div className="inline-flex items-center gap-2 self-start rounded-full bg-white/15 px-3 py-1 text-xs font-medium backdrop-blur-md ring-1 ring-white/20">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
              Trusted by growing teams
            </div>

            <div className="max-w-lg space-y-6">
              <h2 className="text-3xl font-bold leading-tight tracking-tight xl:text-4xl">
                Conversations, automated.
                <br />
                Customers, delighted.
              </h2>
              <p className="text-base text-white/85 xl:text-lg">
                Connect AI replies, qualifies and books for you across every
                channel — so your team only steps in when it matters.
              </p>
              <ul className="grid gap-2.5 text-sm text-white/90">
                {[
                  '24/7 AI chat trained on your domain',
                  'Email campaigns with one-click templates',
                  'Appointments, payments & analytics in one place',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="mt-1.5 inline-block h-1.5 w-1.5 rounded-full bg-white/90" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-xs text-white/70">
              Your data is encrypted in transit and at rest.
            </p>
          </div>
        </aside>
      </div>
    </div>
  )
}

export default Layout
