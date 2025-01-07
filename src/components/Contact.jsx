import {
  RiCopyrightLine,
  RiGithubFill,
  RiLinkedinBoxFill,
  RiMailSendFill,
  RiYoutubeFill
} from '@remixicon/react'
import { easeIn } from 'motion'
import { motion } from 'motion/react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip-bottom'

const Contact = () => {
  // framer motion variables
  const parentVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 1
      }
    }
  }

  const childVariant = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        easeIn
      }
    }
  }

  return (
    <section
      className='pt-24 min-h-screen px-4 md:px-6 lg:px-0 relative'
      id='contact'
    >
      <motion.div
        variants={parentVariant}
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.5 }} // play once per refresh when 50% area is entered
        className='lg:absolute bottom-12'
      >
        <div className='flex flex-col items-start justify-center gap-y-8'>
          {/* top part */}
          <div>
            <div className='lg:ml-28 pt-20 lg:pt-24'>
              <div className='contact-title-underline w-[2rem] lg:w-[3.5rem] h-full pb-5 md:pb-8'>
                <h2 className='text-4xl lg:text-6xl font-extrabold text-white/85 uppercase'>
                  Contact
                </h2>
              </div>
            </div>

            <div className='lg:ml-28 pt-5 lg:pt-7 md:mb-2 lg:w-3/4'>
              <motion.h2
                variants={childVariant}
                className='text-4xl md:text-6xl lg:text-8xl font-extrabold uppercase tracking-tight !opacity-40 lg:!opacity-20'
              >
                let's work on something great
              </motion.h2>
            </div>

            <div className='lg:ml-28 pt-1 lg:pt-2 w-[85vw] lg:w-3/4'>
              <motion.p
                variants={childVariant}
                className='text-md md:text-xl lg:text-2xl !opacity-70'
              >
                Allow me the opportunity to bring fresh perspectives, unwavering
                dedication, and a commitment to excellence, ensuring measurable
                contributions to your organization’s success while continuously
                growing as a professional.
              </motion.p>
            </div>
          </div>

          {/* mail and social accounts */}
          <div className='lg:ml-28'>
            <motion.h3
              variants={childVariant}
              className='mail-link pb-1 flex items-center justify-center gap-2 md:gap-3 pt-2 text-[5vw] md:text-2xl cursor-pointer'
            >
              <a href='mailto:tusharwork.001@gmail.com'>
                tusharwork.001@gmail.com
              </a>
              <span className='motion-preset-wobble motion-duration-1000'>
                <RiMailSendFill className='h-5 md:h-6' />
              </span>
            </motion.h3>

            {/* social media contacts */}
            <motion.div
              variants={childVariant}
              className='flex items-center justify-start mt-5'
            >
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href='https://www.linkedin.com/in/tushar20/'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='p-2 pl-0 cursor-pointer text-white lg:text-white/50 hover:text-white hover:scale-110 transition-all ease-in-out duration-300'
                    >
                      <RiLinkedinBoxFill size={35} />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>LinkedIn</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href='https://github.com/gitboytushar'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='p-2 cursor-pointer text-white lg:text-white/50 hover:text-white hover:scale-110 transition-all ease-in-out duration-300'
                    >
                      <RiGithubFill size={35} />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>GitHub</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>

              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href='https://youtube.com/@tushardeveloper?si=ZZdPf3fmw5RqG4jV'
                      target='_blank'
                      rel='noopener noreferrer'
                      className='p-2 cursor-pointer text-white lg:text-white/50 hover:text-white hover:scale-110 transition-all ease-in-out duration-300'
                    >
                      <RiYoutubeFill size={35} />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Youtube</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </motion.div>
          </div>

          {/* footer copywrite */}
          <div className='text-start text-sm md:text-base !opacity-25 absolute bottom-1 lg:pl-28 lg:relative lg:translate-y-10'>
            <p className='flex items-center justify-center font-light gap-x-1.5'>
              <span>
                <RiCopyrightLine size={15} />
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
