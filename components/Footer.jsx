import React from 'react'
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,
} from 'react-icons/fa';

export const Footer = () => {
    return (
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-8 py-16 lg:px-4 px-8 text-gray-300'>
            <div>
                <h1 className='w-full text-3xl font-bold text-[#00df9a]'>NEXT.</h1>
                <p className='py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti quia doloribus architecto fuga dignissimos sed?</p>
                <div className='flex justify-between w-[75%] my-6'>
                    <FaFacebookSquare size={30} className='cursor-pointer hover:text-[#00df9a] ease-in duration-200' />
                    <FaInstagram size={30} className='cursor-pointer hover:text-[#00df9a] ease-in duration-200' />
                    <FaTwitterSquare size={30} className='cursor-pointer hover:text-[#00df9a] ease-in duration-200' />
                    <FaGithubSquare size={30} className='cursor-pointer hover:text-[#00df9a] ease-in duration-200' />
                    <FaDribbbleSquare size={30} className='cursor-pointer hover:text-[#00df9a] ease-in duration-200' />
                </div>
            </div>
            <div className='lg:col-span-2 flex justify-between mt-6'>
                <div>
                    <h6 className='font-medium text-gray-400'>Solutions</h6>
                    <ul>
                        <li className='py-2 text-sm cursor-pointer hover:text-[#00df9a] ease-in duration-200'>Analytics</li>
                        <li className='py-2 text-sm cursor-pointer hover:text-[#00df9a] ease-in duration-200'>Marketing</li>
                        <li className='py-2 text-sm cursor-pointer hover:text-[#00df9a] ease-in duration-200'>Commerce</li>
                        <li className='py-2 text-sm cursor-pointer hover:text-[#00df9a] ease-in duration-200'>Insights</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <h6 className='font-medium text-gray-400'>Support</h6>
                        <li className='py-2 text-sm cursor-pointer hover:text-[#00df9a] ease-in duration-200'>Pricing</li>
                        <li className='py-2 text-sm cursor-pointer hover:text-[#00df9a] ease-in duration-200'>Documentation</li>
                        <li className='py-2 text-sm cursor-pointer hover:text-[#00df9a] ease-in duration-200'>Guides</li>
                        <li className='py-2 text-sm cursor-pointer hover:text-[#00df9a] ease-in duration-200'>API Status</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-gray-400'>Company</h6>
                    <ul>
                        <li className='py-2 text-sm cursor-pointer hover:text-[#00df9a] ease-in duration-200'>About</li>
                        <li className='py-2 text-sm cursor-pointer hover:text-[#00df9a] ease-in duration-200'>Blog</li>
                        <li className='py-2 text-sm cursor-pointer hover:text-[#00df9a] ease-in duration-200'>Jobs</li>
                        <li className='py-2 text-sm cursor-pointer hover:text-[#00df9a] ease-in duration-200'>Press</li>
                        <li className='py-2 text-sm cursor-pointer hover:text-[#00df9a] ease-in duration-200'>Careers</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-gray-400'>Legal</h6>
                    <ul>
                        <li className='py-2 text-sm cursor-pointer hover:text-[#00df9a] ease-in duration-200'>Claim</li>
                        <li className='py-2 text-sm cursor-pointer hover:text-[#00df9a] ease-in duration-200'>Policy</li>
                        <li className='py-2 text-sm cursor-pointer hover:text-[#00df9a] ease-in duration-200'>Terms</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
