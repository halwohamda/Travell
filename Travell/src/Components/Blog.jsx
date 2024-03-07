// import React from 'react'
// import Button from '../Layout/Button';
// import { IoIosAirplane } from "react-icons/io";
// import { IoStar } from 'react-icons/io5';
// import privatejet from '../Private/privatejet.png';
// import medicalcuper from '../Private/medicalcuper.png';
// import privateplane from '../Private/privateplane.png'

// const Blog = () => {
//   const PlanList =[
//     {
//       title:"Private jet",
//       image:privatejet,
//       code:"charter B129",
//       price:"128" },
//     {
//       title:"Medical cuper",
//       image:medicalcuper,
//       code:"charter B129",
//       price:"128" },
//     {title:"Private plane",
//     image:privateplane,
//     code:"charter B129",
//     price:"128" }
//   ];
//   return (
//     <div className='w-full m-auto text-center md:flex-row '>
//       <div>
//         <span className='text-3xl text-bold text-purple-800 '>Our Plans</span>
//         <h1 className='text-4xl text-bold  mt-4'>Flighs For EveryOne</h1>
//         <p className='mt-3'>Lorem ipsum dolor, sit amet consectetur <br /> adipisicing elit. Illo soluta sunt vel explic</p>
//       </div>
//     <div className="flex w-full items-center md:flex-row justify-center flex-col gap-8">
//     {PlanList.map((plan)=>{
//       return (
//         <div key={plan.title} className='bg-white p-[10px] rounded-[10px] transition-all  duration-300 cursor-pointer hover:scale-[1.05]'
//           style={{boxShadow:"0 0 40px 5px rgb(0 0 0 /5%) "}}
//       >
//         <img src={plan.image} alt={plan.title} />
//         <div className="flex justify-between w-full items-center mt-4 px-4 ">
//        <span className="text-[18px] font-semibold text-slate-800 ">
//          {plan.title}

//        </span>
//        <div className="flex items-center gap-[2px]">
//         <IoStar color="rgb(171, 99, 171)"/>
//         <IoStar color="rgb(171, 99, 171)"/>
//         <IoStar color="rgb(171, 99, 171)"/>
//         <IoStar color="rgb(171, 99, 171)"/>
//         <IoStar color="rgb(171, 99, 171)"/>
      
       
       
         
//        </div>
//       </div>
//       <div className="text-gray-400 text-[15px] mt-[2px] font-medium px-4">
//         {plan.code}

//       </div>
//       <div className="px-4 pt-4 leading-3 text-slate-700 max-w-[400px]">
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod nesciunt, quisquam laborum eum vero <br /> quia, exercitationem omnis perspiciatis aut, doloremque

//       </div>
//       <div className="text-slate-700 mt-10 font-medium px-4">
//         <span className='text-purple-400 font-semibold text-[25px]'>${plan.price}</span> {""} /Hour

//       </div>
//       <div className="w-[92%] mt-5 mx-auto ">
//         <div className="w-full px-4">
//        <span className='flex'>
//        <Button title='BookNow'/>    
//        </span>
//         </div>

//       </div>
//       </div>
    
      
//       );
      
//       })}
     
//     </div>

//     </div>
//   )
// }

// export default Blog