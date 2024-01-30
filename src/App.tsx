import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ProductTypes } from './types/ProductTypes'
import { Route, Routes } from 'react-router-dom'


import axios from 'axios'
import ManagerProduct from './pages/ManagerProduct'
import ProductAdd from './pages/ProductAdd'
import ProductEdit from './pages/ProductEdit'


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
  // hàm add 
  const OnhanleAdd=(product:ProductTypes)=>{
    const add = async()=>
    {
     const {data} = await axios.post('http://localhost:3000/products',product)
      setProduct([...products,data])
    }
    add()

  }
  // hàm sửa dữ liệu (update)
  const handleEdit=(product:ProductTypes)=>{
     const putedit = async()=>{
       const {data}=await axios.put('http://localhost:3000/products/'+ product.id,product)
       //rerender
        setProduct(products.map(item => item.id==data.id?data:item))
        // nếu 2 id trùng nhau thì lấy thằng data mới không thì lấy item cũ 
     }
     putedit()
  }
  
  

  return (
    <>
      {/* thiết lập routes */}
      <Routes>
          <Route path='/amin/product' element={<ManagerProduct product={products} OnRemove={hanleDelete}/>}>
          </Route>
          <Route path='add' element={<ProductAdd OnRemove={OnhanleAdd}/>}/>
          <Route path='/amin/product/:id/edit' element={<ProductEdit onUpdate={handleEdit}/>}></Route>
      </Routes>
    </>
  )
}

export default App
