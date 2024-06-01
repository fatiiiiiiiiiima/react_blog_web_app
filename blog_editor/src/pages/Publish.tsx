

import { Appbar } from "../components/Appbar";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';
import {useState} from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import Labelledinput from "../components/LabelledInput";
// import { SigninType } from "@shez100x/easytypes";
// import Checkbox from "../components/Checkbox";

const Publish:React.FC = ()=> {
// const [signInputs, setSignInputs] = useState<SigninType>({
// email: '',
// password: '',
// })
// const [isChecked, setIsChecked] = useState(false);

// const handleChange = (newChecked: boolean) => {
// setIsChecked(newChecked);
// }
// const fetchData = async()=> {
// try{
// const response = await axios.post(`https://backend.shaa1891640.workers.dev/api/v1/user/signin`, signInputs)
// const jwt = response.data.jwt;
// await localStorage.setItem("jwt", jwt)
// }catch(e){console.log(e, "e while fetching")}
// }


return (
<div>
<div>
<Appbar/>
<div>
<div className="mt-6 ml-52 font-thin max-w-screen-sm w-80 flex justify-center flex-col">
{/* <Labelledinput placeholder="Enter email" label="Email" onChange={(e)=>{setSignInputs({...signInputs, email:e.target.value})}}/> */}
{/* <Labelledinput type="password" placeholder="Enter Password" label="Password" onChange={(e)=>{setSignInputs({...signInputs ,password:e.target.value})}}/> */}
</div>
<div className="ml-52 mt-4 cursor-pointer w-10 h-6 flex justify-center">
{/* <Checkbox checked={isChecked} onChange={handleChange} onClick={()=>{fetchData()}}/> */}
</div>
</div>
<TextEditor/>
</div>
</div>
);
}

export default Publish;

const TextEditor: React.FC = ()=> {
const [title, setTitle] = useState<string>('');
const [content, setContent] = useState<string>('');
// const [apiResponse, setApiResponse] = useState('');
// const [id, setId] = useState('');

const modules = {
toolbar:[
[{'header': [1, 2, 3, 4, false]}],
['bold', 'italic', 'underline', 'strike'],
[{ 'list': 'ordered' }, { 'list': 'bullet' }],
['link', 'image'],
],
}
const formats = [
'header',
'bold', 'italic', 'underline', 'strike',
'list', 'bullet',
'link', 'image'
]
const navigate = useNavigate()

return (
<>
<div>
<div className="pt-8 flex justify-center w-full">
<div className="max-w-screen-lg w-full flex justify-start flex-col">
<label className="flex justify-start pl-1 font-thin"> <span>Enter</span> Title</label>
<div className="h-1/3 block w-full p-0 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 ">
<ReactQuill
className="h-10"
theme="bubble"
value={title}
onChange={setTitle}
modules={modules}
formats={formats}
/>
</div>
<div>
<ReactQuill
className="rounded-sm h-96"
theme="snow"
value={content}
onChange={setContent}
modules={modules}
formats={formats}
/>
</div>
<div>
<button onClick={async()=>{
try{
const response = await axios.post('https://backend.shaa1891640.workers.dev/api/v1/blog',{
data:{
title,
content,
}
},{
headers:{
Authorization: `Bearer ${localStorage.getItem("jwt")}`
}
})
const postId = response.data.id;
// setApiResponse(postId)
navigate(`/blog/${postId}`)
}catch(e){console.log(e, "Publish failed");}
}} type="submit" className=" mt-12 inline-flex items-center px-3 py-2.5 text-sm font-thin text-center text-white bg-green-700 rounded-2xl focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
Publish Post
</button>
</div>
</div>
</div>

</div>
<div>
</div>
</>
)
} 