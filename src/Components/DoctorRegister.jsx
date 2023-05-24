import React from 'react'
import { TextField } from '@mui/material'

const DoctorRegister = ({ setBackDrop, handleChange, registerDoctorHandler }) => {

    const removeBackDrop = () => {
        setBackDrop(prev => false)
    }

    const submitHandler = () => {
        registerDoctorHandler()
    }

  return (
    <>
    <div className='absolute top-0 bottom-0 right-0 left-0 bg-black opacity-50 z-10' />

    <div className='absolute z-20 top-0 bottom-0 right-0 left-0 flex justify-center'>
      <div className='bg-white w-[35rem] h-[40rem] sticky top-[10rem] rounded-2xl mx-5 z-30'>
        <div className='flex justify-end px-5'>
            <button onClick={removeBackDrop}>close</button>
        </div>
        <div className='flex flex-col gap-3 px-20 pt-20'>
            
          <TextField
            onChange={handleChange("name")}
            id="standard-basic" 
            label="Name" />
          <TextField
            onChange={handleChange("contact")}
            id="standard-basic" 
            label="Contact" />
          <TextField
            onChange={handleChange("speciality")}
            id="standard-basic" 
            label="Specialization" />
          <TextField
            onChange={handleChange("department")}
            id="standard-basic" 
            label="Department" />
          <TextField
            onChange={handleChange("experience")}
            id="standard-basic" 
            label="Experience" />

          <div className='flex justify-between w-full'>
            <div className='w-[40%]'>
              <p className='w-full'>In Time</p>
              <input type='time' className='w-full'></input>
            </div>
            <div className='w-[40%]'>
              <p className='w-full'>Out Time</p>
              <input type='time' className='w-full'></input>
            </div>
          </div>
        </div>
        <button 
            className="absolute bottom-24 right-24"
            onClick={submitHandler}> Submit </button>
      </div>
    </div>
    </>
  )
}

export default DoctorRegister
