import ButtonWithIcon from "./button/ButtonWithIcon";



export default function SectionAstro() {
    return (
   <section className="px-20 py-20">
        <div className="bg-white p-4 shadow-lg rounded-md mx-96 py-2 pb-2 my-12">
             <h2 className="font-bold text-3xl pb-6"> 
            Astro+TaillwindCSS</h2>
            <p className="" > Be very surprised by these huge fake numbers you are seeing on this page.Don't waste more time!:P </p>
            <div className="pt-6 pb-2 flex justify-center space-x-5"> 
            <ButtonWithIcon 
            title = 'Get template'  
            bgColor="bg-blue-700"
            textColor= 'text-white' 
            />
        </div>
        </div>
    
    </section>
    )
}
