export default function CardFaqs({ icon,title,desc,}) {
    return (
      <div className="flex space-x-4 text-start pt-4 " >     
          <div className="flex flex-col items-center">
            <div  className="text-2xl ">{icon} </div>
            
          </div>
          <div className="pb-8">
            <p className="text-2xl font-bold pb-2">{title}</p>
            <p className="fond-light">{desc}</p>
          </div>
      </div>
    );
  }