import React from 'react'
import Image from 'next/image'

function Brand() {
  return (
    <div>
      <section className='flex flex-col justify-center items-center gap-32 my-16
      bg-[#EBD96B] py-16 md:flex-row'>
        <div>
            <Image src="/HM.png" alt="logo" width={56} height={33}></Image>
        </div>
        <div ><Image src="/obey.png" alt="logo" width={56} height={33}></Image> </div>
        <div><Image src="/shopify.png" alt="logo" width={83.6} height={29.36}></Image></div>
        <div><Image src="/logo1.png" alt="logo" width={83.6} height={22.39}></Image></div>
        <div><Image src="/levis.png" alt="logo" width={83.6} height={22.39}></Image></div>
        <div><Image src="/amazon.png" alt="logo" width={83.6} height={22.39}></Image> </div>
      </section>
    </div>
  )
}

export default Brand
