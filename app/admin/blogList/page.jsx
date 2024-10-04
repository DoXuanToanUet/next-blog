'use client'
import BlogTableItem from '@/Components/AdminComponents/BlogTableItem'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

function BlogListAdmin() {
    const [blogs,setBlogs] = useState([])

    const fetchBlogs = async () =>{
        const response = await axios.get('/api/blog')
        setBlogs(response.data.blogs)
    }

    const deleteBlog = async (mongoId)=>{
        const response = await axios.delete('/api/blog',{
            params:{
                id:mongoId
            }
        })
        toast.success(response.data.msg)
        fetchBlogs()
    } 

    useEffect( ()=>{
        fetchBlogs()
    },[])
    return (
        <div className='flex-1 pt-5 px-5 sm:pt-12 sm:pl-16'>
            <h1>All Blog</h1>
            <div className="relative h-[80vh] w-full overflow-x-auto mt-4 border">
                <table className='w-full text-sm text-gray-500'>
                    <thead className=' text-sm text-black text-left uppercase bg-gray-100'>
                        <tr>
                            <th scope='col' className='  px-6 py-3'>
                                STT
                            </th>
                            <th scope='col' className='  px-6 py-3'>
                                Blog Title
                            </th>
                            <th scope='col' className='  px-6 py-3'>
                                Blog Desc
                            </th>
                            <th scope='col' className='  px-6 py-3'>
                                Blog Image
                            </th>
                            <th scope='col' className='  px-6 py-3'>
                                Blog Date
                            </th>
                            <th scope='col' className='  px-6 py-3'>
                                Blog Category
                            </th>
                            <th scope='col' className='  px-6 py-3'>
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            blogs.map( (item,index)=>{
                                return <BlogTableItem stt={index} key={index} mongoId={item._id} date={item.date} title={item.title} image={item.image} category={item.category} description={item.description} deleteBlog={deleteBlog}/>
                            } )

                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default BlogListAdmin