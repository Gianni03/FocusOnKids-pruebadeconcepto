import React from 'react'
import './footer.css'

export default function Footer() {
  return (

    <footer className='footer'>

      <div className="footer-body">
      <div className='footer-col'>
        <ul>
        <h2>EXPLORA</h2>
          <li><a href="http://">Acerac De</a></li>
          <li><a href="http://">Servicios</a></li>
          <li><a href="http://">Capacitaciones</a></li>
          <li><a href="http://">News</a></li>
          <li><a href="http://">Contacto</a></li>
          <li><a href="http://">Blog</a></li>
        </ul>
      </div>

      <div className='footer-col'>
        <ul>
        <h2>SERVICIOS</h2>
          <li><a href="http://">Terapia Ocupacional</a></li>
          <li><a href="http://">Evaluaciones</a></li>
          <li><a href="http://">Videoconsultas</a></li>
          <li><a href="http://">Supervisiones</a></li>
          <li><a href="http://">Grupos de Estudio</a></li>
        </ul>
      </div>

      <div className='footer-col'>
        <div className='footer-pagos'>
          <ul>
          <h2>MEDIO DE PAGO</h2>
          <li><a href="http://" target="_blank" rel="noopener noreferrer"><img src="/assets/img/ico/ftarj.svg" alt="" /></a></li>
          <li><a href="http://" target="_blank" rel="noopener noreferrer"><img src="/assets/img/ico/fpp.svg" alt="" /></a></li>
          <li><a href="http://" target="_blank" rel="noopener noreferrer"><img src="/assets/img/ico/fefec.svg" alt="" /></a></li>
          </ul>
        </div>
        <ul>
          <h2>COLABORACIÓN</h2>
        </ul>
        <ul>
          <h2>TRABAJA CON NOSOTROS</h2>
        </ul>
      </div>

      <div className='footer-col'>
        <div className='footer-redes'>
          <ul>
          <h2>REDES SOCIALES</h2>
            <li><a href="http://" target="_blank" rel="noopener noreferrer"><img src="/assets/img/ico/fface.svg" alt="" /></a></li>
            <li><a href="http://" target="_blank" rel="noopener noreferrer"><img src="/assets/img/ico/fins.svg" alt="" /></a></li>
            <li><a href="http://" target="_blank" rel="noopener noreferrer"><img src="/assets/img/ico/fwap.svg" alt="" /></a></li>
            <li><a href="http://" target="_blank" rel="noopener noreferrer"><img src="/assets/img/ico/flin.svg" alt="" /></a></li>
          </ul>
        </div>
        <div>
          <ul>
          <h2>CONTACTO</h2>
            <li><img src="/assets/img/ico/floc.svg" alt="" /> Sarmiento 591 - Com. Riv. Chubut - Argentina</li>
            <li><img src="/assets/img/ico/farr.svg" alt="" /> focusonkids.bc@gmail.com</li>
            <li><img src="/assets/img/ico/fwap.svg" alt="" /> +54 9 297 4924433</li>
          </ul>
        </div>
      </div>

      </div>

      <div className="footer-quarzo">
      <h3>Realizado por Quarzo</h3>
      <h3>COPYRIGTH FOCUSONKIDS - 2022. TODOS LOS DERECHOS RESERVADOS</h3>
      </div>

    </footer>
  )
}
