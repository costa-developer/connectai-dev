import Link from "next/link";
import Logo from "../logo/logo";

export default function NavBar() {
  return (
    <header className="absolute top-0 left-0 right-0 z-30 px-4 py-2 mx-6 my-4 shadow-soft-2xl rounded-blur bg-gray-50 backdrop-blur-2xl backdrop-saturate-200">
      <div className="flex items-center justify-between w-full p-0 pl-6 mx-auto flex-wrap">
        {/* Branding / Logo */}
        <Link href="/dashboard" className="py-2.5 text-sm font-bold text-slate-700 whitespace-nowrap">
          <Logo /> Soft UI Dashboard
        </Link>

        {/* Mobile hamburger */}
        <button
          navbar-trigger
          className="px-3 py-1 ml-2 leading-none transition-all bg-transparent border border-transparent rounded-lg cursor-pointer text-lg lg:hidden"
          type="button"
          aria-controls="navigation"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="inline-block mt-2 w-6 h-6 bg-none">
            <span className="w-5.5 h-px bg-gray-600 block my-0 mx-auto rounded-xs transition-all duration-300"></span>
            <span className="w-5.5 h-px bg-gray-600 block my-0 mx-auto rounded-xs mt-1.75 transition-all duration-300"></span>
            <span className="w-5.5 h-px bg-gray-600 block my-0 mx-auto rounded-xs mt-1.75 transition-all duration-300"></span>
          </span>
        </button>

        {/* Menu */}
        <div
          navbar-menu
          className="items-center flex-grow overflow-hidden transition-all duration-500 ease-soft lg-max:max-h-0 basis-full lg:flex lg:basis-auto"
        >
          <ul className="flex flex-col pl-0 mb-0 list-none lg:flex-row xl:ml-auto">
            <li>
              <Link
                href="/dashboard"
                className="flex items-center px-4 py-2 mr-2 text-sm font-normal text-slate-700 transition-all lg:px-2"
              >
                <i className="mr-1 fa fa-chart-pie opacity-60"></i>
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                href="/profile"
                className="block px-4 py-2 mr-2 text-sm font-normal text-slate-700 transition-all lg:px-2"
              >
                <i className="mr-1 fa fa-user opacity-60"></i>
                Profile
              </Link>
            </li>
            <li>
              <Link
                href="/signup"
                className="block px-4 py-2 mr-2 text-sm font-normal text-slate-700 transition-all lg:px-2"
              >
                <i className="mr-1 fas fa-user-circle opacity-60"></i>
                Sign Up
              </Link>
            </li>
            <li>
              <Link
                href="/signin"
                className="block px-4 py-2 mr-2 text-sm font-normal text-slate-700 transition-all lg:px-2"
              >
                <i className="mr-1 fas fa-key opacity-60"></i>
                Sign In
              </Link>
            </li>
          </ul>

          {/* Free download button */}
          <ul className="hidden pl-0 mb-0 list-none lg:block lg:flex-row">
            <li>
              <a
                href="https://www.creative-tim.com/product/soft-ui-dashboard-tailwind"
                target="_blank"
                className="leading-pro ease-soft-in text-xs tracking-tight-soft shadow-soft-md bg-gradient-to-tl from-gray-900 to-slate-800 rounded-3.5xl mb-0 mr-1 inline-block cursor-pointer px-8 py-2 text-center font-bold uppercase text-white transition-all hover:scale-102 hover:shadow-soft-xs"
              >
                Free download
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
