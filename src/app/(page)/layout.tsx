import Footer from '@/components/Blog/Footer'
import TopNavbar from '@/components/Blog/TopNavbar'
import React, { ReactNode } from 'react'

const layout = ({
  children,
}: Readonly<{
  children: ReactNode
}>) => {
  return (
    <>
      <TopNavbar />
      {children}
      <Footer />
    </>
  )
}

export default layout
