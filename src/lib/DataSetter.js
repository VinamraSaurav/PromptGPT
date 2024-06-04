'use client'

import React, { useEffect } from 'react'
import { useAppDispatch } from './hooks'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/utils/firebase';
import { addUser, removeUser } from '@/store/userSlice';
import { useRouter } from 'next/navigation';

const DataSetter = () => {
    const dispatch=useAppDispatch();
    // const router=useRouter();

    useEffect(()=>{
      const unsubscribe=onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const {uid,displayName,email,emailVerified} = user;
          dispatch(addUser({uid:uid,displayName:displayName,email:email,emailVerified:emailVerified}));
          // router.push('/')
          // ...
        } else {
          // User is signed out
          // ...
          dispatch(removeUser());
          // router.push('/login');
        }
      });

      return()=>{
        unsubscribe();
      }
    },[])

  return (
    <></>
  )
}

export default DataSetter