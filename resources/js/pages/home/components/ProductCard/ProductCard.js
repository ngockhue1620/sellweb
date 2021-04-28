import { useEffect } from "react";
import React from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../../../reducer/cartSlice";

export default function ProductCard(props) {
    const { imageAddress, productName, price, description } = props.product;
    const dispatch = useDispatch();
    const onClick = (product) => {
        dispatch(addProduct(product));
    };
    return (
        <div class="ProductCard col-lg-4 col-md-6 mb-4 ">
            {" "}
            <div class="product-grid4">
                <div class="product-image4">
                    <a href="#">
                        <img class="pic-1" src={imageAddress}></img>
                    </a>

                    <span class="product-new-label">New</span>
                    <span class="product-discount-label">-10%</span>
                </div>
                <div class="product-content">
                    <h3 class="title">
                        <a href="#">{productName}</a>
                    </h3>
                    <div class="price">{price} VND</div>
                    <a
                        class="add-to-cart"
                        href=""
                        onClick={() => onClick(props.product)}
                    >
                        ADD TO CART
                    </a>
                </div>
            </div>
        </div>
    );
}
