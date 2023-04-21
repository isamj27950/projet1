import CardGet from "./cards/CardGet";
import TitleSection from "./TitleSection";

function SectionGet() {
  return (
    <div>
        <div className="py-2 px-20">
        <TitleSection 
       
        subtile="Get your dream website up and running in no time with witj AstrWind."
        description='Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque ipsaquae.'
        />
      </div>
      <CardGet
      title="Step 1:Dowload"
      desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ducimus aspernatur iste repellendus commodi distinctio dolore! Quisquam optio cum molestiae"
      />
      <CardGet
      title="Step 2:Add content"
      desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ducimus aspernatur iste repellendus commodi distinctio dolore! Quisquam optio cum molestiae"
      />
      <CardGet
      title="Step 3:Customize styles"
      desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ducimus aspernatur iste repellendus commodi distinctio dolore! Quisquam optio cum molestiae"
      />
      <CardGet
      title="Ready!"
      />
      <div className="pt-10">
    <img src='img/4.png' alt="mur blanc avec horloge" />
    </div>


    </div>
  )
}

export default SectionGet