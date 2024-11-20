// This is a sub-component for the Skills-component
import React from 'react'
import { SKILLS } from '../constants'

const FloatingSkills = () => {
  return (
    <div className='flex flex-row items-center justify-center gap-8 ml-8 md:gap-12 md:ml-12 lg:gap-20 lg:ml-20'>
      {SKILLS.map((skill, index) => (
        <div
          key={index}
          className='flex flex-col items-center justify-center opacity-30 hover:opacity-80 transition-opacity duration-500 ease-in-out'
        >
          <div className='mb-3 invert w-12 md:w-16 lg:w-20'>{skill.logo}</div>
          <h3 className='text-[0.8125rem] md:text-sm lg:text-lg'>
            {skill.name}
          </h3>
        </div>
      ))}
    </div>
  )
}

export default FloatingSkills
