import React from 'react'

export default function Detail(props) {
    
    return (
        <tr>
            <td>{props.item.product_id}</td>
            <td>{props.item.quantity}</td>
            <td>{props.item.price}</td>
        </tr>
    )
}
