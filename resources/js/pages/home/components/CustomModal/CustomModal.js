import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import LoginForm from "../LoginForm/LoginForm";
import OrderForm from "../OrderForm/OrderForm";
import SignUpForm from "../SignUpForm/SignUpForm";

export default function CustomModal(props) {
    const cartProducts = useSelector((state) => state.cartProducts);
    const { buttonLabel, className } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => {
        
        if (buttonLabel === "Order" && cartProducts.length < 1) {
            alert("Your cart is empty");
            return;
        }
        setModal(!modal);
    };
    const onClickOrder=()=>{
        
    }
    return (
        <div>
            <Button color="danger" onClick={toggle}>
                {buttonLabel}
            </Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>
                    {buttonLabel === "Order"
                        ? "Enter some information about the recipient"
                        : buttonLabel}
                </ModalHeader>
                <ModalBody>
                    {buttonLabel === "Login" && (
                        <LoginForm onToggle={toggle}></LoginForm>
                    )}
                    {buttonLabel === "Sign Up" && (
                        <SignUpForm onToggle={toggle}></SignUpForm>
                    )}
                    {buttonLabel === "Order" && (
                        <OrderForm onToggle={toggle}></OrderForm>
                    )}
                </ModalBody>
            </Modal>
        </div>
    );
}
