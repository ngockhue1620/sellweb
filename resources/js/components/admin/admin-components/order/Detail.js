import React from 'react'

export default function Detail(props) {
    console.log(props.item)
    return (
        <tr>
            <td>{props.item.product_id}</td>
            <td>{props.item.quantity}</td>
            <td>{props.item.price}</td>
        </tr>
    )
}
