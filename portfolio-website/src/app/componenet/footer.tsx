import Link from 'next/link';
import React from 'react'
import { FaLinkedin } from "react-icons/fa";


const Footer = () => {
  return (
    <div className='bg-gray-100'>
        <footer className="text-gray-600 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">

    <span className='ml-1 text-xl'>Ghazala</span>
    
    <p className="text-sm text-gray-700 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-400 sm:py-2 sm:mt-0 mt-4">
      © All right reserved 2024.
      
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <Link
      target="blank"
      href={"https://www.linkedin.com/in/ghazala-siddiqui-8736092b5/"}
       className="text-gray-500">
        
      <FaLinkedin className='text-3xl hover:text-blue-700'/>
      </Link>
      
      
      
    </span>
  </div>
</footer>

    </div>
  )
}

export default Footer