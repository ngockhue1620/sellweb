import React from 'react'
import { useSelector } from 'react-redux'
import { ListGroup, ListGroupItem } from 'reactstrap'
import CartItem from '../CartItem/CartItem'

export default function CartContainer() {
    const listProducts = useSelector(state => state.cartProducts)
    return (
        <div className="cart-container">
            <ListGroup>
                {listProducts.map((product, index) => (
                    <ListGroupItem tag="a" href="#" >
                        <CartItem product={product}></CartItem>
                    </ListGroupItem>
                ))}


            </ListGroup>
        </div>

    )
}
