import Image from 'next/image'
import React from 'react'

const BlogTableItem = ({title,image,category,description,date,deleteBlog,mongoId,stt}) => {
  return (
    <>
        <tr className='bg-white border-b'>
        <td className='px-6 py-4'>
                {stt} 
            </td>
            <td className='px-6 py-4'>
                {title?title:'no title'} 
            </td>
           
            <td className='px-6 py-4'>
                {description}
            </td>
            <td className='px-6 py-4'>
                <Image src={image} width={50} height={50} alt=''/>
            </td>
            <td className='px-6 py-4'>
                {category}
            </td>
            <td className='px-6 py-4'>
                {date}
            </td>
            <td className=' flex gap-4 px-6 py-4'>
                <button>Add</button>
                <button>Edit</button>
                <button onClick={()=>{ deleteBlog(mongoId)}}>Del</button>
            </td>
        </tr>
    </>
  )
}

export default BlogTableItem