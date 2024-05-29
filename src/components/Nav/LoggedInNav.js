import React from 'react'

import { ModeToggle } from '../ModeToggle'
import { UserMenu } from '../UserMenu/UserMenu'


const LoggedInNav = () => {
  return (
    <div>
        <div className='flex gap-3 items-center justify-start'>
            <ModeToggle/>
 
            <UserMenu/>

        </div>
    </div>
  )
}

export default LoggedInNav