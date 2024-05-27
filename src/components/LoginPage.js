import React from 'react'

const LoginPage = () => {
  return (
            <div className='flex justify-center items-center h-full w-full'>
        <div className=' h-[400px] w-80 sm:w-96 mx-auto my-auto rounded-xl border border-gray-200 dark:border-white/15 bg-white/25 dark:bg-black/20 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur p-5' >
            <div className='text-lg text-black dark:text-white font-bold text-center my-5 font-santoshi tracking-wide'>LOGIN</div>
            <form>
                <div>Name</div>
                <input type='text' placeholder='text'></input>
            </form>

        </div>

    </div>
  )
}

export default LoginPage