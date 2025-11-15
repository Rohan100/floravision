'use client'
import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
      <nav className="fixed top-0 w-full z-50">
        <div className=" mx-auto px-12">
          <div className="flex items-center h-18">
            <div className="flex items-center gap-2 text-white">
              <Image src={'/plant.png'} alt='plant logo' width={32} height={32} />
              <span className="text-xl font-inter font-semibold ">FloraVision.</span>
            </div>

            <ul className="hidden flex-1 md:flex justify-center font-indie text-lg  items-center gap-20">
              <li>
                <a href="#home" className="text-white/90 hover:text-white transition-all relative group">
                  Home
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
              <li className="relative group">
                <a href="#plants" className="text-white/90 hover:text-white transition-all flex items-center gap-1">
                  Plants Types
                  <ChevronDown size={14} className="mt-0.5" />
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
              <li>
                <a href="#more" className="text-white/90 hover:text-white transition-all relative group">
                  More
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/90 hover:text-white transition-all relative group">
                  Contact
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
            </ul>

            <ul className="hidden md:flex justify-center  items-center gap-10">
              <li>
                <Image src={'/search.png'} alt='search' width={20} height={20} />
              </li>
              <li className="relative group">
                <Image src={'/bag.png'} alt='bag' width={20} height={20} />
              </li>
             
             
            </ul>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden ms-auto text-white p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>


          {isOpen && (
            <div className="md:hidden pb-6">
              <ul className="flex flex-col gap-4">
                <li>
                  <a
                    href="#home"
                    className="text-white/90 hover:text-white transition-all block py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#plants"
                    className="text-white/90 hover:text-white transition-all flex items-center gap-1 py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    Plants Types
                    <ChevronDown size={14} className="mt-0.5" />
                  </a>
                </li>
                <li>
                  <a
                    href="#more"
                    className="text-white/90 hover:text-white transition-all block py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    More
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-white/90 hover:text-white transition-all block py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
  );
}