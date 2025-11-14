import React from 'react'
import Image from 'next/image'
type props = {
    reveiw:string
}
function Review({reveiw}:props) {
    return (
        <div className='w-full h-full flex items-center justify-center'>
            <div className="flex h-full w-4/5 flex-col px-8 py-14 max-w-xl  items-start gap-4  bg-white/5 shadow-xl backdrop-blur-lg rounded-[4rem] border border-white/40">
                <div className='flex gap-3 items-start'>
                    <img
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
                        alt="Jessica Mach"
                        className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                        <h3 className="font-inter text-xl  text-white">Ronnie Hamill</h3>
                        <div className='flex gap-1'>
                            {[1, 2, 3, 4].map((key) => <Image key={key} src='/svg/star.svg' alt='star' width={18} height={18} />)}
                            <Image src={'/svg/halfstar.svg'} alt='half star' width={9} height={18} />
                        </div>
                    </div>
                </div>
                <div>
                    <p className="font-inter text-white/60 mt-1">
                        {reveiw}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Review