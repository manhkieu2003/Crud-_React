import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ProductTypes } from './types/ProductTypes'
import { Route, Routes } from 'react-router-dom'


import axios from 'axios'
import ManagerProduct from './pages/ManagerProduct'
import ProductAdd from './pages/ProductAdd'


function App() {
  const [products,setProduct] = useState<ProductTypes[]>([])
  useEffect(()=>{
      const getProduct =async ()=>{
         const {data}=await axios.get('http://localhost:3000/products')
        //  console.log(data)
        setProduct(data)
      }
      getProduct()
  },[])
  // hàm xóa 
  const hanleDelete=(id:number)=>{
    axios.delete('http://localhost:3000/products/'+id)
    //ReRender
    setProduct(products.filter(item=>item.id!==id))
  }
  
  

  return (
    <>
      {/* thiết lập routes */}
      <Routes>
          <Route path='/amin/product' element={<ManagerProduct product={products} OnRemove={hanleDelete}/>}/>
          <Route path='add' element={<ProductAdd/>}/>
      </Routes>
    </>
  )
}

export default App
