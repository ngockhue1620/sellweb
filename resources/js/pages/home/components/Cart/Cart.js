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

        <div className="cart"
        // data-aos="fade-left"
        // data-aos-anchor="#example-anchor"
        // data-aos-offset="500"
        // data-aos-duration="500"
        >

            <div className="quantity">{countQuantity()}</div>
            <i class="fas fa-shopping-cart"></i>
        </div>
    );
}
