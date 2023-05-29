import React from 'react'
import Image from 'next/image'
import PrimaryButton from './PrimaryButton'

export const Analytics = () => {
    return (
        <div className='w-full bg-white py-16 px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <Image
                    className='mx-auto my-4'
                    src='https://raw.githubusercontent.com/fireclint/data-finance-react-tailwind/main/src/assets/laptop.jpg'
                    alt="Picture of the author"
                    width={400}
                    height={400}
                />
                <div className='flex flex-col justify-center'>
                    <p className='text-[#00df9a] font-bold uppercase'>Data analytics dashboard</p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-4'>Manage Data Analytics Centrally</h1>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Tenetur architecto numquam cum ab exercitationem facilis,
                        voluptatum aspernatur maiores adipisci incidunt error iure
                        nemo fugit. Vitae dolorum numquam neque tempore sed?
                    </p>
                    <button className='text-[#00df9a] w-[200px] rounded-md md:mx-0 mx-auto my-6 py-3 font-medium bg-black'>Get Started</button>
                </div>
            </div>
        </div>
    )
}
