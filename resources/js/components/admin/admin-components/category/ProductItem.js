import React from 'react'
import {CardImg } from 'reactstrap'
export default function ProductItem(props) {
    return (
        
      <tr> 
        
        <th scope="row">{props.product.id}</th>
        <td >{props.product.productName}</td>
        <td>{props.product.price}</td>
        <td><CardImg  className="image-product-admin" src={props.product.imageAddress} /></td>        
      </tr>
    )
}
