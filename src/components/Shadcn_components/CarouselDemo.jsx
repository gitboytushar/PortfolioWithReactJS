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
import { circIn } from 'motion'
import { motion, AnimatePresence } from 'motion/react'

export function CarouselDemo () {
  // framer motion variables
  const parentVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6
      }
    }
  }

  const childVariant = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        circIn
      }
    }
  }

  return (
    <Carousel>
      {/* content */}
      <CarouselContent className='cursor-grab select-none'>
        {HOBBIES.map(hobby => (
          <CarouselItem key={hobby.id}>
            <div className='p-0 lg:scale-110'>
              {/* actual card content */}
              <Card>
                <AnimatePresence>
                  <CardContent>
                    <motion.div variants={parentVariant}>
                      <div className='py-2 md:py-6 flex flex-col md:flex-row text-center md:text-start items-center justify-center gap-4 md:gap-8 h-full md:h-[280px] px-2 md:px-0'>
                        <img
                          className='w-[80vw] h-[250px] md:w-[350px] md:h-full object-cover rounded-xl brightness-90 border-none p-1 bg-gradient-to-br from-yellow-500 to-rose-600'
                          src={hobby.image}
                          alt='hobby image'
                        />
                        <motion.div
                          variants={childVariant}
                          initial='hidden'
                          whileInView='visible'
                          viewport={{ once: true, amount: 0.6 }}
                          className='flex !flex-col text-center md:text-start items-center md:items-start justify-center h-full w-[80vw] md:w-1/3'
                        >
                          <h3 className='text-2xl lg:text-3xl mb-3 bg-gradient-to-br from-yellow-500 to-rose-600 text-transparent bg-clip-text font-medium w-52 brightness-110'>
                            {hobby.name}
                          </h3>
                          <h4 className='text-lg lg:text-xl font-normal opacity-45'>
                            {hobby.rewards}
                          </h4>
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
      <div className='flex items-center justify-center space-x-7 lg:space-x-6 mt-1 md:mt-10'>
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>
  )
}
