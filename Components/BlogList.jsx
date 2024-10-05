import React, { useEffect, useState } from 'react'
import { blog_data } from '@/Assets/assets'
import BlogItem from './BlogItem'
import axios from 'axios'

const BlogList = () => {
    const [menu, setMenu] = useState('All')
    const [blogs,setBlogs] = useState([])

    const fetchBlogs = async () =>{
        const response =await axios.get('/api/blog')
        setBlogs(response.data.blogs)
        console.log(response.data.blogs)
    } 

    useEffect( ()  =>{
        fetchBlogs()
    },[])
  return (
    <div className=' mx-auto px-4 md:px-0' style={{maxWidth:'1200px'}}>
        <div className='flex justify-center gap-6 my-10 '>
            <button onClick={ ()=> setMenu('All')} className={menu==='All'?'bg-black text-white py-1 px-4 rounded-sm':''}>All</button>
            <button onClick={ ()=> setMenu('startup')} className={menu==='startup'?'bg-black text-white py-1 px-4 rounded-sm':''} >Startup</button>
            <button onClick={ ()=> setMenu('branding')} className={menu==='branding'?'bg-black text-white py-1 px-4 rounded-sm':''}>Branding</button>
            {/* <button>Startup</button> */}
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 gap-y-10 mb-16 xl:mx-24 ">
            {
                blogs.filter( (item)=> menu=="All"?true:item.category===menu ).map( (item,index)=>{
                    return <BlogItem key={index} id={item._id} image={item.image} title={item.title} description={item.description} category={item.category}/>
                })  
            }
        </div>
    </div>
  )
}

export default BlogList