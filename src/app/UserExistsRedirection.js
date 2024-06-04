'use client'
import Loader from '@/components/Loader';
import { useAppSelector } from '@/lib/hooks';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';


const UserExistsRedirection = ({ children }) => {
//   const [isLoading, setIsLoading] = useState(true);
//   const {toast}=useToast();
  const router = useRouter();
  const user = useAppSelector((store)=>(store.user));


//   useEffect(() => {
//     // Simulate data fetching (replace with your actual logic)
//     const timer = setTimeout(()=>{
//         setIsLoading(false);
//     }, 500); // Adjust timeout as needed

//     return () => {
//       clearTimeout(timer);
//     };
//   }, []);



//   if (isLoading) {
//     return <div className='flex justify-center items-center h-full w-screen mx-auto my-auto'><Loader/></div>;
//   }

  if (user){
      router.push('/');
  }

  return <div>{children}</div>

};

export default UserExistsRedirection;
