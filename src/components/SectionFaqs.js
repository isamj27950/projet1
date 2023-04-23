import { dataCards, dataCardsNumbers } from "../data/dataCardsFaqs";
import TitleSection from "./TitleSection";
import CardFaqs from "./cards/CardFaqs";
import CardFaqsNumbers from "./cards/CardsFaqsNumbers";


export default function SectionFaqs() {
  return (
    <section>
        <div className="py-2 px-20">
          <TitleSection 
          title="Faqs"
          subtile="Frequently Ased Questions"
          description='Duis turpis dui, fringilla mattis sem nec, fringilla euismod neque.Morbi tincidunt lacus nec tortor scelerisque pulvinar.'
          />
        </div>
        <div className="grid grid-cols-2">
          {dataCards.map((item,index)=> (
            <CardFaqs
              key={index}
              title={item.title}
              icon={item.icon}
              desc={item.text}
            />
          ))}
        </div>
        <div className=" flex justify-around py-14 mx-4 my-8 "> 
            {dataCardsNumbers.map((item,index)=> (
              <CardFaqsNumbers
                key={index}
                title={item.title}
                subtitle={item.subtitle}
                
              />
            ))}
            </div>
      </section>
  )
}
