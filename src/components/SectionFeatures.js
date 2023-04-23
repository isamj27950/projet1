import { BsInfoSquare } from "react-icons/bs";
import TitleSection from "./TitleSection";
import CardFeatures from "./cards/CardFeatures";
import { dataCards } from "../data/dataCardsFeatures";

export default function SectionFeatures() {
  
  return (
    <section className="py-20 ">
      <div className="bg-blue-200 py-10 flex justify-center    space-x-5">
        <BsInfoSquare className="text-2xl"/>
        <p>Philosophie : Simplicité, Bonnes pratiques ert hautes performances.</p>

      </div>
      <div className="px-20 py-20">
        <TitleSection 
        title="Features"
        subtile="Ce que vous obtenez avec AstroWind"
        description='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque ipsaquae.'
        />
      </div>
      <div className="px-20 pb-12">
      <div className="grid grid-cols-2 gap-y-8 text-start" >
      {
          dataCards.map((item,index)=> (
            <CardFeatures
            key={index}
              icon={item.icon}
              title={item.title}
              desc={item.desc}
          />
          )
        )}
        </div>
      </div>
    </section>  
  )
}
