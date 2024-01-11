import axios from 'axios'
export function ProductShow(props) {
  const addToCart =(event) => {
    event.preventDefault()
    const params = new FormData(event.target)
    axios.post('http://localhost:3000/cart.json', params).then(response => {console.log(response.data)})

    // props.onUpdateProduct(props.product.id, params, () => event.target.reset())

  }
  const handleClick = () => {
    props.onDestroyProduct(props.product)
  }



  return(
    <div>
      <p><b>Name:</b> {props.product.name}</p>
      <p><b>Price:</b> {props.product.price}</p>
      <p><b>Description:</b> {props.product.description}</p>

      <form onSubmit={addToCart}>
      <div>
        <input name = "product_id" type="hidden" defaultValue={props.product.id}/>
      </div>
      <div>
        Quantity: <input name = "quantity" type="text" />
      </div>
      <button type='submit'>Add to Cart</button>

      </form>
      
      <button onClick={handleClick}>Destroy product</button>

    </div>
  )
}