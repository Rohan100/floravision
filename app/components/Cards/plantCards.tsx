import React from 'react'
import Image from 'next/image'
type props = {
    image:string
    title:string
    price:string
    description:string
}
function PlantCard({image,title,price,description}:props) {
    return (
        <div className='w-full flex items-start justify-center '>
            <div className='w-[300px] h-[400px]  bg-white/5 shadow-xl backdrop-blur-lg rounded-4xl border border-white/40'>
                <div className='relative h-[55%]'>
                    <Image unoptimized src={image} alt='plant 1' width={100} height={100} className='absolute w-full bottom-0' />
                </div>
                <div className='flex flex-col w-4/5 mx-auto justify-center gap-1 mt-2 '>
                    <p className='font-inter text-xl tracking-wide font-thin'>{title}</p>
                    <p className='font-inter font-thin text-sm/tight'>{description}</p>
                    <button className="px-6 mt-1 w-fit h-fit py-2 bg-transparent text-sm hover:bg-white/20 border border-white rounded-lg text-white  font-medium transition-all backdrop-blur-sm">
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PlantCard