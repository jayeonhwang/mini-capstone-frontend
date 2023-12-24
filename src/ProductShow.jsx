export function ProductShow(props) {
  const handleSubmit =(event) => {
    event.preventDefault()
    const params = new FormData(event.target)
    props.onUpdateProduct(props.product.id, params, () => event.target.reset())

  }
  const handleClick = () => {
    props.onDestroyProduct(props.product)
  }

  return(
    <div>
      <h1>Prodcut information</h1>
      <p><b>Name:</b> {props.product.name}</p>
      <p><b>Price:</b> {props.product.price}</p>
      <p><b>Description:</b> {props.product.description}</p>
      <form onSubmit={handleSubmit}>
        <p>Name: <input defaultValue={props.product.name} name="name" type="text"/></p>
        <p>Price: <input defaultValue={props.product.price} name="price" type="text"/></p>
        <p>Description: <input defaultValue={props.product.description} name="name" type="text"/></p>
        <button type ="submit">Update</button>
      </form>
      <button onClick={handleClick}>Destroy product</button>

    </div>
  )
}