import axios from "axios"
import { useState, useEffect } from "react"

export function OrderIndex() {
  const [orderIndexs, setOrderIndexs] = useState([])

   const handleOrderIndexs = () =>{
    console.log('orderindex')
    axios.get('http://localhost:3000/orders.json').then(response => {
      console.log(response.data)
      setOrderIndexs(response.data)
    })
   }
   
   useEffect(handleOrderIndexs,[])


  return (
    <div>
      <h1>This is your orders</h1>
      {orderIndexs.map(orderIndex => (
        <div key={orderIndex.id}>
          <p><b>Order date: {orderIndex.id}</b></p>
          <p>Subtotal: {orderIndex.subtotal}</p>
          <p>Tax: {orderIndex.tax}</p>
          <p>Total:{orderIndex.total}</p>
          <h3>Product in your order:</h3>
          {orderIndex.carted_products.map(cp => (
            <div key = {cp.id}>
            <p>Name: {cp.product.name}</p>
            <p>Quantity: {cp.quantity}</p>
            <img width="300px" src={cp.product_images[0].url} />
            </div>
          ))}
          <hr />

  
        </div>
      ))}
    </div>
  
  )
}