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
    <div className='fixed w-full z-10'>
       <div>
       <div className='flex flex-row justify-between gap-5 p-5 px-5 lg:px-32 bg-gradient-to-r bg-purple-200 to-purple-500 shadow[0_3px_10px_rgb(0,0,0,0.2)]  '>
            <div className='flex flex-row gap-2 items-center cursor-pointer '>
                <span>
                <IoIosAirplane />
                </span>
                <h5 className='text-xl font-semibold'>Halwo <span>Travell</span></h5>
           </div>
           <nav className=' hidden md:flex flex-row items-center gap-8 text-lg font-medium cursor-pointer '>
            <Link to="Home" >Home</Link>
            <Link to="Howto">Howto</Link>
            <Link to="Service">Service</Link>
            <Link to="Blog">Blog</Link>
            <Link to="Contact">Contect</Link>
            <Link to="Newspaper">NewsPaper</Link>
            <Link to="About">About</Link>
           </nav>
        </div>
       </div>
    </div>
  )
}

export default Navbar