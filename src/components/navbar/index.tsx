'use client'

import { useState } from "react";
import Link from "next/link";
import Logo from "../logo/logo";
import { ChevronDown } from "lucide-react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const { isLoaded, isSignedIn } = useUser();
  const router = useRouter();

  const toggleDropdown = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setActiveDropdown(null);
  };

  const handleAuthRedirect = (path: string) => {
    if (isLoaded && isSignedIn) {
      router.push("/dashboard");
    } else {
      router.push(path);
    }
    closeMenu();
  };

  const menuItems = [
    {
      title: "Products",
      key: "products",
      links: [
        { href: "/ai-chat", label: "AI Chat Assistant" },
        { href: "/email-automation", label: "Email Automation" },
        { href: "/lead-manager", label: "Lead Manager" },
        { href: "/analytics", label: "AI Analytics" },
      ],
    },
    {
      title: "Solutions",
      key: "solutions",
      links: [
        { href: "/sales-ai", label: "Sales Automation" },
        { href: "/marketing-ai", label: "Marketing AI" },
        { href: "/customer-support", label: "Customer Support" },
      ],
    },
    {
      title: "Company",
      key: "company",
      links: [
        { href: "/about", label: "About Us" },
        { href: "/careers", label: "Careers" },
        { href: "/contact", label: "Contact" },
      ],
    },
  ];

  return (
    <header className="fixed top-2 z-30 w-full md:top-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-white/90 px-3 shadow-lg shadow-black/5 backdrop-blur-md">
          <div className="flex items-center flex-1">
            <Logo />
            <Link
              href="/"
              className="ml-4 py-2 text-sm font-bold text-slate-700 hover:text-slate-900"
            >
              Connect AI
            </Link>
          </div>
          <button
            className="lg:hidden flex flex-col items-center justify-center px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100 transition"
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
          <nav
            className={`${
              menuOpen
                ? "block absolute top-16 left-0 w-full bg-white rounded-xl shadow-lg border border-gray-100 p-4 lg:static lg:w-auto lg:flex lg:items-center lg:gap-4"
                : "hidden lg:flex lg:items-center lg:gap-4"
            } transition-all duration-300`}
          >
            <ul className="flex flex-col lg:flex-row lg:items-center lg:gap-4">
              {menuItems.map((menu) => (
                <li key={menu.key} className="relative">
                  <button
                    onClick={() => toggleDropdown(menu.key)}
                    className="flex items-center justify-between lg:justify-start gap-1 px-4 py-2 text-sm text-slate-700 hover:text-slate-900 w-full lg:w-auto"
                  >
                    {menu.title} <ChevronDown className="w-4 h-4" />
                  </button>
                  <ul
                    className={`${
                      activeDropdown === menu.key
                        ? "max-h-96 opacity-100 py-2"
                        : "max-h-0 opacity-0 py-0"
                    } lg:absolute lg:left-0 lg:mt-2 lg:w-48 overflow-hidden lg:rounded-lg bg-white shadow-lg border border-gray-100 transition-all duration-300`}
                  >
                    {menu.links.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={closeMenu}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
              <li>
                <Link
                  href="/pricing"
                  onClick={closeMenu}
                  className="block px-4 py-2 text-sm text-slate-700 hover:text-slate-900"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/resources"
                  onClick={closeMenu}
                  className="block px-4 py-2 text-sm text-slate-700 hover:text-slate-900"
                >
                  Resources
                </Link>
              </li>
              <li>
                <button
                  onClick={() => handleAuthRedirect("/auth/sign-up")}
                  className="block px-4 py-2 text-sm text-slate-700 hover:text-slate-900"
                >
                  Sign Up
                </button>
              </li>
              <li className="pb-4 lg:pb-0">
                <button
                  onClick={() => handleAuthRedirect("/auth/sign-in")}
                  className="mt-2 lg:mt-0 inline-block px-4 py-2 text-xs font-bold text-white bg-gray-800 rounded-3xl hover:bg-gray-900"
                >
                  Sign In
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
