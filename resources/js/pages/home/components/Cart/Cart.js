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
        <div  data-aos="fade-left"
        data-aos-anchor="#example-anchor"
        data-aos-offset="500"
        data-aos-duration="500" className="cart">
            <div className="quantity">{countQuantity()}</div>
            <img src={cart} height={32} width={32}></img>
        </div>
    );
}
