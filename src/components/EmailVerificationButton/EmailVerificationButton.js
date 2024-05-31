"use client";
import { auth } from "@/utils/firebase";
import { sendEmailVerification } from "firebase/auth";
import React, { useEffect, useRef, useState } from "react";
// import { toast } from "react-toastify";
import { useToast } from "../ui/use-toast";
import {
  CountdownCircleTimer,
  useCountdown,
} from "react-countdown-circle-timer";
import { useAppSelector } from "@/lib/hooks";
import renderTime from "./RenderTime";


const EmailVerificationButton = () => {
  const [isDisabled, setIsDisabled] = useState(false);
  const { toast } = useToast();
  const user=useAppSelector((store)=>store.user)

  if(user!==null && user.emailVerified===true || user===null){
    return null;
  }

  const handleVerification = () => {
    sendEmailVerification(auth.currentUser).then(
      () => {}
      // Email verification sent!
      // ...
    );
    toast({
      description: "Verification email sent!",
    });
    setIsDisabled(true);
  };
  return (
    <div className=" mx-auto bg-red-600 text-white font-medium flex justify-center items-center text-xs  gap-2 py-1 w-screen">
      <div>Verify your email</div>
      <button
        className={`bg-blue-400 text-white font-popins font-semibold rounded-md text-xs  shadow-md px-2 p-1 disabled:opacity-30 disabled:cursor-not-allowed`}
        disabled={isDisabled}
        onClick={handleVerification}
      >
        Verify
      </button>
      { isDisabled && (
        <div className="gap-2 flex justify-center items-center">
          <div className="text-xs font-extralight">Resend in</div>
          <div className="timer-wrapper">
            <CountdownCircleTimer
              isPlaying
              size={25}
              strokeWidth={3}
              duration={60}
              colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
              colorsTime={[10, 6, 3, 0]}
              onComplete={()=>{setIsDisabled(false)}}
            >
              {renderTime}
            </CountdownCircleTimer>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmailVerificationButton;
