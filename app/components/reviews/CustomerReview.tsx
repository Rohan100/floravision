import React from 'react'
import Review from './Review'

function CustomerReview() {
    return (
        <div className='w-full py-12 px-6  bg-[#1b2316]'>
            <h2 className="text-4xl font-inter relative m-auto  font-bold text-white w-fit mb-16 ">
                <div className="absolute w-8 h-8 top-0 left-[calc(100%-24px)]  border-t-3 border-r-3 rounded-tr-lg border-amber-400  pointer-events-none"></div>
                <div className="absolute w-8 h-8 bottom-0 right-[calc(100%-22px)] border-amber-400  border-b-3 border-l-3 rounded-bl-lg   pointer-events-none"></div>
                Customer Review
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-3'>
                <Review reveiw='Just got my hands on some absolutely awesome plants, and I couldn’t be happier!'/>
                <Review reveiw='Each one has its own unique charm and personality, and they’ve already started brightening up my space. The vibrant colors and fresh greenery make such a huge difference in my home.'/>
                <Review reveiw="It's like bringing a little piece of nature indoors. Definitely worth the investment—my plant collection has never looked better!"/>
            </div>
        </div>
    )
}

export default CustomerReview