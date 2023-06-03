import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
export default function Navbar() {

    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div className='relative z-[50] text-white flex justify-between items-center max-w-[1240px] h-24 mx-auto px-4'>
            <h1 className='w-auto text-3xl font-bold text-[#00df9a] cursor-pointer'>NEXT.</h1>
            <ul className='hidden md:flex'>
                <li className='p-4 hover:text-[#00df9a] ease-in duration-200 cursor-pointer font-semibold'>Home</li>
                <li className='p-4 hover:text-[#00df9a] ease-in duration-200 cursor-pointer font-semibold'>Company</li>
                <li className='p-4 hover:text-[#00df9a] ease-in duration-200 cursor-pointer font-semibold'>Resources</li>
                <li className='p-4 hover:text-[#00df9a] ease-in duration-200 cursor-pointer font-semibold'>About</li>
                <li className='p-4 hover:text-[#00df9a] ease-in duration-200 cursor-pointer font-semibold'>Contact</li>
            </ul>
            <div onClick={handleNav} className='block relative z-[10] md:hidden cursor-pointer'>
                {!nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20}/>}
            </div>
            <div className={!nav ? 'fixed left-[-100%] ease-in-out duration-500' : 'fixed left-0 top-0 w-full h-screen border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'}>
                <h1 className='w-full text-3xl font-bold m-4 text-[#00df9a]'>NEXT.</h1>
                <ul className='uppercase'>
                    <li className='p-4 border-b border-gray-600 hover:text-[#00df9a] cursor-pointer font-semibold ease-in-out duration-200'>Home</li>
                    <li className='p-4 border-b border-gray-600 hover:text-[#00df9a] cursor-pointer font-semibold ease-in-out duration-200'>Company</li>
                    <li className='p-4 border-b border-gray-600 hover:text-[#00df9a] cursor-pointer font-semibold ease-in-out duration-200'>Resources</li>
                    <li className='p-4 border-b border-gray-600 hover:text-[#00df9a] cursor-pointer font-semibold ease-in-out duration-200'>About</li>
                    <li className='p-4 border-b border-gray-600 hover:text-[#00df9a] cursor-pointer font-semibold ease-in-out duration-200'>Contact</li>
                </ul>
            </div>
        </div>
    )
}
