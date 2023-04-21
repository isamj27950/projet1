import CardTemplate from "./cards/CardTemplate";
import TitleSection from "./TitleSection";


export default function SectionInsideTemplate() {
  return (
    <div>
<div className="py-2 px-20 bg-blue-200">
        <TitleSection 
        title="Inside Template"
        subtile="And what's inside?..."
        
        />
      </div>
    <CardTemplate
    title="Per ei quaeque sensibus"
    desc="Ex usu illum iudico modestie.Pro ne agram facete mediocritatem, ridens ladore facete mea ei.Pro id apeiran dignissim."
    />  
     <CardTemplate
    title="Per ei quaeque sensibus"
    desc="Ex usu illum iudico modestie.Pro ne agram facete mediocritatem, ridens ladore facete mea ei.Pro id apeiran dignissim."
    />  
     <CardTemplate
    title="Per ei quaeque sensibus"
    desc="Ex usu illum iudico modestie.Pro ne agram facete mediocritatem, ridens ladore facete mea ei.Pro id apeiran dignissim."
    />  
   
    <div className="pt-10">
    <img src='img/3.png' alt="outeille et casque sur fond jaune" />
    </div>
    <div className="pt-10">
    <img src='img/3.png' alt="Avant d'un mini blus" />
    </div>
    <CardTemplate
    title="Per ei quaeque sensibus"
    desc="Ex usu illum iudico modestie.Pro ne agram facete mediocritatem, ridens ladore facete mea ei.Pro id apeiran dignissim."
    />  
     <CardTemplate
    title="Per ei quaeque sensibus"
    desc="Ex usu illum iudico modestie.Pro ne agram facete mediocritatem, ridens ladore facete mea ei.Pro id apeiran dignissim."
    />  
     <CardTemplate
    title="Per ei quaeque sensibus"
    desc="Ex usu illum iudico modestie.Pro ne agram facete mediocritatem, ridens ladore facete mea ei.Pro id apeiran dignissim."
    />  
</div>

  )
}
