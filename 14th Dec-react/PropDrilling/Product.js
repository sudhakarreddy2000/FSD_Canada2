import Productslist from './Productslist'
import React from 'react'

function Product({data}) {
  return (
    <div>
      <h1>Product Component</h1>
      <Productslist data={data}/>
    </div>
  )
}
export default Product