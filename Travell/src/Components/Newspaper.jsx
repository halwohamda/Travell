import React from 'react'
import news1 from '../News/news1.jfif'
import news2 from '../News/news2.jfif'
import news3 from '../News/news3.jfif'

const Newspaper = () => {
  const newslist = [
    {
      Image:"news1",
      autother:"halwo adam",
      date:"3/8/2024",
      title:"Most Visited Contires in 3 Years",
      Description:""

    },
    {
      Image:"news2",
      autother:"halwo adam",
      date:"3/8/2024",
      title:"Most Visited Contires in 3 Years",
      Description:""

    },
    {
      Image:"news3",
      autother:"halwo adam",
      date:"3/8/2024",
      title:"Most Visited Contires in 3 Years",
      Description:""

    }
  ]
  return (
    <div className='flex w-full pb-20 md:px-[200px] px-8 flex-col gap-16 justify-center items-center'>

     <div className="flex flex-col w-full items-center">
      <span className='font-semibold text-purple-700 '>Our Blog</span>
      <span className='font-semibold text-slate-700 mt-2 text-4xl '>Our List Blog</span>
      <p className='max-w-[400px] mt-2'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.  fugit fugiat, exercitationem
      </p>

     </div>


    </div>
  )
}

export default Newspaper