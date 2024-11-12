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
        <h2 className='mb-16 pt-10 text-center font-medium text-3xl lg:text-4xl'>
          Skills
        </h2>

        {/* using external npm-package for marquee effect */}
        <div className='fade-shadow flex flex-col items-center justify-center gap-y-8 lg:gap-y-12 cursor-grab select-none'>
          {/* my tech skills with respective icons - moving in left direction */}
          <Marquee speed={70} pauseOnHover>
            <FloatingSkills />
          </Marquee>
          {/* mention some of my soft skills */}
          <div className='w-full flex items-center justify-center px-0 gap-4 lg:gap-12 text-center text-sm lg:text-xl opacity-50 md:opacity-75'>
            <p className='hidden md:inline-block p-1 md:p-5 hover:-rotate-3 transition-all ease-in-out duration-300'>
              Problem Solving
            </p>
            <p className='hidden md:inline-block p-1 md:p-5 hover:rotate-3 transition-all ease-in-out duration-300'>
              Versatile
            </p>
            <p className='hidden md:inline-block p-1 md:p-5 hover:-rotate-3 transition-all ease-in-out duration-300'>
              Punctual
            </p>
            <p className='hidden md:inline-block p-1 md:p-5 hover:rotate-3 transition-all ease-in-out duration-300'>
              Teamwork
            </p>
            <p className='hidden md:inline-block p-1 md:p-5 hover:-rotate-3 transition-all ease-in-out duration-300'>
              Attention to Detail
            </p>
            <p className='block md:hidden px-1 text-center text-[1rem]'>
              Proficient in problem-solving with a sharp eye for detail, I bring
              a versatile and punctual approach to collaborative work, ensuring
              smooth teamwork and excellence in every project.
            </p>
          </div>
          {/* my tech skills again - moving in right direction */}
          <Marquee speed={70} direction='right' pauseOnHover>
            <FloatingSkills />
          </Marquee>
        </div>
      </div>
    </section>
  )
}

export default Skills
