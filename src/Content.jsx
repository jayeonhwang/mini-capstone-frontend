import axios from 'axios'
import {useState, useEffect} from 'react'
import { ProductIndex } from './ProductIndex'
import{ ProductNew } from './ProductNew'
import { ProductShow } from './ProductShow'
import { Modal } from './Modal'
import { Signup } from './Signup'
import { Login } from './Login'
import { About } from './About'
import { Routes, Route } from 'react-router-dom'



export function Content() {
  const [products, setProduct] = useState([])
  const [isProductShowVisible, setIsProductShowVisible] = useState(false)
  const [currentProduct, setCurrentProduct] = useState({})

  const handleGetProducts =() => {
    console.log('in get products');
    axios.get('http://localhost:3000/products.json').then(response => {  console.log(response.data)
      setProduct(response.data)
    })
  }
  
  const handleCreateProduct = (params, successCallback) => {
    console.log("handleCreateProduct", params);
    axios.post("http://localhost:3000/products.json").then(response => {
      setProduct([...products, response.data])
      successCallback()
    })
  }

  const handleShowProduct = (product) => {
    console.log("handleShowProduct", product)
    setIsProductShowVisible(true)
    setCurrentProduct(product)
  }
  
  const handleClose = () => {
    console.log("handleClose")
    setIsProductShowVisible(false)
  }

  const handleUpdateProduct =(id, params, successCallback) => {
    console.log("handleUpdateProduct", params)
    axios.patch(`http://localhost:3000/products/${id}.json`, params).then(response => {
      setProduct(
        products.map(product => {
          if (product.id === response.data.id){
            return response.data
          }else{
            return product
          }
        })
      )
      successCallback()
      handleClose()
    })
  }

  const handleDestroyProduct =(product) => {
    console.log(product)
    axios.delete(`http://localhost:3000/products/${product.id}.json`).then(response => {console.log(response.data)
    //update product array
    setProduct(products.filter(p => p.id!== product.id))
    //close modal
    handleClose()
  })
  }
  
  useEffect(handleGetProducts,[])

  return (

    <div className="container">
      <Routes>
        <Route path='/about' element={<About/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/new' element={<ProductNew onCreateProduct={handleCreateProduct}/>}/>
        <Route path='/' element={<ProductIndex products={products} onShowProduct ={handleShowProduct}/>}/>
      </Routes>
     
      <Modal show={isProductShowVisible} onClose={handleClose}>
        <ProductShow product ={currentProduct} onUpdateProduct={handleUpdateProduct} onDestroyProduct={handleDestroyProduct}/>
      </Modal>
    </div>
  )
}
