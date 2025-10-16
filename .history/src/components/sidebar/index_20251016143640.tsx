import { useState } from "react";
import Logo from "/images/logo-ct.png";
import CurvedBg from "/images/white-curved.jpeg";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); // mobile toggle

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
    <aside
      className={`fixed inset-y-0 left-0 z-50 my-4 ml-4 flex w-full max-w-[250px] flex-col overflow-y-auto rounded-2xl bg-white p-0 shadow-none transition-transform duration-200 ease-nav-brand
        ${isOpen ? "translate-x-0" : "-translate-x-full"} xl:translate-x-0`}
    >
      {/* Logo */}
      <div className="relative flex h-20 items-center justify-between px-8 py-6">
        <img src={Logo} alt="logo" className="h-8 max-w-full" />
        <span className="ml-1 font-semibold text-slate-700">Soft UI Dashboard</span>
        {/* Mobile close */}
        <i
          className="absolute top-0 right-0 p-4 text-slate-400 opacity-50 cursor-pointer xl:hidden fas fa-times"
          onClick={toggleSidebar}
        />
      </div>

      <hr className="h-px bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent" />

      {/* Menu */}
      <div className="flex-1 overflow-auto px-2 py-4">
        <ul className="flex flex-col gap-2">
          {menuItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition-colors hover:bg-gray-100"
              >
                {/* Placeholder icon div */}
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500 text-white">
                  <i className={`ni ni-${item.icon}`} />
                </div>
                <span>{item.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Sidebar card */}
      <div className="mx-4 mb-4 relative">
        <div
          className="relative flex flex-col items-center rounded-2xl bg-white p-4 text-left text-white shadow-soft-md after:absolute after:top-0 after:left-0 after:h-full after:w-full after:rounded-2xl after:content-[''] after:opacity-65"
          style={{ backgroundImage: `url(${CurvedBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white mb-4">
            <i className="ni ni-diamond text-lg bg-gradient-to-tl from-slate-600 to-slate-300 bg-clip-text text-transparent" />
          </div>
          <h6 className="mb-0 text-white">Need help?</h6>
          <p className="mb-4 text-xs font-semibold leading-tight text-white">Please check our docs</p>
          <a
            href="https://www.creative-tim.com/learning-lab/tailwind/html/quick-start/soft-ui-dashboard/"
            target="_blank"
            rel="noreferrer"
            className="w-full rounded-lg bg-white px-8 py-2 text-center text-black text-xs font-bold uppercase shadow-md transition hover:scale-105 hover:shadow-lg"
          >
            Documentation
          </a>
        </div>

        <a
          href="https://www.creative-tim.com/product/soft-ui-dashboard-pro-tailwind?ref=sidebarfree"
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-block w-full rounded-lg bg-gradient-to-tl from-purple-700 to-pink-500 px-6 py-3 text-center text-xs font-bold text-white uppercase shadow-md transition hover:scale-105 hover:shadow-lg"
        >
          Upgrade to pro
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
