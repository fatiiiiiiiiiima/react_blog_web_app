import { Link, NavLink} from "react-router-dom"
import { Avatar } from "./BlogsCard"
import { Button } from "./Button"

export const Appbar = ()=>{
    return (
        <div className=" flex justify-between border-b px-16 py-2">
            <Link to={'/'} className="font-normal text-2xl flex items-center justify-center cursor-pointer text-black hover:text-gray-700">
                <div className="flex flex-col items-center justify-center">
                    Galaxy
                </div>
            </Link>
            <div>
                <Link to={'/signin'}>
                    <Button text={"Sign in"}/>
                </Link>
                <Link to={'/signup'}> <Button text={"Sign up"}/> </Link>
                <NavLink to={'https://blog-parsing.vercel.app/'}> <Button text={"Publish"}/> </NavLink>
                <Avatar name={"Shahzad"} size={10} fontWeight="bold"/>
            </div>
        </div>
    )

}