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
    <div className='fixed w-ful z-10'>
       <div>
       <div>
            <div className='flex'>
                <span className='mt-2'>
                <IoIosAirplane />
                </span>
                <h5 className=''>Halwo <span>Travell</span></h5>
           </div>
           <nav className='text-center m-auto'>
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