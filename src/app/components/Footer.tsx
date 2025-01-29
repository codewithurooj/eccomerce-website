import React from 'react'
import Image from 'next/image'

function Footer() {
  return (
    <footer>
      <section className="bg-black py-16 md:py-[125px] text-white px-14 md:px-[100px]">

        {/* Main content container */}
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between md:gap-[50px]">
          
          {/* Left Column (Logo, Description, Social Icons) */}
          <div className="flex flex-col items-center md:items-start gap-8 md:gap-8">
            {/* Fashion Logo */}
            <Image src="/fashion.png" alt="Fashion logo" width={192} height={52} className="max-w-full" />
            
            {/* Description Text */}
            <p className="text-center md:text-left">
              Complete your style with awesome<br /> clothes from us.
            </p>

            {/* Social Media Links */}
            <ul className="flex gap-4 justify-center md:justify-start">
              <li>
                <a href="#" title="Follow us on Facebook">
                  <Image src="/facebook.png" alt="Facebook logo" width={52} height={52} />
                </a>
              </li>
              <li>
                <a href="#" title="Follow us on Instagram">
                  <Image src="/instagram.png" alt="Instagram logo" width={52} height={52} />
                </a>
              </li>
              <li>
                <a href="#" title="Follow us on Twitter">
                  <Image src="/twitter.png" alt="Twitter logo" width={52} height={52} />
                </a>
              </li>
              <li>
                <a href="#" title="Follow us on LinkedIn">
                  <Image src="/linkdin (2).png" alt="LinkedIn logo" width={52} height={52} />
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links Section */}
          <div className="flex flex-col gap-8 md:w-[40%] text-[#D9D9D9] items-end">
            <h4 className="font-bold">Company</h4>
            <ul className="flex flex-col gap-4">
              <li><a href="#About" className="hover:text-[#E0E0E0]
               transition-colors duration-300 ease-in-out">About us</a></li>
              <li><a href="#Contact" className="hover:text-[#E0E0E0] transition-colors duration-300 ease-in-out">Contact us</a></li>
              <li><a href="#Support" className="hover:text-[#E0E0E0] transition-colors duration-300 ease-in-out">Support us</a></li>
              <li><a href="#Careers" className="hover:text-[#E0E0E0] transition-colors duration-300 ease-in-out">Careers</a></li>
            </ul>
          </div>
          {/* Company Links Section */}
          <div className="flex flex-col gap-8 md:w-[40%] text-[#D9D9D9] items-end">
            <h4 className="font-bold">Quick Links</h4>
            <ul className="flex flex-col gap-4">
           <li><a href="#" className="hover:text-[#E0E0E0] 
           transition-colors duration-300 ease-in-out">Share Location</a></li>
           <li><a href="#" className="hover:text-[#E0E0E0]
            transition-colors duration-300 ease-in-out">Order Tracking</a></li>
            <li><a href="#" className="hover:text-[#E0E0E0] 
            transition-colors duration-300 ease-in-out">Size Guide</a></li>
            <li><a href="#" className="hover:text-[#E0E0E0]
             transition-colors duration-300 ease-in-out">FAQS</a></li>
            </ul>
          </div>
         {/*Legal Section */}
         <div className="flex flex-col gap-8 md:w-[40%] text-[#D9D9D9] items-end pt-8">
            <h4 className="font-bold">Legal</h4>
            <ul className="flex flex-col gap-4">
              <li><a href="#" className="hover:text-[#E0E0E0] transition-colors 
              duration-300 ease-in-out">Terms</a></li>
              </ul>
            <ul className="flex flex-col gap-4">

              <li><a href="#" className="hover:text-[#E0E0E0] transition-colors 
              duration-300 ease-in-out">Privacy</a></li>
              </ul>
             
             
          
          </div>

        </div>
      </section>
    </footer>
  )
}

export default Footer;
