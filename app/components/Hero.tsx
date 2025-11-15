'use client'
import { Menu, X, ChevronDown, Play, ShoppingCart, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import CurvedCard from './Cards/HorizontalCard';
function Hero() {
    return (
        <div className=''>

            <section className="pt-18 md:px-12 px-3 md:pb-20 pb-10 relative overflow-hidden">
                <div className=" mx-auto mt-10 grid md:grid-cols-3 md:gap-12 gap-18 items-center">
                    <div className="text-white col-span-2">
                        <h1 className="sm:text-5xl text-4xl  font-inter md:text-8xl font-bold leading-tight">
                            Earth's Exhale
                        </h1>
                        <p className="text-white/70 text-lg leading-relaxed w-4/5 ">
                            "Earth Exhale" symbolizes the purity and vitality of the Earth's natural exhalations and its capacity for renewal, emphasizing the importance of...
                        </p>

                        <div className="flex gap-2 pt-4 items-center">
                            <button className="px-12 h-fit py-2 bg-transparent hover:bg-white/20 border-2 border-white rounded-lg text-white  font-medium transition-all backdrop-blur-sm">
                                Buy Now
                            </button>
                            <button className=" text-xl  bg-transparent border-none  text-white font-medium font-indie transition-all flex items-center gap-2">
                                <Play size={18} fill="white" className='w-10 h-10' />
                                Live Demo...
                            </button>
                        </div>


                        <div className="flex md:mt-14 mt-7 flex-col w-xs  items-start gap-2  bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/40">
                            <div className='flex gap-3 items-start'>
                                <img
                                    src="/profile.webp"
                                    alt="Jessica Mach"
                                    className="w-11 h-11 rounded-full object-cover"
                                />
                                <div>
                                    <h3 className="font-inter  text-white">Ronnie Hamill</h3>
                                    <div className='flex gap-1'>
                                        {[1, 2, 3, 4].map((key) => <Image key={key} src='/svg/star.svg' alt='star' width={14} height={14} />)}
                                        <Image src={'/svg/halfstar.svg'} alt='half star' width={7} height={14} />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p className="text-sm text-white/60 mt-1">
                                    I was drawn into this because of my love about nature.
                                    Indoor plants are any organic growth
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='w-full flex items-start justify-center '>
                        <div className='relative w-fit h-fit  rounded-2xl '>

                            <Image unoptimized src='/plants/plant1.png' alt='plant 1' width={100} height={100} className='absolute bottom-[35%] z-2 w-full ' />
                            <div className='w-[340px] h-[390px] mask-[url("/svg/bg.svg")] mask-contain mask-no-repeat mask-center  bg-white/5 backdrop-blur-lg rounded-4xl '>
                                <div className='bg-transparent h-[65%] w-full'>

                                </div>
                                <div className='flex flex-col w-4/5 mx-auto justify-center gap-1'>
                                    <p className='font-inter'>Indoor plant</p>
                                    <p className='font-inter text-2xl tracking-wide font-thin'>Aglonema plant</p>
                                    <button className="px-6 mt-1 w-fit h-fit py-2 bg-transparent text-sm hover:bg-white/20 border border-white rounded-lg text-white  font-medium transition-all backdrop-blur-sm">
                                        Buy Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

        </div>
    )
}

export default Hero