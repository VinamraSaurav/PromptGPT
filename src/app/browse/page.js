import DataSetter from '@/lib/DataSetter'
import React from 'react'
import ProtectedContent from '../ProtectedContent'
import NavComplete from '@/components/Nav/NavComplete'
import BrowseComponent from '@/components/Browse/BrowseComponent'


const page = () => {
  return (
    <div>
      <NavComplete className='absolute' />
        {/* <DataSetter/> */}
        <ProtectedContent>
        <BrowseComponent/>
        </ProtectedContent>
        </div>
  )
}

export default page