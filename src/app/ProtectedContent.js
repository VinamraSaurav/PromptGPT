'use client'
import Loader from '@/components/Loader';
// import { useToast } from '@/components/ui/use-toast';
import DataSetter from '@/lib/DataSetter';
import { useAppSelector } from '@/lib/hooks';
import { auth } from '@/utils/firebase';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const ProtectedContent = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
//   const {toast}=useToast();
  const router = useRouter();
  const user = useAppSelector((store)=>(store.user));


  useEffect(() => {
    // Simulate data fetching (replace with your actual logic)
    const timer = setTimeout(()=>{
        setIsLoading(false);
    }, 1000); // Adjust timeout as needed

    return () => {
      clearTimeout(timer);
    };
  }, []);



  if (isLoading) {
    return <div className='flex justify-center items-center h-full w-full mx-auto my-auto'><Loader/></div>;
  }

  if (user) {
    if (user.emailVerified) {
      return <div>
        {children}</div>;
    } else {
        toast.error('Please verify your email !');
    router.push('/');
    }
  } else {
    toast.error('Login to access the content !');
    router.push('/login');
  }

  return <Toaster/>
};

export default ProtectedContent;
