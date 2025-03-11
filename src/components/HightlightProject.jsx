import React from 'react'
import { TextReveal } from './magicui/text-reveal'
import ProjectShowcase from './ProjectShowcase'
import { Marquee } from './magicui/marquee'
import { cn } from '../lib/utils'
import { DAPP_UI_DSS, DAPP_UI_PSS } from '../constants'
import { AnimatedGradientText } from './magicui/animated-gradient-text'
import { ChevronRight } from 'lucide-react'

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
      <div className='flex flex-col lg:flex-row items-center justify-between gap-24 lg:gap-5 lg:pl-24 lg:pr-10'>
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

        {/* ------------------------------------- cta buttons - magic ui -------------------------------------- */}
        <div className='flex flex-col items-center justify-center gap-6 lg:gap-8'>
          {/* Live preview btn  */}
          <a
            href='https://prescripto-frontend-vtwl.onrender.com/'
            target='_blank'
            className='group relative mx-auto flex items-center justify-center w-[180px] rounded-full px-6 py-3.5 shadow-[inset_0_-3px_10px_#8fdfff1f] cursor-pointer hover:scale-[103%] transition-all duration-200 ease-linear hover:shadow-[inset_0_-4px_10px_#8fdfff3f] '
          >
            <span
              className={cn(
                'absolute inset-0 block h-full w-full animate-gradient rounded-[inherit] bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/70 to-[#ffaa40]/50 bg-[length:300%_100%] p-[1px]'
              )}
              style={{
                WebkitMask:
                  'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'destination-out',
                mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                maskComposite: 'subtract',
                WebkitClipPath: 'padding-box'
              }}
            />
            🚀
            <hr className='mx-4 h-4 w-px shrink-0 border-none bg-neutral-600' />
            <AnimatedGradientText className='text-base font-medium'>
              Try Now
            </AnimatedGradientText>
            <ChevronRight
              className='ml-1 size-4 stroke-neutral-400 transition-transform
 duration-300 ease-in-out group-hover:translate-x-0.5'
            />
          </a>

          {/* Source code btn */}
          <a
            href='https://github.com/gitboytushar/Prescripto-Web-App'
            target='_blank'
            className='group relative mx-auto flex items-center justify-center w-[180px] rounded-full px-6 py-3.5 shadow-[inset_0_-3px_10px_#8fdfff1f] cursor-pointer hover:scale-[103%] transition-all duration-200 ease-linear hover:shadow-[inset_0_-4px_10px_#8fdfff3f] '
          >
            <span
              className={cn(
                'absolute inset-0 block h-full w-full animate-gradient rounded-[inherit] bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/70 to-[#ffaa40]/50 bg-[length:300%_100%] p-[1px]'
              )}
              style={{
                WebkitMask:
                  'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'destination-out',
                mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                maskComposite: 'subtract',
                WebkitClipPath: 'padding-box'
              }}
            />
            🛠️
            <hr className='mx-4 h-4 w-px shrink-0 border-none bg-neutral-600' />
            <AnimatedGradientText className='text-base font-medium'>
              Github
            </AnimatedGradientText>
            <ChevronRight
              className='ml-1 size-4 stroke-neutral-400 transition-transform
 duration-300 ease-in-out group-hover:translate-x-0.5'
            />
          </a>
        </div>
      </div>
    </section>
  )
}

export default HightlightProject
