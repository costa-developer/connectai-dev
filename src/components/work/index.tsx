'use client'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const Work = () => {
  const ref = useRef(null)
  const inView = useInView(ref)

  const TopAnimation = {
    initial: { y: '-100%', opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: '-100%', opacity: 0 },
    transition: { duration: 0.6, delay: 0.4 },
  }

  const bottomAnimation = {
    initial: { y: '100%', opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: '100%', opacity: 0 },
    transition: { duration: 0.6, delay: 0.4 },
  }

  const services = [
    {
      icon: '/images/chooseus/chooseus-icon-1.svg',
      text: 'Automate lead qualification and follow-ups',
    },
    {
      icon: '/images/chooseus/chooseus-icon-2.svg',
      text: 'Provide instant AI-powered responses to prospects',
    },
    {
      icon: '/images/chooseus/chooseus-icon-3.svg',
      text: 'Analyze conversations to improve sales strategies',
    },
  ]

  return (
    <section className='bg-white py-20' id='work'>
      <div className='container px-4 mx-auto lg:max-w-(--breakpoint-xl)'>
        {/* FIX: Changed items-center to items-start to align content to the top */}
        <div ref={ref} className='grid grid-cols-12 items-start'>
          <motion.div
            {...bottomAnimation}
            className='lg:col-span-7 col-span-12'>
            <div className='flex flex-col gap-3'>
              <p className="text-gray-800 font-medium">
                Use Cases of <span className='text-blue-600'>our AI</span> solution
              </p>
              <h2 className='sm:text-40 text-30 text-gray-900 lg:w-full md:w-70% font-medium'>
                How Our AI-Powered Sales Assistant Drives Results
              </h2>
            </div>
            {/* The service list items already use 'flex items-center' for internal vertical alignment */}
            <div className='grid md:grid-cols-1 gap-7 mt-11'>
              {services.map((service, index) => (
                <div key={index} className='flex items-center gap-5'>
                  <div className='p-3 bg-blue-50 rounded-full'>
                    <Image
                      src={service.icon}
                      alt={`${service.text} icon`}
                      width={25}
                      height={25}
                    />
                  </div>
                  <p className='text-gray-800 font-medium'>{service.text}</p>
                </div>
              ))}
            </div>
          </motion.div>
          {/* FIX: Removed px-4 and 2xl:-mr-40 for cleaner alignment and layout */}
          <motion.div {...TopAnimation} className='lg:col-span-5 col-span-12'>
            <div className='mt-9 flex justify-center lg:justify-end'>
              <Image
                src='/images/app-ui.png'
                alt='AI Sales Assistant'
                width={600}
                height={425}
                className='lg:w-full'
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Work