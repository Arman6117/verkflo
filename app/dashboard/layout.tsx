import React from 'react'
import Navbar from './_components/navbar'


interface DashboardPageLayoutProps {
    children:React.ReactNode
}
const DashboardPageLayout = ({children}:DashboardPageLayoutProps) => {
  return (
    <main className='h-screen   bg-gradient-to-b from-neutral-900 to-slate-950'>
       
        {children}
    </main>
  )
}

export default DashboardPageLayout