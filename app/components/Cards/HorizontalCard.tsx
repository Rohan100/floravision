import React from 'react'
import { ShoppingCart } from 'lucide-react'
type props = {
    image: string
    side: string
    price: string
}
function HorizontalCard({ image, side, price }: props) {
    return (
        <div className='bg-white/5 backdrop-blur-sm border border-white/40 rounded-[4rem] grid md:grid-cols-2  px-8 md:py-4 py-6 items-center' >
            <div className="absolute w-full h-full bottom-0 right-0  border-b border-r rounded-[4rem] border-white/50  pointer-events-none"></div>
            {
                side == 'left' ? <div className={`relative w-full h-88`}>
                    <img
                        src={image}
                        alt="Desk plant"
                        className="md:w-4/5 w-full mb-4 md:mb-0 left-1/2 -translate-x-1/2 absolute bottom-0  object-cover rounded-2xl"
                    />
                </div> : <div className='self-center w-4/5 m-auto'>

                    <h3 className="text-2xl font-bold text-white mb-2">
                        For Your Desks Decorations
                    </h3>
                    <p className="text-white/70 mb-4 text-sm">
                        These trendy plants fit even in minimal and perfectly to my desks workspace and it possible enhance!
                    </p>
                    <p className="text-3xl font-bold text-white mb-4">Rs. {price}/-</p>
                    <div className="flex gap-3">
                        <button className="px-6 w-fit py-3 bg-white/10 hover:bg-white/20 border border-white/30 rounded-lg text-white font-medium transition-all">
                            Explore
                        </button>
                        <button className="px-4 py-3 bg-white/10 hover:bg-white/20 border border-white/30 rounded-lg text-white transition-all">
                            <ShoppingCart size={20} />
                        </button>
                    </div>
                </div>
            }
            {
                side == 'right' ? <div className={`relative w-full h-88`}>
                    <img
                        src={image}
                        alt="Desk plant"
                        className="md:w-4/5 w-full mb-4 md:mb-0 left-1/2 -translate-x-1/2 absolute bottom-0  object-cover rounded-2xl"
                    />
                </div> : <div className='self-center w-4/5 m-auto'>

                    <h3 className="text-2xl font-bold text-white mb-2">
                        For Your Desks Decorations
                    </h3>
                    <p className="text-white/70 mb-4 text-sm">
                        These trendy plants fit even in minimal and perfectly to my desks workspace and it possible enhance!
                    </p>
                    <p className="text-3xl font-bold text-white mb-4">Rs. {price}/-</p>
                    <div className="flex gap-3">
                        <button className="px-6 w-fit py-3 bg-white/10 hover:bg-white/20 border border-white/30 rounded-lg text-white font-medium transition-all">
                            Explore
                        </button>
                        <button className="px-4 py-3 bg-white/10 hover:bg-white/20 border border-white/30 rounded-lg text-white transition-all">
                            <ShoppingCart size={20} />
                        </button>
                    </div>
                </div>
            }



        </div>

    )
}

export default HorizontalCard