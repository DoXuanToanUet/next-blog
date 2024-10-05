import { assets } from '@/Assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
  return (
    <div className='flex flex-col bg-slate-100 '>
        <div className='px-2 sm:pl-14 py-3 border border-black'>
            <Image src={assets.logo} width={120} alt=''/>
        </div>
        <div className="w-28 sm:w-80 h-[100vh] relative py-12 border border-black">
            <Link href='/admin' className=" mb-2 flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000]">
                Dashboard
            </Link>
            <Link href='/admin/addProduct' className=" mb-2 flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000]">
                Add Blogs
            </Link>
            <Link href='/admin/blogList' className=" mb-2 flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000]">
                Blog lists
            </Link>
            <Link href='/admin/subscriptions' className=" mb-2 flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000]">
               Subcriptions
            </Link>
        </div>
    </div>
  )
}

export default Sidebar