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
      className='scroll2top-btn fixed bottom-5 right-5 lg:right-8 p-3 rounded-full backdrop-blur-lg cursor-pointer border border-white/50 bg-black/20 text-white/50 hover:border-white hover:text-white hover:scale-95 transition-all duration-300 ease-linear'
      aria-label='Scroll to Top'
    >
      <RiArrowUpLine className='w-5 h-5 md:h-6 md:w-6' />
    </button>
  )
}

export default Scroll2TopFloatingButton
