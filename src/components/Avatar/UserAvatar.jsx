import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import React from "react";

const UserAvatar = () => {

  return (
    <div>
      <Avatar className="h-9 w-9">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>U</AvatarFallback>
      </Avatar>
    </div>
  );
};

export default UserAvatar;
