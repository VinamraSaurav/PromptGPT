"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/utils/firebase";
import { useRouter } from "next/navigation";


const LoginPage = () => {
  const [showPassword, setShowPassword] = useState("password");
  const [errorMessage,setErrorMessage]=useState(null);
  const router=useRouter();

  const handleShowPassword = () => {
    if (showPassword === "password") {
      setShowPassword("text");
    } else {
      setShowPassword("password");
    }
  };
  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = yup.object({
    email: yup.string().required("Required"),
    password: yup.string().required("Required"),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      signInWithEmailAndPassword(auth, values.email, values.password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // console.log(user);
    user.emailVerified?router.push('/browse'):router.push('/');
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode);
  });
    },
  });
  return (
    
    <div className="flex justify-center items-center h-full w-full">
      <div className=" h-[440px] w-80 sm:w-96 mx-auto my-auto rounded-xl border border-gray-200 dark:border-white/15 bg-white/25 dark:bg-black/20 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur p-5">
        <div className="text-lg text-black dark:text-white font-bold text-center my-5 font-santoshi tracking-wide">
          Login
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div className="gap-y-3">
            <div className="flex flex-col items-center justify-center mb-4">
              <div className="font-popins text-sm w-64">Email Id</div>
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
              ) : <div className="w-64 h-3"/>}
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="font-popins text-sm w-64">Password</div>
              <div  className="flex w-64 justify-center items-center mx-auto">
              <input
                id="password"
                type={showPassword}
                placeholder="Enter Password"
                required
                onChange={formik.handleChange}
                value={formik.values.password}
                onBlur={formik.handleBlur}
                className="w-64 py-2 px-1 mt-1 bg-transparent text-sm font-popins border-b-2 border-black dark:border-white/30 outline-none"
              ></input>
              <div className="absolute right-[35px] sm:right-[67px] cursor-pointer" onClick={handleShowPassword}>{showPassword==='password'?<IoEye/>:<IoMdEyeOff/>}</div>
              </div>
              <Link href='/resetPassword'><div className="flex justify-end w-64 text-xs mr-2 mt-1">Forgot Password?</div></Link>
              {formik.touched.password && formik.errors.password ? (
                <div className="text-left text-red-600 text-xs w-60 mx-2">
                  *{formik.errors.password}!
                </div>
              ) : <div className="w-64 h-3"/>}
            </div>
            {<div className="text-center flex h-3 mb-2 justify-center mx-auto text-red-600 text-xs w-60">{errorMessage}</div>}

            <button type="submit" className="flex justify-center items-center mx-auto my-6 w-64 h-12 rounded-md bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 text-white text-md font-popins font-bold cursor-pointer">
              LOGIN
            </button>
            <div className="w-64 flex justify-start text-xs font-light mx-auto text-black/80 dark:text-white/80">
              New to PromptGPT?{" "}
              <Link href="/signUp">
                <div className="mx-1 font-bold hover:underline cursor-pointer">
                  Sign Up
                </div>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
   
  );
};

export default LoginPage;
