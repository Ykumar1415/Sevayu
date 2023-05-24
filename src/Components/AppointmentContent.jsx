import React from 'react'

const AppointmentContent = () => {
  return (
    <>
    <ul className='h-[70%] sm:h-full flex flex-row justify-between visby text-[1rem] lg:text-[1.15rem] pr-[10px] transition-all ease-in-out'>

    <li className='sm:w-[35%]'>
      <div className='flex align-top'>
        <div className='sm:w-12 sm:h-12 w-8 h-8 inline-block bg-[#a7a7a7] sm:mr-8 mr-2 rounded-full'></div>
        <div className='inline-block'>
          <p>Pranjal Jha</p>
          <p className='text-[0.9rem] text-[#949393]'>+91 9483720480</p>
        </div>
      </div>
    </li>

    <li className='sm:w-[20%] w-full hidden sm:block'>
      <div>
      <center className='flex sm:block'>
      <p>20 Mar 2023</p>
      <p className='text-[0.9rem] text-[#949393]'>4 : 30 pm</p>
      </center>
      </div>
    </li>

    <li className='sm:w-[35%] flex sm:block'>
      <div>
      <center>
      <p>Yogesh Saini</p>
      <p className='text-[0.9rem] text-[#949393]'>Urologist</p>
      </center>
      </div>
    </li>

  </ul>

  <div className='visby text-[#949393] sm:hidden block text-[0.9rem]'>
    <center className='flex justify-between mx-5'>
      <p>20 Mar 2023</p>
      <p className='text-[0.9rem]'>4 : 30 pm</p>
    </center>
  </div>
    </>
  )
}

export default AppointmentContent