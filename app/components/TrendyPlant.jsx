import React from 'react'
import HorizontalCard from './Cards/HorizontalCard'
function TrendyPlant() {
    return (
        <section className=" py-12 ">
            <div className="mx-auto">
                <h2 className="md:text-4xl text-3xl font-inter relative m-auto  font-bold text-white w-fit mb-16">
                    <div className="absolute w-8 h-8 top-0 left-[calc(100%-24px)]  border-t-3 border-r-3 rounded-tr-lg border-amber-400  pointer-events-none"></div>
                    <div className="absolute w-8 h-8 bottom-0 right-[calc(100%-22px)] border-amber-400  border-b-3 border-l-3 rounded-bl-lg   pointer-events-none"></div>
                    Our Trendy plants
                </h2>

                <div className='w-full flex flex-col gap-32 z-100'>
                    <HorizontalCard side='left' image='/plants/plant2.png' price='599' />
                    <HorizontalCard side='right' image='/plants/plant3.png' price='399' />
                </div>
            </div>
        </section>
    )
}

export default TrendyPlant