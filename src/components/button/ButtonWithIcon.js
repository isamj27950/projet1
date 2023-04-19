import { HiOutlineDownload  } from "react-icons/hi";

export default function ButtonWithIcon({title, bgColor, textColor }) {
  return (
   <button className={`border rounded-full px-5 py-2 flex items-center ${bgColor} ${textColor}`} >
    <HiOutlineDownload className ='mr-2'/>
    
    {title}
    </button>
  )
}
