"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "../logo/logo";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-2 z-30 w-full md:top-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-white/80 px-3 shadow-lg shadow-black/[0.03] backdrop-blur-2xl">
          <div className="flex items-center flex-1">
            <Logo />
            <Link
              href="/dashboard"
              className="ml-4 py-2 text-sm font-bold text-slate-700"
            >
             Connect AI
            </Link>
          </div>

          <button
            className="lg:hidden flex flex-col items-center justify-center px-3 py-2 border border-transparent rounded-lg text-gray-600 hover:bg-gray-100"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            <span
              className={`block w-6 h-px bg-gray-600 my-1 transition-all ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-px bg-gray-600 my-1 transition-all ${
                menuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-px bg-gray-600 my-1 transition-all ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>

          {/* Desktop + mobile menu */}
          <div
            className={`flex-1 lg:flex lg:items-center lg:justify-end transition-all duration-300 ${
              menuOpen ? "block" : "hidden"
            }`}
          >
            <ul className="flex flex-col lg:flex-row lg:gap-3">
              <li>
                <Link
                  href="/dashboard"
                  className="block px-4 py-2 text-sm text-slate-700 hover:text-slate-900"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/profile"
                  className="block px-4 py-2 text-sm text-slate-700 hover:text-slate-900"
                >
                  Profile
                </Link>
              </li>
              <li>
                <Link
                  href="/auth/sign-up"
                  className="block px-4 py-2 text-sm text-slate-700 hover:text-slate-900"
                >
                  Sign Up
                </Link>
              </li>
              <li>
                <a
                  href="/dashboard"
                  className="mt-2 lg:mt-0 inline-block px-4 py-2 text-xs font-bold text-white bg-gray-800 rounded-3xl hover:bg-gray-900"
                >
                   Sign In
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
