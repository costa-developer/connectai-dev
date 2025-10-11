import Image from "next/image";
import Stripes from "@/public/images/stripes-dark.svg";

export default function Cta() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div
          className="relative overflow-hidden rounded-2xl text-center shadow-xl before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:rounded-2xl before:bg-gray-900"
          data-aos="zoom-y-out"
        >
          {/* Glow */}
          <div
            className="absolute bottom-0 left-1/2 -z-10 -translate-x-1/2 translate-y-1/2"
            aria-hidden="true"
          >
            <div className="h-56 w-[480px] rounded-full border-[20px] border-blue-500 blur-3xl" />
          </div>
          {/* Stripes illustration */}
          <div
            className="pointer-events-none absolute left-1/2 top-0 -z-10 -translate-x-1/2 transform"
            aria-hidden="true"
          >
            <Image
              className="max-w-none"
              src="/images/stripes-dark.svg"
              width={768}
              height={432}
              alt="Stripes"
            />
          </div>
          <div className="px-4 py-12 md:px-12 md:py-20">
            {/* Header with Tailwind borders */}
            <h2 className="mb-6 md:mb-12 text-3xl md:text-4xl font-bold text-gray-200 border-t-2 border-b-2 border-gray-700 py-4">
              Supercharge your sales with AI Chatbot
            </h2>

            {/* Button with Tailwind only */}
            <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
              <a
                className="group mb-4 w-full sm:mb-0 sm:w-auto px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-500 transition-all duration-300 flex items-center justify-center"
                href="#0"
              >
                <span className="inline-flex items-center">
                  Try AI Chatbot Free
                  <span className="ml-2 text-blue-300 transform transition-transform group-hover:translate-x-1">
                    -&gt;
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
