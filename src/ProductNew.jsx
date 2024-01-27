import axios from "axios"
import { useEffect, useState } from 'react'


export function ProductNew(props) {

  const [suppliers, setSuppliers] = useState([])
  const [images, setImages] = useState([''])

  const createProduct = (event) => {
    event.preventDefault();
    const params = new FormData(event.target)
    props.onCreateProduct(params, () => { event.target.reset() })

    console.log('creating product...')
  }

  const productsIndex = () => {
    console.log("suppliers")
    axios.get("http://localhost:3000/suppliers.json").then(response => {
      console.log(response.data)
      setSuppliers(response.data)
    })
  }

  const addImage = () => {
    console.log('adding image')
    setImages([...images, ''])
  }

  useEffect(productsIndex, [])

  return (
    <div>
      <h1>New Product</h1>
      <form onSubmit={createProduct}>
        <p>
          Name:<input name="name" type="text" />
        </p>
        <p>
          Price:<input name="price" type="integer" />
        </p>
        <p>
          Description:<input name="description" type="text" />
        </p>
        {images.map(image => (
          <p>Image<input name="images[]" type="text" /></p>
        ))}
        <select name="supplier">
          {suppliers.map(supplier => (
            <option>{supplier.name}</option>
          ))}
        </select>
        <button type="submit"> NEW Product</button>
      </form>
      <p><button onClick={addImage}>and more image</button></p>
    </div>
  )
}
