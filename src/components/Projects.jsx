import { useEffect, useRef, useState } from 'react'
import { PROJECTS } from '../constants'
import {
  RiArrowDownWideLine,
  RiArrowRightUpLine,
  RiGithubLine,
  RiYoutubeFill
} from '@remixicon/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'motion/react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip-top'

gsap.registerPlugin(ScrollTrigger)

const Projects = () => {
  const projectRef = useRef(null)
  const [visibleProjects, setVisibleProjects] = useState(4)

  // show 3 cards initially
  const handleShowMore = () => {
    setVisibleProjects(prev => prev + 2)
  }

  // youtube url concatenation
  const fixedParams =
    '?si=zW5MwaRU2U51UUp4&amp;controls=1&amp;rel=0&amp;modestbranding=1'

  // gsap animaiton
  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = document.querySelectorAll('.project-card')
      const isDesktop = window.innerWidth >= 1024 // custom breakpoint

      if (isDesktop) {
        // on Destop
        cards.forEach(card => {
          if (!card.dataset.animated) {
            gsap.fromTo(
              card,
              {
                opacity: 0,
                x: -50
              },
              {
                opacity: 1,
                x: 0,
                duration: 0.8,
                ease: 'expoScale',
                stagger: 0.6,
                scrollTrigger: {
                  trigger: card,
                  start: 'top 70%',
                  toggleActions: 'play none none none'
                },
                onComplete: () => {
                  card.dataset.animated = 'true'
                }
              }
            )
          }
        })
      } else {
        // on Mobiles
        cards.forEach(card => {
          if (!card.dataset.animated) {
            gsap.fromTo(
              card,
              {
                opacity: 0,
                y: 80
              },
              {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: 'expoScale',
                scrollTrigger: {
                  trigger: card,
                  start: 'top 90%',
                  toggleActions: 'play none none none'
                },
                onComplete: () => {
                  card.dataset.animated = 'true'
                }
              }
            )
          }
        })
      }
    }, projectRef)

    return () => ctx.revert()
  }, [visibleProjects])

  // main content
  return (
    <section className='py-24 min-h-[100vh]' id='projects' ref={projectRef}>
      <div className='px-4'>
        <h2 className='mb-4 uppercase opacity-10 text-center lg:text-start font-extrabold text-5xl lg:text-9xl'>
          Projects
        </h2>

        <div className='flex flex-wrap'>
          {/* last card will be shown first */}
          {PROJECTS.slice()
            .reverse()
            .slice(0, visibleProjects)
            .map(project => (
              <div
                key={project.id}
                className='project-card flex flex-col md:p-2 w-full md:w-1/2'
              >
                <div className='flex-grow overflow-hidden rounded-lg border-2 border-white/10 bg-white/5 p-1.5 md:p-3 flex flex-col items-stretch justify-between mb-5 md:mb-0'>
                  <div>
                    {/* project details */}
                    <div className='p-2.5 md:p-4 pb-0 flex flex-col items-start justify-center gap-y-2'>
                      <h3 className='text-xl md:text-3xl font-medium'>
                        {project.title}
                      </h3>

                      <p className='text-white/75 font-light tracking-wide text-md lg:text-lg'>
                        {project.description}
                      </p>

                      <div className='mt-1'>
                        <p className='mb-2 text-lg md:text-xl font-medium'>
                          Tech Stack
                        </p>
                        <ul>
                          {project.techStack.map((tech, index) => (
                            <li
                              key={index}
                              className='mr-1.5 mb-1.5 inline-block rounded-[5px] border-none bg-white/10 px-3 py-1.5 tracking-wider text-xs lg:text-sm'
                            >
                              {tech}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* cta buttons */}
                  <div className='px-4 mt-8 md:mt-6 mb-3'>
                    <div className='flex flex-row flex-wrap items-center justify-center md:justify-end gap-4'>
                      {/* video for demonstration */}
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            {project.videoSrc && (
                              <motion.a
                                whileHover={{ y: -2 }}
                                transition={{
                                  type: 'spring',
                                  stiffness: 300,
                                  damping: 20
                                }}
                                href={`${project.videoSrc}${fixedParams}`}
                                target='_blank'
                                className='rounded-md bg-gradient-to-tr from-rose-500 to-red-700 border-none px-3 py-2 cursor-pointer'
                              >
                                <div className='flex items-center justify-center'>
                                  <RiYoutubeFill className='w-5 h-5 md:w-7 md:h-7' />
                                </div>
                              </motion.a>
                            )}
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Video Demo</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>

                      {/* live preview - hosted app */}
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            {project.preview_link && (
                              <motion.a
                                whileHover={{ y: -2 }}
                                transition={{
                                  type: 'spring',
                                  stiffness: 300,
                                  damping: 20
                                }}
                                id='projectPreviewLink'
                                href={project.preview_link}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='rounded-md bg-gradient-to-tr from-violet-600 to-pink-600 border-none px-3 py-2 cursor-pointer brightness-110'
                              >
                                <div className='flex items-center justify-center'>
                                  <RiArrowRightUpLine className='w-5 h-5 md:w-7 md:h-7' />
                                </div>
                              </motion.a>
                            )}
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Live Preview</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>

                      {/* source code - github repo */}
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            {project.code_link && (
                              <motion.a
                                whileHover={{ y: -2 }}
                                transition={{
                                  type: 'spring',
                                  stiffness: 300,
                                  damping: 20
                                }}
                                href={project.code_link}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='rounded-md border-none bg-white px-3 py-2 cursor-pointer'
                              >
                                <div className='flex items-center justify-center'>
                                  <RiGithubLine className='w-5 h-5 md:w-7 md:h-7 text-black' />
                                </div>
                              </motion.a>
                            )}
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Source Code</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Show More projects - Button */}
        {visibleProjects < PROJECTS.length && (
          <div className='text-center mt-3 lg:mt-4'>
            <button
              onClick={handleShowMore}
              className='showMoreProjectsBtn py-1 px-4 w-fit text-1xl tracking-tight lg:text-lg cursor-pointer'
            >
              <div className='flex items-center justify-center'>
                <p className='ml-2 mr-1'>Show More Projects</p>
                <RiArrowDownWideLine className='h-5 translate-y-[1px]' />
              </div>
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default Projects
