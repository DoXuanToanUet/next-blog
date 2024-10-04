import Sidebar from "@/Components/AdminComponents/Sidebar";
import Image from "next/image";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Layout( {children} ){
    return (
        <>
            <div className="flex">
                <ToastContainer/>
                <Sidebar/>
                <div className="flex flex-col w-full">
                    <div className="flex items-center justify-between w-full py-3 max-h-[60px] px-12 border-b border-black">
                        <h3>Admin Pannel</h3>
                        {/* <Image src={}/> */}
                    </div>
                    {children}
                </div>
                
            </div>
            
        </>
    )
}