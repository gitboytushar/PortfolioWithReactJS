import { useRef } from 'react'

const Hobbies = () => {
  const hobbiesRef = useRef(null)

  return (
    <section className='py-32 lg:mt-20' id='hobbies' ref={hobbiesRef}>
      <div className='mx-auto max-w-full px-4'>
        <h2 className='mb-14 text-center text-3xl lg:text-4xl'>Hobbies</h2>
      </div>

      {/* content */}
    </section>
  )
}

export default Hobbies
