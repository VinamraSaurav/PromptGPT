import ResetPassword from '@/components/Auth/ResetPassword'
import DataSetter from '@/lib/DataSetter'
import React from 'react'
import UserExistsRedirection from '../UserExistsRedirection'

const page = () => {
  return (
    <div>
        {/* <DataSetter/>    */}
        <UserExistsRedirection>
        
        <ResetPassword/>
        
        </UserExistsRedirection>
        
        </div>
  )
}

export default page