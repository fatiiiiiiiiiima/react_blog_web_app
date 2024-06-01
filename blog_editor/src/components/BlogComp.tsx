import { Blog } from "../hooks"
import { Avatar } from "./BlogsCard";
import parse from 'html-react-parser'

export const BlogComp = ({blog}:{blog? :Blog})=>{
    if(!blog){
        return <div>Loading...</div>
    }
    const blogTitle = blog.title.toUpperCase();
    if(!blog.author.firstname){
        return blog.author.firstname === "Anonymous"
    }
    const authorName = blog.author.firstname.toUpperCase();

    function stripTitleTags(newTitle?:string) {
        return newTitle?.replace(/<[^>]*>/g, '');
    }
    
    const cleanTitle = stripTitleTags(blogTitle);

    const contentValue = blog.content
    const parsedValue = parse(contentValue)
    return(
        <>
            <div className="grid grid-cols-6 px-16 w-full pt-14 ">
                <div className="col-span-4">
                    <div className="flex flex-col">
                        <div className="font-bold sm:text-xl md:text-3xl pt-5 my-5 text-slate-700"> {cleanTitle} </div>
                        <div className="font-light text-md text-slate-500"> 17 Feb,2024 </div>
                    </div>
                </div>
                <div className="col-span-2 flex justify-center sm:invisible md:visible "> 
                    <div className="font-extralight text-md font-serif my-5 py-5">
                       <span className="font-bold px-2 text-slate-700">Author</span>
                       <div className="py-2">
                            <Avatar name={authorName || ""} size={4} fontWeight="thin" />
                            <span className="text-slate-500 px-2">{blog.author.firstname || " Anonymous "}</span>
                       </div>
                       <div className="text-sm font-thin py-4 ml-2 text-slate-400">
                            Author is qualified blog writer and very proficient with skills that user represents
                       </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-6 px-16 w-full pt-4 ">
                <div className="col-span-5">
                    <div className="flex flex-col">
                        <div>
                            <div>
                             {parsedValue}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}