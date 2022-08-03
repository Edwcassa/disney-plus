import React from 'react'
// import { useEffect, useState } from 'react'
// import { GetMovieByType, getAllTypes } from '../../Helpers/helpers'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'

import Card from './Card'
import './MainCards.css'

export default function MainCards({ data }) {
  // HELPERS
  const getAllTypes = (data) => {
    const outputList = []
    for (var i in data) {
      outputList.push(i)
    }
    return outputList
  }

  const GetMovieByType = (data, type) => {
    return (data[type])
  }

  // SLIDER CONFIG
  const settings = {
    // dots: true,
    // arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false,
          dots: false
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  }

  const slider = (data, type, i) => {
    return (
      <div key={i} className='mmb'>
        <div className='flex mt-8 mb-2'>
          <button className=' bg-transparent hover:bg-gray-900 text-white font-semibold py-2 px-4 rounded shadow cursor-auto z-10'>{type}</button>
        </div>
        <Slider {...settings} className='cursor-grab'>
          {
            data.map((movie, idx) => (<Card movie={movie} key={idx} />))
            // data.map((movie, idx) => (<Pa cont={idx} key={idx} />))
          }
        </Slider>
      </div>
    )
  }

  const types = getAllTypes(data)

  return (
    <div className=' mt-7 w-[90%] mx-auto sm:w-[85%] md:w-[85%] lg:w-[90%] '>
      {/* {[...Array(10)].map((x, i) =>
        slider(JsonMovies)
      )} */}
      {
        types.map((type, i) => {
          const mov = GetMovieByType(data, type)
          return (
            data.length === 0 ? <p key={i} className='message_Error'>Error</p> : slider(mov, type, i)
          )
        })
      }

    </div>
  )
}
