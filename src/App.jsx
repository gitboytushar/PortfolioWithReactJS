import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Achievements from './components/Achievements'

const App = () => {
  return (
    <main className='mx-auto max-w-7xl overflow-x-hidden antialiased'>
      <div className='bg-image fixed inset-0 bg-cover bg-fixed bg-center'></div>
      <div className='relative z-10'>
        {/* Add components */}
        <Navbar />
        <Hero />
        <Projects />
        <Skills />
        <Achievements />
      </div>
    </main>
  )
}

export default App
