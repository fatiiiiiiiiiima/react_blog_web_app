

export const Button = ({text}:{text: "Sign up" | "Sign in" | "Publish"})=>{
    return (
        <>
            <button type="button" className={` ${text === "Publish" ? "text-white": "text-green-700"} ${text === "Publish" ? "bg-green-700": "bg-transparent"} hover:border-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-4 py-2 text-center me-2 mr-5`}>{text}</button>
        </>
    )
}