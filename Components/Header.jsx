import React from 'react'
import Image from 'next/image'
import { assets } from '@/Assets/assets'

const Header = () => {
  return (
    <div className='py-5 px-5  mx-auto' style={{maxWidth:'1200px'}}>
        <div className='flex justify-between items-center'>
            <Image src={assets.logo} width={180} alt='' className='w-[130px] sm:w-auto'/>
            <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black '>Get start</button>
        </div>
        <div className='text-center my-8'>
            <h1 className='text-3xl sm:text-5xl font-medium'>Tin mới nhất</h1>
            <p className='mt-10 max-w-[740px] m-auto text-xl sm:text-base'> Đọc tất cả tin tức </p>
            {/* <form action="#" className='flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10'>
                <input type="email" placeholder='Enter your Email' className='pl-4 outline-none'/>
                <button className='border-1 border-black py-4 px-4 active:bg-gray-600 active:text-white'>Subcribe</button>
            </form>  */}
        </div>
    </div>
  )
}

export default Header