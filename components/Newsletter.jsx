import React from 'react'

export const Newsletter = () => {
    return (
        <div className='text-white py-16 px-4'>
            <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
                <div className='lg:col-span-2 my-4'>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold'>
                        Wants tips & tricks to optimize your?
                    </h1>
                    <p>Sign up to our newsletter and stay up to date.</p>
                </div>
                <div className='my-4'>
                    <div className="flex flex-col sm:flex-row justify-between items-center">
                        <input className='p-3 text-black w-full rounded-md' type='email' placeholder='Enter Email' />
                        <button className='bg-[#00df9a] w-[200px] rounded-md mx-auto sm:ml-4 ml-0 my-6 px-6 py-3 font-medium text-black'>Notify Me</button>
                    </div>
                    <p>We care about the protection of your data. Read our <span className='text-[#00df9a] sm:cursor-pointer'>Privacy Policy.</span></p>
                </div>
            </div>
        </div>
    )
}
