import { useRef } from 'react'
import { PROJECTS } from '../constants'
import { RiArrowRightLine, RiGithubFill } from '@remixicon/react'

const Projects = () => {
  const projectRef = useRef(null)
  return (
    <section className='pt-32' id='projects' ref={projectRef}>
      <div className='px-4'>
        <h2 className='mb-8 text-center text-3xl font-medium lg:text-4xl'>
          Projects
        </h2>
        <div className='flex flex-wrap'>
          {PROJECTS.map(project => (
            <div
              key={project.id}
              className='flex w-full flex-col p-4 md:w-1/2 lg:w-1/3'
            >
              <div className='flex-grow overflow-hidden rounded-2xl border border-purple-300/30 p-1 flex flex-col items-center justify-between'>
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
                    <h3 className='mb-2 text-lg font-medium lg:text-2xl'>
                      {project.title}
                    </h3>
                    <p className='mb-4 text-white/70'>{project.description}</p>
                    <div className='mb-4'>
                      <p className='mb-2'>Tech Stack:</p>
                      <ul>
                        {project.techStack.map((tech, index) => (
                          <li
                            key={index}
                            className='m-1 mb-2 inline-block rounded-full border border-purple-300/30 px-3 py-1 text-[.8rem]'
                          >
                            {tech}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                {/* preview link and code link */}
                <div className='px-6 mt-2 mb-5'>
                  <div className='flex flex-row flex-wrap items-center justify-center gap-4'>
                    <a
                      id='projectPreviewLink'
                      href={project.preview_link}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='project-card-btn rounded-full bg-gradient-to-l from-indigo-700 to-pink-600 border-none px-4 py-1 text-sm cursor-pointer'
                    >
                      <div className='flex flex-row items-center justify-center gap-1'>
                        <p>Live Preview</p>
                        <RiArrowRightLine className='projectPreviewIcon w-4' />
                      </div>
                    </a>
                    <a
                      href={project.code_link}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='project-card-btn rounded-full bg-gradient-to-r from-indigo-700 to-pink-600 border-none px-4 py-1 text-sm cursor-pointer'
                    >
                      <div className='flex flex-row items-center justify-center gap-1'>
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
      </div>
    </section>
  )
}

export default Projects
