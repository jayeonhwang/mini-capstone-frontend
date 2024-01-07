export function ProductIndex(props) {
  console.log(props.products)
  return (
    <div id="product-index">
      <h1>All Products</h1>
      <div className="row">
      {props.products.map((product, index) => (
        <div key={index} className="col-sm-4">
          <div className="card" style={{ width: '18rem' }}>
            <p>
              {product.images.length > 0 && (
                <img src={product.images[0].url} alt={`Image for ${product.name}`} />
              )}
            </p>
            <div className="card-body">
              <h5>{product.name}</h5>
              <p>{product.price}</p>
              <p>{product.description}</p>
              <button onClick={() => props.onShowProduct(product)}>More info</button>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}