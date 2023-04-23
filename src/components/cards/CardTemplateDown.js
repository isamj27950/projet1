

export default function CardTemplate({ icon,title,}) {
    return (
      <div className="flex space-x-4 py-2 my-2 ">
        <div className="flex flex-col items-center">
          <div className="text-2xl ">{icon} </div>
        </div>
        <div className="pb-8 ">
          <p className="font-bold ">{title}</p>
         
        </div>
       </div> 
       );
  }
  
     
    