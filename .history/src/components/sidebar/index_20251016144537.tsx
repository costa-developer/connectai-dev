import { useState } from "react";
// Import from Next.js for routing and path checking
import Link from "next/link";
import { usePathname } from "next/navigation"; 

// Note: If you are using the older Pages Router, replace:
// import { usePathname } from "next/navigation"; 
// with: 
// import { useRouter } from "next/router";
// and use: const router = useRouter(); const pathname = router.pathname;

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); // mobile toggle
  const pathname = usePathname(); // Get the current path for active state

  const toggleSidebar = () => setIsOpen(!isOpen);

  const menuItems = [
    { name: "Dashboard", href: "/dashboard", icon: "dashboard" },
    { name: "Tables", href: "/tables", icon: "office" },
    { name: "Billing", href: "/billing", icon: "credit-card" },
    { name: "Virtual Reality", href: "/virtual-reality", icon: "box-3d-50" },
    { name: "RTL", href: "/rtl", icon: "settings" },
    { name: "Profile", href: "/profile", icon: "customer-support" },
    { name: "Sign In", href: "/sign-in", icon: "document" },
    { name: "Sign Up", href: "/sign-up", icon: "spaceship" },
  ];

  return (
    // 1. Defined background and improved transition for mobile
    // Note: The 'use client' directive is assumed to be at the top of this file since it uses hooks like useState and usePathname.
    <aside
      className={`fixed inset-y-0 left-0 z-50 my-4 ml-4 flex w-full max-w-[250px] flex-col overflow-y-auto rounded-xl bg-white p-0 shadow-xl transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"} xl:translate-x-0`}
    >
      
      {/* Logo */}
      <div className="relative flex h-20 items-center justify-start gap-2 px-8 py-6">
        <img src="/images/logo-ct.png" alt="logo" className="h-8 max-w-full" />
        <span className="text-lg font-extrabold text-slate-700">Soft UI</span>
        
        {/* Mobile close button: Better visibility with explicit text/icon style */}
        <button
          className="absolute top-0 right-0 p-4 text-xl text-slate-400 opacity-80 cursor-pointer xl:hidden hover:text-slate-700 transition"
          onClick={toggleSidebar}
          aria-label="Close menu"
        >
            <i className="fas fa-times" />
        </button>
      </div>

      {/* Thinner, softer divider */}
      <hr className="h-px mx-4 bg-transparent bg-gradient-to-r from-transparent via-gray-300 to-transparent" />

      {/* Menu */}
      <div className="flex-1 overflow-auto p-4">
        <ul className="flex flex-col space-y-2"> {/* Improved vertical spacing */}
          {menuItems.map((item) => {
            // Check if the current pathname matches the item's href
            const isActive = pathname === item.href; 
            
            // Define active and inactive styles for clarity
            const activeStyles = "bg-gradient-to-tl from-purple-700 to-pink-500 text-white shadow-soft-md";
            const inactiveStyles = "bg-white text-slate-700 hover:bg-gray-100/70";
            
            return (
                <li key={item.name}>
                  {/* Use Next.js Link component for client-side routing */}
                  <Link
                    href={item.href}
                    // Implemented distinct active link styling
                    className={`flex items-center gap-3 rounded-xl p-3 text-sm font-semibold transition-all duration-200 ease-in-out
                      ${isActive ? activeStyles : inactiveStyles}`}
                  >
                    {/* Icon container: Uses theme colors and changes based on active state */}
                    <div 
                      className={`flex h-8 w-8 items-center justify-center rounded-lg text-white transition-colors 
                        ${isActive ? "bg-white/30 text-white" : "bg-gradient-to-tl from-purple-700 to-pink-500"}`}
                    >
                      <i className={`ni ni-${item.icon} text-lg`} />
                    </div>
                    {/* Text color changes based on active state */}
                    <span className={isActive ? "text-white" : "text-slate-700"}>{item.name}</span>
                  </Link>
                </li>
            );
          })}
        </ul>
      </div>

      {/* Sidebar card */}
      <div className="mx-4 my-4 relative">
        {/* Improved card text readability by removing the redundant white background on inner elements */}
        <div
          className="relative flex flex-col items-center rounded-2xl p-6 text-center shadow-soft-xl"
          style={{ backgroundImage: `url("/images/white-curved.jpeg")`, backgroundSize: "cover", backgroundPosition: "center" }}
        >
          {/* Opaque white overlay for better text contrast */}
          <div className="absolute top-0 left-0 h-full w-full rounded-2xl bg-white opacity-60 z-0"></div>

          <div className="relative z-10 flex flex-col items-center">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white mb-4">
              <i className="ni ni-diamond text-xl bg-gradient-to-tl from-slate-600 to-slate-300 bg-clip-text text-transparent" />
            </div>
            <h6 className="mb-1 text-slate-800 font-bold">Need help?</h6>
            <p className="mb-4 text-xs font-medium leading-tight text-slate-600">Please check our documentation</p>
            <a
              href="https://www.creative-tim.com/learning-lab/tailwind/html/quick-start/soft-ui-dashboard/"
              target="_blank"
              rel="noreferrer"
              className="w-full rounded-lg bg-white px-8 py-2 text-center text-sm font-bold uppercase text-slate-700 shadow-md transition hover:scale-[1.02] hover:shadow-lg"
            >
              Documentation
            </a>
          </div>
        </div>

        {/* Upgrade button: Adjusted size and hover for consistency */}
        <a
          href="https://www.creative-tim.com/product/soft-ui-dashboard-pro-tailwind?ref=sidebarfree"
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-block w-full rounded-xl bg-gradient-to-tl from-purple-700 to-pink-500 px-6 py-3 text-center text-xs font-bold text-white uppercase shadow-md transition hover:scale-[1.02] hover:shadow-lg"
        >
          Upgrade to pro
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;