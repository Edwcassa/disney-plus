import React from 'react'
import { useParams } from 'react-router-dom'
import json from '../json/disneyPlusMoviesData.json'
// import '../components/MainCards.css'

export default function Details() {
  // https://webdesign.tutsplus.com/es/tutorials/simple-fade-effect-on-scroll--cms-35166
  const getById = (data, id) => {
    var ob = null
    for (var i in data) {
      ob = data[i].find(e => e.id === parseInt(id))
      // console.log('itera n')
      if (ob != null) { break }
    }
    return ob
  }

  const { id } = useParams()

  const movie = getById(json, id)
  console.log(movie)

  const checkpoint = 300
  var opacity = 0
  var maxScroll = 150
  window.addEventListener('scroll', () => {
    var currentScroll = window.pageYOffset
    if (currentScroll < maxScroll) {
      if (currentScroll <= checkpoint) {
        opacity = 1 - currentScroll / checkpoint
      } else {
        opacity = 0
      }
      document.querySelector('.front').style.opacity = opacity
    }
  })

  const imagePath = movie.backgroundImg
  const titleImg = movie.titleImg
  const subTitle = movie.subTitle
  const description = movie.description

  // const cla = `opacity-${opacity}`
  return (
    <>
      <div className='fixed z-0'>
        <img src={imagePath} alt='' className='front' />
      </div>
      <div className='fixed'>
        <div className='fixed inset-0 bg-gradient-to-r from-[#1a1d29] via-transparent to-transparent -z-10' />
        <div className='fixed inset-0 bg-gradient-to-t from-[#1a1d29] via-transparent  to-transparent  -z-10' />
        <div className='fixed inset-0 bg-gradient-to-b from-[#0009]  to-transparent  -z-10' />
      </div>
      <div className='relative z-30'>
        <div className=' w-[88%] mx-auto pt-32'>
          <div className='m-auto end items-end z-10'>
            <img src={titleImg} alt='' className=' w-7/12 sm:w-6/12 md:w-5/12 lg:w-4/12' />
          </div>
          <div className=' text-sm mt-6 mb-7 text-left font-normal'>
            {subTitle}
          </div>
          <div className='flex justify-initial items-center'>
            <button className=' text-black text-base font-bold tracking-[1.8px]  py-3 px-6 mr-6 rounded bg-[#f9f9f9] hover:bg-[#c6c6c6] flex items-center '><i className='fa-solid fa-play mr-4 text-2xl' /><span>PLAY</span></button>
            <button className='text-[#f9f9f9] text-base font-semibold tracking-[1px]  py-4 px-6 mr-5 rounded bg-black/[0.5] border-[1px] border-[#f9f9f9] hover:bg-[#f9f9f9]/[0.4] hover:text-black hover:border-transparent'>TRAILER</button>
            <button className=' w-11 h-11 bg-black rounded-[50%] border-[2px] border-white text-4xl mr-4 flex items-center justify-center'><span className='font-extralight'>+</span></button>
            <button className=' w-11 h-11 bg-black rounded-[50%] border-[2px] border-white text-xl flex items-center justify-center'><i className='fa-solid fa-users' /></button>
          </div>
          <div className='text-sm mt-9 mb-7 text-left w-full font-light leading-9 sm:w-full sm:text-sm md:max-w-full md:text-base lg:max-w-[70%] lg:text-xl'>
            {description}
          </div>
        </div>
      </div>
    </>
  )
}
