import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from '../components/layouts/Layout'
import ScrollToTop from '../components/ScrollToTop'
import Disney from '../pages/brands/Disney'
import Marvel from '../pages/brands/Marvel'
import National from '../pages/brands/National'
import Pixar from '../pages/brands/Pixar'
import Starplus from '../pages/brands/Starplus'
import Starwars from '../pages/brands/Starwars'
import Details from '../pages/Details'
import Home from '../pages/Home'
import PrivateRouter from '../utils/PrivateRouter'

export default function MainRouter() {
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route element={<PrivateRouter />}>
          <Route path='/' element={<Home />} />
          <Route path='/disney' element={<Disney />} />
          <Route path='/pixar' element={<Pixar />} />
          <Route path='/marvel' element={<Marvel />} />
          <Route path='/starwars' element={<Starwars />} />
          <Route path='/national-geographic' element={<National />} />
          <Route path='/starplus' element={<Starplus />} />
          <Route path='/:category/:title/:id' element={<Details />} />

          <Route path='*' element={<Home />} />
        </Route>
      </Routes>
    </Layout>
  )
}
