import { TextField } from '@mui/material'
import React from 'react'

const PersonalDetails = ({ next, back, handleChange, state }) => {

  const handleBack = e => {
    e.preventDefault()
    back()
  }

  const handleNext = e => {
    e.preventDefault()
    next()
  }

  return (
    <>
    <div className='flex flex-col mt-[-1.5rem]'>
        <div>
        <TextField id="standard-basic" 
          defaultValue={state.postalCode} 
          label="Street / Locality" 
          variant="standard" 
          className='sm:w-9/12 w-full' 
          onChange={handleChange("street")} />
        </div>
        <div className='mt-[2rem]'>
        <TextField id="standard-basic" 
          defaultValue={state.city} 
          label="City / Town" 
          variant="standard" 
          className='sm:w-9/12 w-full' 
          onChange={handleChange("city")} />
        </div>
        <div className='mt-[2rem]'>
        <TextField id="standard-basic" 
          defaultValue={state.state} 
          label="State" 
          variant="standard" 
          className='sm:w-9/12 w-full' 
          onChange={handleChange("state")} />
        </div>
        <div className='mt-[2rem]'>
        <TextField id="standard-basic" 
          defaultValue={state.country} 
          label="Country" 
          variant="standard" 
          className='sm:w-9/12 w-full' 
          onChange={handleChange("country")} />
        </div>
        <div className='mt-[2rem]'>
        <TextField id="standard-basic" 
          defaultValue={state.postalCode} 
          label="Postal code" 
          variant="standard" 
          className='sm:w-9/12 w-full' 
          onChange={handleChange("postalCode")} />
        </div>
        <div className='mt-[2rem]'>
        <TextField id="standard-basic" 
          defaultValue={state.postalCode} 
          label="Contact" 
          variant="standard" 
          className='sm:w-9/12 w-full' 
          onChange={handleChange("contact")} />
        </div>
    </div>
      <button 
        onClick={handleBack} 
        className='bg-[#FF008A] w-[8rem] h-[3rem] text-white mt-[5rem] rounded-md font-medium button absolute bottom-[10%] sm:left-[20%] left-[8%]'>Back</button>
      <button 
        onClick={handleNext} 
        className='bg-[#FF008A] w-[8rem] h-[3rem] text-white mt-[5rem] rounded-md font-medium button absolute bottom-[10%] sm:right-[20%] right-[8%]'>Next</button>
    </>
  )
}

export default PersonalDetails

