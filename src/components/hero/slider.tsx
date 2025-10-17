'use client';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { pricedeta } from '@/app/api/data'; // Repurposed for AI services
import Image from 'next/image';

const CardSlider = () => {
  const settings = {
    autoplay: true,
    dots: false,
    arrows: false,
    infinite: true,
    autoplaySpeed: 1500,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    cssEase: 'ease-in-out',
    responsive: [
      { breakpoint: 479, settings: { slidesToShow: 1 } },
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
    ],
  };

  return (
    <div className="pt-14 flex flex-col gap-10">
      <div className="flex flex-col gap-3 items-center justify-center text-center">
        <p className="text-white font-medium">
          Featured <span className="text-primary">AI Solutions</span>
        </p>
        <h2 className="sm:text-40 text-30 text-white font-medium">
          Top AI Tools Driving Sales Success
        </h2>
      </div>

      <Slider {...settings}>
        {pricedeta.map((item, index) => (
          <div key={index} className="pr-6">
            <div className="px-5 py-6 bg-dark_grey/80 rounded-xl">
              <div className="flex flex-col items-center gap-5">
                <div className={`${item.background} ${item.padding} rounded-full`}>
                  <Image
                    src={item.icon}
                    alt={`${item.title} icon`}
                    width={item.width}
                    height={item.height}
                  />
                </div>
                <p className="text-white text-xs font-normal text-center">
                  <span className="text-16 font-bold mr-2">{item.title}</span>
                  {item.short} {/* e.g., "Lead generation AI", "Automated outreach" */}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardSlider;
