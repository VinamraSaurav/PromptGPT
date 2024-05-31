'use client'
import React from 'react'
import Nav from './Nav'
import { useAppSelector } from '@/lib/hooks'
import LoggedOutNav from './LoggedOutNav';
import LoggedInNav from './LoggedInNav';

const NavComplete = () => {
    const user=useAppSelector((store)=>(store.user));
    
  return (
    <div className="flex justify-between items-center  w-full mb-16 pt-3 mt-3 ">
        <Nav/>
        {user===null?<LoggedOutNav/>:<LoggedInNav/>}
    </div>
  )
}

export default NavComplete