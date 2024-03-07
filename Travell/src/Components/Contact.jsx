import React from 'react'
import sky from '../Private/sky.jfif';

const Contact = () => {
  return (
    <div className='w-full md:w-[400px] md:h-[480px] my-20 bg-fixed bg-cover relative z-[1] '> 
      <div className='mt-20'>
        <img src={sky} alt="" className='w-full h-40'  />
      </div>
    </div>
  )
}

export default Contact