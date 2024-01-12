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
          
          <p><b>Order date: {orderIndex.created_at}</b></p>
          <p>Subtotal: {orderIndex.subtotal}</p>
          <p>Tax: {orderIndex.tax}</p>
          <p>Total:{orderIndex.total}</p>
        </div>
      ))}
    </div>
  
  )
}