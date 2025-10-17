"use client";

import Image from "next/image";
import PageIllustration from "../pageillustration/page-llustration";
import { useState } from "react";
import poster from "/public/images/big_banner.jpg";

export default function HeroHome() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="relative">
      <PageIllustration />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero content */}
        <div className="pt-24 md:pt-32 pb-12 md:pb-20 text-center">
          {/* Section header */}
          <div className="pb-12 md:pb-16">
            {/* Avatar images */}
            <div
              className="mb-6 flex justify-center -space-x-3"
              data-aos="zoom-y-out"
            >
              {Array.from({ length: 6 }, (_, i) => (
                <Image
                  key={i}
                  className="box-content rounded-full border-2 border-gray-50"
                  src={`/images/avatar-0${i + 1}.jpg`}
                  width={32}
                  height={32}
                  alt={`Avatar ${i + 1}`}
                  priority
                />
              ))}
            </div>

            {/* Main Heading */}
            <h1
              className="mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              An AI powered sales assistant <br className="hidden lg:inline-block" />
              chatbot
            </h1>

            {/* Subtitle */}
            <p
              className="mx-auto max-w-2xl text-base sm:text-lg md:text-xl text-gray-700 mb-8"
              data-aos="zoom-y-out"
              data-aos-delay={300}
            >
              Our straightforward pricing plans are tailored to meet your needs. 
              If not ready to commit, you can get started for free.
            </p>

            {/* Call-to-action button */}
            <div
              className="flex justify-center"
              data-aos="zoom-y-out"
              data-aos-delay={450}
            >
              <a
                className="inline-block px-6 py-3 font-bold text-white uppercase text-sm sm:text-base rounded-lg bg-gradient-to-tl from-blue-600 to-cyan-400 shadow-md hover:scale-105 transition transform"
                href="#0"
              >
                Start Free Trial &rarr;
              </a>
            </div>
          </div>

          {/* Video hero section */}
        </div>
        <div
            className="mx-auto"
          >

                  <img className="mt-10 md:relative md:mt-20 shadow-2xl" src="/images/app-ui.png" alt="software dashboard" />
          </div>
      </div>
    </section>
  );
}
