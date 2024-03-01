import React from 'react'
import { IoBed } from "react-icons/io5";

const Howto = () => {
  return (
    <div>
      <div>
        <h2 className='text-purple-500 text-center text-4xl font-bold'>Features</h2>
        <h3 className='text-center font-semibold text-5xl'>Our Princeles Feater</h3>
        <p className='text-center'>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Quidem omnis, nam labori</p>
        
      </div>
      <div className=' flex-col py-6 mr-14 md:flex-row justify-center lg:px-32 px-5 bg-purple-100'>
        <span className='mr-4'><IoBed size={50} /></span>
        <h2>Hotels bed</h2>
      <p>Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit. Quaer</p>
      </div>
    



      
    </div>
  )
}

export default Howto
