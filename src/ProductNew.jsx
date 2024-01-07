import axios from "axios"

export function ProductNew(props) {
  const createProduct = (event) => {    
    event.preventDefault();
    const params = new FormData(event.target)    
    props.onCreateProduct(params, () => {event.target.reset()})
    
    console.log('creating product...')
  }
return(
  <div>
    <h1>New Product</h1>
    <form onSubmit={createProduct}>
      <p>
      Name:<input name = "name" type="text"/>
      </p>
      <p>
        Price:<input name= "price" type="integer"/>
      </p>
      <p>
        Description:<input name="description" type="text"/>
      </p>
      <p>
        inventory:<input name="inventory" type="integer"/>
      </p>
      {/* <p>
        Supplier:<input name="supplier_id" type="integer"/>
      </p> */}

      <button type="submit"> NEW Product</button>
    </form>
  </div>
)
}
