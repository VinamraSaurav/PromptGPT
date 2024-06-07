'use client'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAppSelector } from "@/lib/hooks";

import React from "react";

const UserAvatar = () => {

  const user=useAppSelector((store)=>store.user);
  // console.log(user?.displayName.at(0));
  return (
    <div>
      <Avatar className="h-9 w-9">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>{user?.displayName.at(0)}</AvatarFallback>
      </Avatar>
    </div>
  );
};

export default UserAvatar;
