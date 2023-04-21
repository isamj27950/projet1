
export default function CardComponent({title,desc,url_img}) {
    return (
      <div className="bg-white p-4 shadow-lg rounded-md">
      <div className="flex items-center space-x-3 pb-2 " >     
         <img src= {url_img} alt='' className="w-6"/>
              <p className="font-bold text-lg ">{title}</p>
              <p className="fond-light text-sm">{desc}</p>
         
      </div>
      </div>
      )
      
  }
  
  