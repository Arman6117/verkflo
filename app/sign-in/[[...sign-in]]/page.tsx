import { SignIn } from '@clerk/nextjs'
import React from 'react'

const SignInPage = () => {
  return (
      <div className='h-screen w-screen flex justify-center items-center'>
        <SignIn  afterSignOutUrl={'/'}  fallbackRedirectUrl={'/dashboard/projects'}/>
      </div>
  )
}

export default SignInPage