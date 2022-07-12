import React from 'react'
import brands from '../json/brands.json'
import Brands from '../components/Brands'
import ImgSlider from '../components/ImgSlider'

export default function Home() {
  return (
    <div>
      <ImgSlider />
      <Brands data={brands} />
    </div>
  )
}
