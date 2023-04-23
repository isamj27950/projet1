
import { dataCards } from "../data/dataCardsBlog";
import TitleSection from "./TitleSection";
import CardBlog from "./cards/CardBlog";


export default function SectionBlog() {
  return (
    <section className="py-20 px-20">
      <div className="text-start flex">
        <div className="w-1/2"> 
          <h2 className="font-bold text-3xl pb-6"> 
          Find out more content in our Blog
          </h2>
          <p>View all posts >> </p>
          </div>
          <div className="pl-64"> 
          <p>The blog is used to display Astrowind documentation. Each new article will be an important stap that you will need to know to be an expert in creationg a website using Astro+Taillwind CSS. Astro is a very interesting technology.Thanks.</p>
        </div>
       </div> 
      <div className="flex gap-2 pt-4" >
        { dataCards.map((item,index)=> (
           <CardBlog
             key={index}
             url_img={item.img}
             title={item.title}
             desc={item.content}
             />
      
             )
           )}
           </div>
         
           
   
       </section>
     )
   }

