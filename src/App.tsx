import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ProductTypes } from './types/ProductTypes'
import { Route, Routes } from 'react-router-dom'


import axios from 'axios'


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
  
  

  return (
    <>
      {/* thiết lập routes */}
      <Routes>
          <Route path='/amin/product' element={}></Route>
      </Routes>
    </>
  )
}

export default App
