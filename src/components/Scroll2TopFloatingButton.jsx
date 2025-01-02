import React, { useState, useEffect } from 'react'
import { RiArrowUpLine } from '@remixicon/react'
import { useLenis } from 'lenis/react'
import { easeInOutCubic } from '../utilities/easing'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip-top'

const Scroll2TopFloatingButton = () => {
  const [isVisible, setIsVisible] = useState(false)
  const lenis = useLenis()

  // Show button only when not on the hero section
  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = document.getElementById('hero')?.offsetHeight || 300
      setIsVisible(window.scrollY > heroHeight)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // smooth scrolling with lenis
  const scrollToTop = () => {
    if (lenis) {
      lenis.scrollTo(0, { duration: 2, easing: easeInOutCubic }) // custom duration and easing
    }
  }

  // Hide button if it's not visible
  if (!isVisible) return null

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            onClick={scrollToTop}
            className='fixed bottom-5 lg:bottom-8 right-5 lg:right-12 p-3 rounded-xl backdrop-blur-lg cursor-pointer border border-white lg:border-white/50 bg-black/40 lg:bg-black/0 text-white lg:text-white/60 hover:border-transparent hover:bg-white/15 hover:text-white transition-all ease-linear motion-preset-oscillate motion-duration-2000'
            aria-label='Scroll to Top'
          >
            <RiArrowUpLine className='w-5 h-5 md:h-6 md:w-6' />
          </button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Scroll to Top</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export default Scroll2TopFloatingButton
