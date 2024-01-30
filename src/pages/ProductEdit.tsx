import React, { useEffect, useState } from 'react'
import {useForm,SubmitHandler} from 'react-hook-form'
import { ProductTypes } from '../types/ProductTypes'
import { useNavigate, useParams, } from 'react-router-dom'
import axios from 'axios'

type Props = {
    onUpdate:(product:ProductTypes)=>void
}
type Inputs ={
    id:number,
    name:string,
    price:number
}

const ProductEdit = (props: Props) => {
    // lấy id trên url bằng hook use params
    const {id} =useParams()
    console.log(id)
    // reset để đồng bộ dữ liệu
    const {register,handleSubmit,watch,formState:{error},reset}=useForm<Inputs>()
    const [product,setProduct]=useState({})
    const Navigate =useNavigate()
    const onSubmits :SubmitHandler<Inputs> =(data)=>{
        props.onUpdate(data)
        Navigate('/amin/product')

    }
    useEffect(()=>{
         const GetProduct= async()=>{
            const {data}= await axios.get('http://localhost:3000/products/'+id)
               reset(data)
         }
         GetProduct()
    },[])
    
  return (
    <div>
        <form onSubmit={handleSubmit(onSubmits)}>
            <input type="text"  {...register('name')} />
            <input type='number'  {...register('price')}/>
            <button>Edit</button>
        </form>
    </div>
  )
}

export default ProductEdit