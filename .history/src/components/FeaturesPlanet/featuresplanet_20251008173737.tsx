import Image from "next/image";

function PlanetCard({ title, description, className }) {
  return (
    <div
      className={`absolute z-10 animate-[float_4s_ease-in-out_infinite_both] opacity-80 transition-opacity duration-500 bg-blue-600 text-white p-3 rounded-lg shadow-lg ${className}`}
    >
      <h4 className="font-semibold text-sm">{title}</h4>
      <p className="text-xs">{description}</p>
    </div>
  );
}

export default function FeaturesPlanet() {
  return (
    <section className="relative before:absolute before:inset-0 before:-z-20 before:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-16 text-center md:pb-20">
            <h2 className="text-3xl font-bold text-gray-200 md:text-4xl">
              Boost your sales with AI-powered chat assistance
            </h2>
          </div>
          {/* Planet */}
          <div className="pb-16 md:pb-20" data-aos="zoom-y-out">
            <div className="text-center">
              <div className="relative inline-flex rounded-full before:absolute before:inset-0 before:-z-10 before:scale-[.85] before:animate-[pulse_4s_cubic-bezier(.4,0,.6,1)_infinite] before:bg-linear-to-b before:from-blue-900 before:to-sky-700/50 before:blur-3xl after:absolute after:inset-0 after:rounded-[inherit] after:[background:radial-gradient(closest-side,var(--color-blue-500),transparent)]">
                
                {/* KEEP THIS UNCHANGED */}
                <Image
                  className="rounded-full bg-gray-900"
                  src="/images/planet.png"
                  width={400}
                  height={400}
                  alt="Planet"
                />
                <div className="pointer-events-none" aria-hidden="true">
                  <Image
                    className="absolute -right-64 -top-20 z-10 max-w-none"
                    src="/images/planet-overlay.svg"
                    width={789}
                    height={755}
                    alt="Planet decoration"
                  />

                  {/* REPLACED TAG IMAGES WITH CUSTOM CARDS */}
                  <PlanetCard
                    title="AI Insights"
                    description="Analyze customer interactions instantly"
                    className="-left-28 top-16 animate-[float_4s_ease-in-out_infinite_both]"
                  />
                  <PlanetCard
                    title="Lead Scoring"
                    description="Automate lead qualification easily"
                    className="left-56 top-7 animate-[float_4s_ease-in-out_infinite_1s_both] opacity-30"
                  />
                  <PlanetCard
                    title="Sales Optimization"
                    description="AI-powered suggestions to increase conversion"
                    className="-left-20 bottom-24 animate-[float_4s_ease-in-out_infinite_2s_both] opacity-25"
                  />
                  <PlanetCard
                    title="Custom Scripts"
                    description="Tailor chatbot workflows for your brand"
                    className="bottom-32 left-64 animate-[float_4s_ease-in-out_infinite_3s_both] opacity-80"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Grid */}
          <div className="grid overflow-hidden sm:grid-cols-2 lg:grid-cols-3 *:relative *:p-6 *:before:absolute *:before:bg-gray-800 *:before:[block-size:100vh] *:before:[inline-size:1px] *:before:[inset-block-start:0] *:before:[inset-inline-start:-1px] *:after:absolute *:after:bg-gray-800 *:after:[block-size:1px] *:after:[inline-size:100vw] *:after:[inset-block-start:-1px] *:after:[inset-inline-start:0] md:*:p-10">
            <article>
              <h3 className="mb-2 flex items-center space-x-2 font-medium text-gray-200">
                <svg
                  className="fill-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                >
                  <path d="M2 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4Zm2-4a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4H4Zm1 10a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H5Z" />
                </svg>
                <span>Instant Customer Insights</span>
              </h3>
              <p className="text-[15px] text-gray-400">
                Get real-time data on leads, customer interactions, and sales
                trends to optimize your chatbot performance and boost conversions.
              </p>
            </article>
            {/* Add remaining grid items here as in your original code */}
          </div>
        </div>
      </div>
    </section>
  );
}
