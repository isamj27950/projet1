import { BsXDiamondFill } from "react-icons/bs";
import { SiTailwindcss} from "react-icons/si";
import { BsArrowLeftRight } from "react-icons/bs";
import { HiLightBulb } from "react-icons/hi";
import { VscChecklist } from "react-icons/vsc";
import { IoIosRocket } from "react-icons/io";

export const dataCards = [
    {
      title:"Astro+Taillwind CSS Integration",
      desc:"A seamless integration between two.great framewoks that offer high productivity, performance and versatility.",
      icon:(<SiTailwindcss className="bg-blue-800 rounded-full text-white text-3xl p-2" />),
    },
    {
      title:"Excellent Page",
      desc:" Having a good page speed impacts organic search ranking, improves user experience (UI/UX) and increase conversion rates. ",
      icon:(<IoIosRocket className="bg-blue-800 rounded-full text-white text-3xl p-2" />),
    },
    {
      title:"Ready-to-use Components",
      desc:"Widgets made with Tailwind CSS ready to be used in Marketing Websites, SaaS, Blogs Personal Profiles, Small Business..",
      icon:(<BsXDiamondFill className="bg-blue-800 rounded-full text-white text-3xl p-2" />),
    },
    {
      title:"Search Engine Optimization(SEO)",
      desc:"A seamless integration between two.great framewoks that offer high productivity, performance and versatility.",
      icon:(<BsArrowLeftRight className="bg-blue-800 rounded-full text-white text-3xl p-2" />),
    },{
      title:"Best pratices",
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ducimus aspernatur iste repellendus commodi distinctio dolore! Quisquam optio cum molestiae?",
      icon:(<VscChecklist className="bg-blue-800 rounded-full text-white text-3xl p-2" />),
    },
    {
      title:"Open to new ideas and contributions",
      desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ducimus aspernatur iste repellendus commodi distinctio dolore! Quisquam optio cum molestiae?",
      icon:(< HiLightBulb className="bg-blue-800 rounded-full text-white text-3xl p-2" />),
    },


  ]