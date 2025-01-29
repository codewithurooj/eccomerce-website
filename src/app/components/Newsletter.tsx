import React from 'react'

function Newsletter() {
  return (
    <div>
      <section className='flex flex-col items-center py-36 bg-[#E5C643]'>
        <h4 className='text-3xl font-black text-white text-center tracking-[1.7px]
        mb-8 md:leading-[60px] md:text-[40px]'>Join SHOPPING COMMUNITY TO <br/>GET MONTHLY PROMO</h4>
        <p className='text-1xl text-white text-center font-normal md:leading-9
        tracking-[1px] md:text-[20px]'>Type your email down below and be young wild
         generation
        </p>
        <form className='mt-12'>
            <div className='bg-white rounded-[10px] flex flex-row items-center'>
            <input
           type="email"
            className="px-4 py-5 rounded-[10px] focus-within:outline-0 md:py-6 md:px-7"
           placeholder="Type your email here"
          />
                <button className='py-2 px-4 bg-black text-white uppercase
                 md:text-[33px] md:py-[5px] md:px-[20px] rounded-lg mr-2'>
                  send
                </button>
                
            </div>
        </form>
      </section>
    </div>
  )
}

export default Newsletter
