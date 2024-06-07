'use client'

import React from 'react'
import { FaPlay } from 'react-icons/fa'
import { ContainerScroll } from './Aceternity UI/container-scroll'
import Image from 'next/image'
import { MacbookScroll } from './Aceternity UI/macbook-scroll'
import Link from 'next/link'
import { Vortex } from './Aceternity UI/vortex'
import { HoverEffect } from './Aceternity UI/card-hover-effect'
import { projects } from '@/utils/features'
import { HeroHighlight, Highlight } from './Aceternity UI/hero-highlight'
import { motion } from "framer-motion";
// import { MacbookScroll } from './Aceternity UI/macbook-scroll'



const Body = () => {

  return (
    <div>

          <section className="w-full flex-center flex-col lg:mt-24">
            <div className='md:py-10'>
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
        </div>


        <div className="max-w-5xl mx-auto px-8 lg:mt-20">
      <HoverEffect items={projects} />
    </div>

        <ContainerScroll
         titleComponent={
          <>
            <h1 className="text-3xl font-semibold ">
            AI curated personalized <br />
              <span className="text-4xl md:text-[5rem] font-bold leading-none text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 ">
               Recommendations
              </span>
            </h1>
          </>
        }
        >
          <Image
          src={`/assets/images/promptMovie.png`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      
        </ContainerScroll>





      </section>
 
    </div>
  )
}

export default Body