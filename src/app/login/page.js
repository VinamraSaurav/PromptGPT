import LoginPage from '@/components/Auth/LoginPage'
import Nav from '@/components/Nav/Nav'
import DataSetter from '@/lib/DataSetter'
import React from 'react'

const Login = () => {
  return (
    <div>
      <DataSetter/>
        <LoginPage/>
    </div>
  )
}

export default Login