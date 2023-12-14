import Product from './Product'
import React from 'react'

function Home({data}) {
  return (
    <div>
      <h1>Home Component</h1>
      <Product data={data}/>
    </div>
  )
}
export default Home