import React from 'react'
import Image from 'next/image'

function App() {
  return (
    <div>
      <section className='container mx-auto flex flex-col my-[190px] gap-28 
      md:flex-row md:justify-evenly md:items-center'>
       <div className='flex-col'> 
        <h4 className='text-4xl md:text-5xl font-black tracking-[3px] leading-[130%]
         md:leading-[150%] mb-10'>
          Download APP & <br/>GET THE VOUCHER</h4>
       <p className='text-2xl font-medium leading-9 text-[#7c7c7c]'>Get 30% off for first transaction using<br/>Rondovision mobile app for now.
       </p>
       <div className='flex flex-col md:flex-row gap-5 mt-16'>
        <Image  src="/app-store.png" alt="app-store"width={200}height={71}></Image>
        <Image  src="/google.png" alt="app-store"width={200}height={71}></Image>
       
       </div>
       </div>
       <div>
       <Image  src="/Mobile.png" alt="mobile"width={200}height={71}></Image>
       </div>
      </section>
    </div>
  )
}

export default App
