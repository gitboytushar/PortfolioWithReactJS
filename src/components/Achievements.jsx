import { RiArrowRightLine } from '@remixicon/react'
import React, { useRef } from 'react'

const Achievements = () => {
  const achievementsRef = useRef(null)

  return (
    <section className='py-32' id='achievements' ref={achievementsRef}>
      <div className='px-4'>
        <h2 className='mb-24 text-center text-3xl lg:text-4xl flex flex-col items-center justify-center'>
          <span>Achievements</span>
          <span className='text-lg opacity-50'>Cloud computing badges</span>
        </h2>

        {/* Cards Stack */}
        <div className='flex flex-col gap-20 md:gap-28 lg:gap-40'>
          {/* GCP card */}
          <div className='max-w-full h-[600px] md:h-[450px] lg:h-[600px] rounded-[20px] mx-2 md:mx-12 p-4 md:p-5 bg-white relative'>
            {/* interactive and floating icons */}
            <img
              src='src/assets/gcpIcon.png'
              alt='gcp icon'
              className='gcp-iconTop absolute w-20 -top-8 md:w-24 lg:w-28 right-14 md:right-36 md:-top-9 lg:-top-11 z-10'
            />
            <img
              src='src/assets/gInstanceIcon.png'
              alt='gcp instance icon'
              className='gcp-iconLeft absolute w-20 lg:w-28 -left-7 lg:-left-12 top-44 lg:top-56 hidden md:block z-10'
            />

            {/* main content */}
            <div className='img-container-gcp w-full h-full rounded-[10px] relative'>
              <div className='flex flex-col items-center justify-between gap-8 lg:gap-16 w-full md:w-fit p-5 md:absolute top-12 lg:top-20 left-14'>
                <div className='text-center mt-20 md:mt-0'>
                  <h2 className='text-3xl lg:text-5xl md:font-bold'>
                    Google Cloud Platform
                  </h2>
                  <h3 className='text-lg lg:text-2xl mt-1 lg:mt-2 opacity-50'>
                    Part of College curriculum
                  </h3>
                  <h3 className='text-2xl lg:text-4xl mt-6 md:mt-10 opacity-70'>
                    Earned in 2022
                  </h3>
                </div>
                <a
                  href='#'
                  id='view-badge-btn'
                  className='flex items-center justify-center gap-2 bg-[#303240] py-3 px-5 rounded-xl hover:brightness-125 transition-all duration-300 ease-linear'
                >
                  <span className='text-center text-xl'>View Badges</span>
                  <RiArrowRightLine className='view-badge-icon' size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* AWS card */}
          <div className='max-w-full h-[600px] md:h-[450px] lg:h-[600px] rounded-[20px] mx-2 md:mx-12 p-4 md:p-5 bg-[#697C8B] relative'>
            {/* interactive and floating icons */}
            <img
              src='src/assets/awsIcon.png'
              alt='aws icon'
              className='aws-iconTop absolute w-20 -top-7 md:w-24 lg:w-28 left-1/2 -translate-x-1/2 md:-translate-x-0 md:left-48 lg:left-72 md:-top-8 lg:-top-9 z-10'
            />
            <img
              src='src/assets/awsInstanceIcon.png'
              alt='aws instance icon'
              className='aws-iconBottom absolute w-20 md:w-24 lg:w-28 right-28 lg:right-64 -bottom-7 lg:-bottom-9 hidden md:block z-10'
            />

            {/* main content */}
            <div className='img-container-aws w-full h-full rounded-[10px] relative'>
              <div className='text-center flex flex-col items-center justify-center w-full h-full p-5 absolute top-0 left-1/2 -translate-x-1/2'>
                <div className='flex flex-col items-center justify-center gap-1 mt-20 md:mt-0 absolute -top-5 md:top-24 lg:top-36 px-2 md:px-0'>
                  <h2 className='text-3xl lg:text-5xl md:font-bold'>
                    Amazon Web Services
                  </h2>
                  <h3 className='text-lg lg:text-2xl lg:mt-2 opacity-60 md:opacity-30'>
                    Part of College curriculum
                  </h3>
                </div>

                <div className='flex flex-col items-center justify-center gap-7 absolute bottom-10 md:bottom-16 lg:bottom-32'>
                  <h3 className='w-32 md:w-fit text-2xl lg:text-4xl mt-4 opacity-70'>
                    Earned in 2022 - 2023
                  </h3>
                  <a
                    href='#'
                    id='view-badge-btn'
                    className='flex items-center justify-center gap-2 bg-[#FF7304] py-3 px-5 rounded-xl hover:brightness-110 transition-all duration-300 ease-linear'
                  >
                    <span className='text-center text-xl'>View Badges</span>
                    <RiArrowRightLine className='view-badge-icon' size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Achievements
