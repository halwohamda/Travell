import React from 'react'
import {Button, Link} from 'react-scroll';
import {AiOutlineClose} from 'react-icons/ai';
import {AiOutlineMenuUnfold} from 'react-icons/ai';
import { IoIosAirplane } from "react-icons/io";


function Navbar() {
    const [Menu,setMenu] =useState(false);

    const handleChange = ()=>{
            setMenu(!Menu);
    }
    const closeMenu =()=>{
            setMenu(false);
    }
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
            <Link to="Home" spy={true} smooth={true} duration={500}className="group relative inline-block cursor-pointer hover:text-purple-400" >Home</Link>
            <span className='absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100'></span>
            <Link to="Howto" spy={true} smooth={true} duration={500}className="group relative inline-block cursor-pointer hover:text-purple-400">Howto</Link>
            <span className='absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100'></span>
            <Link to="Service" spy={true} smooth={true} duration={500}className="group relative inline-block cursor-pointer hover:text-purple-400">Service</Link>
            <span className='absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100'></span>
            <Link to="Blog" spy={true} smooth={true} duration={500}className="group relative inline-block cursor-pointer hover:text-purple-400">Blog</Link>
            <span className='absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100'></span>
            <Link to="Contact" spy={true} smooth={true} duration={500}className="group relative inline-block cursor-pointer hover:text-purple-400">Contect</Link>
            <span className='absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100'></span>
            <Link to="Newspaper" spy={true} smooth={true} duration={500}className="group relative inline-block cursor-pointer hover:text-purple-400">NewsPaper</Link>
            <span className='absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100'></span>
            <Link to="About" spy={true} smooth={true} duration={500}className="group relative inline-block cursor-pointer hover:text-purple-400">About</Link>
            <span className='absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100'></span>
           </nav>
           <div className=" hidden md:flex">
          <Button  title='BookingNow'/>
           </div>
           <div>
            
           </div>
        </div>
       </div>
    </div>
  )
}

export default Navbar