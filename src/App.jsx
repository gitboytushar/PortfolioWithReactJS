import React from 'react'
import { ReactLenis } from 'lenis/react'

// import components
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Achievements from './components/Achievements'
import Education from './components/Education'
import Hobbies from './components/Hobbies'
import Contact from './components/Contact'
import Scroll2TopFloatingButton from './components/Scroll2TopFloatingButton'
// import CursorTrack from './components/cursorTrack'
import Snowfall from 'react-snowfall'

const App = () => {
  return (
    // Smooth scroll with Lenis
    <ReactLenis root>
      <main className='mx-auto max-w-[97vw] lg:max-w-[90vw] overflow-x-hidden antialiased'>
        {/* main background-noise image */}
        <div className='bg-image fixed inset-0 bg-blend-soft-light bg-scroll lg:bg-fixed bg-center'></div>

        {/* custom components */}
        <div className='relative z-10'>
          {/* curstom animated cursor tail */}
          {/* <CursorTrack /> */}

          {/* React snowfall component for winter season - npm */}
          <div className='absolute max-h-[100vh] inset-0 z-20 pointer-events-none'>
            <Snowfall
              snowflakeCount={51}
              speed={[0.5, 0.3]}
              wind={[-0.5, -0.5]}
              radius={[1.5, 3]}
              color='#dee4fd'
              images={undefined}
            />
          </div>

          {/* my content sections */}
          <Navbar />
          <Hero />
          <Projects />
          <Skills />
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
