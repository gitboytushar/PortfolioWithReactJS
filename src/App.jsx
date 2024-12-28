import React from 'react'
import { ReactLenis } from 'lenis/react'

// custom components
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Achievements from './components/Achievements'
import Education from './components/Education'
import Hobbies from './components/Hobbies'
import Contact from './components/Contact'
import Scroll2TopFloatingButton from './components/Scroll2TopFloatingButton'
import CursorTrack from './components/cursorTrack'

const App = () => {
  return (
    // Smooth scroll with Lenis
    <ReactLenis root>
      <main className='mx-auto max-w-7xl overflow-x-hidden antialiased'>
        {/* main background-noise image */}
        <div className='bg-image fixed inset-0 bg-blend-soft-light bg-scroll lg:bg-fixed bg-center'></div>
        {/* custom components */}
        <div className='relative z-10'>
          {/* curstom animated cursor tail */}
          <CursorTrack />

          {/* content sections */}
          <Navbar />
          <Hero />
          <Projects />
          <Skills />
          <Achievements />
          <Education />
          <Hobbies />
          <Contact />

          {/* scroll to page top, assitive floating button */}
          <Scroll2TopFloatingButton />
        </div>
      </main>
    </ReactLenis>
  )
}

export default App
