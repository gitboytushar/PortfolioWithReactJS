import { useRef } from 'react'
import Marquee from 'react-fast-marquee'
import FloatingSkills from './FloatingSkills'

const Skills = () => {
  const skillsRef = useRef(null)

  return (
    <section className='mt-14 py-32' id='skills' ref={skillsRef}>
      <div className='px-4'>
        <h2 className='mb-14 text-center text-3xl font-medium lg:text-4xl'>
          Skills
        </h2>

        {/* using external npm-package for marquee effect */}
        <div className='fade-shadow flex flex-col items-center justify-center gap-y-8 lg:gap-y-12 cursor-grab'>
          <Marquee speed={60} pauseOnHover>
            <FloatingSkills />
          </Marquee>
          <Marquee speed={60} direction='right' pauseOnHover>
            <FloatingSkills />
          </Marquee>
        </div>
      </div>
    </section>
  )
}

export default Skills
