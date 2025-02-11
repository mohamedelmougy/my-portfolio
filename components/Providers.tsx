import React, { ReactNode } from 'react'
import { ThemeProvider } from "@/context/ThemeProvider"

const Providers = ({children}:{children:ReactNode}) => {
  return (
    <ThemeProvider
    attribute="class"
    defaultTheme="system"
    enableSystem
    disableTransitionOnChange
  >
    {children}
  </ThemeProvider>

  )
}

export default Providers