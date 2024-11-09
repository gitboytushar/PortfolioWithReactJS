import { useRef } from 'react'
import Marquee from 'react-fast-marquee'
import FloatingSkills from './FloatingSkills'

const Skills = () => {
  const skillsRef = useRef(null)

  return (
    <section
      className='py-24 md:py-32 min-h-[100vh]'
      id='skills'
      ref={skillsRef}
    >
      <div className='px-4'>
        <h2 className='mb-16 text-center text-3xl lg:text-4xl pt-2 lg:pt-8'>
          Skills
        </h2>

        {/* using external npm-package for marquee effect */}
        <div className='fade-shadow flex flex-col items-center justify-center gap-y-8 lg:gap-y-12 cursor-grab select-none'>
          {/* my tech skills with respective icons */}
          <Marquee speed={60} pauseOnHover>
            <FloatingSkills />
          </Marquee>
          {/* mention some of my soft skills */}
          <div className='w-full flex flex-col md:flex-row items-center justify-center gap-0 lg:gap-12 text-center text-sm lg:text-xl opacity-75'>
            <p className='py-2 px-5 hover:-rotate-3 transition-all ease-in-out duration-300'>
              Problem Solving
            </p>
            <p className='py-2 px-5 hover:rotate-3 transition-all ease-in-out duration-300'>
              Versatile
            </p>
            <p className='py-2 px-5 hover:-rotate-3 transition-all ease-in-out duration-300'>
              Punctual
            </p>
            <p className='py-2 px-5 hover:rotate-3 transition-all ease-in-out duration-300'>
              Teamwork
            </p>
            <p className='py-2 px-5 hover:-rotate-3 transition-all ease-in-out duration-300'>
              Attention to Detail
            </p>
          </div>
          <Marquee speed={60} direction='right' pauseOnHover>
            <FloatingSkills />
          </Marquee>
        </div>
      </div>
    </section>
  )
}

export default Skills
