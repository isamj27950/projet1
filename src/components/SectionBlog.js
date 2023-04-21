import CardBlog from "./cards/CardBlog";
import TitleSection from "./TitleSection";


export default function SectionBlog() {
  return (
    <div>
              <div className="py-2 px-20">
        <TitleSection
     
        subtile="Find out more content in our Blog"
        description='View all posts>>'
        />
      </div>
      <p>The blog is used to display Astrowind documentation.</p>
    <CardBlog
    img=""
    title="Get started Astrowind to create a website using Astro and Taillwind CSS"
    desc="Set sit clilium parium eiusmod nulia partur ipsum.sit labourn anin qui moitl tempor paritur."
    />
    <CardBlog
    img=""
    title="Get started Astrowind to create a website using Astro and Taillwind CSS"
    desc="Set sit clilium parium eiusmod nulia partur ipsum.sit labourn anin qui moitl tempor paritur."
    />
    <CardBlog
    img=""
    title="Get started Astrowind to create a website using Astro and Taillwind CSS"
    desc="Set sit clilium parium eiusmod nulia partur ipsum.sit labourn anin qui moitl tempor paritur."
    /><CardBlog
    img=""
    title="Get started Astrowind to create a website using Astro and Taillwind CSS"
    desc="Set sit clilium parium eiusmod nulia partur ipsum.sit labourn anin qui moitl tempor paritur."
    />
    
    

    </div>
  )
}
