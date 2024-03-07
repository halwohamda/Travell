import React from 'react'
import sky from '../Private/sky.jfif';

const Contact = () => {
  return (
    <div className=' w-full md:h-[400px] h-[460px] my-20 bg-fixed bg-cover relative z-[1]   ' style={{backgroundImage:`url(${sky})`, backgroundPosition: "bottom"}}> 
<div className="  w-full h-full flex flex-col md:flex-row items-center justify-between px-10 banner z-[3] md:py-0 py-5 text-center ">
   <span className='text-white md:text-[55px] text-[40px] font-semibold'>
   It's Time to Enjoy  <br />
      Your Freedom!
   </span>
<div className="flex md:flex-row flex-col gap-8 mb-2 md:mb-0 ">
  <input type="text" placeholder='Email Address'
  className=''
  
  
  />
</div>
    </div>

    </div>
  )
}

export default Contact