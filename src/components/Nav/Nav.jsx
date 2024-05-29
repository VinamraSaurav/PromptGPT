"use client";
import Link from "next/link";
import Image from "next/image";





const Nav = () => {

  return (
    
    <nav className="flex justify-start ">
      <Link href="/" className="flex gap-2 justify-center items-center">
        <Image
          src="/logo.svg"
          height={30}
          width={30}
          alt="PromptGPT Logo"
          className="object-contain"
        />
        <p className="max-sm:hidden font-satoshi font-semibold text-lg text-black dark:text-white tracking-wide">
          PromptGPT
        </p>
      </Link>
      
    
    </nav>
    
  );
};

export default Nav;
