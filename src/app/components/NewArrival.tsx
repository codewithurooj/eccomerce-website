import React from "react";
import Image from "next/image";

function NewArrival() {
  return (
    <div>
      <section className="flex flex-col container items-start mx-auto px-10">
      
        <div className="relative text-black">
        
          <h2 className="text-3xl font-black py-3">NEW ARRIVALS</h2>
          <div className="flex flex-col w-full gap-7">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-24">
              {/* Add your grid items here */}
            </div>
          </div>
        

          {/* Flex container for images */}
          <div className="flex justify-between">
            {/* Hoodie Image Section */}
            <div className="flex flex-col items-center mx-4">
              <Image
                className="rounded-[20px]"
                src="/Hoodie.png"
                alt="Hoodie"
                width={229}
                height={384}
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
                <h3 className="text-[20px] font-medium text-center">Hoodie & Sweatshirt</h3>
                <a className="text-1xl text-[#7f7f7f]" href="#">
                  Explore Now!
                </a>
              </div>
            </div>

            {/* Coats Image Section */}
            <div className="flex flex-col items-center mx-4">
              <Image
                className="rounded-[20px]"
                src="/Coats.png"
                alt="Coats"
                width={229}
                height={384}
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
                <h3 className="text-[20px] font-medium text-center">Coats & Parkas</h3>
                <a className="text-1xl text-[#7f7f7f]" href="#">
                  Explore Now!
                </a>
              </div>
            </div>

            {/* Tees Image Section */}
            <div className="flex flex-col items-center mx-4 ">
              <Image
                className="rounded-[20px]"
                src="/Tees.png"
                alt="Tees"
                width={229}
                height={384}
              />
              {/* Separate div for arrow and text */}
              <div className="flex flex-col items-center mt-2 ">
                <Image
                  className="mb-2 px-2"
                  src="/Arrow.png"
                  alt="Arrow"
                  width={30}
                  height={30}
                />
                <h3 className="text-[20px] font-medium text-center">Tees & T-shirt</h3>
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


