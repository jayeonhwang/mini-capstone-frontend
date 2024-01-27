import { useState } from "react"


export function ProductIndex(props) {
  console.log(props.products)
  const [searchTerm, setSearchterm] = useState("")


  return (
    <div id="product-index">
      <h1>All Products</h1>
      <p>
        Search:<input type="text" value={searchTerm} onChange={(event) => setSearchterm(event.target.value)} list="name" />
      </p>
      <datalist id="name">
        {props.products.map(product => (
          <option>{product.name}</option>
        ))}
      </datalist>
      {searchTerm}

      <div className="row">
        {props.products.filter(
          product => product.name.toLowerCase()
            .includes(searchTerm.toLowerCase())
        )
          .map(product => (
            <div key={product.id} className="col-sm-4">
              <div className="card" style={{ width: '18rem' }}>
                <p>
                  {product.images.length > 0 && (
                    <img src={product.images[0].url} alt={`Image for ${product.name}`} />
                  )}
                </p>
                <div key={product.id} className="card-body">
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