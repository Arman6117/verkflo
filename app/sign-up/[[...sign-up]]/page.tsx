import { SignIn, SignUp } from '@clerk/nextjs'
import React from 'react'

const SignUpPage = () => {
  return (
      <div className='h-screen w-screen flex justify-center items-center'>
        <SignUp afterSignOutUrl={'/'} fallbackRedirectUrl={'/dashboard'}/>
      </div>
  )
}

export default SignUpPage