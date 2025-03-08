import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { WORK_EXP } from '../constants'
import { ArrowRight, ArrowUpRight, Globe, IdCard, Linkedin } from 'lucide-react'
import { useState } from 'react'

export default function ExperienceData () {
  const [hovered, setHovered] = useState(null)

  return (
    <Tabs defaultValue='tab-1'>
      <ScrollArea>
        {/* ---------------------- tabs ----------------- */}
        <TabsList className='relative w-full flex-wrap gap-1 lg:gap-2 bg-none'>
          <TabsTrigger
            value='tab-1'
            className='border border-white/50 border-b-transparent rounded-b-none rounded-t-md lg:rounded-t-lg px-3 py-1 lg:px-6 lg:py-2.5 data-[state=active]:z-10 data-[state=active]:border-b-transparent transition-colors duration-200 ease-linear'
          >
            Overview
          </TabsTrigger>
          <TabsTrigger
            value='tab-2'
            className='border border-white/50 border-b-transparent rounded-b-none rounded-t-md lg:rounded-t-lg px-3 py-1 lg:px-6 lg:py-2.5 data-[state=active]:z-10 data-[state=active]:border-b-transparent transition-colors duration-200 ease-linear'
          >
            Projects
          </TabsTrigger>
        </TabsList>
        <ScrollBar orientation='horizontal' />
      </ScrollArea>
      {/* ----------------- Overview ---------------------- */}
      <TabsContent value='tab-1'>
        <div className='md:mt-1.5 flex size-full p-5 items-stretch justify-center motion-preset-slide-down-sm'>
          <div className='flex flex-col gap-4'>
            {WORK_EXP.map(exp => (
              <div
                key={exp.id}
                className='flex flex-col md:flex-row gap-5 md:gap-8 isolate'
              >
                <img
                  src={exp.overview.company_logo}
                  alt={exp.overview.company_name}
                  className='size-[100px] rounded-xl mix-blend-hue hue-rotate-30 brightness-150 border border-white/70 object-cover mt-1'
                />
                <div className='flex flex-col items-stretch gap-1.5'>
                  <h3 className='text-2xl md:text-4xl font-bold tracking-wide text-white/60'>
                    {exp.overview.company_name}
                  </h3>

                  <p className='text-lg md:text-2xl text-white capitalize'>
                    {exp.overview.my_role}
                  </p>

                  <p className='text-sm lg:text-lg opacity-50'>
                    {exp.overview.join_date} - {exp.overview.end_date}
                  </p>

                  <p className='mt-2 text-base md:text-xl text-white/40'>
                    {exp.overview.learning}
                  </p>

                  <div className='flex items-center justify-between md:justify-end gap-3 mt-4'>
                    <div className='flex items-center gap-3'>
                      <a
                        href={exp.overview.company_linkedin}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='size-10 p-1 aspect-square text-white bg-gradient-to-br from-indigo-500 to-violet-600 rounded-md flex items-center justify-center hover:scale-105 transition-all duration-200 ease-in'
                      >
                        <Linkedin size={20} strokeWidth={1.5} />
                      </a>
                      <a
                        href={exp.overview.company_website}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='size-10 p-1 aspect-square text-white bg-gradient-to-br from-indigo-500 to-violet-600 rounded-md flex items-center justify-center hover:scale-105 transition-all duration-200 ease-in'
                      >
                        <Globe size={20} strokeWidth={1.5} />
                      </a>
                    </div>
                    <a
                      href={exp.overview.certificate_link}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='flex items-center gap-1.5 h-10 py-1 px-3 text-white bg-gradient-to-br from-purple-500 to-blue-600 rounded-md'
                      onMouseEnter={() => setHovered(exp.id)}
                      onMouseLeave={() => setHovered(null)}
                    >
                      <span>Certificate</span>
                      {hovered === exp.id ? (
                        <ArrowRight
                          size={25}
                          strokeWidth={1.3}
                          className='motion-preset-slide-right motion-duration-300'
                        />
                      ) : (
                        <IdCard
                          size={25}
                          strokeWidth={1.3}
                          className='motion-preset-slide-right motion-duration-300'
                        />
                      )}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </TabsContent>
      {/* ----------------- Projects ---------------------- */}
      <TabsContent value='tab-2'>
        <div className='flex size-full px-1 py-2.5 md:p-5 items-stretch justify-center motion-preset-slide-down-sm'>
          <div className='w-full flex flex-col items-center justify-start'>
            {WORK_EXP.map(exp => (
              <div
                key={exp.id}
                className='flex w-full flex-col items-stretch justify-start gap-3'
              >
                {Object.values(exp.projects).map(project => (
                  <div
                    key={project.sno}
                    className='flex items-start md:items-center justify-between gap-2 md:gap-0 p-2 lg:px-4 lg:py-4'
                  >
                    <div className='flex flex-col gap-1.5 justify-center font-normal text-sm md:text-lg p-1.5 pr-4 md:pr-0 flex-1'>
                      <h4 className='flex flex-col md:flex-row gap-1.5'>
                        {project.sno}.&nbsp;{project.title}
                        <span className='text-white/50 ml-4 md:ml-0'>
                          {project.level}
                        </span>
                      </h4>
                      <p className='text-sm text-white/70 w-[85%] ml-4 md:ml-0'>
                        {project.about}
                      </p>
                    </div>

                    <div className='flex items-center gap-4 mt-2 md:mt-0'>
                      <p className='text-white/40 hidden md:block'>Preview</p>
                      <a
                        href={project.preview_link}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='size-8 p-1 aspect-square text-white bg-gradient-to-br from-indigo-600 to-purple-600 rounded-md flex items-center justify-center group hover:scale-110 active:scale-50 duration-300 ease-in-out'
                      >
                        <ArrowUpRight
                          size={20}
                          strokeWidth={2}
                          className='md:-rotate-45 group-hover:rotate-0 duration-300 ease-in-out'
                        />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </TabsContent>
    </Tabs>
  )
}
