export default function CardComponents({ img,title,desc}) {
    return (
      <div className='flex ' >
          <img className="CardFeatures-img" src="{img}" alt="" />
          <h3 className="CardFeatures-title">{title}</h3>
          <p className="CardFeatures-desc">{desc}</p>
       
      </div>
      )
      
  }