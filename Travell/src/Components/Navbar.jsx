import React from 'react'
import {Link} from 'react-scroll';
import {AiOutlineClose} from 'react-icons/ai';
import {AiOutlineMenuUnfold} from 'react-icons/ai';
import { IoIosAirplane } from "react-icons/io";


function Navbar() {
    // const [Menu,setMenu] =useState(false);

    // const handleChange = ()=>{
    //         setMenu(!Menu);
    // }
    // const closeMenu =()=>{
    //         setMenu(false);
    // }
  return (
    <div className='fixed w-ful z-10 text-white'>
       <div>
       <div className='flex flex-row justify-center gap-5 p-4 bg-gradient-to-r bg-purple-500  '>
            <div className='flex flex-row gap-2 items-center cursor-pointer '>
                <span className='mt-2'>
                <IoIosAirplane />
                </span>
                <h5 className='text-xl font-semibold'>Halwo <span>Travell</span></h5>
           </div>
           <nav className=' hidden md:flex flex-row items-center gap-8 '>
            <Link>Home</Link>
            <Link>Howto</Link>
            <Link>Service</Link>
            <Link>Blog</Link>
            <Link>Contect</Link>
            <Link>NewsPaper</Link>
            <Link>About</Link>
            <Link >Bookin Now</Link>
           </nav>
        </div>
       </div>
    </div>
  )
}

export default Navbar