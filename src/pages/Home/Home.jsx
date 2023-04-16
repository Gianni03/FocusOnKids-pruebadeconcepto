import Container from '../../components/layout/Container'
import Carrusel from '../../components/carrusel/Carrusel'
import Novedad from '../../components/novedades/Novedades'


const Home = () => {
  return (
    <Container>
      <Carrusel />
      <Novedad />
    </Container>
  )
}

export default Home