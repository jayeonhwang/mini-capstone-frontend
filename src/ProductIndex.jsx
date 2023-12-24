export function ProductIndex(props) {
  console.log(props.products)
  return (
    <div>
      {props.products.map(product =>(
        <div key ={product.id}>
          <h1>{product.name}</h1>
          <p>{product.price}</p>
          <p>{product.description}</p>
          <p>{product.images.length > 0 && (
        <img src={product.images[0].url} alt={`Image for ${product.name}`} />
      )}</p>
        <button onClick={()=> props.onShowProduct(product)}>More info</button>
        </div>
      ))}
    </div>
  )
}