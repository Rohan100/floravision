'use client'
import { Menu, X, ChevronDown, Play, ShoppingCart, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import CurvedCard from './Cards/HorizontalCard';
function Hero() {
    return (
        <div className=''>

            <section className="pt-18 px-12 pb-20 relative overflow-hidden">
                <div className=" mx-auto mt-10 grid md:grid-cols-3 gap-12 items-center">
                    {/* Left Content */}
                    <div className="text-white col-span-2">
                        <h1 className="text-5xl font-inter md:text-8xl font-bold leading-tight">
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

                        {/* Testimonial */}
                        <div className="flex mt-14 flex-col w-xs  items-start gap-2  bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/40">
                            <div className='flex gap-3 items-start'>
                                <img
                                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
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

                    <div className='w-full flex items-start justify-center'>
                        <div className='w-[300px] h-[350px]  bg-white/5 backdrop-blur-lg rounded-4xl border border-white/40'>
                            <div className='relative h-[65%]'>
                                <Image unoptimized src='/plants/plant1.png' alt='plant 1' width={100} height={100} className='absolute w-full bottom-0' />
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
            </section>

            {/* Our Trendy Plants Section */}
            

            {/* Bottom Card */}
            {/* <section className="px-6 py-12 pb-20">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-gradient-to-br from-[#2a4a2a] to-[#1a2e1a] rounded-3xl overflow-hidden border border-white/10 p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
                        <div className="flex-1">
                            <h3 className="text-3xl font-bold text-white mb-4">
                                For Your Desks Decorations
                            </h3>
                            <p className="text-white/70 mb-6">
                                This trendy plant is fit even in minimal and perfectly to my desks workspace and perfectly in A4 papers
                            </p>
                            <p className="text-4xl font-bold text-white mb-6">Rs. 399/-</p>
                            <div className="flex gap-3">
                                <button className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/30 rounded-lg text-white font-medium transition-all">
                                    Explore
                                </button>
                                <button className="px-4 py-3 bg-white/10 hover:bg-white/20 border border-white/30 rounded-lg text-white transition-all">
                                    <ShoppingCart size={20} />
                                </button>
                            </div>
                        </div>
                        <div className="flex-1">
                            <img
                                src="https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=500&h=500&fit=crop"
                                alt="Succulent plant"
                                className="w-full max-w-md h-96 object-cover rounded-2xl mx-auto"
                            />
                        </div>
                    </div>
                </div>
            </section> */}
        </div>
    )
}

export default Hero