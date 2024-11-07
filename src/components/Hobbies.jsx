import { useRef } from 'react'
import { CarouselDemo } from './Shadcn_components/CarouselDemo'

const Hobbies = () => {
  const hobbiesRef = useRef(null)

  return (
    <section className='py-12 md:py-32 lg:mt-20' id='hobbies' ref={hobbiesRef}>
      <div className='mx-auto max-w-full px-4'>
        <h2 className='mb-10 text-center text-3xl lg:text-4xl'>Hobbies</h2>
      </div>

      {/* content */}
      <div className='flex items-center justify-center'>
        <CarouselDemo />
      </div>
    </section>
  )
}

export default Hobbies
