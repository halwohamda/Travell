import React from 'react'
import sky from '../Private/sky.jfif';
import Button from '../Layout/Button';

const Contact = () => {
  return (
    <div className=' w-full md:h-[400px] h-[460px] my-20 bg-fixed bg-cover relative z-[1]   ' style={{backgroundImage:`url(${sky})`, backgroundPosition: "bottom"}}> 
<div className="  w-full h-full flex flex-col md:flex-row items-center justify-between px-10 banner z-[3] md:py-0 py-5 text-center ">
   <span className='text-white md:text-[55px] text-[40px] font-semibold'>
   It's Time to Enjoy  <br />
      Your Freedom!
   </span>
<div className="flex md:flex-row flex-col gap-10 mb-2 md:mb-0 ">
  <input type="text" placeholder='Email Address'
  className=' md:w-[300px] w-[200px] border border-slate-400 outline-none px-3 rounded-[10px] py-3'
  />
  <Button title='submit'/>
  
</div>
    </div>

    </div>
  )
}

export default Contact