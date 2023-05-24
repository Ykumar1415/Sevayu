import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import Sidebar from '../Components/Sidebar'
import Appointments from './Dashboard/Appointments'
import Doctors from './Dashboard/Doctors'
import { useLocation } from 'react-router-dom'
import jwtDecode from 'jwt-decode'
import { getHospitalData } from '../utils/api'
import { useUserState } from '../store/store'

const Dashboard = () => {

  const [loading, setLoading] = useState(true)
  const { hospitalData, setHospitalData } = useUserState()

  const { pathname } = useLocation()
  let content
  if (pathname.toString() === "/") content = <Appointments />
  else if (pathname.toString() === "/doctors") content = <Doctors />

  const token = localStorage.getItem("jwt")
  const { HospitalId } = jwtDecode(token)

  useEffect(() => {
    (async () => {
      const res = await getHospitalData(HospitalId)
      await setHospitalData(res)
      setLoading(prev => false)
    })()
  }, [HospitalId, setHospitalData])


  if (loading) {
    return (
      <div>
        loading...
      </div>
    )
  }
  
  return (
    <>
    <div className='relative'>
        <Header />
        <div className='flex h-full'>
            <div className='bg-white w-[25%] max-w-[20rem] hidden md:block pt-24 px-12 animate__animated animate__fadeInLeft'>
                <Sidebar />
            </div>
            <div className='bg-[#EAF1F6] min-h-[90vh] md:w-[80%] lg:w-[70%] w-full px-4 pb-24'>
              {content}
            </div>
            <div className='bg-[#EAF1F6] w-[20%] hidden lg:block'>
              <div className='w-[90%] py-5 px-5 xl:px-10 bg-white mt-5 rounded-xl visby animate__animated animate__fadeInRight'>
              <center className='font-bold text-[1.1rem]'>{hospitalData.name}</center>
                <center>{`${hospitalData.street}, ${hospitalData.city} - ${hospitalData.postalcode}`}</center>
                <center className='text-[#737373] text-[1rem] mt-2'>{`${hospitalData.contact}`}</center>
              </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Dashboard

