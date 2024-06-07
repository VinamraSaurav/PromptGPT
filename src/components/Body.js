'use client'

import React from 'react'
import { FaPlay } from 'react-icons/fa'


const Body = () => {

  return (
    <div>

          <section className="w-full flex-center flex-col lg:mt-24">
        <h1 className="mt-5 text-5xl font-extrabold leading-[1.15] text-black dark:text-white sm:text-6xl text-center">
        AI-Powered
          <br className="max-md:hidden" />
          <span className=" bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent text-center font-popins backdrop:blur-sm ">
            {" "}
            
            Entertainment 
            {' '}
          </span>
            Guide
        </h1>
        <p className="mt-5 text-lg text-gray-700 dark:text-white/65 sm:text-xl max-w-2xl text-center backdrop:blur-sm mx-auto p-2">
        Explore a diverse collection of films and series. From heartwarming rom-coms to spine-tingling thrillers, there’s something for everyone.
        </p>
        {/* <div className='w-fit py-2 px-3 shadow-md my-8 bg-gradient-to-r from-amber-600 via-orange-400 to-yellow-500 text-white text-md font-popins font-bold cursor-pointer flex justify-center items-center rounded-sm mx-auto'><FaPlay className='mx-2'/>Watch Now</div> */}
        
      </section>
 
    </div>
  )
}

export default Body