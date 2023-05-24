import { TextField } from '@mui/material'
import React from 'react'

const SignupDetails = ({ next, handleChange, state }) => {

  const errorBox = document.getElementById("errorBox")

  const handleNext = e => {
    e.preventDefault()
    if (state.password === state.confirmPassword) {
      next()
    } else {
      errorBox.innerText = "password does not match!"
      setTimeout(() => {
        errorBox.innerText = ""
      }, 5000);
    }
  }

  return (
    <>
        <div className='mt-[2.5rem]'>
        <TextField 
          id="standard-basic" 
          label="Hospital Name"
          variant="standard" 
          className='sm:w-9/12 w-full' 
          onChange={handleChange("fullName")}
          defaultValue={state.fullName}
        />
        </div>
        <div className='mt-[2.5rem]'>
        <TextField 
          id="standard-basic" 
          label="Email" 
          variant="standard" 
          type="email" 
          className='sm:w-9/12 w-full'
          onChange={handleChange("email")} 
          defaultValue={state.email}
        />
        </div>
        <div className='mt-[2.5rem]'>
        <TextField 
          id="standard-basic" 
          label="Password" 
          variant="standard" 
          type="password" 
          className='sm:w-9/12 w-full pass'
          onChange={handleChange("password")} 
          defaultValue={state.password}
        />
        </div>
        <div className='mt-[2.5rem]'>
        <TextField 
          id="standard-basic" 
          label="Confirm Password"
          variant="standard" 
          type="password" 
          className='sm:w-9/12 w-full confpass'
          onChange={handleChange("confirmPassword")} 
          defaultValue={state.confirmPassword}
        />
        </div>
        <div id="errorBox" className='h-[3rem] w-full pt-4 text-red-400' />
        <button onClick={handleNext} className='bg-[#FF008A] w-[8rem] h-[3rem] text-white mt-[2rem] rounded-md font-medium button absolute bottom-[10%] sm:right-[40%] right-[30%]'>Next</button>
    </>
  )
}

export default SignupDetails

