'use client'
import React from 'react'
import Nav from './Nav'
import { useAppSelector } from '@/lib/hooks'
import LoggedOutNav from './LoggedOutNav';
import LoggedInNav from './LoggedInNav';

const NavComplete = () => {
    const user=useAppSelector((store)=>(store.user));
    
  return (
  // <div className="flex justify-between items-center  w-full mb-16 pt-3 mt-3 "> 
      //  < className="2xl:px-20 lg:flex justify-between  max-w-7xl lg:p-6 hidden z-10 mx-auto">  

    <div className='max-w-7xl mx-auto w-[100vw] flex justify-between sm:px-10 px-4  py-3 mb-16 items-center z-10 relative '>
        <Nav/>
        {user===null?<LoggedOutNav/>:<LoggedInNav/>}
    </div>
  
  )
}

export default NavComplete