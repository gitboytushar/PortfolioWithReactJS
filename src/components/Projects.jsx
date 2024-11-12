import { useRef, useState } from 'react'
import { PROJECTS } from '../constants'
import {
  RiArrowDownWideLine,
  RiArrowRightLine,
  RiGithubFill
} from '@remixicon/react'

const Projects = () => {
  const projectRef = useRef(null)

  // Show 3 latest projects initially
  const [visibleProjects, setVisibleProjects] = useState(3)
  const handleShowMore = () => {
    setVisibleProjects(prev => prev + 3)
  }

  return (
    <section className='py-24 min-h-[100vh]' id='projects' ref={projectRef}>
      <div className='px-4'>
        <h2 className='mb-5 text-center font-medium text-3xl lg:text-4xl'>
          Projects in Action
        </h2>

        <div className='flex flex-wrap'>
          {PROJECTS.slice(0, visibleProjects).map(project => (
            <div
              key={project.id}
              className='flex w-full flex-col p-4 md:w-1/2 lg:w-1/3'
            >
              <div className='flex-grow overflow-hidden rounded-2xl border border-white/20 p-1 flex flex-col items-center justify-between'>
                {/* project info */}
                <div>
                  <div
                    className='relative w-full'
                    style={{ paddingTop: '56.25%' }}
                  >
                    <iframe
                      src={project.videoSrc}
                      className='absolute top-0 left-0 h-full w-full'
                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                      allowFullScreen
                    />
                  </div>
                  <div className='p-3 md:p-5 pb-0'>
                    <h3 className='mb-1 text-[18.5px] font-medium'>
                      {project.title}
                    </h3>
                    <p className='mb-3 text-white/55 text-sm'>
                      {project.description}
                    </p>
                    <div className='mb-4'>
                      <p className='mb-1'>Tech Stack:</p>
                      <ul>
                        {project.techStack.map((tech, index) => (
                          <li
                            key={index}
                            className='mr-1 mb-1 inline-block rounded-full border border-white/40 px-3 py-1 text-[.7rem] font-mono'
                          >
                            {tech}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* preview link and code link */}
                <div className='px-6 mt-2 mb-3'>
                  <div className='flex flex-row flex-wrap items-center justify-center gap-4'>
                    <a
                      id='projectPreviewLink'
                      href={project.preview_link}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='project-card-btn rounded-full bg-gradient-to-br from-violet-600 to-pink-600 border-none px-4 py-1 text-sm cursor-pointer'
                    >
                      <div className='flex flex-row items-center justify-center gap-2 font-medium'>
                        <p>Live Preview</p>
                        <RiArrowRightLine className='projectPreviewIcon w-4' />
                      </div>
                    </a>
                    <a
                      href={project.code_link}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='project-card-btn rounded-full border border-white/40 px-4 py-1 text-sm cursor-pointer'
                    >
                      <div className='flex flex-row items-center justify-center gap-2'>
                        <p>Source Code</p>
                        <RiGithubFill className='w-4' />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        {visibleProjects < PROJECTS.length && (
          <div className='text-center mt-3 lg:mt-0'>
            <button
              onClick={handleShowMore}
              className='showMoreProjectsBtn py-2 px-4 w-fit text-1xl lg:text-lg cursor-pointer'
            >
              <div className='flex items-center justify-center'>
                <p className='ml-2 mr-1'>Show More Projects</p>
                <RiArrowDownWideLine className='h-5' />
              </div>
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default Projects
