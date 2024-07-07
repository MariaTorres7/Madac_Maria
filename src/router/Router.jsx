import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from '../components/pages/HomePage'
import { LoginPage } from '../components/pages/LoginPage'

export const AppRouter = () => {
  return (

        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
        </Routes>

  )
}
