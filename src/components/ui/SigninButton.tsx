'use client'
import React from 'react'
import {Button} from '@/components/ui/button'
import { signIn } from 'next-auth/react'

type Props = {
    text: string
}

const SigninButton = ({ text }: Props) => {
  return (
    <Button onClick={() => {
        signIn('google').catch(console.error)
    }}>
        {text}
    </Button>
  )
}

export default SigninButton