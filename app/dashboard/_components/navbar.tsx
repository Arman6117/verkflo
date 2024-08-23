'use client'

import Logo from '@/components/logo'
import React from 'react'

const Navbar = () => {
  return (
    <div className='fixed bg-[rgb(24,24,24)] px-6 py-5 w-screen flex justify-between'>
      <div className='flex gap-20'>
        <div className='flex gap-2'>
          <Logo/>
        </div>
        <div className='flex gap-3'>
          <div className='f'>
           <span>Projects</span>
          </div>
          <div className='f'>
           <span>Last Updated</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar