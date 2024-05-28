"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ModeToggle } from "./ModeToggle";

const Nav = () => {
  const [toggleDropDown, setToggleDropDown] = useState(false);

  return (
    <nav className="flex justify-between items-center  w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
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
      <div className="sm:flex gap-3 md:gap-5">
        <ModeToggle />

        <div className="sm:flex hidden gap-3 md:gap-4">
          <Link href="/login">
            <button
              className="rounded-full border border-black dark:border-white
              bg-black dark:bg-white py-1.5 px-5 text-white dark:text-black
              transition-all hover:bg-white/95 hover:text-black text-center
              text-sm font-inter flex items-center justify-center"
            >
              Login
            </button>
          </Link>

          <Link href="/signUp">
            <button
              onClick={() => {}}
              className="rounded-full border border-black dark:border-white bg-transparent py-1.5 px-5 text-black dark:text-white transition-all hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black text-center text-sm font-inter flex items-center justify-center"
            >
              Sign Up
            </button>
          </Link>
        </div>
      </div>
      <div className="sm:hidden flex relative"></div>
    </nav>
  );
};

export default Nav;
