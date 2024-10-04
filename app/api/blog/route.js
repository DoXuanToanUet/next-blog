import { ConnectDB } from "@/lib/config/db"
import BlogModel from "@/lib/models/BlogModel";
import {writeFile} from 'fs/promises'
const { NextResponse } = require("next/server")
const fs= require('fs')
const LoadDB = async () =>{
    await ConnectDB();
}


LoadDB(); 

// Api endpoint to get all blogs
export async function GET(request){
    console.log('blog get hit')
    const blogId = request.nextUrl.searchParams.get('id')

    if( blogId){
        const blog = await BlogModel.findById(blogId)
        return NextResponse.json(blog)
    } else{
        const blogs = await BlogModel.find({})
        return NextResponse.json({blogs})
    }   

   
}

export async function POST(request) {
    try {
        const formData = await request.formData();
        const timestamp = Date.now();

        const image = formData.get('image');
        console.log('Received image:', image);
        // Kiểm tra nếu `image` tồn tại và là một `Blob`
        if (image && image instanceof Blob) {
            const buffer = Buffer.from(await image.arrayBuffer());
            const path = `./public/${timestamp}_${image.name}`;
            await writeFile(path, buffer);
            const imgUrl = `/${timestamp}_${image.name}`;

            const blogData = {
                title: formData.get('title'),
                description: formData.get('description'),
                category: formData.get('category'),
                image: imgUrl,
                author: formData.get('author'),
            };

            await BlogModel.create(blogData);
            console.log('Blog saved');
            return NextResponse.json({ success: true, msg: 'Blog added' });
        } else {
            throw new Error('Invalid image file');
        }
    } catch (error) {
        console.error('Error saving blog:', error);
        return NextResponse.json({ success: false, msg: 'Error adding blog' });
    }
}

// Create API endpoint to delete Blog
export async function DELETE(request){
    const id = await request.nextUrl.searchParams.get('id')
    const blog = await BlogModel.findById(id)
    fs.unlink(`./public${blog.image}`,()=>{})
    await BlogModel.findByIdAndDelete(id)
    return NextResponse.json({ msg:'Blog Deleted'});
}
