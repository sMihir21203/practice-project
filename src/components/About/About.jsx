import React from 'react'

export default function About() {
  return (
    <div className='grid place-content-center mt-8'>
      <div className='w-full grid place-items-center'>
        <img
        className='rounded-xl' 
        src="https://media.licdn.com/dms/image/D4D03AQEI_S6kuojJeg/profile-displayphoto-shrink_200_200/0/1699780728790?e=2147483647&v=beta&t=xhoJJmzmgprBe6EjM2t3YuxJcZw-M6frPqQXVbg3eps" alt="Mihir" />
      </div>
      <div>
        <h2 className='grid place-content-center font-extrabold text-4xl'>
          Mihir Solanki
        </h2>
        <span className='font-semibold text-2xl text-slate-700'>Heyy, My name is Mihir Solanki I'm from Jantral </span>
      </div>
    </div>
  )
}