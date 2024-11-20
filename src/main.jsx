import React, { StrictMode, useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RiSparkling2Fill } from '@remixicon/react'

// custom loader
const Loading = () => (
  <div className='flex items-center justify-center w-full h-full bg-black fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
    <p className='flex items-center justify-center gap-2 md:gap-4 text-center text-lg md:text-2xl'>
      <RiSparkling2Fill className='w-4 md:w-5 lg:w-8 h-4 md:h-5 lg:h-8 motion-preset-blink motion-duration-1000' />
      <span className='motion-preset-fade motion-duration-2000 bg-gradient-to-r from-yellow-200 via-orange-500 to-violet-500 bg-clip-text text-transparent'>
        Welcome to Tushar's Portfolio
      </span>
      <RiSparkling2Fill className='w-4 md:w-5 lg:w-8 h-4 md:h-5 lg:h-8 motion-preset-blink motion-duration-1000' />
    </p>
  </div>
)

// app render
const Root = () => {
  const [pageLoaded, setPageLoaded] = useState(false)
  const [animationComplete, setAnimationComplete] = useState(false)

  useEffect(() => {
    const handleLoad = () => setPageLoaded(true)
    window.addEventListener('load', handleLoad)

    const timeout = setTimeout(() => setAnimationComplete(true), 2500)

    return () => {
      window.removeEventListener('load', handleLoad)
      clearTimeout(timeout)
    }
  }, [])

  return (
    <StrictMode>
      {!(pageLoaded || animationComplete) ? <Loading /> : <App />}
    </StrictMode>
  )
}

createRoot(document.getElementById('root')).render(<Root />)
