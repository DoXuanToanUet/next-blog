import mongoose from "mongoose";

export const ConnectDB = async () =>{
    await mongoose.connect('mongodb+srv://toandx:doxuantoan97latoi@cluster0.yruk8.mongodb.net/')
    console.log('db connected')
}