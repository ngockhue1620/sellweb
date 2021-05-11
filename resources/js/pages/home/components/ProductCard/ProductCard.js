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
        <div className="ProductCard col-lg-3  ">
            <ProductDetail
                productName={productName}
                description={description}
            ></ProductDetail>

            <div className="product-grid4">
                <div className="product-image4">
                    <a>
                        <img className="pic-1" src={imageAddress}></img>
                    </a>

                    <span className="product-new-label">New</span>
                    <span className="product-discount-label">LIMITED</span>
                </div>
                <div className="product-content">
                    <h3 className="title">
                        <a href="#">{productName}</a>
                    </h3>
                    <div className="price">{price} VND</div>
                    <a className="add-to-cart" onClick={() => onClick()}>
                        ADD TO CART
                    </a>
                </div>
            </div>
        </div>
    );
}
