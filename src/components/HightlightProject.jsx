import React from 'react'
import { TextReveal } from './magicui/text-reveal'
import ProjectShowcase from './ProjectShowcase'

const HightlightProject = () => {
  return (
    <>
      {/* Aceternity ui - scroll perspective element move */}
      <div>
        <ProjectShowcase />
      </div>

      {/* Magic ui - scroll based text reveal */}
      <div className='flex flex-col items-stretch gap-10 md:gap-14 lg:gap-20 mt-0 lg:mt-32'>
        <TextReveal>
          Schedule an appointment with doctor in just few clicks.
        </TextReveal>
        <TextReveal>
          Pay the appointment fees online via Razorpay payment gateway.
        </TextReveal>
        <TextReveal>
          Role Based Access Control for Patients, Doctors and Admin.
        </TextReveal>
        <TextReveal>Optimized for both mobile and desktop users.</TextReveal>
      </div>
    </>
  )
}

export default HightlightProject
