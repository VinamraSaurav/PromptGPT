'use client'
import UserAvatar from "../Avatar/UserAvatar"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "../ui/button"
import { sendEmailVerification, signOut } from "firebase/auth"
import { auth } from "@/utils/firebase"
import { useRouter } from "next/navigation"
import { useAppSelector } from "@/lib/hooks"
// import { useState } from "react"
import {toast,Toaster} from "react-hot-toast";
import Countdown from "react-countdown";
import { useState, useEffect } from "react";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useToast } from "../ui/use-toast"


export function UserMenu() {


    const user=useAppSelector((store)=>(store.user));
    const router=useRouter();
    const [isDisabled,setIsDisabled]=useState(false);
    


    const handleLogOut=async()=>{
        try{
        await signOut(auth);
        useToast().toast({
            description:'Signed out successfully !',
        })
        // toast.success();
        router.push('/')
                
        }
        catch(error){
            toast.error("Something went wrong.")
        } ;     // router.push('/');
          
        
        
        
        
    }

    const handleVerification = () => {
        
        toast.promise(
            sendEmailVerification(auth.currentUser).then(
                () => {

                  
                }
                // Email verification sent!
                // ...
              ),
             {
               loading: 'Sending...',
               success: 'Verification link sent on your email!',
               error: 'Something went wrong.',
             }
           );
            setIsDisabled(true);
      };








      const Completionist = () => <DropdownMenuItem className='cursor-pointer' onClick={handleVerification}>
Verify  Email
<DropdownMenuShortcut><div className="h-2 w-2 rounded-full animate-bounce bg-orange-400 dark:bg-orange-200 "></div></DropdownMenuShortcut>
</DropdownMenuItem>;


    //   Renderer callback with condition
const renderer = ({ hours, minutes, seconds }) => {
    
    if (isDisabled) {
      // Render a complete state
    //   setIsDisabled(false);
    // setIsDisabled(false)  
    return (
        <span>
          <DropdownMenuItem className='cursor-not-allowed'><div className="opacity-60">Retry in</div>
            <DropdownMenuShortcut>
          {/* <CircularProgressbar className='h-7 w-7' value={60} text={`${seconds}`} /> */}
          {seconds}s
          </DropdownMenuShortcut></DropdownMenuItem>
          
        </span>
      );  
    
    } else {
    //   Render a countdown
        return <Completionist/>
      
    
  };
}
  
  const getLocalStorageValue = (s) => localStorage.getItem(s);
  
    const [data, setData] = useState(
      { date: Date.now(), delay: 60000 } //10 seconds
    );
    const wantedDelay = 60000; //10 ms
  


    useEffect(() => {
        const storedDisbledValue = JSON.parse(localStorage.getItem("DisabledValue")); // Use state as key
        if (storedDisbledValue) {
          setIsDisabled(storedDisbledValue); // Update state from localStorage
        }
      }, []);





    //[START] componentDidMount
    //Code runs only one time after each reloading
    useEffect(() => {

        localStorage.setItem("DisabledValue",JSON.stringify(isDisabled));
        console.log('Local storage updated:', isDisabled);

      const savedDate = getLocalStorageValue("end_date");
      if (savedDate != null && !isNaN(savedDate)) {
        const currentTime = Date.now();
        const delta = parseInt(savedDate, 10) - currentTime;
  
        //Do you reach the end?
        if (delta > wantedDelay) {
          //Yes we clear uour saved end date
          if (localStorage.getItem("end_date").length > 0)
            localStorage.removeItem("end_date");
        } else {
          //No update the end date with the current date
          setData({ date: currentTime, delay: delta });
        }
      }

    }, [isDisabled]);
    //[END] componentDidMount










  return (
    <DropdownMenu>
        <Toaster position="bottom-right" reverseOrder={false}/>
        <Toaster position="bottom-right" reverseOrder={false}/>
      <DropdownMenuTrigger asChild>
        {user.emailVerified? <Button variant='ghost' size='icon'><UserAvatar/></Button>:
        <Button variant='ghost' size='icon'><div className="relative"><UserAvatar/><div className="absolute top-0 right-0 h-3 w-3 animate-ping rounded-full bg-orange-300 "></div><div className="h-3 w-3 absolute right-0 top-0 bg-orange-300 rounded-full "></div></div></Button>}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-52">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {/* <DropdownMenuGroup>
          <DropdownMenuItem>
            Profile
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Billing
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Settings
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem>
            Keyboard shortcuts
            <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>Invite users</DropdownMenuSubTrigger>
            <DropdownMenuPortal>
              <DropdownMenuSubContent>
                <DropdownMenuItem>Email</DropdownMenuItem>
                <DropdownMenuItem>Message</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>More...</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub> */}
          {user.emailVerified===false && <div>
      <Countdown
        date={data.date + data.delay}
        renderer={renderer}
        onStart={(delta) => {
          //Save the end date
          if (localStorage.getItem("end_date") == null){
            localStorage.setItem(
              "end_date",
              JSON.stringify(data.date + data.delay)
            );
            localStorage.setItem("DisabledValue",JSON.stringify(true))}
        }}
        onComplete={() => {
            
          if (localStorage.getItem("end_date") != null){
            localStorage.removeItem("end_date");
            localStorage.setItem("DisabledValue",JSON.stringify(false))
        }
        setIsDisabled(false);
         
          
        }}
      >

      </Countdown>
        <DropdownMenuSeparator />
    </div>}
          
        {/* //   :<DropdownMenuItem className='cursor-pointer' onClick={handleVerification}>
        //     Verify  Email
        //     <DropdownMenuShortcut><div className="h-2 w-2 rounded-full animate-bounce bg-orange-400 dark:bg-orange-200 "></div></DropdownMenuShortcut>
        //   </DropdownMenuItem> */}

        {/* </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem>GitHub</DropdownMenuItem>
        <DropdownMenuItem>Support</DropdownMenuItem>
        <DropdownMenuItem disabled>API</DropdownMenuItem> */}
        <DropdownMenuItem onClick={handleLogOut} className='cursor-pointer'>
          Log out
          {/* <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut> */}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
