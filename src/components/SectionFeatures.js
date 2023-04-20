import { BsInfoSquare } from "react-icons/bs";
import TitleSection from "./TitleSection";
import CardFeatures from "./CardFeatures";


export default function SectionFeatures() {
  return (
    <div>
      <div className="bg-blue-200 py-10 flex justify center space-x-5">
        <BsInfoSquare className="text-2xl"/>
        <p>Philosophie : Simplicité, Bonnes pratiques ert hautes performances.</p>

      </div>
      <div className="py-2 px-20">
        <TitleSection 
        title="Features"
        subtile="Ce que vous obtenez avec AstroWind"
        description='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque ipsaquae.'
        />
      </div>
      <div>
        <CardFeatures/>
      </div>
      


    </div>
  )
}
