import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

function Body() {
  return (
    <div className='flex'>
      <div className='pr-4'>
         <Sidebar/> 
      </div>
          
        <Outlet/>
    </div>
  )
}

export default Body;