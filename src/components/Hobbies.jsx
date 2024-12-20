import { useRef } from 'react'
import { CarouselDemo } from './Shadcn_components/CarouselDemo'

const Hobbies = () => {
  const hobbiesRef = useRef(null)

  return (
    <section
      className='py-12 md:pt-32 min-h-screen'
      id='hobbies'
      ref={hobbiesRef}
    >
      <div className='mx-auto max-w-full px-4'>
        <h2 className='mb-5 pt-10 md:pt-5 md:mb-12 lg:mb-14 lg:pt-14 text-center text-3xl lg:text-4xl font-medium'>
          Life Outside Work
        </h2>
      </div>

      {/* content */}
      <div className='flex items-center justify-center'>
        <CarouselDemo />
      </div>
    </section>
  )
}

export default Hobbies
