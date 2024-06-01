import { useState } from "react";
import { NavLink } from "react-router-dom"
import Modal from 'react-modal'
import axios from "axios";

interface blogCardTypes {
    title: string,
    content:string,
    publishedDate:string,
    authorName:string,
    id:string,
    likes?:number,
    dislikes?:number,
    comments?:number,
}
const BlogsCard = ({
    id,
    title,
    content,
    publishedDate,
    authorName,
}:blogCardTypes)=>{
    const description = content.slice(0, 200) + '...'
    const [showModal, setShowModal] = useState(false);

    const handleDelete = async () => {
        try {
            await axios.delete(`https://backend.shaa1891640.workers.dev/api/v1/blog/${id}`);
            // Optionally, you can also refresh the page or update the blog list after deletion
        } catch (error) {
            console.error('Error deleting post:', error);
        }
        setShowModal(false);
    };
    return (
        <>
            {/* <NavLink to={`https://blog-parsing.vercel.app/blog/${id}`}> */}
        <div className="relative">
            <div className="w-full bg-white dark:border md:mt-4 sm:max-w-3xl lg:p-6 sm:w-full p-10 cursor-pointer">
            <div className="flex flex-col justify-center border-b border-slate-400">
                <div className="text-sm font-light mt-1 flex flex-row justify-between">
                    <div>
                        <Avatar name={authorName} size={6} fontWeight="light"/> {authorName} {publishedDate}
                    </div>
                    <div className="flex justify-center">
                        <button onClick={() => setShowModal(true)}>  
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                            </svg>
                        </button>
                    </div>
                </div>
                <NavLink to={`https://blog-parsing.vercel.app/blog/${id}`}>
                    <div className="font-bold text-2xl my-3" dangerouslySetInnerHTML={{__html:title}}></div>
                </NavLink>
                <div className="my-1 text-md font-thin" 
                    dangerouslySetInnerHTML={{__html:description}}
                >
                </div>
                <div className="text-slate-400 font-thin">
                    {Math.ceil(content.length/100) + " " +  "min read"}
                </div>
            </div>
            </div>
            {/* </NavLink> */}
            <div>
                <Modal isOpen={showModal} onRequestClose={() => setShowModal(false)} className="absolute top-0 left-0 w-full h-full">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
                        <h2 className="text-xl font-semibold mb-4">Confirm Deletion</h2>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">Are you sure you want to delete this post?</p>
                        <div className="flex justify-end space-x-4">
                            <button onClick={handleDelete} className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none">Yes, Delete</button>
                            <button onClick={() => setShowModal(false)} className="px-4 py-2 bg-gray-400 text-gray-800 rounded-md hover:bg-gray-500 focus:outline-none">Cancel</button>
                        </div>
                    </div>
                </Modal>
            </div>
        </div>
        </>
    )
}

export default BlogsCard

export function Avatar({name, size=6, fontWeight,}:{name: string, size:number, fontWeight:string}){
    return (

        <div className={`relative inline-flex items-center justify-center w-8 h-8 w-${size} h-${size} overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600`}>
            <span className={`text-sm font-${fontWeight} text-gray-600 dark:text-gray-300`}>{name[0]}</span>
        </div>

    )
}