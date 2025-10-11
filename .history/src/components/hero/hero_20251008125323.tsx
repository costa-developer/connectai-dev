"use client";

import Image from "next/image";
import PageIllustration from "../pageillustration/page-llustration";
import { useState } from "react";

export default function HeroHome() {
  const [isPlaying, setIsPlaying] = useState(false);

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
                {/* Avatar images */}
                <Image className="box-content rounded-full border-2 border-gray-50" src="/images/avatar-01.jpg" width={32} height={32} alt="Avatar 01" />
                <Image className="box-content rounded-full border-2 border-gray-50" src="/images/avatar-02.jpg" width={32} height={32} alt="Avatar 02" />
                <Image className="box-content rounded-full border-2 border-gray-50" src="/images/avatar-03.jpg" width={32} height={32} alt="Avatar 03" />
                <Image className="box-content rounded-full border-2 border-gray-50" src="/images/avatar-04.jpg" width={32} height={32} alt="Avatar 04" />
                <Image className="box-content rounded-full border-2 border-gray-50" src="/images/avatar-05.jpg" width={32} height={32} alt="Avatar 05" />
                <Image className="box-content rounded-full border-2 border-gray-50" src="/images/avatar-06.jpg" width={32} height={32} alt="Avatar 06" />
              </div>
            </div>

            <h1
              className="mb-6 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1] md:text-6xl"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              An AI powered sales assistant <br className="max-lg:hidden" />
              chatbot
            </h1>

            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-lg text-gray-700"
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
                Our straightforward pricing plans are tailored to meet your needs. If not ready to commit you can get started for free.
              </p>

              <div className="relative before:absolute before:inset-0 before:border-y before:[border-image:linear-gradient(to_right,transparent,--theme(--color-slate-300/.8),transparent)1]">
                <div
                  className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
                  data-aos="zoom-y-out"
                  data-aos-delay={450}
                >
                  <a
                    className="btn group mb-4 w-full bg-gradient-to-t from-blue-600 to-blue-500 
                      text-white shadow-sm hover:from-blue-500 hover:to-blue-400 
                      transition-all duration-300 sm:mb-0 sm:w-auto rounded-lg px-6 py-3"
                    href="#0"
                  >
                    <span className="relative inline-flex items-center">
                      Start Free Trial
                      <span className="ml-1 text-blue-300 transition-transform group-hover:translate-x-1">
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

          {/* VIDEO HERO SECTION */}
          <div
            className="mx-auto max-w-4xl"
            data-aos="zoom-y-out"
            data-aos-delay={600}
          >
            <div className="relative aspect-video rounded-2xl shadow-xl overflow-hidden">
              {/* Poster image */}
              {!isPlaying && (
                <div
                  className="absolute inset-0 z-0 cursor-pointer"
                  style={{
                    backgroundImage:
                      "url('images/big_banner.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    filter: "brightness(50%)",
                  }}
                  onClick={() => setIsPlaying(true)}
                >
                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white/30 rounded-full flex items-center justify-center hover:bg-white/50 transition">
                      <svg
                        className="w-12 h-12 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M6 4l12 6-12 6V4z" />
                      </svg>
                    </div>
                  </div>
                </div>
              )}

              {/* Video iframe */}
              {isPlaying && (
                <iframe
                  className="absolute inset-0 w-full h-full z-10"
                  src="https://www.youtube.com/embed/VIDEO_ID?autoplay=1&rel=0"
                  title="AI SaaS Agency Bot"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
