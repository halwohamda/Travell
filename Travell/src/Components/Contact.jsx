import React from 'react'
import sky from '../Private/sky.jfif';

const Contact = () => {
  return (
    <div className='w-[400px] h-[460px] my-20 bg-fixed bg-cover relative z-[1]  ' style={{backgroundImage:`url(${sky})`, backgroundPosition: "bottom"}}> 
    <div className="flex ">
      It's Time to Enjoy <br />
      Your Freedom

    </div>

    </div>
  )
}

export default Contact