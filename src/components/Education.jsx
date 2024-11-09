import { useRef } from 'react'
import { EDUCATION } from '../constants'
import { RiExternalLinkLine } from '@remixicon/react'

const Education = () => {
  const educationRef = useRef(null)

  return (
    <section className='py-32 min-h-[100vh]' id='education' ref={educationRef}>
      <div className='mx-auto max-w-full px-4'>
        <h2 className='mb-14 text-center text-3xl lg:text-4xl'>
          Education Milestones
        </h2>
      </div>

      {/* content */}
      <div className='w-full flex flex-col space-y-10 px-4 lg:px-40'>
        {EDUCATION.map(edu => {
          return (
            <div key={edu.id}>
              <div className='flex flex-col text-center md:text-start items-center md:items-start justify-center gap-y-3 border border-white/40 rounded-xl p-6'>
                <h2 className='text-xl lg:text-2xl'>{edu.degree}</h2>
                <div>
                  <a
                    id='institutionLink'
                    href={edu.institutionWebsiteLink}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='w-fit text-md md:text-xl opacity-50 flex flex-wrap items-center justify-center gap-1'
                  >
                    <span>{edu.institution}</span>
                    <RiExternalLinkLine className='w-3 md:w-5' />
                  </a>
                  <h3 className='text-md mt-2 opacity-50'>{edu.duration}</h3>
                </div>
                <p className='text-md md:text-lg mt-3 opacity-90 bg-gradient-to-t from-pink-400 to-white text-transparent bg-clip-text'>
                  {edu.description}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Education
