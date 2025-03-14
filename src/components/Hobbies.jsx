import { useRef } from 'react'
import { CarouselDemo } from './Shadcn_components/CarouselDemo'

const Hobbies = () => {
  const hobbiesRef = useRef(null)

  return (
    <section className='py-8 md:pt-24' id='hobbies' ref={hobbiesRef}>
      <div className='mx-auto max-w-full px-4'>
        <h2 className='my-10 lg:my-14 pt-5 uppercase opacity-10 text-center font-extrabold text-[10vw] lg:text-9xl'>
          hobbies
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
