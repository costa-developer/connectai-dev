'use client'

import React from 'react'
import Image from 'next/image';
import { AppWindow, MessageSquare, Settings } from 'lucide-react';


const Profile: React.FC = () => {
  return (
    <div className="w-full px-6 mx-auto mt-50">
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
                  <a
                    className="z-30 block w-full px-0 py-1 mb-0 transition-colors border-0 rounded-lg ease-soft-in-out bg-inherit text-slate-700"
                    data-nav-link
                    href="javascript:;"
                    role="tab"
                    aria-selected="false"
                    >
                    <Settings className="inline-block w-4 h-4 text-slate-800" />
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