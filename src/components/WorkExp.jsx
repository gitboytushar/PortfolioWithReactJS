import React from 'react'
import ExperienceData from './ExperienceData'

const WorkExp = () => {
  return (
    <section className='pt-20 pb-10' id='experience'>
      <h2 className='mb-4 uppercase opacity-10 text-center font-extrabold text-5xl lg:text-9xl'>
        Work <br className='sm:hidden' /> Experience
      </h2>
      <div className='flex px-2 w-full items-stretch justify-center py-5 min-h-[60vh]'>
        <ExperienceData />
      </div>
    </section>
  )
}

export default WorkExp
