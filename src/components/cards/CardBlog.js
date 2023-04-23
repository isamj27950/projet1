export default function CardBlog({url_img,title,desc}) {
    return (
      <div className= " mx-2 pb-2 px-14 my-2">
        <div className="   " >     
          <img src= {url_img} alt='' className="m-auto shadow-lg rounded-md "/>
          
        </div>
        <p className="font-bold text-lg ">{title}</p>
        <p className="fond-light text-b text-start my-4 ">{desc}</p>
      </div>
      )    
  }