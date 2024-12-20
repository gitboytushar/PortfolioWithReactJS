import Marquee from 'react-fast-marquee'
import FloatingSkills from './FloatingSkills'
import FloatingSkills2 from './FloatingSkills2'
import { RiArrowRightWideFill, RiSparkling2Fill } from '@remixicon/react'

const Skills = () => {
  return (
    <section className='py-24 md:py-32 min-h-[100vh]' id='skills'>
      <div className='px-4 relative'>
        <h2 className='mb-16 pt-10 md:pt-6 text-center font-medium text-3xl lg:text-4xl'>
          Skills
        </h2>

        {/* ------------- on medium and large devices ------------ */}
        <div className='fade-shadow hidden md:flex flex-col items-center justify-center gap-y-8 lg:gap-y-12 cursor-grab select-none'>
          <Marquee speed={100} pauseOnHover>
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

          <Marquee speed={100} direction='right' pauseOnHover>
            <FloatingSkills2 />
          </Marquee>
        </div>

        {/* ------------- on Mobile devices ----------- */}
        <div className='flex md:hidden flex-col items-center justify-center gap-y-14 cursor-grab select-none'>
          <Marquee speed={50} pauseOnHover>
            <FloatingSkills />
          </Marquee>

          <Marquee speed={150} direction='right' pauseOnHover>
            <FloatingSkills />
          </Marquee>

          <div className='mt-1 flex items-center justify-center flex-col gap-y-4'>
            <div className='text-sm text-white bg-black/40 backdrop-blur-lg rounded-r-full py-1 pl-4 pr-3 w-fit absolute left-0 flex items-center justify-center gap-x-0 z-10'>
              <span>Soft skills</span>
              <RiArrowRightWideFill size={14} className='ml-1' />
            </div>

            <Marquee speed={100}>
              <div className='w-full flex flex-row-reverse items-center justify-center flex-wrap ml-10 gap-8 text-center text-sm'>
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
