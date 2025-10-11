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
    // <div classNameName="m-0 font-sans antialiased font-normal bg-white text-start text-base leading-default text-slate-500">
    //   <div classNameName="w-[600px] ld:w-full flex flex-col items-start p-6">
    //     <Image
    //       src="/images/logo.png"
    //       alt="LOGO"
    //       sizes="100vw"
    //       style={{
    //         width: '20%',
    //         height: 'auto',
    //       }}
    //       width={0}
    //       height={0}
    //     />
    //     {children}
    //   </div>
    //   <div classNameName="hidden lg:flex flex-1 w-full max-h-full max-w-4000px overflow-hidden relative bg-cream  flex-col pt-10 pl-24 gap-3">
    //     <h2 classNameName="text-gravel md:text-4xl font-bold">
    //       Hi, I’m your AI powered sales assistant, Corinna!
    //     </h2>
    //     <p classNameName="text-iridium md:text-sm mb-10">
    //       Corinna is capable of capturing lead information without a form...{' '}
    //       <br />
    //       something never done before 😉
    //     </p>
    //     <Image
    //       src="/images/app-ui.png"
    //       alt="app image"
    //       loading="lazy"
    //       sizes="30"
    //       classNameName="absolute shrink-0 !w-[1600px] top-48"
    //       width={0}
    //       height={0}
    //     />
    //   </div>
    // </div>
    <div className="m-0 font-sans antialiased font-normal bg-white text-start text-base leading-default text-slate-500">


<NavBar />



    <main className="mt-0 transition-all duration-200 ease-soft-in-out">
      <section>
        <div className="relative flex items-center p-0 overflow-hidden bg-center bg-cover min-h-75-screen">
          <div className="container z-10">
            <div className="flex flex-wrap mt-0 -mx-3">
              <div className="flex flex-col w-full max-w-full px-3 mx-auto md:flex-0 shrink-0 md:w-6/12 lg:w-5/12 xl:w-4/12">
                   {children}
              </div>
              <div className="w-full max-w-full px-3 lg:flex-0 shrink-0 md:w-6/12">
                <div className="absolute top-0 hidden w-3/5 h-full -mr-32 overflow-hidden -skew-x-10 -right-40 rounded-bl-xl md:block">
                  <div
                    className="absolute inset-x-0 top-0 z-0 h-full -ml-16 bg-cover skew-x-10"
                    style={{ backgroundImage: `url(/images/curved6.jpg)` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <footer className="py-12">
      <div className="container">
        <div className="flex flex-wrap -mx-3">
          <div className="flex-shrink-0 w-full max-w-full mx-auto mb-6 text-center lg:flex-0 lg:w-8/12">
            <a href="javascript:;" target="_blank" className="mb-2 mr-4 text-slate-400 sm:mb-0 xl:mr-12"> Company </a>
            <a href="javascript:;" target="_blank" className="mb-2 mr-4 text-slate-400 sm:mb-0 xl:mr-12"> About Us </a>
            <a href="javascript:;" target="_blank" className="mb-2 mr-4 text-slate-400 sm:mb-0 xl:mr-12"> Team </a>
            <a href="javascript:;" target="_blank" className="mb-2 mr-4 text-slate-400 sm:mb-0 xl:mr-12"> Products </a>
            <a href="javascript:;" target="_blank" className="mb-2 mr-4 text-slate-400 sm:mb-0 xl:mr-12"> Blog </a>
            <a href="javascript:;" target="_blank" className="mb-2 mr-4 text-slate-400 sm:mb-0 xl:mr-12"> Pricing </a>
          </div>
          <div className="flex-shrink-0 w-full max-w-full mx-auto mt-2 mb-6 text-center lg:flex-0 lg:w-8/12">
            <a href="javascript:;" target="_blank" className="mr-6 text-slate-400">
              <span className="text-lg fab fa-dribbble"></span>
            </a>
            <a href="javascript:;" target="_blank" className="mr-6 text-slate-400">
              <span className="text-lg fab fa-twitter"></span>
            </a>
            <a href="javascript:;" target="_blank" className="mr-6 text-slate-400">
              <span className="text-lg fab fa-instagram"></span>
            </a>
            <a href="javascript:;" target="_blank" className="mr-6 text-slate-400">
              <span className="text-lg fab fa-pinterest"></span>
            </a>
            <a href="javascript:;" target="_blank" className="mr-6 text-slate-400">
              <span className="text-lg fab fa-github"></span>
            </a>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3">
          <div className="w-8/12 max-w-full px-3 mx-auto mt-1 text-center flex-0">
            <p className="mb-0 text-slate-400">
              Copyright ©
              <script>
                document.write(new Date().getFullYear());
              </script>
              Soft by Creative Tim.
            </p>
          </div>
        </div>
      </div>
    </footer>
  </div>
  )
}

export default Layout
