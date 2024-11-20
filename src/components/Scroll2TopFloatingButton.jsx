import React, { useState, useEffect } from 'react'
import { RiArrowUpLine } from '@remixicon/react'

const Scroll2TopFloatingButton = () => {
  const [isVisible, setIsVisible] = useState(false)

  // Show button only when not on the hero section
  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.getElementById('hero')?.offsetHeight || 300
      setIsVisible(window.scrollY > heroHeight)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  // Hide button if it's not visible
  if (!isVisible) return null

  return (
    <button
      onClick={scrollToTop}
      className='fixed bottom-5 lg:bottom-8 right-5 lg:right-12 p-3 rounded-full backdrop-blur-lg cursor-pointer border border-white lg:border-white/50 bg-black/40 text-white lg:text-white/50 hover:border-white hover:text-white transition-all ease-linear motion-preset-oscillate motion-duration-1500'
      aria-label='Scroll to Top'
    >
      <RiArrowUpLine className='w-5 h-5 md:h-6 md:w-6' />
    </button>
  )
}

export default Scroll2TopFloatingButton
