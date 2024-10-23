import { useRef } from 'react'
import { PROFILE } from '../constants'
import { RiArrowRightUpLine } from '@remixicon/react'

const Hero = () => {
  const heroRef = useRef(null) // use later
  return (
    <section className='flex' ref={heroRef}>
      <div className='mt-16 lg:mt-28 flex min-h-screen flex-col items-center justify-center gap-4 lg:gap-6'>
        <h1 className='hero-title uppercase text-4xl lg:text-7xl'>
          {PROFILE.name}
        </h1>
        <h2 className='sub-title text-xl lg:text-4xl opacity-30 -translate-y-3'>
          {PROFILE.role}
        </h2>
        <h3 className='hero-subheading bg-gradient-to-t from-pink-500 to-white bg-clip-text text-transparent text-center text-xl lg:text-2xl px-12 lg:px-52 mb-2'>
          {PROFILE.subheading}
        </h3>
        <a
          id='dnRBtn'
          href='/Tushar-verma.pdf'
          target='_blank'
          rel='noopener noreferrer'
          download
          className='hero-btn mb-2 flex gap-1 rounded-full border border-pink-200/50 px-4 py-2 text-white/80 cursor-pointer hover:text-white transition-colors duration-500 ease-in-out'
        >
          <span>download Resume</span>
          <RiArrowRightUpLine className='dnRIcon w-5' />
        </a>
        <img
          src='src/assets/Tushar.webp'
          alt={PROFILE.name}
          width={300}
          className='hero-img rounded-3xl border border-purple-300/30 p-1 brightness-75'
        />
      </div>
    </section>
  )
}

export default Hero
