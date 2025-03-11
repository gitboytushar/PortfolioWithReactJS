'use client'
import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'

import { cn } from '@/lib/utils'

export const TextReveal = ({ children, className }) => {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start 90%', 'end 70%']
  })

  if (typeof children !== 'string') {
    throw new Error('TextReveal: children must be a string')
  }

  const words = children.split(' ')

  return (
    <div ref={targetRef} className={cn('relative z-0 h-auto', className)}>
      <div
        className={
          'sticky top-20 -translate-y-1/2 mx-auto h-full flex max-w-2xl lg:max-w-5xl items-center bg-transparent px-[1rem]'
        }
      >
        <span
          className={
            'flex flex-wrap justify-center lg:justify-start p-5 text-2xl font-bold text-white/40 md:p-8 md:text-3xl lg:p-10 lg:text-4xl xl:text-5xl'
          }
        >
          {words.map((word, i) => {
            const start = i / words.length
            const end = start + 1 / words.length
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            )
          })}
        </span>
      </div>
    </div>
  )
}

const Word = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1])
  return (
    <span className='xl:lg-3 relative mx-1 lg:mx-1.5'>
      <span className='absolute opacity-30'>{children}</span>
      <motion.span style={{ opacity: opacity }} className={'text-white'}>
        {children}
      </motion.span>
    </span>
  )
}
