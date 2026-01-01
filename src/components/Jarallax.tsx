'use client'

import { jarallax, JarallaxOptions, jarallaxVideo } from 'jarallax'
import {
  CSSProperties,
  ElementType,
  ReactNode,
  useEffect,
  useRef
} from 'react'

import 'jarallax/dist/jarallax.min.css'

jarallaxVideo()

type JarallaxPropsType = {
  children?: ReactNode
  className?: string
  style?: CSSProperties
  options?: JarallaxOptions
  tag?: ElementType
  disable?: boolean   // ✅ NEW
}

const Jarallax = ({
  children,
  className,
  style,
  options,
  tag = 'div',
  disable = false
}: JarallaxPropsType) => {
  const Tag = tag
  const ref = useRef<HTMLDivElement | null>(null)
  const initialized = useRef(false)

  useEffect(() => {
    if (!ref.current) return

    // ⛔ Do nothing while disabled (prevents CLS)
    if (disable) return

    // ✅ Initialize once
    if (!initialized.current) {
      jarallax(ref.current, {
        speed: 0.6,
        ...options
      })
      initialized.current = true
    }

    return () => {
      // 🧹 Clean up on unmount
      if (ref.current && initialized.current) {
        jarallax(ref.current, 'destroy')
        initialized.current = false
      }
    }
  }, [disable, options])

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        ...style,
        // Prevent layout movement before jarallax starts
        transform: disable ? 'translateZ(0)' : undefined
      }}
    >
      {children}
    </Tag>
  )
}

export default Jarallax
