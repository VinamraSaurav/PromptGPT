import Nav from '@/components/Nav/Nav'
import SignUpPage from '@/components/Auth/SignUpPage'
import DataSetter from '@/lib/DataSetter'
import React from 'react'
import UserExistsRedirection from '../UserExistsRedirection'

const page = () => {
  return (
    <div>
      {/* <DataSetter/> */}
      <UserExistsRedirection>
   <SignUpPage/>
   </UserExistsRedirection></div>
  )
}

export default page