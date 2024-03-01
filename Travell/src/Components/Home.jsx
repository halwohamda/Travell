import React from 'react'
import Button from '../Layout/Button'
import img from '../Images/airline.png';

function Home() {
  return (
    <div className='min-h-screen flex flex-col justify-center lg:flex-row lg:justify-between lg:px-32 items-center px-5 gap-10 bg-gradient-to-r bg-purple-200 to-purple-500 shadow[0_3px_10px_rgb(0,0,0,0.2)] ' >

    <div className='w-full lg:w-2/4 space-Y-4 lg:mt-0  mt-14 '>
            <h1 className='font-semibold text-5xl text-center lg:text-start leading-tight '>Welcome to Our Website</h1>
           <h1 className='text-4xl font-semibold'>LUXURY Exprience Our SerVice</h1>
           <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br /> ore debitis neque, id explicabo aperiam sapiente sed fugit quos?</p>
  <div className='flex flex-row gap-5'>
  <Button title='Booking flight'/>
            <Button title='Contact Us'/>
  </div>
    </div>
    <div className="relative">
        <img src={img} alt="" className='w-[800px]'/>
    </div>
    </div>
  )
}

export default Home