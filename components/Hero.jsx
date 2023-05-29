import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import PrimaryButton from './PrimaryButton';

export const Hero = () => {
    return (
        <div className='text-white'>
            <div className='flex flex-col justify-center text-center max-w-[800px] mt-[-96px] mx-auto h-screen'>
                <p className='uppercase text-[#00df9a] font-bold p-2'>Growing with data analytics</p>
                <h1 className='md:text-7xl sm:text-5xl text-4xl md:py-6 font-bold'>Grow with data.</h1>
                <div className='flex justify-center items-center'>
                    <p className='md:text-4xl sm:text-2xl text-xl font-bold py-4'>Fast, flexible financing for</p>
                    <TypeAnimation
                        className='md:text-4xl sm:text-2xl text-lg font-bold md:pl-3 pl-2'
                        sequence={[
                            900,
                            'BTB', 
                            1000, // Waits 1s
                            'BTB BTC', 
                            2000, // Waits 2s
                            'SAAS', 
                            () => {
                                console.log('Sequence completed');
                            },
                        ]}
                        wrapper="span"
                        cursor={true}
                        repeat={Infinity}
                        style={{ display: 'inline-block' }}
                    />
                </div>
                <p className='md:text-2xl text-xl font-bold text-gray-500 px-2 sm:px-0'>Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms.</p>
                <PrimaryButton 
                    text={'Get Started'}
                    textColor={'text-black'}
                    bgColor={'#00df9a'}
                />
            </div>
        </div>
    )
}
