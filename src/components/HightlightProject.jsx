import React from 'react'
import { TextReveal } from './magicui/text-reveal'
import ProjectShowcase from './ProjectShowcase'
import { Marquee } from './magicui/marquee'
import { cn } from '../lib/utils'
import { DAPP_UI_DSS, DAPP_UI_PSS } from '../constants'

const landscapeImages = DAPP_UI_DSS.map(item => ({
  img: item.screenshot.props.src
}))

const portraitImages = DAPP_UI_PSS.map(item => ({
  img: item.screenshot.props.src
}))

const LandscapeCard = ({ img }) => {
  return (
    <div
      className={cn(
        'relative w-fit lg:w-[35vw] h-max my-0.5 lg:my-2 cursor-grab overflow-hidden'
      )}
    >
      <img
        className='w-[55vw] lg:w-full h-full object-contain rounded-[5px] lg:rounded-xl select-none border border-transparent lg:border-indigo-400 lg:p-1'
        src={img}
        alt='landscape interface'
        draggable='false'
      />
    </div>
  )
}

const PortraitCard = ({ img }) => {
  return (
    <div
      className={cn(
        'relative w-fit lg:w-[11vw] h-max my-0.5 lg:my-2.5 cursor-grab overflow-hidden'
      )}
    >
      <img
        className='w-[36vw] lg:w-full h-full object-contain rounded-[5px] lg:rounded-xl select-none border border-transparent lg:border-indigo-400 lg:p-1'
        src={img}
        alt='portrait interface'
        draggable='false'
      />
    </div>
  )
}

const HightlightProject = () => {
  return (
    <section className='mb-20 lg:mb-52'>
      {/* Aceternity ui - scroll perspective element move */}
      <div>
        <ProjectShowcase />
      </div>

      {/* Magic ui - scroll based text reveal */}
      <div className='flex flex-col items-stretch gap-10 md:gap-14 lg:gap-20 mt-0 lg:mt-32'>
        <TextReveal>
          Schedule an appointment with doctor in just few clicks.
        </TextReveal>
        <TextReveal>
          Pay the appointment fees online via Razorpay payment gateway.
        </TextReveal>
        <TextReveal>
          Role Based Access Control for Patients, Doctors and Admin.
        </TextReveal>
        <TextReveal>Optimized for both mobile and desktop users.</TextReveal>
      </div>

      {/* Magic ui - app ui images - vertical marquee */}
      <div className='flex flex-col lg:flex-row items-center justify-between gap-24 lg:gap-5 lg:pl-24 lg:pr-14'>
        {/* scrolling iamges */}
        <div className='relative flex h-[500px] w-fit flex-row items-center justify-start overflow-hidden gap-0.5 lg:gap-5'>
          <Marquee
            pauseOnHover
            vertical
            className='[--duration:35s] transition-all duration-500'
          >
            {landscapeImages.map((item, index) => (
              <LandscapeCard key={index} {...item} />
            ))}
          </Marquee>
          <Marquee
            pauseOnHover
            vertical
            reverse
            className='[--duration:45s] transition-all duration-500'
          >
            {portraitImages.map((item, index) => (
              <PortraitCard key={index} {...item} />
            ))}
          </Marquee>
          <div className='pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-background'></div>
          <div className='pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background'></div>
        </div>

        {/* buttons */}
        <div className='flex flex-col items-center justify-center gap-5'>
          <button className='py-3 min-w-44 text-xl bg-white text-black rounded-lg'>
            Video
          </button>
          <button className='py-3 min-w-44 text-xl bg-white text-black rounded-lg'>
            Live Preview
          </button>
          <button className='py-3 min-w-44 text-xl bg-white text-black rounded-lg'>
            Source Code
          </button>
        </div>
      </div>
    </section>
  )
}

export default HightlightProject
