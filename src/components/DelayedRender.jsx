import { useState, useEffect } from 'react'

const DelayedRender = ({ delay, children, fallback }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, delay)

    return () => clearTimeout(timer)
  }, [delay])

  return isVisible ? children : fallback
}

export default DelayedRender
