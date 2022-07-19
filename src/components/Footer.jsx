import React from 'react'

export default function Footer() {
  return (
    <div className='bg-black mt-10 relative'>
      <div className=' w-full h-full py-8'>
        <div className=' w-20 mx-auto block'>
          <img src='/logo.svg' alt='' />
        </div>
        <div className='flex flex-wrap justify-center'>
          <button className='text-[#cacaca] mx-3 my-4 text-sm'>Privacy Policy</button>
          <button className='text-[#cacaca] mx-3 my-4 text-sm'>Subscriber Agreement</button>
          <button className='text-[#cacaca] mx-3 my-4 text-sm'>Collection Statement</button>
          <button className='text-[#cacaca] mx-3 my-4 text-sm'>Help</button>
          <button className='text-[#cacaca] mx-3 my-4 text-sm'>Supported Devices</button>
          <button className='text-[#cacaca] mx-3 my-4 text-sm'>About Us</button>
          <button className='text-[#cacaca] mx-3 my-4 text-sm'>Interest-based Ads</button>
        </div>
        <p className='text-[#cacaca] text-sm font-light text-center'>© Disney. All rights reserved.</p>
      </div>
    </div>
  )
}
