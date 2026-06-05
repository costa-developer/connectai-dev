import { perksData } from '@/app/api/data'
import Image from 'next/image'

const Perks = () => {
  return (
    <section className='pb-28 relative bg-white'>
      <div className='container px-4 relative z-2'>
        <div className='text-center'>
          <div className='flex flex-col gap-4'>
            <p className="text-gray-600 text-base relative">
              Always By <span className='text-primary'>your side</span>
            </p>
            <h2 className='text-gray-900 sm:text-40 text-30 font-medium'>
              Be the first to experience our AI Sales Chatbot!
            </h2>
          </div>
          <div className='mt-16 border border-gray-200 grid lg:grid-cols-3 sm:grid-cols-2 py-16 gap-10 px-10 rounded-3xl bg-white'>
            {perksData.map((item, index) => (
              <div
                key={index}
                className='text-center flex items-center justify-center flex-col'>
                <div className='bg-primary/10 p-4 rounded-full w-fit'>
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={44}
                    height={44}
                  />
                </div>
                <h4 className='text-gray-900 text-28 mb-4'>
                  {item.title}
                </h4>
                <div
                  className='text-gray-600'
                  dangerouslySetInnerHTML={{ __html: item.text }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='bg-linear-to-br from-tealGreen to-charcoalGray sm:w-50 w-96 z-0 sm:h-50 h-96 rounded-full sm:-bottom-80 bottom-0 blur-400 absolute sm:-left-48 opacity-60'></div>
    </section>
  )
}

export default Perks
