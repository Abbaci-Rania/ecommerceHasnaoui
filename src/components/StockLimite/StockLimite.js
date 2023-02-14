import React from 'react'
import './style.css'
import FlashCard from './FlashCard'
const StockLimite = ({productItems, addToCart}) => {
  return (
    <section className='flash'>
        <div className='container'>
          <div className='heading f_flex'>
            <i className='fa fa-bolt'></i>
            <h1>Stock Limite</h1>
          </div>
          <FlashCard productItems={productItems} addToCart={addToCart}/>
        </div>
      </section>
  )
}

export default StockLimite
