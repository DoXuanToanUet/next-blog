import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const BlogItem = ({title, description,image,category,author,id}) => {
  return (
    <div className='max-w-[330px] sm:max-w-[300px] bg-white border' >
      <Link href={`/blogs/${id}`}>
        <Image src={image} width={400} height={400} className='' alt=''/>
      </Link>
    
      <p className='ml-5 mt-5 px-1 inline-block bg-black text-white'>{category}</p>
      <div className='p-5'>
        <Link href={`/blogs/${id}`}> <h5 className='mb-2 text-lg font-medium tracking-tighter text-gray-900 hover:underline transition duration-300'>{title}</h5></Link>
        
        <p className='mb-3 text-sm tracking-tight text-gray-700 line-clamp-3'>{description}</p>
        <div className='inline-flex items-center py-2 font-semibold text-center'>
          Read more
        </div>
      </div>
    </div>
  )
}

export default BlogItem