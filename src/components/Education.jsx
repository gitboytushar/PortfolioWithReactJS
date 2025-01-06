import { useRef, useEffect } from 'react'
import { EDUCATION } from '../constants'
import { RiExternalLinkLine } from '@remixicon/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Education = () => {
  const educationRef = useRef(null)

  // gsap animaiton
  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = document.querySelectorAll('.eduCard')
      cards.forEach(card => {
        if (!card.dataset.animated) {
          gsap.fromTo(
            card,
            {
              opacity: 0,
              y: 50
            },
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              ease: 'expoScale',
              stagger: 0.3,
              scrollTrigger: {
                trigger: card,
                start: 'top 60%',
                toggleActions: 'play none none none'
              },
              onComplete: () => {
                card.dataset.animated = 'true'
              }
            }
          )
        }
      })
    }, educationRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className='py-14 lg:py-32' id='education'>
      <div className='mx-auto max-w-full px-4'>
        <h2 className='mb-6 md:mb-12 mt-10 lg:mt-2 uppercase opacity-10 text-center font-extrabold text-5xl lg:text-9xl'>
          Education Milestones
        </h2>
      </div>

      {/* cards */}
      <div
        className='w-full flex flex-col space-y-5 lg:space-y-8 px-4 lg:px-40'
        ref={educationRef}
      >
        {EDUCATION.map(edu => {
          return (
            <div key={edu.id}>
              <div className='eduCard flex flex-col text-start items-center justify-center gap-y-5 rounded-lg border-2 border-white/10 bg-white/5 p-4 md:p-8'>
                <h2 className='text-xl md:text-2xl lg:text-5xl uppercase font-medium w-full text-white tracking-wide'>
                  {edu.degree}
                </h2>

                <div className='w-full flex flex-col-reverse items-stretch justify-center gap-y-1'>
                  <a
                    id='institutionLink'
                    href={edu.institutionWebsiteLink}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-md lg:text-2xl text-white/70 flex items-center justify-start gap-2'
                  >
                    <span>{edu.institution}</span>
                    <span>
                      <RiExternalLinkLine className='w-3 md:w-5' />
                    </span>
                  </a>
                  <h3 className='text-md md:text-lg lg:text-2xl text-white/80'>
                    {edu.duration}
                  </h3>
                </div>

                <p className='text-md md:text-lg lg:text-2xl tracking-wide font-light text-white/50'>
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
