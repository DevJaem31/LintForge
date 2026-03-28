import React from 'react'
import WebsiteNavbarLogo from '@/assets/logo/lintforge_website_navbar.webp'

function SideBar() {
  return (
    <div className='h-full w-full p-5'>
        <div className="sidebar-logo-container">
            <img src={WebsiteNavbarLogo} alt="LintForge Logo" />
        </div>
        

    </div>
  )
}

export default SideBar