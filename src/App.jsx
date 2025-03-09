import React from 'react'
import { ReactLenis } from 'lenis/react'

// import components
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WorkExp from './components/WorkExp'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Achievements from './components/Achievements'
import Education from './components/Education'
import Hobbies from './components/Hobbies'
import Contact from './components/Contact'
import Scroll2TopFloatingButton from './components/Scroll2TopFloatingButton'
import CursorTrack from './components/cursorTrack'
import ProjectShowcase from './components/ProjectShowcase'
// import Snowfall from 'react-snowfall'

const App = () => {
  return (
    // Smooth scroll with Lenis
    <ReactLenis root>
      <main className='mx-auto max-w-[1200px] overflow-x-hidden antialiased'>
        {/* React snowfall component - winter season */}
        {/* <div className='absolute h-[127.5vh] flex inset-0 z-20 pointer-events-none'>
          <Snowfall
            snowflakeCount={71}
            speed={[0.3, 0.5]}
            wind={[0, 0]}
            radius={[2, 5]}
            color='#ffffff'
            images={undefined}
          />
        </div> */}

        {/* custom components */}
        <div className='relative z-10'>
          {/* curstom animated cursor tail */}
          <CursorTrack />

          {/* my content sections */}
          <Navbar />
          <Hero />
          <ProjectShowcase />
          <Projects />
          <Skills />
          <WorkExp />
          <Achievements />
          <Education />
          <Hobbies />
          <Contact />

          {/* scroll to page top floating button */}
          <Scroll2TopFloatingButton />
        </div>
      </main>
    </ReactLenis>
  )
}

export default App
