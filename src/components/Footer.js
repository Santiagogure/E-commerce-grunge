import React from 'react'
import {AiOutlineTwitter, AiOutlineGithub,AiOutlineLinkedin} from 'react-icons/ai'

export const Footer = () => {

    function redirect(url) {
        window.location = url
    }

    return (
        <footer className='w-4/5 m-auto p-10'>
          <div className='md:flex grid grid-cols-1 lg:grid-cols-2 gap justify-between items-start my-10' id='footer'>
            <div className='space-y-5 py-5 border-b'>
              <h1 className='text-3xl font-bold'>E-commerce</h1>
              <div className='flex space-x-5 items-center justify-center'>
                <AiOutlineTwitter className='cursor-pointer' onClick={() => redirect('https://twitter.com/santigure')} size={"1.5rem"}/>
                <AiOutlineLinkedin className='cursor-pointer' onClick={() => redirect('https://www.linkedin.com/in/santiago-gurevich/')} size={"1.5rem"}/>
                <AiOutlineGithub className='cursor-pointer' onClick={() => redirect('https://github.com/Santiagogure')} size={"1.5rem"}/>
              </div>
            </div>
            <div className='flex flex-col space-y-3'>
              <h1>Comapny</h1>
              <a className='text-sm text-gray-400' href="/">About us</a>
              <a className='text-sm text-gray-400' href="/">Contact Us</a>
              <a className='text-sm text-gray-400' href="/">Services</a>
              <a className='text-sm text-gray-400' href="/">Blog</a>
            </div>
            <div className=' hidden lg:flex flex-col space-y-3'>
            <h1>Comapny</h1>
              <a className='text-sm text-gray-400' href="/">About us</a>
              <a className='text-sm text-gray-400' href="/">Contact Us</a>
              <a className='text-sm text-gray-400' href="/">Services</a>
              <a className='text-sm text-gray-400' href="/">Blog</a>
            </div>
            <div className=' hidden lg:flex flex-col space-y-3'>
            <h1>Comapny</h1>
              <a className='text-sm text-gray-400' href="/">About us</a>
              <a className='text-sm text-gray-400' href="/">Contact Us</a>
              <a className='text-sm text-gray-400' href="/">Services</a>
              <a className='text-sm text-gray-400' href="/">Blog</a>
            </div>
          </div>
          <div className='border-t py-2'>
            <p>copy &copy;2022 <span className='font-bold'>E-commerce</span> All Rights Reserved</p>
          </div>
        </footer>
      )
}
