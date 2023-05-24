import React from 'react'
import Navbar from '../Components/Navbar'
import doctor from "../images/doctor.png"
import mobile from "../images/mobile.svg"
import hermes from "../images/hermes.png"
import { HiOutlineExternalLink } from 'react-icons/hi'
import ContactUs from '../Components/ContactUs'
import { Link } from 'react-router-dom'
import "animate.css"

const LandingPage = () => {
  return (
    <div className='mt-8'>
        <Navbar />

        <div className=' mx-auto w-10/12 mt-14 max-w-[75rem]'>
          <div className=' flex sm:block'>
            <p className=' text-6xl xl:ml-[-5rem] transition-all ease-in-out akshar text-[#3B59FA] animate__animated animate__fadeInLeft'>01</p>
            <p className='sm:hidden block text-3xl pl-5 visby animate__animated animate__bounceIn animate__delay-0.5s'>Get Quick <br /> Medical Serivce</p>
          </div>
          <div className='sm:mt-10 mt-[10rem]'>
            <div className=' pl-[50%] lg:text-[2.5rem] md:text-3xl transition-all ease-in-out sm:text-3xl'>
              <p className='sm:inline-block hidden leading-[3rem] visby animate__animated animate__bounceIn animate__delay-0.5s'>Get Quick <br /> <span className=' font-bold'>Medical Serivce</span> </p>
            </div>
            <div className='w-full h-[15rem] pl-[5%] rounded-3xl bg-[#3B59FA] mt-10 relative'>
              <div className='w-[270px] bottom-0 h-[150%] xl:w-[320px] xl:h-[170%] absolute transition-all ease-in-out'>
                <img src={doctor} alt="doc" className=' h-full w-full'></img>
              </div>
                <div className='sm:block hidden'>
                  <div className=' pl-[45%] absolute top-[10%]'>
                    <p className='text-white text-2xl xl:text-[1.8rem] transition-all ease-in-out visby font-semibold animate__animated animate__bounceIn animate__delay-0.5s'>
                      Join us to get access <br /> to all the facilities
                    </p>
                    <nav className='mt-5 lg:pl-0 md:pl-1 sm:pl-10 transition-all ease-in-out'>
                      <Link to="/login">
                        <button className='button md:block lg:inline-block sm:block bg-[#FF008A] w-[8rem] h-[3rem] text-white mr-3 my-2 rounded-md font-medium '>Login</button>
                      </Link>
                      <Link to="/signup">
                        <button className='bg-white w-[8rem] h-[3rem] text-[#FF008A] rounded-md font-medium button hover:outline-[#ffffff]'>Sign up</button>
                      </Link>
                    </nav>
                  </div>
                </div>
            </div>
          </div>
          <div className='w-full h-[10rem] pt-5 pl-3 block sm:hidden'>
            <p className='text-xl xl:text-[1.8rem] transition-all ease-in-out my-3 text-black visby animate__animated animate__bounceIn animate__delay-0.5s'>
                Join us to get access <br /> to <span className='font-bold'>all the facilities</span>
            </p>        
              <Link to="/login">
                <button className='bg-[#FF008A] w-[8rem] h-[3rem] text-white mr-3 my-2 rounded-md font-medium'>Login</button>
              </Link>
              <Link to="signup">
                <button className='bg-white w-[8rem] h-[3rem] text-[#FF008A] rounded-md font-medium border-[#FF008A] border-2 border-solid'>Sign up</button>
              </Link>
          </div>
        </div>


      <div className='mx-auto w-10/12 mt-[8rem] max-w-[75rem]' id='mobile'>
        <div className='sm:block flex'>
          <p className=' text-6xl xl:ml-[-5rem] transition-all ease-in-out akshar text-[#3B59FA] animate__animated animate__fadeInLeft'>02</p>
          <p className='sm:hidden block text-3xl pl-5 visby animate__animated animate__bounceIn animate__delay-0.5s'>Our Mobile App is Fast, Reliable and <span className='font-bold'>Easy to Use</span></p>
        </div>
        <div className='flex'>
          <div className='w-[25rem] px-10 my-10'>
            <img src={mobile} alt="mobile" className='w-full h-full object-cover'></img>
          </div>
          <div className='xl:pt-[10rem] pt-[5rem] xl:text-[2.5rem] text-[2rem] md:leading-[3rem] leading-[2.5rem] sm:block hidden xl:pl-24 transition-all ease-in-out visby animate__animated animate__bounceIn animate__delay-0.5s'>
            <p>Our Mobile App is Fast, Reliable and <br /> <span className='font-bold'>Easy to Use</span></p>
            <button className='button bg-[#FF008A] w-[9rem] h-[3rem] text-white mr-3 my-2 rounded-md font-medium text-[1rem] mt-8 font-sans flex justify-center'>Get the app<HiOutlineExternalLink className='ml-1 mt-4' /></button>
          </div>
        </div>
          <div className='sm:hidden flex ml-14 text-[#FF008A] visby'>
            <a href="/">Get the app </a>
            <HiOutlineExternalLink className='ml-1 mt-1' />
          </div>
      </div>


      <div className='w-full h-[40rem] bg-[#3B59FA] mt-12' id='about'>
        <div className='mx-auto w-10/12 h-full flex max-w-[75rem]'>
          <p className=' text-6xl xl:ml-[-5rem] transition-all ease-in-out text-white mt-14 akshar animate__animated animate__fadeInLeft'>03</p>
          <div className='flex justify-between w-full'>
            <div className=' text-white max-w-[50rem] pt-[10rem] ml-[-4rem]'>
                <p className='text-[2.5rem] visby font-semibold'>About us</p>
                  <br /> <br />
                <p>Welcome to Sevayu, your trusted partner in healthcare administration.
                  Our mission is to provide high quality management services to Healthcare facilities
                  enabling them to deliver excellent patient care and achieve operational excellence.
                  <br /> <br />
                  Our website was created in 2023 by the students of IIIT Jabalpur.
                </p>
            </div>
            <div className='w-[15rem] h-[20rem] mt-[10rem] xl:block hidden'>
              <img src={hermes} alt="hermes"></img>
            </div>
          </div>
        </div>
      </div>

      <div className='mx-auto w-10/12 mt-12 max-w-[75rem] h-[60rem]' id='contact'>
        <p className='mt-24 text-6xl xl:ml-[-5rem] transition-all ease-in-out akshar text-[#3B59FA] animate__animated animate__fadeInLeft'>04</p>
        <div className='lg:w-10/12 w-full transition-all ease-in-out'>
          <ContactUs />
        </div>
      </div>
    </div>
  )
}

export default LandingPage

