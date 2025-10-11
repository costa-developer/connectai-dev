import NavBar from '@/components/navbar'
import { currentUser } from '@clerk/nextjs'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import React from 'react'
import CurvedImage from "../assets/img/curved-images/curved6.jpg";

type Props = {
  children: React.ReactNode
}

const Layout = async ({ children }: Props) => {
  const user = await currentUser()

  if (user) redirect('/')

  return (
    <div className="m-0 font-sans antialiased font-normal bg-white text-start text-base leading-default text-slate-500">

    <NavBar />
    <main className="mt-0 transition-all duration-200 ease-soft-in-out">
      <section>
        <div className="relative flex items-center p-0 overflow-hidden bg-center bg-cover min-h-90-screen">
          <div className="container z-10">
            <div className="flex flex-wrap mt-0 -mx-3">
              <div className="flex flex-col w-full max-w-full px-3 mx-auto md:flex-0 shrink-0 md:w-6/12 lg:w-5/12 xl:w-4/12">
                   {children}
              </div>
              <div className="w-full max-w-full px-3 lg:flex-0 shrink-0 md:w-6/12">
                <div className="absolute top-0 hidden w-3/5 h-full -mr-32 overflow-hidden -skew-x-12 -right-40 rounded-bl-xl md:block">
                  <div
                    className="absolute inset-0 bg-cover bg-center -ml-20"
                    style={{ backgroundImage: `url(/images/curved6.jpg)` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
  )
}

export default Layout
