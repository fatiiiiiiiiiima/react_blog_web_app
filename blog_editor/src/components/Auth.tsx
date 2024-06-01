import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Labelledinput from './LabelledInput';
import { SignupType } from '@shez100x/easytypes';



const Auth = ({type}:{type: "signin" | "signup"})=>{
    const navigate = useNavigate();
    const [postInputs, setPostInputs] = useState<SignupType>({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
    })

    const fetchData = async()=> { 
        try{
            const response = await axios.post(`https://backend.shaa1891640.workers.dev/api/v1/user/${type === "signup" ? "signup" : "signin"}`, postInputs)
                const jwt = response.data.jwt;
                await localStorage.setItem("jwt", jwt)
                navigate('/')
        }catch(e){console.log(e, "e while fetching")}
    }
    return (
        <>
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 sm:w-full">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 sm:w-full">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <div className="p-2 space-y-6 md:space-y-2 sm:p-8 flex items-center flex-col">
                            <h1 className="text-3xl font-extrabold"> {type === "signup" ? "Create an account" : "Login"} </h1>
                            <p className="text-md font-bold text-slate-500"> {type === "signup" ?  "Already have an account" : "Create an account"} <span className="font-bold text-blue-400"> {type === "signup" ? <Link  to={'/signin'}> Signin </Link> : <Link  to={'/signup'}> Signup </Link> }  </span> </p>
                        </div>
                        <form action="#" className="space-y-4 md:space-y-6">
                            <div>
                                {type === 'signup' ? <Labelledinput placeholder='Enter first name' label='First name' 
                                onChange={(e)=>{setPostInputs({
                                    ...postInputs,
                                    firstname: e.target.value
                                })}}/> : null}
                            </div>
                            <div>
                                {type === 'signup' ? <Labelledinput placeholder='Enter last name' label='Last name' onChange={(e)=>{setPostInputs({
                                    ...postInputs, 
                                    lastname: e.target.value
                                })}}/> : null}
                            </div>
                            <div>
                                <Labelledinput placeholder='Shaa1891640@example.com' label='Email' onChange={(e)=>{setPostInputs({...postInputs, email:e.target.value})}}/>
                            </div>
                            <div>
                                <Labelledinput placeholder='Enter Password' label='Password' onChange={(e)=>{setPostInputs({...postInputs , password:e.target.value})}}/>
                            </div>
                            <button type="button" onClick={fetchData} className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-6">  {type === 'signup' ? "Create an Account" : "login"} </button>
                        </form>
                        </div>
                </div>
            </div>
        </>
    )
}

export default Auth