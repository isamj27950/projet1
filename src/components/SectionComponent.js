import TitleSection from "./TitleSection";
import CardComponents from "./navigation/CardComponents";


export default function SectionComponent() {
  return (
    <div>
              <div className="py-2 px-20 bg-blue-200">
        <TitleSection
        title="Components"
        subtile="Most used widgets"
        description='Provides frequently used components for building websites using Tailwind CSS'
        />
      </div>
      <CardComponents
      img=""
      title="Headers"
      desc="In general, headers, contain information that makes ileasier for visitors to  interact with the website."

      />
      <CardComponents
      img=""
      title="Content"
      desc="In general, headers, contain information that makes ileasier for visitors to  interact with the website."

      />
      <CardComponents
      img=""
      title="Testimonial"
      desc="In general, headers, contain information that makes ileasier for visitors to  interact with the website."

      />
    <CardComponents
      img=""
      title="Heros"
      desc="In general, headers, contain information that makes ileasier for visitors to  interact with the website."

      />
      <CardComponents
      img=""
      title="Cal-to-Action"
      desc="In general, headers, contain information that makes ileasier for visitors to  interact with the website."
      />
      <CardComponents
      img=""
      title="Contact"
      desc="In general, headers, contain information that makes ileasier for visitors to  interact with the website."
      />
      <CardComponents
      img=""
      title="Feature"
      desc="In general, headers, contain information that makes ileasier for visitors to  interact with the website."
      />
      <CardComponents
      img=""
      title="Pricing"
      desc="In general, headers, contain information that makes ileasier for visitors to  interact with the website."
      />
      <CardComponents
      img='img/4.png' alt="mur blanc avec horloge"
      title="Footers"
      desc="In general, headers, contain information that makes ileasier for visitors to  interact with the website."
      />



    </div>
  )
}
