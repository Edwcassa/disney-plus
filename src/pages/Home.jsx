import React from 'react'
import brands from '../json/brands.json'
import Brands from '../components/Brands'
import ImgSlider from '../components/ImgSlider'
// import MainCards from '../components/MainCards'
// import json from '../json/disneyPlusMoviesData.json'

export default function Home() {
  return (
    <div>
      <ImgSlider />
      <Brands data={brands} />
    </div>
  )
}
