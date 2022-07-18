import React from 'react'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'

import './ImgSlider.css'
import jsonCarousel from '../json/Carousel.json'
import { Link } from 'react-router-dom'

export default function ImgSlider() {
  const settings = {
    dots: true,
    // fade: false,
    infinite: true,
    speed: 500,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    centerMode: true,
    centerPadding: '60px',
    // arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: false,
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          dots: false,
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  }

  const customTitle = (movie) => movie.title.replace(/\s+/g, '-').toLowerCase()
  const customCategory = (movie) => movie.category.replace(/\s+/g, '-').toLowerCase()
  const link = (movie) => `/${customCategory(movie)}/${customTitle(movie)}/${movie.id}`

  return (
    <section className='mma'>
      <Slider {...settings} className=' pt-20 -mx-5 sm:-mx-1 md:mx-1 lg:mx-2   sm:pt-20 md:pt-20 lg:pt-24'>
        {
          jsonCarousel.map((item, index) => (
            <div key={index} className=' flex pl-2 pr-2 sm:pl-2 sm:pr-2 md:pl-4 md:pr-4 lg:pl-5 lg:pr-5 '>
              <Link to={link(item)}>
                <div className=' min-w-full'>
                  <img
                    className=' mt-5 rounded-lg overflow-hidden shadow-xl cursor-pointer border-[3px] border-[#f9f9f9] border-opacity-10  hover:border-opacity-80 hover:shadow-xl transition duration-300'
                    src={item.path_image}
                    alt=''
                  />
                </div>
              </Link>

            </div>
          ))
        }
      </Slider>
    </section>
  )
}
