import React from 'react'
import Image from 'next/image'
type props = {
    reveiw:string
}
function Review({reveiw}:props) {
    return (
        <div className='w-full h-full flex items-center justify-center'>
            <div className="flex h-full md:w-4/5 w-11/12  flex-col md:px-8 md:py-14 px-4 py-7 max-w-xl  items-start gap-4  bg-white/5 shadow-xl backdrop-blur-lg md:rounded-[4rem] rounded-3xl border border-white/40">
                <div className='flex gap-3 items-start'>
                    <img
                        src="/profile.webp"
                        alt="Jessica Mach"
                        className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                        <h3 className="font-inter md:text-xl text-lg  text-white">Ronnie Hamill</h3>
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