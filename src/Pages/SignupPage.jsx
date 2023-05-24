import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import PersonalDetails from '../Components/PersonalDetails'
import PhotoUpload from '../Components/PhotoUpload'
import SignupDetails from '../Components/SignupDetails'

const SignupPage = () => {

  const [state, setState] = useState({
    step : 1,
    fullName : "",
    email : "",
    password : "",
    confirmPassword : "",
    city : "",
    state : "",
    country : "",
    postalCode : "",
    contact : "",
    street : "",
  })

  const next = () => setState(prev => ({...prev, step : prev.step + 1}))

  const back = () => setState(prev => ({...prev, step : prev.step - 1}))

  const handleChange = input => e => {
    setState(prev => ({...prev, [input] : e.target.value}))
  }


  return (
    <div>
        <Navbar />
        <center>
            <div id='signupbox' className='bg-white sm:w-[35rem] w-[25rem] h-[45rem] mt-[5rem] rounded-3xl shadow-black drop-shadow-2xl transition-all ease-in-out animate__animated animate__fadeInLeft'>
                <p className='absolute left-[10%] top-[5%] text-3xl font-bold visby'>Sign up</p>
                <div className='w-[80%] h-[1px] bg-[#e3e3e3] top-[15%] left-[10%] absolute' />
                <div className='w-[80%] h-[80%] absolute left-[10%] top-[20%]'>
                  
                  {state.step===1 && <SignupDetails next={next} back={back} handleChange={handleChange} state={state} />}
                  {state.step===2 && <PersonalDetails next={next} back={back} handleChange={handleChange} state={state} />}
                  {state.step===3 && <PhotoUpload next={next} back={back} handleChange={handleChange} state={state} />}
                  
                </div>
            </div>
        </center>
    </div>
  )
}

export default SignupPage
