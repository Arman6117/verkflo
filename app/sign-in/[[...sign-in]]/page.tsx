import { SignIn } from '@clerk/nextjs'
import React from 'react'

const SignInPage = () => {
  return (
      <div className='h-screen w-screen flex justify-center items-center'>
        <SignIn afterSignOutUrl={'/dashboard'} fallbackRedirectUrl={'/sign-in'}/>
      </div>
  )
}

export default SignInPage