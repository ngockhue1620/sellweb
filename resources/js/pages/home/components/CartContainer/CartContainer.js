import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Button, Col, Container, Row } from "reactstrap";
import CartItem from "../CartItem/CartItem";

export default function CartContainer(props) {
    const listProducts = useSelector((state) => state.cartProducts);
    const [editQuantityId, setEditQuantityId] = useState(null);
    // const [sumPay,setsumPay]=useState(null)
    const onQuatityClick = (product) => {
        setEditQuantityId(product ? product.product.id : null);
    };
    const calculatorSumPay = () => {
        return listProducts.reduce((a, b) => {
            return a + b.product.price * b.quantity;
        }, 0);
    };

    return (
        <Container
            data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            data-aos-offset="500"
            data-aos-duration="500"
            className="cart-container"
        >
            {listProducts.map((product, index) => (
                <CartItem
                    key={index}
                    editQuantityId={editQuantityId}
                    onQuatityClick={onQuatityClick}
                    product={product}
                ></CartItem>
            ))}

            <Row className="cart-container__paycontainer">
                <Col xs="8" className="cart-container__paycontainer__value">
                    Tổng: {calculatorSumPay() + " đ"}
                </Col>

                <Col>
                    <Button xs="3" color="primary" size="lg">
                        Đặt hàng
                    </Button>{" "}
                </Col>
            </Row>
        </Container>
    );
}
