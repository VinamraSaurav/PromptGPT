import LoginPage from '@/components/Auth/LoginPage'
import Nav from '@/components/Nav/Nav'
import DataSetter from '@/lib/DataSetter'
import React from 'react'
import UserExistsRedirection from '../UserExistsRedirection'

const Login = () => {
  return (
    <div>
      {/* <DataSetter/> */}
      <UserExistsRedirection>
        <LoginPage/>
        </UserExistsRedirection>
    </div>
  )
}

export default Login