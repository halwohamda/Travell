import React from 'react'
import news1 from '../News/news1.jfif'
import { CiUser } from "react-icons/ci";
import { MdDateRange } from "react-icons/md";


const Newspaper = () => {
  return (
    <div className='w-full h-full md:flex-row flex-col  text-center'>
      <div>
        <span className='text-4xl text-purple-500 font-semiboldbold'>Our Blog</span> <br />
        <h1 className='mt-3 text-4xl font-bold'>Our List Blog</h1> <br />
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum libero sequi</p> <br />
      
      <div className="flex bg-white p-[10px] rounded-[10px] transition-all m-4  duration-300 cursor-pointer hover:scale-[1.05]"
         style={{boxShadow:"0 0 40px 5px rgb(0 0 0 /5%) "}}
       >
       <img src={news1} alt="" />
      </div>
      <div className="flex  md:flex-row ">
       <CiUser  /> <span>Halwo adm</span>
       <MdDateRange /> <span>3/8/2024</span> 
     
       </div>
       <h1>Most visited Contiries in 3 years</h1> <br />

</div>


    </div>
  )
}

export default Newspaper