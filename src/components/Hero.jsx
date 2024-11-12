import { useRef } from 'react'
import { PROFILE } from '../constants'
import { RiArrowRightUpLine } from '@remixicon/react'

const Hero = () => {
  const heroRef = useRef(null) // use later
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

      <h3 className='hero-subheading bg-gradient-to-t from-pink-400 to-white bg-clip-text text-transparent text-center text-md md:text-xl lg:text-2xl px-12 lg:px-52 mb-2'>
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
        className='max-w-[230px] rounded-3xl border border-white/40 p-1 brightness-75'
      />
    </section>
  )
}

export default Hero
