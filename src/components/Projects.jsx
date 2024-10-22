import { useRef } from 'react'
import { PROJECTS } from '../constants'

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
              <div className='flex-grow overflow-hidden rounded-2xl border border-purple-300/30 p-1'>
                <a
                  href={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                >
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
                  <div className='p-6 pb-0'>
                    <h3 className='mb-2 text-lg font-medium lg:text-2xl'>
                      {project.title}
                    </h3>
                    <p className='mb-4 text-white/60'>{project.description}</p>
                    <div className='mb-4'>
                      <p className='mb-2'>Tech Stack:</p>
                      <ul>
                        {project.techStack.map((tech, index) => (
                          <li
                            key={index}
                            className='m-1 mb-2 inline-block rounded-full border border-purple-300/30 px-3 py-1 text-sm'
                          >
                            {tech}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
