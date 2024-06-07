import LoginPage from '@/components/Auth/LoginPage'
import DataSetter from '@/lib/DataSetter'
import React from 'react'
import UserExistsRedirection from '../UserExistsRedirection'
import NavAuth from '@/components/Auth/NavAuth'

const Login = () => {
  return (
    <div>
      <NavAuth/>
      {/* <DataSetter/> */}
      <UserExistsRedirection>
        <LoginPage/>
        </UserExistsRedirection>
    </div>
  )
}

export default Login