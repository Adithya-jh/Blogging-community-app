import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import Ideate from './IDEATE.png'

function Header() {
  return (
      <div className="flex justify-between p-5 max-w-7xl mx-auto">
        <div className="flex items-center space-x-5">
            <Link href="/">
                    {/* <Image src="https://miro.medium.com/max/1200/1*jfdwtvU6V6g99q3G7gq7dQ.png" className='w-44 object-contain' layout='fill'/> */}
                    {/* <img src="https://miro.medium.com/max/1200/1*jfdwtvU6V6g99q3G7gq7dQ.png" className='w-44 object-contain cursor-pointer' /> */}
                    <Image src={Ideate} className='w-44 object-contain cursor-pointer' height={60} width={60} />
            </Link>

            <div className="hidden md:inline-flex items-center space-x-5 cursor-pointer">
                <h3>About</h3>
                <h3>Contact</h3>
                <h3 className="text-white bg-yellow-600 px-4 py-1 rounded-full ">Follow</h3>
            </div>
        </div>


        <div className="flex items-center space-x-5 text-yellow-600 cursor-pointer">
            <h3>Sign In</h3>
            <h3 className='border px-4 py-1 rounded-full border-yellow-500'>Get Started</h3>
      
        </div>
      </div>

  )
}

export default Header