'use client'
import { assets } from '@/Assets/assets'
import axios from 'axios'
import Image from 'next/image'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

function AddProducPgae() {
    const [image, setImage] = useState(false)
    const [data,setData] = useState({
        title:'',
        description:'',
        category:'',
        image:null,
        author:'toandx'
        
    })

    const onChangeHandler = (event) =>{
        const name = event.target.name
        const value = event.target.value
        
        setData( data=>({...data,[name]:value}) )
        console.log(data)

    }
    const onSubmitHander = async (e)=>{
        e.preventDefault();
        console.log('this is onsubmit')
        const formData = new FormData();
        formData.append('title',data.title)
        formData.append('description',data.description)
        formData.append('category',data.category)
        formData.append('image',image)
        const response = await axios.post('/api/blog',formData)
        if( response.data.success){
            toast.success(response.data.msg)
        }else{
            toast.error('Error')
        }
    }
    return (
        <div>
            <form  onSubmit={onSubmitHander}  className='pt-5 px-5 sm:pt-12 sm:pl-16'>
                <p className='text-xl pb-5'>Upload thumbnail</p>
                <label htmlFor="image">
                    <Image src={!image?assets.upload:URL.createObjectURL(image)} width={140} height={50}  alt=''/>
                </label>
                <input onChange={(e)=> setImage(e.target.files[0])} type="file" name="image" id="image" hidden required />
                <p className='text-xl mt-4'>Blog title</p>
                <input name='title' onChange={onChangeHandler}  value={data.title} className='w-full sm:w-[500px] mt-4 px-4 py-3 border' type="text"   placeholder='Blog title' required />
                <p className='text-xl mt-4'>Description</p>
                <textarea name='description'  onChange={onChangeHandler}  value={data.description} className='w-full sm:w-[500px] mt-4 px-4 py-3 border' type="text"   rows={4} placeholder='Blog Description' required />
                <p className='text-xl mt-4'>Category</p>
                <select className="w-40 mt-4 px-4 py-3 border text-gray-500" name="category"  onChange={onChangeHandler} value={data.category}>
                    <option  value="startup">Startup</option>
                    <option value="branding">Branding</option>
                    {/* <option value=""></option>
                    <option value=""></option> */}
                </select>
                <br/>
                <button type='submit' className='mt-8 w-40 h-12 bg-black text-white'>Add </button>
            </form>
        </div>
    )
}

export default AddProducPgae