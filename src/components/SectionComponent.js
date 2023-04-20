import TitleSection from "./TitleSection";


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
    </div>
  )
}
