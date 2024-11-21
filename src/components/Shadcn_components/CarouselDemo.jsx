// here we see two components are used the Card and the CardContent, so install them first via shadcn cli command
import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
import { HOBBIES } from '@/constants'
import { easeInOut } from 'motion'
import { motion, AnimatePresence } from 'motion/react'

export function CarouselDemo () {
  // framer motion variables
  const parentVariant = {
    hidden: { opacity: 0, y: -35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.3,
        duration: 0.7
      }
    }
  }

  const childVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        easeInOut
      }
    }
  }

  return (
    <Carousel>
      {/* content */}
      <CarouselContent className='cursor-grab select-none'>
        {HOBBIES.map(hobby => (
          <CarouselItem key={hobby.id}>
            <div className='p-0'>
              {/* actual card content */}
              <Card>
                <AnimatePresence>
                  <CardContent>
                    <motion.div variants={parentVariant}>
                      <div className='py-2 md:py-6 flex flex-col md:flex-row text-center md:text-start items-center justify-center gap-3 md:gap-8 h-full md:h-[280px] px-2 md:px-0'>
                        <img
                          className='w-[300px] h-[300px] md:w-[350px] md:h-full object-cover rounded-2xl brightness-90 border border-white/40 p-1'
                          src={hobby.image}
                          alt='hobby image'
                        />
                        <motion.div
                          variants={parentVariant}
                          initial='hidden'
                          whileInView='visible'
                          viewport={{ once: true, amount: 0.6 }}
                          className='flex !flex-col text-center md:text-start items-center md:items-start justify-center h-full w-[300px] md:w-1/4'
                        >
                          <motion.h3
                            variants={childVariant}
                            className='text-2xl lg:text-3xl mb-3 bg-gradient-to-br from-yellow-400 to-red-700 text-transparent bg-clip-text w-52 brightness-110'
                          >
                            {hobby.name}
                          </motion.h3>
                          <motion.h4
                            variants={childVariant}
                            className='text-md lg:text-lg !opacity-40'
                          >
                            {hobby.rewards}
                          </motion.h4>
                        </motion.div>
                      </div>
                    </motion.div>
                  </CardContent>
                </AnimatePresence>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* navigation buttons centered below */}
      <div className='flex items-center justify-center space-x-6 ld:space-x-4 mt-3 md:mt-8'>
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>
  )
}
