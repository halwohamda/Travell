import React from 'react'
import { IoBed } from "react-icons/io5";
import { AiOutlineSafety } from "react-icons/ai";

const Howto = () => {
  const Featutelist = [
    {
      icons:(
        <IoBed/>
      ),
      title: "Hotel Bed",
      Description:"Lorem ipsum dolor sit amet consectetur  adipisicing elit. Quidem omnis, nam labori"
    },
    {
      icons:(
        <AiOutlineSafety />
      ),
      title: "Hotel Bed",
      Description:"Lorem ipsum dolor sit amet consectetur  adipisicing elit. Quidem omnis, nam labori"
    },
    {
      icons:(
        <IoBed/>
      ),
      title: "Hotel Bed",
      Description:"Lorem ipsum dolor sit amet consectetur  adipisicing elit. Quidem omnis, nam labori"
    }
  ]
  return (
    <div>
      <div>
        <h2 className='text-purple-500 text-center text-4xl font-bold'>Features</h2>
        <h3 className='text-center font-semibold text-5xl'>Our Princeles Feater</h3>
        <p className='text-center'>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Quidem omnis, nam labori</p>
        
      </div>
     
    



      
    </div>
  )
}

export default Howto
