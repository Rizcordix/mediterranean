'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[]
  }
}

export default function GTMPageView() {
  const pathname = usePathname()

  useEffect(() => {
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({
      event: 'pageview',
      page_path: pathname,
    })
  }, [pathname])

  console.log('GTM Page View tracked for:', pathname)
  return null
}
