import { dataCards } from "../data/dataCardsStep";
import CardStep from "../components/cards/CardStep";
import TitleSection from "./TitleSection";


export default function SectionStep() {
  return (
    <section className="flex px-20 text-start py-20" >
        <div className="w-1/2">  
          <h2 className="font-bold text-3xl pb-6"> 
          Get your dream website up<br />  and running in no time with <br /> with AstrWind.
          </h2>
          <div className="">
          {dataCards.map((item,index)=> (
            <CardStep
              key={index}
              title={item.title}
              icon={item.icon}
              step={item.step}
              desc={item.text}
            />
          ))}
          </div>
        </div>  
        <div className="w-1/2 ">
            <img src="img/4.jpg" alt="" className="w-fulld max-h-[95vh]  " />
        </div>
    </section>
  )
}
