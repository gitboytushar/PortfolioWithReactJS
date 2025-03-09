'use client'
import React from 'react'
import { ContainerScroll } from './ui/container-scroll-animation'

const ProjectShowcase = () => {
  return (
    <div className='flex flex-col overflow-hidden'>
      <ContainerScroll
        titleComponent={
          <>
            <h1 className='text-2xl md:text-5xl font-semibold text-white/50'>
              Web Application <br /> Built with MERN Stack <br />
              <span className='text-6xl md:text-6xl lg:text-9xl text-white font-bold mt-1 leading-none'>
                Prescripto
              </span>
            </h1>
          </>
        }
        mobileContent={
          <img
            src='/assets/AppUI/da_entry_phone.png'
            alt='hero mobile'
            className='w-full h-full object-cover'
            draggable={false}
          />
        }
      >
        <img
          src='/assets/AppUI/da_entry_desktop.png'
          alt='hero desktop'
          className='w-full h-full object-contain'
          draggable={false}
        />
      </ContainerScroll>
    </div>
  )
}

export default ProjectShowcase
