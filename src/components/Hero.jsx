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
        duration: 0.5
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

  const resume_url =
    'https://drive.google.com/file/d/1U4hqkckBG7kgDgxEa3KgZ4VipSa7-uoe/view?usp=sharing'

  // main content
  return (
    <>
      {/* ---------------------- desktop view ------------------- */}
      <motion.section
        variants={parentVariant}
        initial='hidden'
        animate='visible'
        viewport={{ once: true, amount: 0.3 }}
        className='py-36 pl-5 pr-16 h-screen hidden lg:flex flex-row items-center justify-center space-x-10'
      >
        <div className='flex flex-col items-start justify-center gap-y-9'>
          <div>
            <motion.h1
              variants={childVariantDesktopLeft}
              className='hero-title uppercase text-[4vw] font-semibold tracking-wide !opacity-95'
            >
              {PROFILE.name}
            </motion.h1>
            <motion.h2
              variants={childVariantDesktopLeft}
              className='sub-title text-5xl text-transparent bg-gradient-to-br from-indigo-300 to-purple-600 bg-clip-text brightness-125'
            >
              {PROFILE.role}
            </motion.h2>
          </div>

          <motion.h3
            variants={childVariantDesktopLeft}
            className='hero-subheading text-white/85 text-2xl pr-2'
          >
            {PROFILE.subheading}
          </motion.h3>

          <motion.a
            variants={childVariantDesktopLeft}
            whileTap={{ scale: 0.98 }}
            whileHover={{ scale: 1.03 }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 8
            }}
            id='dnRBtn'
            href={resume_url}
            target='_blank'
            rel='noopener noreferrer'
            download='TusharResume.pdf'
            className='flex items-center justify-center gap-1 w-fit rounded-lg border-none bg-gradient-to-br from-indigo-400 to-purple-600 px-4 py-3 text-white font-semibold cursor-pointer transition-colors duration-200 ease-spring-smooth'
          >
            <span className='text-lg'>download Resume</span>
            <RiArrowRightUpLine className='dnRIcon w-6' />
          </motion.a>
        </div>

        <motion.img
          variants={childVariantDesktopRight}
          src='/assets/Tushar.webp'
          alt={PROFILE.name}
          className='hero-img w-fit max-h-[450px] rounded-b-full border-none bg-gradient-to-br from-indigo-300 to-purple-600 p-1 brightness-90 pointer-events-none object-top'
        />
      </motion.section>

      {/* -------------------- mobile view ----------------------- */}
      <motion.section
        variants={parentVariant}
        initial='hidden'
        animate='visible'
        viewport={{ once: true, amount: 0.3 }}
        className='lg:hidden mt-1 py-20 flex flex-col items-center justify-center gap-6'
      >
        <motion.img
          variants={childVariant}
          src='/assets/Tushar.webp'
          alt={PROFILE.name}
          className='hero-img aspect-square object-cover object-top max-w-[270px] rounded-full border-none bg-gradient-to-b from-indigo-400 to-purple-700 p-1 pointer-events-none'
        />

        <div className='flex flex-col items-center justify-center gap-0 lg:gap-1'>
          <motion.h1
            variants={childVariant}
            className='hero-title uppercase text-4xl md:text-7xl font-bold'
          >
            {PROFILE.name}
          </motion.h1>
          <motion.h2
            variants={childVariant}
            className='sub-title text-2xl md:text-4xl text-transparent bg-gradient-to-br from-indigo-300 to-purple-600 bg-clip-text brightness-125 mt-2'
          >
            {PROFILE.role}
          </motion.h2>
        </div>

        <motion.h3
          variants={childVariant}
          className='hero-subheading text-white font-thin text-center text-lg md:text-2xl w-[87vw]'
        >
          {PROFILE.subheading}
        </motion.h3>

        <motion.a
          variants={childVariant}
          id='dnRBtn'
          href={resume_url}
          target='_blank'
          rel='noopener noreferrer'
          download='TusharResume.pdf'
          className='hero-btn mb-1 flex items-center justify-center gap-1 rounded-xl border-none bg-gradient-to-br from-indigo-400 to-purple-700 px-4 py-3 text-white font-bold'
        >
          <span>download Resume</span>
          <RiDownloadLine size={16} />
        </motion.a>
      </motion.section>
    </>
  )
}

export default Hero
