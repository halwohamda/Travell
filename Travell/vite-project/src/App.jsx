import React from 'react'
import Dashboard from './Components/Dashboard'
import { Outlet } from 'react-router'

const App = () => {
  return (
    <>
  
     <Dashboard/>
     <Outlet/>
    </>
  )
}

export default App