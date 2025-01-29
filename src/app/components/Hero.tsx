import React from 'react';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <div>
      <section className='flex flex-col container mx-auto bg-[#F4F6F5] rounded-[59px]
      pt-16 px-10 md:flex-row md:items-center md:justify-between md:px-20 md:pt-[68px]
      gap-10 '>
        
        <div className='flex flex-col items-center text-black md:items-start z-10'>
          <h1 className='text-6xl font-black leading-[125%] sm:text-5xl md:text-[96px]
          md:leading-[125%] '>
                        <span className='bg-white p-1 rounded'>LET'S</span><br/>EXPLORE
            <br/><span className='bg-yellow-300 p-1 rounded'>UNIQUE</span><br/>CLOTHES
        
            <br/><span className=''></span>
            </h1>
          <p className='md:text-[32px]'>Live for Influential and Innovative fashion!</p>
           <div className='flex flex-col md:flex-row md:items-center justify-evenly gap-9 pt-8'>
          <button className='bg-black text-white  rounded-md py-4 px-4 text-center'>Shop Now</button>
        </div>

        </div>
        <div className='flex justify-center md:justify-end'>
          <Image className='w-full' src="/girl.png" alt="hero" width={400} height={400} />
        </div>
        
      </section>
    </div>
  
    
  );
};

export default Hero;
