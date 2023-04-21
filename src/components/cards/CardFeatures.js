
export default function CardFeatures({ icon,title,desc}) {
  return (
    <div className="flex space-x-4  " >     
        {icon}
        <div className="max-w-md">
            <p className="font-bold text-2xl pb-2">{title}</p>
            <p className="fond-light">{desc}</p>
        </div>
    </div>
    )
    
}


