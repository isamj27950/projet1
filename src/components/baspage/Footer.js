import TitleSection from "../TitleSection";
import { FaTwitter} from "react-icons/fa";
import {SiInstagram } from "react-icons/si";
import { HiOutlineRss } from "react-icons/hi";
import { FiFacebook ,FiGithub} from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="flex justify-center pb-6 ">
      
        < div className=" pr-12  text-start" >
          <TitleSection 
          subtile="AstroWind"
          description='Terms Privacy Policy'
          />
        </div>
        <div> 
          <div className="flex  text-start col-span-4 gap-20 ">
            <div>
              <h3 className="font-bold">Product</h3>
              <ul className="space-y-2  pt-2">
                <li>Features</li>
                <li>Security</li>
                <li>Team</li>
                <li>Entreprise</li>
                <li>Customer stories</li>
                <li>Pricing</li>
                <li>Resourses</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold">Plaform</h3>
              <ul className="space-y-2 pt-2">
                <li>Developer API</li>
                <li>Partners</li>
                <li>Atom</li>
                <li>Electron</li>
                <li>AstroWind Desktop</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold">Support</h3>
              <ul className="space-y-2 pt-2">
                <li>Docs</li>
                <li>Community Forum</li>
                <li>Professional Services</li>
                <li>Skills</li>
                <li>Status</li>
              </ul>
            </div>
            <div className="">
              <h3 className="font-bold"> Company</h3>
              <ul className="space-y-2 pt-2">
                <li>About</li>
                <li>Blog</li>
                <li>Careers</li>
                <li>Press</li>
                <li>Inclusion</li>
                <li>Social Impact</li>
                <li>Shop</li>
              </ul>
            </div>
          </div> 
          <div className="flex justify-end space-x-4 pt-8 ">
                < FaTwitter/>
                <SiInstagram />
                <FiFacebook/>
                <HiOutlineRss/>
                <FiGithub/>
          </div>
        </div> 
  
    </footer>
  )
}
