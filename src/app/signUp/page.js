import Nav from '@/components/Nav/Nav'
import SignUpPage from '@/components/Auth/SignUpPage'
import DataSetter from '@/lib/DataSetter'
import React from 'react'

const page = () => {
  return (
    <div>
      <DataSetter/>
   <SignUpPage/></div>
  )
}

export default page