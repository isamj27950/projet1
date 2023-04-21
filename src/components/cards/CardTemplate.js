
export default function CardTemplate(title, desc) {
  return (
    <div className='flex ' >
    <p className='font-bold' >{title}</p>
    <p>{desc}</p>
</div>

  )
}