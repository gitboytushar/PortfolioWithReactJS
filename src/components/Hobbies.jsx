import { useRef } from 'react'
import { CarouselDemo } from './Shadcn_components/CarouselDemo'

const Hobbies = () => {
  const hobbiesRef = useRef(null)

  return (
    <section className='py-12 md:pt-32' id='hobbies' ref={hobbiesRef}>
      <div className='mx-auto max-w-full px-4'>
        <h2 className='my-10 lg:my-14 pt-5 uppercase opacity-10 text-center font-extrabold text-5xl lg:text-9xl'>
          More about me
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
