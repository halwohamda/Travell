import React from 'react'
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Howto from './Components/Howto';


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
      </main>
    </div>

  )
}

export default App