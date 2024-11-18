import {
  RiCopyrightLine,
  RiGithubFill,
  RiLinkedinBoxFill,
  RiMailSendFill,
  RiYoutubeFill
} from '@remixicon/react'
import { easeInOut, motion } from 'motion/react'

const Contact = () => {
  // framer motion variables
  const parentVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.7
      }
    }
  }

  const childVariant = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        easeInOut
      }
    }
  }

  return (
    <section className='pt-32 min-h-screen px-4 lg:px-2 relative' id='contact'>
      <motion.div
        variants={parentVariant}
        initial='hidden'
        whileInView='visible'
        viewport={{ amount: 0.5 }} // play animation when 50% area is exposed
        className='lg:absolute bottom-12'
      >
        <div className='flex flex-col items-start justify-center gap-y-8'>
          {/* top part */}
          <div>
            <div className='lg:ml-28 pt-20 lg:pt-24'>
              <div className='contact-title-underline w-[2.5rem] lg:w-[4rem] h-full pb-7 md:pb-9'>
                <h2 className='text-3xl lg:text-5xl font-medium'>Contact</h2>
              </div>
            </div>
            <div className='lg:ml-28 pt-5 lg:pt-7 lg:w-2/3'>
              <motion.h2
                variants={childVariant}
                className='text-4xl md:text-6xl lg:text-8xl font-bold uppercase tracking-tight !opacity-65'
              >
                let's work on something great
              </motion.h2>
            </div>
            <div className='lg:ml-28 pt-1 lg:pt-2 w-[80vw] lg:w-2/3'>
              <motion.p
                variants={childVariant}
                className='text-sm md:text-lg lg:text-xl !opacity-45'
              >
                I’m excited to work with you on real-world projects that will
                help me grow as a professional software developer. Together, we
                can build amazing apps!
              </motion.p>
            </div>
          </div>

          {/* bottom part - contact info */}
          <div className='lg:ml-28'>
            <motion.h3
              variants={childVariant}
              className='mail-link pb-1 flex items-center justify-center gap-1 md:gap-2 pt-2 text-lg md:text-xl cursor-pointer'
            >
              <a href='mailto:tusharwork.001@gmail.com'>
                tusharwork.001@gmail.com
              </a>
              <RiMailSendFill className='h-4 md:h-5' />
            </motion.h3>

            {/* social media contacts */}
            <motion.div
              variants={childVariant}
              className='flex items-center justify-start mt-5'
            >
              <a
                href='https://www.linkedin.com/in/tushar20/'
                target='_blank'
                rel='noopener noreferrer'
                className='p-2 pl-0 cursor-pointer text-white lg:text-white/50 hover:text-white hover:scale-110 transition-all ease-in-out duration-500'
              >
                <RiLinkedinBoxFill size={30} />
              </a>
              <a
                href='https://github.com/gitboytushar'
                target='_blank'
                rel='noopener noreferrer'
                className='p-2 cursor-pointer text-white lg:text-white/50 hover:text-white hover:scale-110 transition-all ease-in-out duration-500'
              >
                <RiGithubFill size={30} />
              </a>
              <a
                href='https://youtube.com/@tushardeveloper?si=ZZdPf3fmw5RqG4jV'
                target='_blank'
                rel='noopener noreferrer'
                className='p-2 cursor-pointer text-white lg:text-white/50 hover:text-white hover:scale-110 transition-all ease-in-out duration-500'
              >
                <RiYoutubeFill size={30} />
              </a>
            </motion.div>
          </div>

          {/* footer copywrite */}
          <div className='text-start text-xs md:text-sm !opacity-25 absolute bottom-5 lg:pl-28 lg:relative lg:translate-y-10'>
            <p className='flex items-center justify-center gap-x-1'>
              <span>
                <RiCopyrightLine size={12} />
              </span>
              2024 Tushar Verma. All rights reserved.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact
