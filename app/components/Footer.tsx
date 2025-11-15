import React from "react";
import Image from "next/image";
export default function Footer() {
  return (
    <footer className="bg-[#1b2218] text-white py-12 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

        <div>
          <div className="flex items-center gap-2 mb-4">
            <Image
              src="/plant.png" 
              alt="logo"
              className="w-10 h-10"
              width={10} height={10}
            />
            <h2 className="text-2xl font-semibold">FloraVision.</h2>
          </div>

          <p className="font-inter text-gray-300 leading-relaxed max-w-xs">
            "From lush indoor greens to vibrant outdoor blooms, our plants are
            crafted to thrive and elevate your living environment."
          </p>

          <div className="flex gap-6 mt-6 font-semibold">
            <button>FB</button>
            <button>TW</button>
            <button>LI</button>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Link’s</h3>

          <ul className="flex flex-col gap-3 text-gray-300">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Type’s Of plant’s</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
            <li className="hover:text-white cursor-pointer">Privacy</li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">For Every Update.</h3>

          <div className="flex border border-gray-600 rounded-md overflow-hidden w-full max-w-md">
            <input
              type="email"
              placeholder="Enter Email"
              className="bg-transparent px-4 py-2 w-full outline-none text-white"
            />
            <button className="bg-white text-black px-4 font-semibold">
              SUBSCRIBE
            </button>
          </div>
        </div>

      </div>

      <div className="text-center mt-12 text-gray-400 text-sm">
        FloraVision © all right reserve
      </div>
    </footer>
  );
}
