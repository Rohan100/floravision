import React from 'react'
import Image from 'next/image'
import Cards from './Cards'
function TopSelling() {
    return (
        <div className='w-full py-12 px-6  bg-[#1b2316]'>
            <h2 className="text-4xl font-inter relative m-auto  font-bold text-white w-fit mb-16 ">
                <div className="absolute w-8 h-8 top-0 left-[calc(100%-24px)]  border-t-3 border-r-3 rounded-tr-lg border-amber-400  pointer-events-none"></div>
                <div className="absolute w-8 h-8 bottom-0 right-[calc(100%-22px)] border-amber-400  border-b-3 border-l-3 rounded-bl-lg   pointer-events-none"></div>
                Our Top selling Plant
            </h2>

            <Cards />
        </div>
    )
}

export default TopSelling