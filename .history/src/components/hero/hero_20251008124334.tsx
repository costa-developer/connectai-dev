import Image from "next/image";
import PageIllustration from "../pageillustration/page-llustration";

export default function HeroHome() {
  return (
    <section className="relative">
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-16">
            <div
              className="mb-6 border-y [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1]"
              data-aos="zoom-y-out"
            >
              <div className="-mx-0.5 flex justify-center -space-x-3">
                <Image
                  className="box-content rounded-full border-2 border-gray-50"
                  src="/images/avatar-01.jpg"
                  width={32}
                  height={32}
                  alt="Avatar 01"
                />
                <Image
                  className="box-content rounded-full border-2 border-gray-50"
                  src="/images/avatar-02.jpg"
                  width={32}
                  height={32}
                  alt="Avatar 02"
                />
                <Image
                  className="box-content rounded-full border-2 border-gray-50"
                  src="/images/avatar-03.jpg"
                  width={32}
                  height={32}
                  alt="Avatar 03"
                />
                <Image
                  className="box-content rounded-full border-2 border-gray-50"
                  src="/images/avatar-04.jpg"
                  width={32}
                  height={32}
                  alt="Avatar 04"
                />
                <Image
                  className="box-content rounded-full border-2 border-gray-50"
                  src="/images/avatar-05.jpg"
                  width={32}
                  height={32}
                  alt="Avatar 05"
                />
                <Image
                  className="box-content rounded-full border-2 border-gray-50"
                  src="/images/avatar-06.jpg"
                  width={32}
                  height={32}
                  alt="Avatar 06"
                />
              </div>
            </div>
            <h1
              className="mb-6 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1] md:text-6xl"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              Your AI Sales Assistant <br className="max-lg:hidden" />
              for Smarter Customer Conversations
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-lg text-gray-700"
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
                ConnectAI is an AI-powered chatbot designed to help your business
                engage customers, answer questions, and boost sales — all directly
                on your website with just a small snippet of code.
              </p>
              <div className="relative before:absolute before:inset-0 before:border-y before:[border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1]">
                <div
                  className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
                  data-aos="zoom-y-out"
                  data-aos-delay={450}
                >
                  <a
                    className="btn group mb-4 w-full bg-gradient-to-t from-orange-600 to-orange-500 
                               text-white shadow-sm hover:from-orange-500 hover:to-orange-400 
                               transition-all duration-300 sm:mb-0 sm:w-auto rounded-lg px-6 py-3"
                    href="#0"
                  >
                    <span className="relative inline-flex items-center">
                      Start For Free
                      <span className="ml-1 text-orange-300 transition-transform group-hover:translate-x-1">
                        -&gt;
                      </span>
                    </span>
                  </a>

                  <a
                    className="btn w-full bg-black text-white shadow-sm hover:bg-gray-50 
                               transition-colors duration-300 sm:ml-4 sm:w-auto rounded-lg px-6 py-3"
                    href="#0"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Hero image */}
          <div
            className="mx-auto max-w-3xl"
            data-aos="zoom-y-out"
            data-aos-delay={600}
          >
            <div className="relative aspect-video rounded-2xl bg-gray-900 px-5 py-3 shadow-xl before:pointer-events-none before:absolute before:-inset-5 before:border-y before:[border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1] after:absolute after:-inset-5 after:-z-10 after:border-x after:[border-image:linear-gradient(to_bottom,transparent,--theme(--color-slate-300/.8),transparent)1]">
              <Image
                src="/images/iphonecorinna.png"
                alt="ConnectAI App Preview"
                fill
                className="object-contain rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
