import React from 'react'
import { ProductTypes } from '../types/ProductTypes'
import { Link } from 'react-router-dom'

type Props = {
  product:ProductTypes[]
  OnRemove:(id:number)=>void
}

const ManagerProduct = (props: Props) => {
  console.log(props)
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {props.product?.map((item,index)=>{
            return(
               <tr key={index}>
                <td>{index+1}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>
                  <Link to={`/amin/product/${item.id}/edit`}>Edit</Link>
                </td>
                <td>
                  <button onClick={()=>props.OnRemove(item.id)}>Remove</button>
                </td>
                 
               </tr>
            )
          })}
        </tbody>
      </table>

    </div>
  )
}

export default ManagerProduct