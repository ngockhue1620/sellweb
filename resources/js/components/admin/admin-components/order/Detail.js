import React from 'react'

export default function Detail(props) {
    
    return (
        <tr>
                <td><img className="img-order-detail" src={props.orderDetail.get_product.imageAddress}/></td>
                <td>{props.orderDetail.get_product.productName}</td>
                <td>{props.orderDetail.price}</td>
                <td>{props.orderDetail.quantity}</td>
                <td>{props.orderDetail.total}</td>
            </tr>
    )
}
