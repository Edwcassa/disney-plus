import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from '../components/layouts/Layout'
import ScrollToTop from '../components/ScrollToTop'
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
          <Route path='/:category/:title/:id' element={<Details />} />

          <Route path='*' element={<Home />} />
        </Route>
      </Routes>
    </Layout>
  )
}
