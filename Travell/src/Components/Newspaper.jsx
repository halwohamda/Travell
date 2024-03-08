import React from 'react'
import img1 from '../Private/news1.jfif'
import img2 from '../Private/news2.jfif'
import img3 from '../Private/news3.jfif'
import { IoCalendarClear, IoPersonOutline } from 'react-icons/io5'



const Newspaper = () => {
  const posts = [
    {
      image:"img1",
      autother:"halwo adam",
      date:"3/8/2024",
      title:"Most Visited Contires in 3 Years",
      Description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. "

    },
    {
      image:"img2",
      autother:"halwo adam",
      date:"3/8/2024",
      title:"Most Visited Contires in 3 Years",
      Description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. "

    },
    {
      image:"img3",
      autother:"halwo adam",
      date:"3/8/2024",
      title:"Most Visited Contires in 3 Years",
      Description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. "

    }
  ]
  return (
    <div className='flex w-full pb-20 md:px-[200px] px-8 flex-col gap-16 justify-center items-center'>

     <div className="flex flex-col w-full items-center">
      <span className='font-semibold text-purple-700 '>Our Blog</span>
      <span className='font-semibold text-slate-700 mt-2 text-4xl '>Our List Blog</span>
      <p className='max-w-[400px] mt-2 text-center'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.  fugit fugiat, exercitationem
      </p>

     </div>
     <div className="flex w-full items-center justify-center md:flex-row flex-col gap-8">
      {posts.map((post)=>{
        return <div key={post.title} className='bg-white p-[10px] rounded-[10px]'
        style={{boxShadow:"0 0 40px 5px rgb(0 0 0 /5%) "}}
        >
          <img 
          src={post.image} 
          // alt={post.title} 
          className='w-[300px] h-[200px] rounded-[10px]'
           />
          <div className="flex w-full items-center gap-10 mt-3 px-4">
            <div className="flex items-center gap-2">
          <IoPersonOutline color='purple'/>
          <span className='text-slate-600 text-1sm'>{post.autother }</span>
            </div>
            <div className="flex items-center gap-2">
          <IoCalendarClear color='purple'/>
          <span className='text-slate-600 text-1sm'>{post.date}</span>
            </div>
          </div>
          <div className="text-[20px] font-semibold text-slate-800 px-4 py-5  ">
              {post.title}

            </div>
            <div className="px-4 leading-7 text-gray-700 max-w-[400px]">
              {post.Description}


            </div>

        </div>
      })}

     </div>

    </div>
  )
}

export default Newspaper