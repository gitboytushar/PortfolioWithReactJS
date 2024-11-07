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

export function CarouselDemo () {
  return (
    <Carousel>
      {/* content */}
      <CarouselContent className='cursor-grab select-none'>
        {HOBBIES.map(hobby => (
          <CarouselItem key={hobby.id}>
            <div className='p-0'>
              {/* actual card content */}
              <Card>
                <CardContent className=''>
                  <div className='py-2 md:py-6 flex flex-col md:flex-row text-center md:text-start items-center justify-center gap-3 md:gap-8 h-full md:h-[280px] px-2 md:px-0'>
                    <img
                      className='w-[300px] h-[300px] md:w-[350px] md:h-full object-cover rounded-2xl brightness-75'
                      src={hobby.image}
                      alt='hobby image'
                    />
                    <div className='flex !flex-col text-center md:text-start items-center md:items-start justify-center h-full w-[300px] md:w-1/4'>
                      <h3 className='text-2xl md:text-4xl mb-3 opacity-60 w-52'>
                        {hobby.name}
                      </h3>
                      <h4 className='text-md md:text-lg opacity-30'>
                        {hobby.rewards}
                      </h4>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* navigation buttons centered below */}
      <div className='flex items-center justify-center space-x-4 mt-3 md:mt-8'>
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>
  )
}