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

const App = () => {
  return (
    // Smooth scroll with Lenis
    <ReactLenis
      root
      options={{
        smooth: true,
        duration: 1.6, // Makes the scroll slower (default is 1.2)
        easing: t => 1 - Math.pow(1 - t, 3) // Cubic ease-out for smoother effect
      }}
    >
      <main className='mx-auto max-w-7xl overflow-x-hidden antialiased'>
        {/* main background-noise image */}
        <div className='bg-image fixed inset-0 bg-blend-soft-light bg-scroll lg:bg-fixed bg-center'></div>
        {/* custom components */}
        <div className='relative z-10'>
          <Navbar />
          <Hero />
          <Projects />
          <Skills />
          <Achievements />
          <Education />
          <Hobbies />
          <Contact />
          <Scroll2TopFloatingButton />
        </div>
      </main>
    </ReactLenis>
  )
}

export default App
