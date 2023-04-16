import Novedad from "../novedad/Novedad"
import "./novedades.css"

const NOVEDADES_ITEMS = [
  {
    img: "/assets/img/otras/15.webp",
    title: "Nota",
    subtitle: "Entrenamiento de la Pelela!",
    description: "Diferentes desafíos que se presentan en el niño, y tips de ayuda para padres."
  },
  {
    img: "/assets/img/otras/6.webp",
    title: "Capacitaciones para Alumnas",
    subtitle: "Dando sentido a la Regulación Emocional",
    description: "Curso destinado a Profesionales y a alumnas de carreras a fines."
  },
  {
    img: "/assets/img/otras/14.webp",
    title: "Oferta Laboral",
    subtitle: "Buscamos Terapista Ocupacional!",
    description: "Si queres formar parte del equipo, envíanos tu CV. Válido para todo el país."
  },
  {
    img: "/assets/img/otras/7.webp",
    title: "Servicios",
    subtitle: "Musicoterapia en Focus On Kids",
    description: "En Focus On Kids, incorporamos el área de Musicoterapia."
  }
]

const Novedades = () => {
  return (
    <section className="novedad-container">
      <h1>NOVEDADES</h1>
      <section className="novedades">
        {NOVEDADES_ITEMS.map((novedad, idx) => <Novedad key={`${novedad.subtitle}-${idx}`} novedad={novedad} />)}
      </section>
    </section>
  )
}

export default Novedades