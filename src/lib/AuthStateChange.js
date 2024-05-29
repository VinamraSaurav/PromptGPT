// 'use client'
// import { useAppDispatch } from '@/lib/hooks';
// import { addUser } from '@/store/userSlice';
// import { auth } from '@/utils/firebase';
// import { onAuthStateChanged } from 'firebase/auth';
// import React, { useEffect } from 'react'

// const AuthStateChange = ({children}) => {
//     const dispatch=useAppDispatch();

//   useEffect(()=>{
//     onAuthStateChanged(auth, (user) => {
//       if (user) {
//         // User is signed in, see docs for a list of available properties
//         // https://firebase.google.com/docs/reference/js/auth.user
//         const u = user;
//         dispatch(addUser(u));

//         // ...
//       } else {
//         // User is signed out
//         // ...
//         dispatch(removeUser());
   
//       }
//     });
//   },[])
  
//   return (
//     <div>{children}</div>
//   )
// }

// export default AuthStateChange