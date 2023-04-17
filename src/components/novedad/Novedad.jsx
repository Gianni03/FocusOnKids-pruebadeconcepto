import Button from "../button/Button"
import "./novedad.css"

const Novedad = ({ novedad }) => {
  return (
    <article className="novedad">
      <aside className="novedad-items">
        <img src={novedad.img} alt={novedad.subtitle} />
        <div className="novedad-content">
          <span>{novedad.title}</span>
          <h5>{novedad.subtitle}</h5>
          <span>{novedad.description}</span>
        </div>
      </aside>
      <Button text="Ver más" />
    </article >
  )
}

export default Novedad