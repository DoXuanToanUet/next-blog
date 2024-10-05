'use client'
import { blog_data } from '@/Assets/assets'
import axios from 'axios';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import NProgress from 'nprogress'; // Import NProgress
import 'nprogress/nprogress.css';  // Import CSS của NProgress

const Blogs = ({ params }) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchBlogData = async () => {
            NProgress.start(); // Bắt đầu hiển thị thanh progress

            try {
                const response = await axios.get('/api/blog', {
                    params: { id: params.id }
                });
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data', error);
            }

            NProgress.done(); // Dừng thanh progress sau khi dữ liệu đã được tải xong
        };

        fetchBlogData();
    }, [params.id]);

    return (
        <div>
            {data ? (
                <div>
                    <div className='text-center pt-20 pb-20 bg-gray-200'>
                        <h1 className='text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto'>{data.title}</h1>
                        <p className='mt-1 pb-2 text-lg max-w-[740px] mx-auto'>{data.author}</p>
                    </div>
                    <div className="mx-5 max-w-[800px] md:mx-auto mt-[-50px] mb-10">
                        <Image className=' border-white w-full h-64 object-cover rounded-[16px] overflow-hidden' src={data.image} width={1280} height={400} alt='' layout='fixed' />
                        <p className='py-5 text-xl'>{data.description}</p>
                    </div>
                </div>
            ) : (
                <p></p>
            )}
        </div>
    )
}

export default Blogs;
