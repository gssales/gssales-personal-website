import './Card.scss'

export interface CardProps {
  imgSrc: string
  title: string
  description: string
  href: string
}

function Card(props: CardProps) {
  return (
    <div className="card" onClick={() => window.open(props.href, "_self")}>
      <img src={props.imgSrc} alt={props.imgSrc}/>
      <div className="content">
        <h4>{ props.title }</h4>
        <p>{ props.description }</p>
      </div>
    </div>
  )
}

export default Card