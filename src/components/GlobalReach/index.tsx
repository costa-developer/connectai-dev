"use client";
import { GlobalReachData } from "./data";
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer';

const GlobalReach = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.5,
    });

    return (
        <section className="bg-white py-20">
            <div className="container">
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-10'>
                    {GlobalReachData.map((item, index) => (                        
                        <div 
                            key={index} 
                            className='flex flex-col items-center border border-gray-200 gap-4 bg-gray-50 py-4 md:py-8 px-5 md:px-6 rounded-md shadow-sm'>
                            <h3 ref={ref} className="text-3xl font-black text-blue-600">
                                {item.prefix && item.prefix}
                                {item.count === 247 
                                    ? "24/7" 
                                    : inView 
                                        ? <CountUp start={0} end={item.count} duration={3} /> 
                                        : "0"}
                                {item.postfix && item.postfix}
                            </h3>
                            <p className='text-gray-700 text-center'>{item.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default GlobalReach;
