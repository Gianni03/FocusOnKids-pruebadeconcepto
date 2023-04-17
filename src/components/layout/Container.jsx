import './container.css'
import Header from '../header/Header'
import Footer from '../footer/Footer'

export default function Container({children}) {
  return (
    <div  className='flexWrapper'>
      <Header/>
      <main>
        {children}
      </main>
      <Footer/>
    </div>
  )
}
