import React from 'react'
import './style.css'
import FlashCard from './FlashCard'
const OffrePromo = ({productItems, addToCart}) => {
  return (
    <section className='flash'>
        <div className='container'>
          <div className='heading f_flex'>
            <i className='fa fa-percent'></i>
            <h1>BIG PROMOTION</h1>
          </div>
          <FlashCard productItems={productItems} addToCart={addToCart}/>
        </div>
      </section>
  )
}

export default OffrePromo
