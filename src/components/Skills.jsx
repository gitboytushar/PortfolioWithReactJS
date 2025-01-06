import Marquee from 'react-fast-marquee'
import FloatingSkills from './FloatingSkills'
import FloatingSkills2 from './FloatingSkills2'
import { RiArrowRightWideFill, RiSparkling2Fill } from '@remixicon/react'

const Skills = () => {
  return (
    <section className='py-24 md:py-32' id='skills'>
      <div className='px-4 relative'>
        <h2 className='mb-12 mt-10 lg:mt-2 uppercase opacity-10 text-center font-extrabold text-5xl lg:text-9xl'>
          Skills
        </h2>

        {/* ------------- on medium and large devices ------------ */}
        <div className='fade-shadow hidden md:flex flex-col items-center justify-center gap-y-8 lg:gap-y-12 cursor-grab select-none'>
          <Marquee speed={100} pauseOnClick>
            <FloatingSkills />
          </Marquee>

          <div className='w-full flex items-center justify-center px-0 gap-4 lg:gap-12 text-center text-sm lg:text-xl opacity-50 md:opacity-75'>
            <p className='p-1 md:p-5 hover:-rotate-3 transition-all ease-in-out duration-300'>
              Problem Solving
            </p>
            <p className='p-1 md:p-5 hover:rotate-3 transition-all ease-in-out duration-300'>
              Versatile
            </p>
            <p className='p-1 md:p-5 hover:-rotate-3 transition-all ease-in-out duration-300'>
              Punctual
            </p>
            <p className='p-1 md:p-5 hover:rotate-3 transition-all ease-in-out duration-300'>
              Teamwork
            </p>
            <p className='p-1 md:p-5 hover:-rotate-3 transition-all ease-in-out duration-300'>
              Attention to Detail
            </p>
          </div>

          <Marquee speed={100} direction='right' pauseOnClick>
            <FloatingSkills2 />
          </Marquee>
        </div>

        {/* ------------- on Mobile devices ----------- */}
        <div className='flex md:hidden flex-col items-center justify-center gap-y-16 mt-20 select-none'>
          <Marquee speed={80}>
            <FloatingSkills />
          </Marquee>

          <div className='mt-1 flex items-center justify-center flex-col gap-y-4'>
            <div className='text-sm text-white bg-black/25 backdrop-blur-lg rounded-r-full py-2.5 pl-4 pr-3 w-fit absolute left-0 flex items-center justify-center gap-x-0 z-10'>
              <span>Soft skills</span>
              <RiArrowRightWideFill size={15} className='ml-1' />
            </div>

            <Marquee speed={60} direction='right'>
              <div className='w-full flex flex-row-reverse items-center justify-center flex-wrap ml-10 gap-8 text-center text-md'>
                <RiSparkling2Fill size={14} />
                <p className='px-1 bg-gradient-to-br from-pink-400 to-indigo-700 bg-clip-text text-transparent brightness-150'>
                  Problem Solving
                </p>
                <RiSparkling2Fill size={14} />
                <p className='px-1 bg-gradient-to-br from-pink-400 to-indigo-700 bg-clip-text text-transparent brightness-150'>
                  Versatile
                </p>
                <RiSparkling2Fill size={14} />
                <p className='px-1 bg-gradient-to-br from-pink-400 to-indigo-700 bg-clip-text text-transparent brightness-150'>
                  Creative
                </p>
                <RiSparkling2Fill size={14} />
                <p className='px-1 bg-gradient-to-br from-pink-400 to-indigo-700 bg-clip-text text-transparent brightness-150'>
                  Growth Mindset
                </p>
                <RiSparkling2Fill size={14} />
                <p className='px-1 bg-gradient-to-br from-pink-400 to-indigo-700 bg-clip-text text-transparent brightness-150'>
                  Passionate
                </p>
                <RiSparkling2Fill size={14} />
                <p className='px-1 bg-gradient-to-br from-pink-400 to-indigo-700 bg-clip-text text-transparent brightness-150'>
                  Quick Learner
                </p>
                <RiSparkling2Fill size={14} />
                <p className='px-1 bg-gradient-to-br from-pink-400 to-indigo-700 bg-clip-text text-transparent brightness-150'>
                  Attention to Detail
                </p>
                <RiSparkling2Fill size={14} />
                <p className='px-1 bg-gradient-to-br from-pink-400 to-indigo-700 bg-clip-text text-transparent brightness-150'>
                  Teamwork
                </p>
                <RiSparkling2Fill size={14} />
                <p className='px-1 bg-gradient-to-br from-pink-400 to-indigo-700 bg-clip-text text-transparent brightness-150'>
                  Optimistic
                </p>
              </div>
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
