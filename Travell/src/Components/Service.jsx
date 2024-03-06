import React from 'react'
import { IoIosAirplane } from "react-icons/io";
import { IoCheckmarkCircle } from 'react-icons/io5';
import Button from '../Layout/Button';

const Service = () => {
  return (
    <>
    <div className=' m-auto flex md:flex-col w-full items-center md:w-5 '>
      {/* <div className=' mt-4'>
      <IoIosAirplane size={300} color='rgb(171, 99, 171) ' /> */}
      </div>
    </div>
    <div className='m-auto text-center md:flex-row w-full items-center lg:px-32'>
      <span className='text-purple-600 font-bold text-4xl '>About Us</span>
      <h2 className='text-5xl font-serif  mt-8'>We Are here to bring you <br /> All The  <br />confort Pleasure </h2>
      <p className='mt-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Distinctio dolor ducimus velit optio consequuntur harum nostrum! Laborum fuga</p>
    <div className='m-14 lg:mx-64  md:gap-0'>
    <span className='flex '><IoCheckmarkCircle size={25} color='rgb(171, 99, 180) ' style={{marginTop:"7px"}}/> <p>Lorem ipsum dolor  ipsum doloripsum dolor</p></span>
    <span className='flex mt-4'><IoCheckmarkCircle size={25} color='rgb(171, 99, 171) ' style={{marginTop:"7px"}}/> <p>Lorem ipsum dolor  ipsum doloripsum dolor</p></span>
    <span className='flex mt-4 '><IoCheckmarkCircle size={25} color='rgb(171, 99, 171) ' style={{marginTop:"7px"}}/> <p>Lorem ipsum dolor  ipsum doloripsum dolor</p></span>
    <span className='flex mt-4'><IoCheckmarkCircle size={25} color='rgb(171, 99, 171) ' style={{marginTop:"7px"}}/> <p>Lorem ipsum dolor  ipsum doloripsum dolor</p></span>
    <span className='flex mt-4'><IoCheckmarkCircle size={25} color='rgb(171, 99, 171) ' style={{marginTop:"7px"}}/> <p>Lorem ipsum dolor  ipsum doloripsum dolor</p></span>
    <span className='flex mt-4'><IoCheckmarkCircle size={25} color='rgb(171, 99, 171) ' style={{marginTop:"7px"}}/> <p>Lorem ipsum dolor  ipsum doloripsum dolor</p></span>
    <div className='mt-6'>
      <Button title='Decover More'/>
    </div>
    </div>
    
  </div>
    </>
    
  )
}

export default Service