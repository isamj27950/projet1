import Button from "./button/Button";
import ButtonWithIcon from "./button/ButtonWithIcon";


export default function Hero() {
  return (
    <div>
        <h1 className="text-4xl font-black py-2 px-3"> Free template for create your website with <span className="text-indigo-600 pt-14 text-center ">Astro 2.0 </span>+ Tailwind CSS </h1>
        <p className="pt-8 mx-56 text-lg ">  <span className="font semi-bold">AstroWind </span> is a free, customizable and production-ready template for Astro 2.0 + Tailwind Css. Suitable for Startups, small Buniness, sass Websites, professional Portofolios, marketing Websites, landing Pages & Blogs.
        </p>
        <div className="pt-10 flex justify-center space-x-5"> 
          <ButtonWithIcon 
          title = 'Get template'  
          bgColor="bg-blue-700"
          textColor= 'text-white' 
          />
          <Button title = 'Learn more' />
        </div>
        <div className="pt-10">
          <img src='img/1.png' alt="cosmonaute  dans l'espace" />
        </div>
    </div>
  )
}