import React from 'react'
import './container.css'
import Header from './header/Header'
import Footer from './footer/Footer'

export default function Container() {
  return (
    <div  className='flexWrapper'>
      <Header/>
      <main>
        <p><span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum laborum ab explicabo blanditiis quae, asperiores nihil, sint provident dolores pariatur accusamus at omnis natus quisquam aspernatur mollitia esse corrupti eligendi!</span><span>Iure fuga facilis dolorum explicabo eos voluptas sapiente enim at magnam qui, ullam nostrum corrupti quidem quas quisquam obcaecati nihil nesciunt quis quae ea quasi accusamus sed, alias distinctio? Vitae!</span></p>
        <p><span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum laborum ab explicabo blanditiis quae, asperiores nihil, sint provident dolores pariatur accusamus at omnis natus quisquam aspernatur mollitia esse corrupti eligendi!</span><span>Iure fuga facilis dolorum explicabo eos voluptas sapiente enim at magnam qui, ullam nostrum corrupti quidem quas quisquam obcaecati nihil nesciunt quis quae ea quasi accusamus sed, alias distinctio? Vitae!</span></p>
        <p><span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum laborum ab explicabo blanditiis quae, asperiores nihil, sint provident dolores pariatur accusamus at omnis natus quisquam aspernatur mollitia esse corrupti eligendi!</span><span>Iure fuga facilis dolorum explicabo eos voluptas sapiente enim at magnam qui, ullam nostrum corrupti quidem quas quisquam obcaecati nihil nesciunt quis quae ea quasi accusamus sed, alias distinctio? Vitae!</span></p>
      </main>
      <Footer/>
    </div>
  )
}
