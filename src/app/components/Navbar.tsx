"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className='bg-white text-black w-full uppercase tracking-[0.22px] md:text-[22px] p-4'>
        <div className='container mx-auto flex flex-row items-center'>
         

          {/* Logo */}
          <div className='flex-grow'>
            <Image src="/logo.jpg" alt="logo" width={200} height={200} />
          </div>

 
          </div>{/* Hamburger icon moved to the left */}
          <div className="md:hidden" onClick={toggleMenu} id="hamburger">
            <div className='space-y-1 cursor-pointer'>
              <div className='w-6 h-0.5 bg-black'></div>
              <div className='w-6 h-0.5 bg-black'></div>
              <div className='w-6 h-0.5 bg-black'></div>
            </div>
          {/* Desktop Navigation */}
          <ul className='hidden md:flex flex-row gap-16 justify-end items-center'>
            <li><Link href="#">Catalogue</Link></li>
            <li><Link href="#">Fashion</Link></li>
            <li><Link href="#">Favourite</Link></li>
            <li><Link href="#">Lifestyle</Link></li>
            <button className='bg-black text-white rounded-md py-4 px-4'>Sign Up</button>
          </ul>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <ul className='flex flex-col justify-start gap-5 h-screen absolute top-0 
          left-0 bg-yellow-600 p-11 items-start translate-x-17 transition-all'>
            <li><Link href="#">Catalogue</Link></li>
            <li><Link href="#">Fashion</Link></li>
            <li><Link href="#">Favourite</Link></li>
            <li><Link href="#">Lifestyle</Link></li>
          </ul>
        )}
      </nav>
      
    </div>
  );
}

export default Navbar;
