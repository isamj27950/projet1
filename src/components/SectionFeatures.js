import { BsInfoSquare } from "react-icons/bs";
import TitleSection from "./TitleSection";

export default function SectionFeatures() {
  return (
    <div>
      <div className="bg-blue-200 py-6 flex justify center">
        <BsInfoSquare className="text-2xl"/>
        <p>Philosophie : Simplicité, Bonnes pratiques ert hautes performances.</p>

      </div>
      <div className="py-2 px_20">
        <TitleSection 
        title="Features"
        subtile="Ce que vous obtenez avec AstroWind"
        description='Lorem,fhhfdhfghdgfhhdfgdh'
        />
      </div>

    </div>
  )
}
