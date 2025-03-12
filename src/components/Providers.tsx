"use client"

import { SessionProvider } from 'next-auth/react'

import * as React from "react"
import { ThemeProvider as NextThemesProvider, ThemeProvider } from "next-themes"


const Providers = ({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>)  => {
  return (
    <ThemeProvider attribute="class" defaultTheme='system' enableSystem={true}>
      <SessionProvider>
          {children}
      </SessionProvider>
    </ThemeProvider>
  )
}

export default Providers