
export default function TitleSection({title, subtile, description}) {
  return (
    <div className="text-center">
        <p className="upercase text-purple-500 text-sm">{title}</p>
        <p className="font-bold text-2xl">{subtile}</p>
        <p className="font-light">{description}</p>
    </div>
  )
}
