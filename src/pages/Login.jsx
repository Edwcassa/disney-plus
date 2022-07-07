import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <>
      <div className=' w-full h-[100vh] bg-cover bg-center bg-no-repeat z-50 bg-[url(/images/hero-background.jpg)]'>
        <div className='relative'>
          <div className='flex justify-center items-center flex-col'>
            <h3 className='text-md mt-24 font-bold sm:text-md md:text-xl lg:text-2xl  max-w-xl'>Tus historias favoritas, todas en un mismo</h3>
            <h3 className='text-md font-bold sm:text-md md:text-xl lg:text-2xl'>lugar.</h3>
            <img src='/cta-logo-one.svg' alt='' className='w-10/12 mt-7 mb-10 sm:w-7/12 md:w-5/12 lg:w-6/12' />
            <Link to='/'>
              <button className='bg-[#6421ff] rounded px-8 py-3 sm:px-12 sm:py-4 md:px-16 md:py-4 lg:px-32 lg:py-5 hover:bg-[#4617b3] transion duration-100'>
                <span className='text-lg font-sans tracking-wider sm:text-xl md:text-2xl lg:text-2xl'>INICIAR SESIÓN +</span>
              </button>
            </Link>
            <p className='mt-5 underline text-md flex flex-col items-center sm:text-md md:text-md lg:text-lg sm:flex-col md:flex-row lg:flex-row '>
              <span>Suscribirme solo a Disney+ mensual</span>
              <span className='mx-2'>|</span>
              <span>Suscribirme solo a Disney+ anual</span>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
