
import { dataCards,dataCardsDown } from "../data/dataCardsTemplate";
import CardTemplateDown from "./cards/CardTemplateDown";
import CardTemplate from "./cards/CardTemplate";
import TitleSection from "./TitleSection";


export default function SectionInsideTemplate() {
  return (
    <section className=" bg-blue-100">
      <div className="py-20 px-20 bg-blue-100">
        <TitleSection 
        title="Inside Template"
        subtile="And what's inside?..."
        />
      </div>
      <div className="flex px-20 text-start py-2 "> 
        <div className="w-1/2 my-10 px-10">
          <h2 className="font-bold text-3xl py-2 ">Ad vix debet docendi</h2>
          <p className="pb-4"> Na dicta prasent occurretet has,diam theophrastus at pro.Eos etiam regio ut, persius eripuit quo id.Sit te euismod tacimates.</p>
          <div className="pt-2"> 
            {dataCards.map((item,index)=> (
              <CardTemplate
                key={index}
                title={item.title}
                icon={item.icon}
                desc={item.text}
              />
            ))}
          </div>
        </div>
        <div className="w-1/2 pl-4 ">
          <img src="img/2.jpg" alt="" className="w-fulld max-h-[70vh] rounded-lg  " />
        </div>
      </div> 
      <div className="flex px-20 text-start py-2 ">
        <div className="w-1/2 pl-4  ">
            <img src="img/3.jpg" alt="" className="my-10 py-4 w-fulld max-h-[70vh] rounded-lg  " />
        </div>
        <div className="py-14 mx-4 my-8 "> 
            {dataCardsDown.map((item,index)=> (
              <CardTemplateDown
                key={index}
                title={item.title}
                icon={item.icon}
                
              />
            ))}
            </div>
            </div>

       

    
    </section>
  

  )
}
