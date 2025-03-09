'use client'
import React, { useRef } from 'react'
import { useScroll, useTransform, motion } from 'motion/react'

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
    return isMobile ? [0.8, 0.9] : [1.05, 1]
  }

  const rotate = useTransform(scrollYProgress, [0, 1], [19, 0])
  const scale = useTransform(scrollYProgress, [0.5, 1], scaleDimensions())
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100])

  return (
    <div
      className='h-[50rem] md:h-[60rem] flex items-center justify-center relative p-1 md:p-20'
      ref={containerRef}
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
        scale,
        boxShadow:
          '0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003'
      }}
      className={`w-full -mt-12 mx-auto ${
        isMobile ? 'w-[360px] h-[680px]' : 'w-[1000px] h-[650px]'
      } border-4 border-[#6C6C6C] p-3 md:p-6 bg-[#222222] rounded-3xl lg:rounded-[30px] shadow-2xl`}
    >
      <div className='h-full w-full overflow-hidden rounded-xl lg:rounded-2xl bg-white relative'>
        {children}
      </div>
    </motion.div>
  )
}
