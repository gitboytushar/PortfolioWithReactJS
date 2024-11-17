import { useEffect, useRef } from 'react'
import { PROFILE } from '../constants'
import { RiArrowRightUpLine } from '@remixicon/react'
import { gsap } from 'gsap'

const Hero = () => {
  const heroRef = useRef(null)

  // welcome animation with gsap
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { duration: 0.6, ease: 'expoScale' }
      })

      tl.from('.hero-title', {
        opacity: 0,
        y: 50,
        scale: 0.95,
        duration: 0.5,
        stagger: 0.1
      })
        .from(
          '.sub-title',
          {
            opacity: 0,
            y: 50,
            scale: 0.95,
            duration: 0.6
          },
          '-=0.4'
        )
        .from(
          '.hero-subheading',
          {
            opacity: 0,
            y: 50,
            scale: 0.95,
            duration: 0.8
          },
          '-=0.4'
        )
        .from(
          '.hero-btn',
          {
            opacity: 0,
            z: 50,
            scale: 2,
            duration: 0.7
          },
          '-=0.4'
        )
        .from(
          '.hero-img',
          {
            opacity: 0,
            z: -50,
            scale: 0.6,
            duration: 0.5
          },
          '-=0.6'
        )
    }, heroRef)

    return () => ctx.revert()
  }, [])

  // main content
  return (
    <section
      className='py-24 md:py-28 lg:py-32 min-h-screen flex flex-col items-center justify-start gap-6 lg:gap-7'
      ref={heroRef}
    >
      <div className='flex flex-col items-center justify-center gap-0 lg:gap-1'>
        <h1 className='hero-title uppercase text-4xl lg:text-7xl font-medium'>
          {PROFILE.name}
        </h1>
        <h2 className='sub-title text-xl lg:text-4xl opacity-20'>
          {PROFILE.role}
        </h2>
      </div>

      <h3 className='hero-subheading bg-gradient-to-t from-pink-500 to-white bg-clip-text text-transparent text-center text-md md:text-xl lg:text-2xl px-12 lg:px-52 mb-2'>
        {PROFILE.subheading}
      </h3>

      <a
        id='dnRBtn'
        href='src/assets/resume/tushar resume.pdf'
        target='_blank'
        rel='noopener noreferrer'
        download
        className='hero-btn mb-2 flex gap-1 rounded-full border border-white/50 px-4 py-2 text-white/80 cursor-pointer hover:text-white transition-colors duration-300 ease-in-out'
      >
        <span>download Resume</span>
        <RiArrowRightUpLine className='dnRIcon w-5' />
      </a>

      <img
        src='src/assets/Tushar.webp'
        alt={PROFILE.name}
        className='hero-img max-w-[230px] rounded-3xl border border-white/40 p-1 brightness-90 pointer-events-none'
      />
    </section>
  )
}

export default Hero
