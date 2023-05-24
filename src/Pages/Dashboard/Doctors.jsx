import React, { useEffect, useState } from 'react'
import DataCard from '../../Components/DataCard'
import DoctorContent from '../../Components/DoctorContent'
import ListItem from '../../Components/ListItem'
import { getDoctors, registerDoctor } from '../../utils/api'
import { useDoctors, useUserState } from '../../store/store'
import DoctorRegister from '../../Components/DoctorRegister'
import { nanoid } from 'nanoid'

const Doctors = () => {
    const cardContent = ["Total Doctors", "Total Patients", "Average Patient per Doctor"]
    const color = ["#00FF29", "#FFA800", "#FF008A"]

    const { hospitalData } = useUserState()
    const { doctors, setDoctors } = useDoctors()

    const [backDrop, setBackDrop] = useState(false)
    const [payload, setPayload] = useState({
      id : nanoid(), 
      name :"", 
      experience :"", 
      speciality : "", 
      contact : "", 
      department : "",
      Intime : "meraintime",
      Outtime : "thisis",
      days : ["ghv","nj"]
    })

    const handleChange = input => e => {
      setPayload(prev => ({...prev, [input] : e.target.value}))
    }

    const registerDoctorHandler = async () => {
      const doctorData = {
        hospitalid : hospitalData._id,
        Doctor : payload
      }
      const hospitalObj = await registerDoctor(doctorData)
      if (hospitalObj) {
        setDoctors(hospitalObj.doctors)
      }
    }

    useEffect(() => {
        (async () => {
            const res = await getDoctors(hospitalData._id)
            await setDoctors(res)
        })()
    }, [hospitalData._id, setDoctors])

    const addDoctorHandler = () => {
      console.log(doctors)
      setBackDrop(prev => true)
    }

    if (!doctors) {
      return (
        <div>
          loading...
        </div>
      )
    }

    return (
      <>
      <div className='w-full'>
          <div className='w-full h-[15rem] py-5 justify-around sm:flex hidden'>
            {
              cardContent.map((text, idx) => <DataCard text={text} key={idx} />)
            }
          </div>
          <div className='w-full mt-24'>
              <p className='font-bold text-[1.8rem] visby ml-5 sm:mb-0 mb-5 inline'>Doctors</p>
              <button 
                className=' inline ml-5 border-solid border-black'
                onClick={addDoctorHandler}>
                  Add
              </button>
              <div className='w-full flex justify-center py-10'>
                <input className='w-10/12 h-12 rounded-3xl px-5 text-gray-500 focus:outline-none' placeholder='Search...'></input>
              </div>
            {
              doctors.map((item, idx) => {
                return <ListItem idx={idx} key={idx} color={color}><DoctorContent item={item} idx={idx} key={idx} /></ListItem>
              })
            }
          </div>
      </div>

      {backDrop && (<DoctorRegister 
          setBackDrop={setBackDrop} 
          handleChange={handleChange} 
          registerDoctorHandler={registerDoctorHandler} />)}
      </>
    )
}

export default Doctors
