'use client'
import Image from 'next/image'
import React, { useEffect } from 'react'
import preloader from '@/assets/images/medipreloader.svg'

const Loader = () => {
  useEffect(() => {
    const style = document.getElementById('preloader')?.style
    setTimeout(() => {
      if (style) {
        style.visibility = 'hidden'
        style.opacity = '0'
      }
    }, 500)
  })

  return (
    <div className="preloader" id="preloader">
      <Image src={preloader} alt="Pre-loader" />
    </div>
  )
}

export default Loader
