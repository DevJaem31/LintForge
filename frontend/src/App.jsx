import React from 'react'
import MainRoutes from '@/routes/MainRoutes'
import SideBar from '@/components/static/sidebar'

function App() {
  return (
    <div className="h-screen w-screen grid grid-cols-12">
      <div className="col-span-2">
        <SideBar />
      </div>
      <div className="col-span-10">
        <MainRoutes />
      </div>
    </div>
  )
}

export default App