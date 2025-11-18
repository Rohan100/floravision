import React from 'react'
import { ShoppingCart } from 'lucide-react'
function Best() {
    return (
        <section className=' py-12 bg-[#1b2316]'>
            <div className=' mx-auto'>

                <h2 className="md:text-4xl text-3xl font-inter relative m-auto  font-bold text-white w-fit mb-16 ">
                    <div className="absolute w-8 h-8 -top-1.5 left-[calc(100%-20px)]  border-t-3 border-r-3 rounded-tr-lg border-green-400  pointer-events-none"></div>
                    <div className="absolute w-8 h-8 -bottom-1.5 right-[calc(100%-20px)] border-green-400  border-b-3 border-l-3 rounded-bl-lg   pointer-events-none"></div>
                    Our Best 02
                </h2>
                <div className='bg-white/5 backdrop-blur-sm border border-white/40 rounded-4xl grid md:grid-cols-2  px-8 md:py-4 py-6 items-center' >
                    <div className="absolute w-full h-full bottom-0 right-0  border-b border-r rounded-4xl border-white/50  pointer-events-none"></div>
                    <div className={`relative w-full h-full`}>
                        <img
                            src='/plants/plant1.png'
                            alt="Desk plant"
                            className="md:w-4/5 w-full mb-4 md:mb-0 left-1/2 -translate-x-1/2 absolute md:block hidden -bottom-1  object-cover rounded-2xl"
                        />
                    </div>
                    <div className='self-center w-4/5 m-auto py-6'>

                        <h3 className="md:text-4xl text-2xl font-inter font-semibold text-white mb-6">
                            We Have Small And Best O2 Plants Collection{'’'}s
                        </h3>
                        <p className="text-white/70 font-lg mb-4 font-inter">
                            Oxygen-producing plants, often referred to as "O2 plants," are those that release oxygen into the atmosphere through the process of photosynthesis.
                        </p>
                        <p className="text-white/70 font-lg mb-4 font-inter">
                            Oxygen-producing plants, often referred to as "O2 plants," are those that release oxygen into the atmosphere through the process of photosynthesis.
                        </p>
                        <div className="flex gap-3">
                            <button className="px-6 w-fit py-3 bg-white/10 hover:bg-white/20 border border-white/30 rounded-lg text-white font-medium transition-all">
                                Explore
                            </button>
                            <button className="px-4 py-3 bg-white/10 hover:bg-white/20 border border-white/30 rounded-lg text-white transition-all">
                                <ShoppingCart size={20} />
                            </button>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    )
}

export default Best