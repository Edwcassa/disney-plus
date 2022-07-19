import React from 'react'
import Header from '../Header'
import MainCards from '../MainCards'
import json from '../../json/disneyPlusMoviesData.json'
import Footer from '../Footer'

export default function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <MainCards data={json} />
      {/* <h1>Footer</h1> */}
      <Footer />
    </>
  )
}
