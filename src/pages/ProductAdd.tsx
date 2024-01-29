import React from 'react'
// add product sử dụng react hook form 
import { useForm, SubmitHandler } from "react-hook-form"
import { ProductTypes } from '../types/ProductTypes'
import { useNavigate } from 'react-router-dom'


type Props = {
 OnRemove:(product:ProductTypes)=>void
}
type Inputs = {
  id:number
  name: string
  price: string
}


const ProductAdd = (props: Props) => {
  console.log(props)
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()
  const Navigate=useNavigate()
  const onSubmits: SubmitHandler<Inputs> = (data) => {
   props.OnRemove(data)
   Navigate('/amin/product')
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmits)}>
        <input type="text" placeholder='Nhập tên ' {...register('name')} />
        <input type="number" placeholder='Nhập Price ' {...register('price')} />
        <button>Add</button>
      </form>
    </div>
  )
}

export default ProductAdd