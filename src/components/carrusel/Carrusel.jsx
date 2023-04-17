import { useState } from "react"
import "./carrusel.css"
import Dot from "../dots/Dot"

const CARRUSEL_IMAGES = [
  {
    img: "1.webp",
    id: "slide-0",
    defaultChecked: true
  },
  {
    img: "2.webp",
    id: "slide-1",
  },
  {
    img: "3.webp",
    id: "slide-2",
  },
  {
    img: "4.webp",
    id: "slide-3",
  },
]

const Carrusel = () => {
  const [actualImg, setActualImg] = useState(CARRUSEL_IMAGES[0].img)

  const selectNewImg = (index) => setActualImg(CARRUSEL_IMAGES[index].img)

  return (
    <section className="carrusel-container">
      <img
      src={`/assets/img/carrusel/${actualImg}`}
      alt="Carrusel"
      />
      <div className="carrusel-dots">
        {CARRUSEL_IMAGES.map((slide, idx) => <Dot key={idx} selectNewImg={selectNewImg} slide={slide} index={idx} />)}
      </div>
    </section>
  )
}

export default Carrusel