'use client'
import { blog_data } from '@/Assets/assets'
import axios from 'axios';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

const Blogs= ( {params} ) => {
    const [data, setData] = useState(null);
    useEffect(() => {
        const fetchBlogData = async () => {
            // Sử dụng phương thức find để tìm kiếm dữ liệu
            // const blog = blog_data.find(blog => Number(params.id) === blog.id);
            // if (blog) {
            //     setData(blog);
            //     console.log(blog);
            // }
            const response = await axios.get('/api/blog',{
                params:{
                    id:params.id
                }
            })
            setData(response.data);
        };

        fetchBlogData();
    }, []); 
    return (
        <div>
            {data ? (
                <div>
                    <div className='text-center pt-20 pb-20 bg-gray-200 '>
                        <h1 className='text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto'>{data.title}</h1>
                        {/* <Image className='mx-auto mt-6 border border-white rounded-full' src={data.Image}/> */}
                        <p className='mt-1 pb-2 text-lg max-w-[740px] mx-auto'>{data.author}</p>
                    </div>
                    <div className="mx-5 max-w-[800px] md:mx-auto mt-[-50px] mb-10">
                        <Image className=' border-white w-full h-64 object-cover rounded-[16px] overflow-hidden' src={data.image}  width={1280} height={400} alt='' layout='fixed'/>
                        <p className='py-5 text-xl'>{data.description}</p>
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
}

export default Blogs