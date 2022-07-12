import React from 'react'
import { Link } from 'react-router-dom'
import brands from '../json/brands.json'

export default function Brands() {
  // flex flex-wrap mx-auto justify-center items-center gap-4 mt-10 mb-10 max-w-[1400px] md:grid-cols-2
  // grid lg:grid-rows-1 grid-flow-col lg:gap-4 sm:gap-x-2 md:grid-rows-2 sm:grid-rows-2 min-w-[640px]
  return (
    <div className='flex justify-center mt-7 mx-5 md:mx-16 lg:mx-5 '>
      <div className='grid grid-cols-3 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6'>
        {
          brands.map((item, index) => (
            <Link to={item.link} key={index}>
              <div className='brand group' key={index}>
                <img className='object-cov z-10 w-44 ' src={item.image} />
                <video
                  // style={{ 'pointer-events': 'none' }}
                  muted
                  autoPlay='autoplay'
                  preload='auto'
                  loop
                  className='absolute top-0 left-0 hidden group-hover:inline rounded w-full h-full object-cover  '
                // className='absolute hidden group-hover:inline rounded-sm object-cover w-12/12 h-28 '
                >
                  <source src={item.video} type='video/mp4' />
                </video>
              </div>
            </Link>
          ))
        }
      </div>
    </div>
  )
}
