"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/utils/firebase";
import { useRouter } from "next/navigation";
import { toast, useToast } from "../ui/use-toast";


const ResetPassword = () => {
//   const [showPassword, setShowPassword] = useState("password");
  const [errorMessage,setErrorMessage]=useState(null);
  const router=useRouter();
  const {toast}=useToast();

//   const handleShowPassword = () => {
//     if (showPassword === "password") {
//       setShowPassword("text");
//     } else {
//       setShowPassword("password");
//     }
//   };
  const initialValues = {
    email: "",
  };
  const validationSchema = yup.object({
    email: yup.string().required("Required"),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
        try{
            await sendPasswordResetEmail(auth, values.email);
            toast({
                title:'Reset link sent !',
                description:'Password reset link sent on your registered mail.'
            });
            router.push('/login');
        

        }catch(error){
            setErrorMessage(error);
        };
    },
  });
  return (
    
    <div className="flex justify-center items-center h-full w-full">
      <div className=" h-[380px] w-80 sm:w-96 mx-auto my-auto rounded-xl border border-gray-200 dark:border-white/15 bg-white/25 dark:bg-black/20 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur p-5">
        <div className="text-lg text-black dark:text-white font-bold text-center my-5 font-santoshi tracking-wide">
          Forgot Password?
        </div>
        <div className="text-black/35 dark:text-white/35 flex justify-start mx-auto w-64 mb-4">Get password reset link on your mail</div>
        <form onSubmit={formik.handleSubmit}>
          <div className="gap-y-3">
            <div className="flex flex-col items-center justify-center">
              <div className="font-popins text-sm w-64">Enter registered email Id</div>
              <input
                id="email"
                type="text"
                placeholder="Enter Email Id"
                required
                onChange={formik.handleChange}
                value={formik.values.email}
                onBlur={formik.handleBlur}
                className="w-64 py-2 px-1 m-1 bg-transparent text-sm font-popins border-b-2 border-black dark:border-white/30 outline-none"
              ></input>
              {formik.touched.email && formik.errors.email ? (
                <div className="text-left text-red-600 text-xs w-60 mx-2">
                  *{formik.errors.email}!
                </div>
              ) : <div className="w-64 h-4"/>}
            </div>
            
            {<div className="text-center flex h-3 mb-2 justify-center mx-auto text-red-600 text-xs w-60">{errorMessage}</div>}

            <button type="submit" className="flex justify-center items-center mx-auto my-6 w-64 h-12 rounded-md bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 text-white text-md font-popins font-bold cursor-pointer">
              Continue
            </button>
            <div className="w-64 flex justify-start text-xs font-light mx-auto text-black/80 dark:text-white/80">
              Back to Login?{" "}
              <Link href="/login">
                <div className="mx-1 font-bold hover:underline cursor-pointer">
                  Login
                </div>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
   
  );
};

export default ResetPassword;
