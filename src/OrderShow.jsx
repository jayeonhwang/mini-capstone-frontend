import { useState, useEffect } from "react"
import axios from 'axios'
import { useParams } from "react-router-dom"

export function OrderShow() {
  const [order, setOrder] = useState({
    carted_products: []
  })

  const params = useParams()
  const getOrder = () => {
    console.log("get order")
    axios.get(`http://localhost:3000/orders/${params.id}.json`).then(response => {
      console.log(response.data)
      preprocessCSS.on
    })
  }

  useEffect(getOrder, [])
  return (
    <div>
      <p>ID: {order.id}</p>
      <p>Subtotal: {order.subtotal}</p>
      <p>Tax: {order.tax}</p>
      <p>Total: {order.total}</p>

    </div>
  )
}