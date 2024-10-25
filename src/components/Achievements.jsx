import React, { useRef } from 'react'

const Achievements = () => {
  const achievementsRef = useRef(null)

  return (
    <section className='py-32' id='achievements' ref={achievementsRef}>
      <div className='px-4'>
        <h2 className='mb-14 text-center text-3xl lg:text-4xl flex flex-col items-center justify-center'>
          <span>Achievements</span>
          <span className='text-lg opacity-50'>Cloud computing badges</span>
        </h2>
      </div>
    </section>
  )
}

export default Achievements
