import { currentUser } from '@clerk/nextjs'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import React from 'react'

type Props = {
  children: React.ReactNode
}

const Layout = async ({ children }: Props) => {
  const user = await currentUser()

  if (user) redirect('/')

  return (
    // <div className="m-0 font-sans antialiased font-normal bg-white text-start text-base leading-default text-slate-500">
    //   <div className="w-[600px] ld:w-full flex flex-col items-start p-6">
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
    //   <div className="hidden lg:flex flex-1 w-full max-h-full max-w-4000px overflow-hidden relative bg-cream  flex-col pt-10 pl-24 gap-3">
    //     <h2 className="text-gravel md:text-4xl font-bold">
    //       Hi, I’m your AI powered sales assistant, Corinna!
    //     </h2>
    //     <p className="text-iridium md:text-sm mb-10">
    //       Corinna is capable of capturing lead information without a form...{' '}
    //       <br />
    //       something never done before 😉
    //     </p>
    //     <Image
    //       src="/images/app-ui.png"
    //       alt="app image"
    //       loading="lazy"
    //       sizes="30"
    //       className="absolute shrink-0 !w-[1600px] top-48"
    //       width={0}
    //       height={0}
    //     />
    //   </div>
    // </div>
    <div className="m-0 font-sans antialiased font-normal bg-white text-start text-base leading-default text-slate-500">
      <div className="container sticky top-0 z-sticky">
        <div className="flex flex-wrap -mx-3">
          <div class="w-full max-w-full px-3 flex-0">
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layout
