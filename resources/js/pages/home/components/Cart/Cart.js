import React from "react";
import { useSelector } from "react-redux";
import cart from "../../../../assets/shopping-cart.svg";

export default function Cart() {
    const cartProducts = useSelector((state) => state.cartProducts);
    const countQuantity = () => {
        return cartProducts.reduce((a, b) => {
            return a + b.quantity;
        }, 0);
    };
    return (
        <div className="cart">
            <i class="fas fa-shopping-cart"></i>
            <div className="quantity">{countQuantity()}</div>
        </div>
    );
}
