import React from "react";
import Image from "next/image";

function NewArrival() {
  return (
    <div>
      <section className="flex flex-col container items-start mx-auto px-10">
        
        <div className="relative text-black">
        
          <h2 className="text-3xl font-black py-3">Youngs favourite</h2>
          <div className="flex flex-col w-full gap-7">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-24">
              {/* Add your grid items here */}
            </div>
          </div>
        

          {/* Flex container for images */}
          <div className="flex justify-between">
            {/* Favourite1 Image Section */}
            <div className="flex flex-col items-center mx-4">
              <Image
                className="rounded-[20px]"
                src="/favourite1.png"
                alt="favourite1"
                width={474}
                height={329}
              />
              {/* Separate div for arrow and text */}
              <div className="flex flex-col items-center mt-2">
                <Image
                  className="mb-2 px-2 "
                  src="/Arrow.png"
                  alt="Arrow"
                  width={30}
                  height={30}
                />
                <h3 className="text-[20px] font-medium text-center">Trending on instagram</h3>
                <a className="text-1xl text-[#7f7f7f]" href="#">
                  Explore Now!
                </a>
              </div>
            </div>

            {/* Favourite Image Section */}
            <div className="flex flex-col items-center mx-4">
              <Image
                className="rounded-[20px]"
                src="/favourite2.png"
                alt="favourite2"
                width={474}
                height={325}
              />
              {/* Separate div for arrow and text */}
              <div className="flex flex-col items-center mt-2  ">
                <Image
                  className="mb-2 px-2"
                  src="/Arrow.png"
                  
                  alt="Arrow"
                  width={30}
                  height={30}
                />
                <h3 className="text-[20px] font-medium text-center">All Under $40</h3>
                <a className="text-1xl text-[#7f7f7f]" href="#">
                  Explore Now!
                </a>
              </div>
            </div>

              
                
              </div>
            </div>
          
      </section>
    </div>
  );
}

export default NewArrival;



