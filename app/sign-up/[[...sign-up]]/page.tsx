import { SignIn, SignUp } from '@clerk/nextjs'
import React from 'react'

const SignUpPage = () => {
  return (
      <div className='h-screen w-screen flex justify-center items-center'>
        <SignUp afterSignOutUrl={'/dashboard'} fallbackRedirectUrl={'/sign-in'}/>
      </div>
  )
}

export default SignUpPage