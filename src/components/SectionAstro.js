import TitleSection from "./TitleSection";
import ButtonWithIcon from "./button/ButtonWithIcon";


export default function SectionAstro() {
    return (
    <div>
        <div className="py-2 px-20">
            <TitleSection 
            subtile="Astro+TaillwindCSS"
            description="Be very surprised by these huge fake numbers you are seeing on this page.Don't waste more time!:P"
            />
        </div>
        <div className="pt-10 flex justify-center space-x-5"> 
            <ButtonWithIcon 
            title = 'Get template'  
            bgColor="bg-blue-700"
            textColor= 'text-white' 
            />
        </div>
    </div>
    )
}
