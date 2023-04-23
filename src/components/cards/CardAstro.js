
export default function CardAstro({title,desc}) {
  return (
    <div className="bg-white p-4 shadow-lg rounded-md mx-2 pb-2 px-14 my-2">
      <div className="flex items-center space-x-3 " >     
        <p className="font-bold text-lg ">{title}</p>
      </div>
      <p className="fond-light text-b text-start my-4 ">{desc}</p>
    </div>
    )    
}




