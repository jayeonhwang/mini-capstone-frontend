import axios from "axios"
import { useState, useEffect } from "react"

export function ShopingCart() {
  const [cartedProduct, setCartedProduct] = useState([])

  const handleCartedProducts = () =>{
    console.log("cartedProduct")
    axios.get("http://localhost:3000/cart.json").then(response => {
      console.log(response.data)
      setCartedProduct(response.data)
  })
  }

  const createOrder = () => {
    // console.log("creating order")
    axios.post('http://localhost:3000/orders.json').then(respones => {
      console.log(response.data);
    })
  }

  useEffect(handleCartedProducts, [])


  return(
    <div>
      <h1>shopping cart</h1>

      {cartedProduct.map(cartedProduct => (
        <div key={cartedProduct.id}>
        <p>name:{cartedProduct.product.name}</p>
        <p>price:{cartedProduct.product.price}</p>
        <p>quantity:{cartedProduct.quantity}</p>
        </div>
      ))}
      <p><button on onClick={createOrder}>Buy</button></p>
    </div>
  )
}