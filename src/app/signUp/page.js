import Nav from '@/components/Nav/Nav'
import SignUpPage from '@/components/Auth/SignUpPage'
import DataSetter from '@/lib/DataSetter'
import React from 'react'
import UserExistsRedirection from '../UserExistsRedirection'
import NavAuth from '@/components/Auth/NavAuth'

const page = () => {
  return (
    <div>
      <NavAuth/>
      {/* <DataSetter/> */}
      <UserExistsRedirection>
   <SignUpPage/>
   </UserExistsRedirection></div>
  )
}

export default page