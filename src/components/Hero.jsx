import { PROFILE } from '../constants'
import { RiArrowRightUpLine, RiDownloadLine } from '@remixicon/react'
import { motion, easeIn } from 'motion/react'

const Hero = () => {
  // framer motion variables
  const parentVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 1
      }
    }
  }

  const childVariant = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        easeIn
      }
    }
  }

  const childVariantDesktopLeft = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        easeIn
      }
    }
  }

  const childVariantDesktopRight = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        easeIn
      }
    }
  }

  // main content
  return (
    <>
      {/* desktop view */}
      <motion.section
        variants={parentVariant}
        initial='hidden'
        animate='visible'
        viewport={{ once: true, amount: 0.3 }}
        className='py-36 h-screen hidden lg:flex flex-row items-stretch justify-between space-x-10'
      >
        <div className='flex flex-col items-start justify-center gap-y-10'>
          <div>
            <motion.h1
              variants={childVariantDesktopLeft}
              className='hero-title uppercase text-[4vw] font-bold tracking-wide !opacity-50'
            >
              {PROFILE.name}
            </motion.h1>
            <motion.h2
              variants={childVariantDesktopLeft}
              className='sub-title text-5xl text-transparent bg-gradient-to-br from-yellow-400 to-rose-500 bg-clip-text brightness-110'
            >
              {PROFILE.role}
            </motion.h2>
          </div>

          <motion.h3
            variants={childVariantDesktopLeft}
            className='hero-subheading text-white/65 text-3xl pr-2'
          >
            {PROFILE.subheading}
          </motion.h3>

          <motion.a
            variants={childVariantDesktopLeft}
            whileTap={{ scale: 0.95 }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 17
            }}
            id='dnRBtn'
            href='/assets/resume/tushar resume.pdf'
            target='_blank'
            rel='noopener noreferrer'
            download
            className='flex items-center justify-center gap-1 w-fit rounded-lg border-none bg-gradient-to-br from-yellow-500 to-rose-600 px-4 py-3 text-white font-bold cursor-pointer transition-colors duration-200 ease-spring-smooth'
          >
            <span className='text-xl'>download Resume</span>
            <RiArrowRightUpLine className='dnRIcon w-6' />
          </motion.a>
        </div>

        <motion.img
          variants={childVariantDesktopRight}
          src='/assets/Tushar.webp'
          alt={PROFILE.name}
          className='hero-img w-1/2 h-full rounded-full border-none bg-gradient-to-r from-yellow-500 to-rose-600 p-1 brightness-90 pointer-events-none'
        />
      </motion.section>

      {/* mobile view */}
      <motion.section
        variants={parentVariant}
        initial='hidden'
        animate='visible'
        viewport={{ once: true, amount: 0.3 }}
        className='lg:hidden py-24 md:py-28 lg:py-32 min-h-screen flex flex-col items-center justify-start gap-6 lg:gap-7'
      >
        <div className='flex flex-col items-center justify-center gap-0 lg:gap-1'>
          <motion.h1
            variants={childVariant}
            className='hero-title uppercase text-4xl md:text-7xl font-bold'
          >
            {PROFILE.name}
          </motion.h1>
          <motion.h2
            variants={childVariant}
            className='sub-title text-2xl md:text-4xl text-transparent bg-gradient-to-tr from-yellow-400 to-rose-500 bg-clip-text brightness-110 mt-2'
          >
            {PROFILE.role}
          </motion.h2>
        </div>

        <motion.h3
          variants={childVariant}
          className='hero-subheading text-white font-thin text-center text-lg md:text-2xl w-[85vw]'
        >
          {PROFILE.subheading}
        </motion.h3>

        <motion.a
          variants={childVariant}
          id='dnRBtn'
          href='/assets/resume/tushar resume.pdf'
          target='_blank'
          rel='noopener noreferrer'
          download
          className='hero-btn mb-1 flex items-center justify-center gap-1 rounded-lg border-none bg-gradient-to-tr from-yellow-500 to-rose-600 px-4 py-2 text-white font-bold'
        >
          <span>My Resume</span>
          <RiDownloadLine size={16} />
        </motion.a>

        <motion.img
          variants={childVariant}
          src='/assets/Tushar.webp'
          alt={PROFILE.name}
          className='hero-img max-w-[230px] rounded-xl border-none bg-gradient-to-b from-yellow-500 to-rose-600 p-0.5 brightness-95 pointer-events-none'
        />
      </motion.section>
    </>
  )
}

export default Hero
