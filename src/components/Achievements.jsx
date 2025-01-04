import { RiArrowRightLine } from '@remixicon/react'
import { easeInOut, motion } from 'motion/react'

const Achievements = () => {
  // framer motion variables
  const parentVariant = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        duration: 0.5
      }
    }
  }

  const childVariant = {
    hidden: { y: -30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        easeInOut
      }
    }
  }

  // main
  return (
    <section className='py-20' id='achievements'>
      <div className='px-4'>
        <h2 className='mb-16 md:mb-20 pt-12 lg:pt-8 lg:mb-10 flex flex-col'>
          <span className='items-center justify-center uppercase opacity-10 text-center font-extrabold text-5xl lg:text-9xl'>
            Achievements
          </span>
          <span className='text-center mt-2 lg:mt-0 uppercase text-lg text-white/65 tracking-wider font-extrabold'>
            Cloud computing badges
          </span>
        </h2>

        {/* Cards Stack */}
        <div className='flex flex-col gap-20 md:gap-28 lg:gap-40'>
          {/* GCP card */}
          <div className='max-w-full h-[600px] md:h-[450px] lg:h-[500px] rounded-[20px] mx-2 md:mx-12 p-4 md:p-5 bg-white relative'>
            {/* interactive and floating icons */}
            <img
              src='/assets/gcpIcon.png'
              alt='gcp icon'
              className='gcp-iconTop absolute w-20 -top-8 md:w-24 lg:w-28 right-14 md:right-36 md:-top-9 lg:-top-11 z-10'
            />
            <img
              src='/assets/gInstanceIcon.png'
              alt='gcp instance icon'
              className='gcp-iconLeft absolute w-20 lg:w-28 -left-7 lg:-left-12 top-44 lg:top-56 hidden md:block z-10'
            />

            {/* main content */}
            <motion.div
              variants={parentVariant}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.4 }}
              className='img-container-gcp w-full h-full rounded-[10px] relative'
            >
              <div className='flex flex-col items-center justify-between gap-12 lg:gap-14 w-full md:w-fit p-5 md:absolute top-12 lg:top-18 left-14'>
                <div className='text-center mt-20 md:mt-0'>
                  <motion.h2
                    variants={childVariant}
                    className='text-4xl lg:text-5xl font-bold'
                  >
                    Google Cloud Platform
                  </motion.h2>
                  <motion.h3
                    variants={childVariant}
                    className='text-lg lg:text-2xl mt-1 lg:mt-2 !opacity-50'
                  >
                    College curriculum
                  </motion.h3>
                  <motion.h3
                    variants={childVariant}
                    className='text-xl lg:text-4xl mt-4 md:mt-6 !opacity-70'
                  >
                    Earned in 2022
                  </motion.h3>
                </div>
                <motion.a
                  variants={childVariant}
                  href='https://www.cloudskillsboost.google/public_profiles/ef2a273a-f0be-44d9-bbfd-49b17b329797'
                  target='_blank'
                  rel='noopener noreferrer'
                  id='view-badge-btn'
                  className='flex items-center justify-center gap-2 bg-[#303240] py-3 px-5 rounded-xl'
                >
                  <span className='text-center text-xl'>View Badges</span>
                  <RiArrowRightLine className='view-badge-icon' size={20} />
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* AWS card */}
          <div className='max-w-full h-[600px] md:h-[450px] lg:h-[500px] rounded-[20px] mx-2 md:mx-12 p-4 md:p-5 bg-[#697C8B] relative'>
            {/* interactive and floating icons */}
            <img
              src='/assets/awsIcon.png'
              alt='aws icon'
              className='aws-iconTop absolute w-20 -top-7 md:w-24 lg:w-28 left-1/2 -translate-x-1/2 md:-translate-x-0 md:left-48 lg:left-72 md:-top-8 lg:-top-9 z-10'
            />
            <img
              src='/assets/awsInstanceIcon.png'
              alt='aws instance icon'
              className='aws-iconBottom absolute w-20 md:w-24 lg:w-28 right-28 lg:right-64 -bottom-7 lg:-bottom-9 hidden md:block z-10'
            />

            {/* main content */}
            <motion.div
              variants={parentVariant}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.4 }}
              className='img-container-aws w-full h-full rounded-[10px] relative'
            >
              <div className='text-center flex flex-col items-center justify-center w-full h-full p-5 absolute top-0 left-1/2 -translate-x-1/2'>
                <div className='flex flex-col items-center justify-center gap-1 mt-20 md:mt-0 absolute -top-5 md:top-24 lg:top-24 px-2 md:px-0'>
                  <motion.h2
                    variants={childVariant}
                    className='text-4xl lg:text-5xl font-bold'
                  >
                    Amazon Web Services
                  </motion.h2>
                  <motion.h3
                    variants={childVariant}
                    className='text-lg lg:text-2xl lg:mt-2 !opacity-50 md:!opacity-30'
                  >
                    College curriculum
                  </motion.h3>
                </div>

                <motion.div
                  variants={childVariant}
                  className='flex flex-col items-center justify-center gap-7 absolute bottom-10 md:bottom-16 lg:bottom-24'
                >
                  <h3 className='w-32 md:w-fit text-xl lg:text-4xl mt-4 !opacity-50'>
                    Earned in 2022 - 2023
                  </h3>
                  <a
                    href='https://www.credly.com/users/tushar-verma.c4e5ab35'
                    target='_blank'
                    rel='noopener noreferrer'
                    id='view-badge-btn'
                    className='flex items-center justify-center gap-2 bg-[#FF7304] py-3 px-5 rounded-xl'
                  >
                    <span className='text-center text-xl'>View Badges</span>
                    <RiArrowRightLine className='view-badge-icon' size={20} />
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Achievements
