'use client'

import React from 'react'
import Image from 'next/image';
import { AppWindow, MessageSquare, Settings } from 'lucide-react';


const Profile: React.FC = () => {
  return (
    <div className="w-full px-6 mx-auto mt-50">
        {/* Style attribute converted to a JSX object */}
        <div
            className="relative flex items-center p-0 mt-6 overflow-hidden bg-center bg-cover rounded-2xl"
            style={{
                backgroundImage: "url('/images/curved0.jpg')",
                backgroundPositionY: "50%",
                height: "300px",
            }}
            >

          <span className="absolute inset-y-0 w-full h-full bg-center bg-cover bg-gradient-to-tl from-purple-700 to-pink-500 opacity-60"></span>
        </div>
        
        <div className="relative flex flex-col flex-auto min-w-0 p-4 mx-6 -mt-16 overflow-hidden break-words border-0 shadow-blur rounded-2xl bg-white/80 bg-clip-border backdrop-blur-2xl backdrop-saturate-200">
          <div className="flex flex-wrap -mx-3">
          <div className="flex-none w-auto max-w-full px-3">
            <div className="text-base ease-soft-in-out h-16 w-16 relative inline-flex items-center justify-center rounded-xl text-white transition-all duration-200">
  

            <Image
                src="/images/tendai.jpg"
                alt="profile_image"
                fill

                className="shadow-soft-sm rounded-xl object-cover" 
            />
            </div>
            </div>
            <div className="flex-none w-auto max-w-full px-3 my-auto">
              <div className="h-full">
                <h5 className="mb-1">Alec Thompson</h5>
                <p className="mb-0 font-semibold leading-normal text-sm">CEO / Co-Founder</p>
              </div>
            </div>
            <div className="w-full max-w-full px-3 mx-auto mt-4 sm:my-auto sm:mr-0 md:w-1/2 md:flex-none lg:w-4/12">
              <div className="relative right-0">
                <ul className="relative flex flex-wrap p-1 list-none bg-transparent rounded-xl" data-nav-pills role="tablist">
                  <li className="z-30 flex-auto text-center">
                  <a
                    className="z-30 block w-full px-0 py-1 mb-0 transition-all border-0 rounded-lg ease-soft-in-out bg-inherit text-slate-700"
                    data-nav-link
                    data-active
                    href="javascript:;"
                    role="tab"
                    aria-selected="true"
                    >
                    <AppWindow className="inline-block w-4 h-4 text-slate-800" />
                    <span className="ml-1">App</span>
                    </a>

                  </li>
                  <li className="z-30 flex-auto text-center">
                  <a
                    className="z-30 block w-full px-0 py-1 mb-0 transition-all border-0 rounded-lg ease-soft-in-out bg-inherit text-slate-700"
                    data-nav-link
                    href="javascript:;"
                    role="tab"
                    aria-selected="false"
                    >
                    <MessageSquare className="inline-block w-4 h-4 text-slate-800" />
                    <span className="ml-1">Messages</span>
                    </a>
                  </li>
                  <li className="z-30 flex-auto text-center">
                    <a className="z-30 block w-full px-0 py-1 mb-0 transition-colors border-0 rounded-lg ease-soft-in-out bg-inherit text-slate-700" data-nav-link href="javascript:;" role="tab" aria-selected="false">
                      <svg className="text-slate-700" width="16px" height="16px" viewBox="0 0 40 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <title>settings</title>
                        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                          <g transform="translate(-2020.000000, -442.000000)" fill="#FFFFFF" fillRule="nonzero">
                            <g transform="translate(1716.000000, 291.000000)">
                              <g transform="translate(304.000000, 151.000000)">
                                <polygon className="fill-slate-800" opacity="0.596981957" points="18.0883333 15.7316667 11.1783333 8.82166667 13.3333333 6.66666667 6.66666667 0 0 6.66666667 6.66666667 13.3333333 8.82166667 11.1783333 15.315 17.6716667"></polygon>
                                <path className="fill-slate-800" d="M31.5666667,23.2333333 C31.0516667,23.2933333 30.53,23.3333333 30,23.3333333 C29.4916667,23.3333333 28.9866667,23.3033333 28.48,23.245 L22.4116667,30.7433333 L29.9416667,38.2733333 C32.2433333,40.575 35.9733333,40.575 38.275,38.2733333 L38.275,38.2733333 C40.5766667,35.9716667 40.5766667,32.2416667 38.275,29.94 L31.5666667,23.2333333 Z" opacity="0.596981957"></path>
                                <path className="fill-slate-800" d="M33.785,11.285 L28.715,6.215 L34.0616667,0.868333333 C32.82,0.315 31.4483333,0 30,0 C24.4766667,0 20,4.47666667 20,10 C20,10.99 20.1483333,11.9433333 20.4166667,12.8466667 L2.435,27.3966667 C0.95,28.7083333 0.0633333333,30.595 0.00333333333,32.5733333 C-0.0583333333,34.5533333 0.71,36.4916667 2.11,37.89 C3.47,39.2516667 5.27833333,40 7.20166667,40 C9.26666667,40 11.2366667,39.1133333 12.6033333,37.565 L27.1533333,19.5833333 C28.0566667,19.8516667 29.01,20 30,20 C35.5233333,20 40,15.5233333 40,10 C40,8.55166667 39.685,7.18 39.1316667,5.93666667 L33.785,11.285 Z"></path>
                              </g>
                            </g>
                          </g>
                        </g>
                      </svg>
                      <span className="ml-1">Settings</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Profile