import React from 'react'
import { ModeToggle } from '../ModeToggle'
import Link from 'next/link'

const LoggedOutNav = () => {
  return (
    <div>
        <div className="flex gap-3">
        <ModeToggle />

          <Link href="/login">
            <button
              className="rounded-xl border border-black dark:border-white
              bg-black dark:bg-white py-1.5 px-3 text-white dark:text-black
              transition-all hover:bg-white/95 hover:text-black text-center
              text-sm font-inter flex items-center justify-center font-semibold"
            >
              Log in
            </button>
          </Link>

          <Link href="/signUp">
            <button
              onClick={() => {}}
              className="rounded-xl font-semibold border border-black dark:border-white bg-transparent py-1.5 px-3 text-black dark:text-white transition-all hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black text-center text-sm font-inter flex items-center justify-center"
            >
              Sign Up
            </button>
          </Link>
        
      </div>
    </div>
  )
}

export default LoggedOutNav