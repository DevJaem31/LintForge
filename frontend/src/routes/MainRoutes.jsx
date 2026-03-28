import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LandingPage from '@/pages/public/LandingPage'

function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
    </Routes>
  )
}

export default MainRoutes