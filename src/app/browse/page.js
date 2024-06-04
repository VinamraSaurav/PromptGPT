import DataSetter from '@/lib/DataSetter'
import React from 'react'
import ProtectedContent from '../ProtectedContent'


const page = () => {
  return (
    <div>
        {/* <DataSetter/> */}
        <ProtectedContent>
        browse
        </ProtectedContent>
        </div>
  )
}

export default page