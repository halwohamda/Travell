import React from 'react'
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Howto from './Components/Howto';
import Service from './Components/Service';
import Blog from './Components/Blog';
import Contact from './Components/Contact';


const App = () => {
  return (
    <div>
      <Navbar/>
      
      <main>
        <div className="home">
          <Home/>
        </div>
        <div className="howto">
          <Howto/>
        </div>
        <div className="services">
          <Service/>
        </div>
        <div className="blog">
          <Blog/>
        </div>
        <div className="contact">
          <Contact/>
        </div>
      </main>
    </div>

  )
}

export default App