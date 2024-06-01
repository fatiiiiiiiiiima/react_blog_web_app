import { ChangeEvent } from "react"
interface inputType {
    placeholder: string,
    label: string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void,
    type?: string,
}
const Labelledinput = ({onChange, placeholder, label, type}: inputType)=>{
    return ( 
        <div>
            <div>
                <label htmlFor="" className="block mb-2 text-sm font-thin text-gray-900 dark:text-white">{label}</label>
                <input type={type} onChange={onChange} placeholder={placeholder} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg ocus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
            </div>
    
        </div>
     );
}

export default Labelledinput;