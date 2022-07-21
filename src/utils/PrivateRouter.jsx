import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export default function PrivateRouter() {
  const isAuth = window.sessionStorage.getItem('auth')
  const auth = { token: isAuth }
  return (
    auth.token ? <Outlet /> : <Navigate to='/login' />
  )
}
