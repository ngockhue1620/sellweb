import React from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../../../reducers/cartSlice";
import ProductDetail from "../ProductDetail/ProductDetail";

export default function ProductCard(props) {
    const { imageAddress, productName, price, description } = props.product;

    const { index } = props;

    const dispatch = useDispatch();
    const onClick = () => {
        dispatch(addProduct(props.product));
    };

    return (
        <div class="ProductCard col-lg-3  ">
            <ProductDetail
                productName={productName}
                description={description}
            ></ProductDetail>
            <div class="product-grid4">
                <div class="product-image4">
                    <a>
                        <img class="pic-1" src={imageAddress}></img>
                    </a>

                    <span class="product-new-label">New</span>
                    <span class="product-discount-label">LIMITED</span>
                </div>
                <div class="product-content">
                    <h3 class="title">
                        <a href="#">{productName}</a>
                    </h3>
                    <div class="price">{price} VND</div>
                    <a class="add-to-cart" onClick={() => onClick()}>
                        ADD TO CART
                    </a>
                </div>
            </div>
        </div>
    );
}
