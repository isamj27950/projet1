
export default function CardTemplate({ icon,title,desc}) {
  return (
    <div className="flex space-x-4  ">
      <div className="flex flex-col items-center">
        <div className="text-2xl ">{icon} </div>
      </div>
      <div className="pb-8">
        <p className="font-bold">{title}</p>
        <p className="fond-light">{desc}</p>
      </div>
     </div> 
     );
}

   
  