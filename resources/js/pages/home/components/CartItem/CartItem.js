import React, { useEffect, useState } from "react";
import addIcon from "../../../../assets/addIcon.svg";
import minusIcon from "../../../../assets/minusIcon.svg";
import cancelIcon from "../../../../assets/cancel.svg";
import { useDispatch } from "react-redux";

import { removeProduct, setQuantity } from "../../../../reducers/cartSlice";
import { Col, Row } from "reactstrap";
import ProductDetail from "../ProductDetail/ProductDetail";

export default function CartItem(props) {
    const { product, onQuatityClick, editQuantityId } = props;

    const [quantityInput, setQuantityInput] = useState(product.quantity);

    const dispatch = useDispatch();
    const onAddClick = () => {
        dispatch(
            setQuantity({
                id: product.product.id,
                quantity: product.quantity + 1,
            })
        );
        setQuantityInput(quantityInput + 1);
    };
    const onSubClick = () => {
        dispatch(
            setQuantity({
                id: product.product.id,
                quantity: product.quantity - 1,
            })
        );
        setQuantityInput(quantityInput + 1);
    };
    const onRemoveClick = () => {
        dispatch(removeProduct(product.product.id));
    };
    const onChange = (e) => {
        setQuantityInput(e.target.value);
        if (e.target.value != "") {
            dispatch(
                setQuantity({
                    id: product.product.id,
                    quantity: e.target.value,
                })
            );
        }
    };
    const onClick = () => {
        setQuantityInput(product.quantity);
        onQuatityClick(product);
    };
    const onKeyUp = (e) => {
        if (e.keyCode === 13) {
            if (quantityInput === "") return;
            if (parseInt(quantityInput) < 1) return;
            onQuatityClick(null);
        }
    };
    const onBlur = () => {
        onQuatityClick(null);
    };

    return (
        <Row
            data-aos-anchor-placement="top-center"
            className="cart-item container"
        >
            <Col xs="8" className="cart-item__container">
                <Row className="cart-item__container__row">
                    <Col className="cart-item__container__row__col" xs="3">
                        <img src={product.product.imageAddress}></img>
                    </Col>
                    <Col className="cart-item__container__row__name" xs="9">
                        {product.product.productName}
                    </Col>
                </Row>
            </Col>
            <Col xs="4" className="cart-item__container">
                <Row className="cart-item__container__quantity">
                    <Col xs="2">
                        <img
                            onClick={() => onAddClick(product.product.id)}
                            width={20}
                            height={20}
                            src={addIcon}
                        ></img>
                    </Col>

                    <Col xs="2" onClick={onClick} className="quantity">
                        {editQuantityId === product.product.id ? (
                            <input
                                onBlur={onBlur}
                                autoFocus="true"
                                min="1"
                                onKeyUp={onKeyUp}
                                onChange={onChange}
                                type="number"
                                value={quantityInput}
                            ></input>
                        ) : (
                            product.quantity
                        )}
                    </Col>
                    <Col xs="2">
                        <img
                            onClick={() => onSubClick(product.product.id)}
                            width={20}
                            height={20}
                            src={minusIcon}
                        ></img>
                    </Col>
                    <Col xs="2">
                        <img
                            onClick={() => onRemoveClick(product.product.id)}
                            width={20}
                            height={20}
                            src={cancelIcon}
                        ></img>
                    </Col>
                    <Col className="cart-item__container__price">
                        {product.product.price * product.quantity + " đ"}
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}
