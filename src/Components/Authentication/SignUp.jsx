import React from 'react'
import { useNavigate } from 'react-router-dom'


const SignUp = () => {
    const navigate=useNavigate()
    const handleLogin=() =>{
     navigate('/')
    }
  return (
    <>
    <div className='flex justify-center md:pt-32  min-h-screen  '>
     <div className='flex flex-col items-center  p-4 border border-gray-400 rounded-md h-[60vh] w-[30vw]'>
     <button className='ml-auto bg-black text-white p-1 px-3 rounded-md hover:bg-gray-600' onClick={handleLogin}>Login</button>
    <form action="" method="post" className='flex flex-col items-center mt-10 '>
        
        <div>
        <label htmlFor=""  className='text-3xl text-gray-600 font-mono font-semibold '>Sign Up</label>
        
        </div>
        
        <input type="text" placeholder=' Enter your name ' className='md:mt-10 outline-none px-10 py-2  rounded-md bg-gray-100 shadow-lg' />
        <input type="email" placeholder=' Enter Mail ID  ' className='md:mt-4 outline-none px-10 py-2  rounded-md bg-gray-100 shadow-lg' />
        <input type="password" placeholder=' Enter your password  ' className='md:mt-4 outline-none px-10 py-2  rounded-md bg-gray-100 shadow-lg' />
        <input type="password" placeholder=' Confirm password  ' className='md:mt-4 outline-none px-10 py-2  rounded-md bg-gray-100 shadow-lg' />

        <div className='mt-10'>
            <button type="submit" className='bg-black text-white py-2 px-10 rounded-lg hover:bg-gray-600'>Sign Up</button>
        </div>
    </form>
    </div>
    </div>
    </>
  )
}

export default SignUp
