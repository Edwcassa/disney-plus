import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '../pages/Login'
// "quotes": [2, "backtick", "single"]
import MainRouter from './MainRouter'

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/*' element={<MainRouter />} />

        {/* <Route path='*' element={<Login />} /> */}
      </Routes>
    </BrowserRouter>
  )
}
