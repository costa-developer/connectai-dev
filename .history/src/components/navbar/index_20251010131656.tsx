"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "../logo/logo";
import { ChevronDown } from "lucide-react";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  return (
    <header className="fixed top-2 z-30 w-full md:top-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-white/80 px-3 shadow-lg shadow-black/[0.03] backdrop-blur-2xl">
          {/* Logo + Brand */}
          <div className="flex items-center flex-1">
            <Logo />
            <Link
              href="/"
              className="ml-4 py-2 text-sm font-bold text-slate-700 hover:text-slate-900"
            >
              Connect AI
            </Link>
          </div>

          {/* Mobile Toggle */}
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

          {/* Desktop + Mobile Menu */}
          <div
            className={`flex-1 lg:flex lg:items-center lg:justify-end transition-all duration-300 ${
              menuOpen ? "block" : "hidden"
            }`}
          >
            <ul className="flex flex-col lg:flex-row lg:items-center lg:gap-4">
              {/* Products Dropdown */}
              <li className="relative group">
                <button
                  onClick={() => toggleDropdown("products")}
                  className="flex items-center gap-1 px-4 py-2 text-sm text-slate-700 hover:text-slate-900"
                >
                  Products <ChevronDown className="w-4 h-4" />
                </button>
                {activeDropdown === "products" && (
                  <ul className="absolute left-0 mt-2 w-48 rounded-lg bg-white shadow-lg border border-gray-100 p-2 space-y-1 z-50">
                    <li>
                      <Link
                        href="/ai-chat"
                        className="block px-3 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                      >
                        AI Chat Assistant
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/email-automation"
                        className="block px-3 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                      >
                        Email Automation
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/lead-manager"
                        className="block px-3 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                      >
                        Lead Manager
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/analytics"
                        className="block px-3 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                      >
                        AI Analytics
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              {/* Solutions Dropdown */}
              <li className="relative group">
                <button
                  onClick={() => toggleDropdown("solutions")}
                  className="flex items-center gap-1 px-4 py-2 text-sm text-slate-700 hover:text-slate-900"
                >
                  Solutions <ChevronDown className="w-4 h-4" />
                </button>
                {activeDropdown === "solutions" && (
                  <ul className="absolute left-0 mt-2 w-48 rounded-lg bg-white shadow-lg border border-gray-100 p-2 space-y-1 z-50">
                    <li>
                      <Link
                        href="/sales-ai"
                        className="block px-3 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                      >
                        Sales Automation
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/marketing-ai"
                        className="block px-3 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                      >
                        Marketing AI
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/customer-support"
                        className="block px-3 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                      >
                        Customer Support
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              {/* Company Dropdown */}
              <li className="relative group">
                <button
                  onClick={() => toggleDropdown("company")}
                  className="flex items-center gap-1 px-4 py-2 text-sm text-slate-700 hover:text-slate-900"
                >
                  Company <ChevronDown className="w-4 h-4" />
                </button>
                {activeDropdown === "company" && (
                  <ul className="absolute left-0 mt-2 w-40 rounded-lg bg-white shadow-lg border border-gray-100 p-2 space-y-1 z-50">
                    <li>
                      <Link
                        href="/about"
                        className="block px-3 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                      >
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/careers"
                        className="block px-3 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                      >
                        Careers
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/contact"
                        className="block px-3 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              <li>
                <Link
                  href="/pricing"
                  className="block px-4 py-2 text-sm text-slate-700 hover:text-slate-900"
                >
                  Pricing
                </Link>
              </li>

              <li>
                <Link
                  href="/resources"
                  className="block px-4 py-2 text-sm text-slate-700 hover:text-slate-900"
                >
                  Resources
                </Link>
              </li>

              <li>
                <Link
                  href="/auth/sign-up"
                  className="block px-8 py-2 text-sm text-slate-700 hover:text-slate-900"
                >
                  Sign Up
                </Link>
              </li>

              <li>
                <a
                  href="/auth/sign-in"
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
