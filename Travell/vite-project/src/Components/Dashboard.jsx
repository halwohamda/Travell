import React from 'react'
import {Link, Outlet} from 'react-router-dom'
import '../app.css'
const Dashboard = () => {
  return (
    <>

<div className="container">
  <div className="logo">
    <h1>Halwo <span className='spn'>Travell</span></h1>
  </div>
  <div className="nav">
 
  <a>
          <Link to='/Home'>Home</Link>
          <Link>About</Link>
          <Link>Howto</Link>
          <Link>Service</Link>
          <Link>Newspaper</Link>
          <Link>Contact</Link>
          <Link className='bk'>Booking</Link>
          <span></span>
  </a>
          
      
  </div>
</div>
<div className="section">
<h6 className='h'>How to Our Website</h6>
<h1 className='h1'>Luluxry Expirence <br /> with our Service</h1>
<p className='p'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br />
   Eveniet qui perferendis,  eligendi reprehenderit, <br /> quos quas inventore ve</p>
   <div className="btn">
    <button className='fli'>Bookin Flight</button>
    <button className='cu'>Contact Us</button>
   </div>
</div>
<div className="imgg">
  <div className="img">
    <img src="/airline.png" alt="" />
  </div>
</div>



    </>
  )
}

export default Dashboard