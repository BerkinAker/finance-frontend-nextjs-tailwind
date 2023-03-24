import React from 'react'
import Image from 'next/image'

export const Cards = () => {
    return (
        <div className='py-[10rem] px-6 bg-white'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 md:gap-8'>
                <div className='w-full flex flex-col shadow-xl p-4 my-[-6] md:my-6 rounded-xl hover:scale-105 duration-300'>
                    <Image
                        className='mx-auto mt-[-3rem] bg-white'
                        src={'https://raw.githubusercontent.com/fireclint/data-finance-react-tailwind/main/src/assets/single.png'}
                        alt='picture of the author'
                        width={80}
                        height={400}
                    />
                    <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                    <p className='text-center text-4xl font-bold'>$759</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b'>700GB Storage</p>
                        <p className='py-2 border-b'>2 Granted User</p>
                        <p className='py-2 border-b'>Send up to 5GB</p>
                    </div>
                    <button className='bg-[#00df9a] w-[200px] rounded-md mx-auto my-6 py-3 font-medium text-black'>Start Trial</button>
                </div>
                <div className='w-full flex flex-col shadow-xl bg-gray-100 p-4 md:my-2 my-12 rounded-xl hover:scale-105 duration-300'>
                    <Image
                        className='mx-auto mt-[-3rem] bg-transparent'
                        src={'https://raw.githubusercontent.com/fireclint/data-finance-react-tailwind/main/src/assets/double.png'}
                        alt='picture of the author'
                        width={80}
                        height={400}
                    />
                    <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                    <p className='text-center text-4xl font-bold'>$759</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b'>700GB Storage</p>
                        <p className='py-2 border-b'>2 Granted User</p>
                        <p className='py-2 border-b'>Send up to 5GB</p>
                    </div>
                    <button className='bg-black w-[200px] rounded-md mx-auto my-6 py-3 font-medium text-[#00df9a]'>Start Trial</button>
                </div>
                <div className='w-full flex flex-col shadow-xl p-4 my-6 rounded-xl hover:scale-105 duration-300'>
                    <Image
                        className='mx-auto mt-[-3rem] bg-white'
                        src={'https://raw.githubusercontent.com/fireclint/data-finance-react-tailwind/main/src/assets/triple.png'}
                        alt='picture of the author'
                        width={80}
                        height={400}
                    />
                    <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                    <p className='text-center text-4xl font-bold'>$759</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b'>700GB Storage</p>
                        <p className='py-2 border-b'>2 Granted User</p>
                        <p className='py-2 border-b'>Send up to 5GB</p>
                    </div>
                    <button className='bg-[#00df9a] w-[200px] rounded-md mx-auto my-6 py-3 font-medium text-black'>Start Trial</button>
                </div>
            </div>
        </div>
    )
}
