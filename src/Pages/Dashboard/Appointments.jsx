import ListItem from '../../Components/ListItem'
import React from 'react'
import DataCard from '../../Components/DataCard'
import AppointmentContent from '../../Components/AppointmentContent'

const Appointments = () => {

  const cardContent = ["Total Appointments", "Total Patients", "Average Patient per Doctor"]
  const color = ["#00FF29", "#FFA800", "#FF008A"]

  return (
    <div className='w-full'>
        <div className='w-full h-[15rem] py-5 justify-around sm:flex hidden'>
          {
            cardContent.map((text, idx) => <DataCard text={text} key={idx} />)
          }
        </div>
        <div className='w-full mt-24'>
            <p className='font-bold text-[1.8rem] visby ml-5 sm:mb-0 mb-5'>Appointments</p>
            <ul className='my-5 sm:flex hidden justify-around font-medium text-[#A7A7A7]'>
                <li>Patient Details</li>
                <li>Time</li>
                <li>Doctor Details</li>
            </ul>

            <ListItem color={color} idx={1}><AppointmentContent /></ListItem>
            <ListItem color={color} idx={1}><AppointmentContent /></ListItem>
            <ListItem color={color} idx={1}><AppointmentContent /></ListItem>
            <ListItem color={color} idx={1}><AppointmentContent /></ListItem>
            <ListItem color={color} idx={1}><AppointmentContent /></ListItem>
            <ListItem color={color} idx={1}><AppointmentContent /></ListItem>
            <ListItem color={color} idx={1}><AppointmentContent /></ListItem>

        </div>
    </div>
  )
}

export default Appointments

