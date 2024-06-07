import ResetPassword from '@/components/Auth/ResetPassword'
import DataSetter from '@/lib/DataSetter'
import React from 'react'
import UserExistsRedirection from '../UserExistsRedirection'
import Nav from '@/components/Nav/Nav'
import NavAuth from '@/components/Auth/NavAuth'

const page = () => {
  return (
    <div>
      <NavAuth/>
        {/* <DataSetter/>    */}
        <UserExistsRedirection>
        
        <ResetPassword/>
        
        </UserExistsRedirection>
        
        </div>
  )
}

export default page