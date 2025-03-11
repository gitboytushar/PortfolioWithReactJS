'use client'
import React, { useRef } from 'react'
import { useScroll, useTransform, motion, useSpring } from 'framer-motion'

const useSmooth = (value, smoothing = 80) => {
  return useSpring(value, {
    stiffness: smoothing,
    damping: 15,
    mass: 0.25
  })
}

export const ContainerScroll = ({
  titleComponent,
  children,
  mobileContent
}) => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef
  })
  const [isMobile, setIsMobile] = React.useState(false)

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => {
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  const scaleDimensions = () => {
    return isMobile ? [0.85, 0.75] : [1.05, 1]
  }

  const rawRotate = useTransform(scrollYProgress, [0, 1], [23, 0])
  const rawScale = useTransform(scrollYProgress, [0.5, 1], scaleDimensions())
  const rawTranslate = useTransform(scrollYProgress, [0, 1], [0, -120])
  // smooth out the transform
  const rotate = useSmooth(rawRotate)
  const scale = useSmooth(rawScale)
  const translate = useSmooth(rawTranslate)

  return (
    <div
      className='h-[60rem] flex items-center justify-center relative p-1 md:p-20 overflow-hidden'
      ref={containerRef}
      style={{ position: 'relative' }}
    >
      <div
        className='py-2 md:py-30 w-full relative'
        style={{
          perspective: '1000px'
        }}
      >
        <Header translate={translate} titleComponent={titleComponent} />
        <Card
          rotate={rotate}
          translate={translate}
          scale={scale}
          isMobile={isMobile}
        >
          {isMobile ? mobileContent : children}
        </Card>
      </div>
    </div>
  )
}

export const Header = ({ translate, titleComponent }) => {
  return (
    <motion.div
      style={{
        translateY: translate
      }}
      className='div max-w-5xl mx-auto text-center'
    >
      {titleComponent}
    </motion.div>
  )
}

export const Card = ({ rotate, scale, children, isMobile }) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale
      }}
      className={`w-full -mt-24 lg:-mt-12 mx-auto ${
        isMobile ? 'w-[90%] md:w-2/3 h-auto' : 'w-[1000px] h-[650px]'
      } border-4 border-[#6C6C6C] p-3 md:p-6 bg-[#222222] rounded-[30px]`}
    >
      <div className='h-full w-full overflow-hidden rounded-2xl bg-white relative'>
        {children}
      </div>
    </motion.div>
  )
}
