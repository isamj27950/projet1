import TitleSection from "./TitleSection";
import CardComponent from "./cards/CardComponent";
import CardComponents from "./navigation/CardComponents";
import { dataCardComponent } from "../data/dataCardsComponent";

export default function SectionComponent() {
  return (
    <section className="bg-blue-100 py-20 px-20" >
      
          <TitleSection
          title="Components"
          subtile="Most used widgets"
          description='Provides frequently used components for building websites using Tailwind CSS'
        />
      
      <div className="grid grid-cols-3 gap-4 pt-16" >
      { dataCardComponent.map((item,index)=> (
            <CardComponent
              key={index}
              url_img={item.ficon}
              title={item.title}
              desc={item.content}
          />
      
          )
        )}
        </div>
      
        

    </section>
  )
}
