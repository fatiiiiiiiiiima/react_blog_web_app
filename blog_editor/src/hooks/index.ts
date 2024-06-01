import { useEffect, useState } from "react"
import axios from 'axios'

export interface Blog {
    title:string,
    content:string,
    author:{
        firstname:string,
    },
    id:string,
}

export const useBlog = ({id}:{id:string})=>{
    const [blog, setblog] = useState<Blog>()
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        axios.get(`https://backend.shaa1891640.workers.dev/api/v1/blog/${id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("jwt")}`
            }
        })
          .then(response => {
                setblog(response.data.post)
                setLoading(false)
            })
    },[id])
    return {
        blog,
        loading
    }
}

export function useBlogs(){
    const [blogs, setblogs] = useState<Blog[]>([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        axios.get("https://backend.shaa1891640.workers.dev/api/v1/blog/bulk", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("jwt")}`
            }
        })
            .then(response => {
                setblogs(response.data.posts)
                setLoading(false)
            })
    },[])
    return {
        blogs,
        loading
    }
}