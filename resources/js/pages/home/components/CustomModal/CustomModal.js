import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import LoginForm from "../LoginForm/LoginForm";
import OrderForm from "../OrderForm/OrderForm";
import SignUpForm from "../SignUpForm/SignUpForm";
CustomModal.defaultProps = {
    isMobie: false,
};
export default function CustomModal(props) {
    const cartProducts = useSelector((state) => state.cartProducts);
    const { buttonLabel, className, isMobie } = props;
    const user = useSelector((state) => state.user);
    const [modal, setModal] = useState(false);
    const [title, setTitle] = useState(
        buttonLabel === "Order"
            ? "Enter some information about the recipient"
            : buttonLabel
    );
    const toggle = () => {
        setModal(!modal);
    };
    const clickOrder = () => {
        if (buttonLabel === "Order" && cartProducts.length < 1) {
            alert("Your cart is empty");
            return;
        }
        if (buttonLabel === "Order" && !user) {
            alert("You are not logged in");
            return;
        }
        toggle();
    };
    return (
        <div>
            <Button
                color="black"
                className={
                    buttonLabel === "Order" ? "Order_btn" : "LoginSignUp_btn"
                }
                onClick={buttonLabel === "Order" ? clickOrder : toggle}
            >
                {isMobie && className === "modal-login" && (
                    <i class="fas fa-user"></i>
                )}
                {isMobie && className === "modal-signup" && (
                    <i class="fas fa-user-plus"></i>
                )}
                {!isMobie && buttonLabel}
            </Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>{title}</ModalHeader>
                <ModalBody>
                    {className === "modal-login" && (
                        <LoginForm onToggle={toggle}></LoginForm>
                    )}
                    {className === "modal-signup" && (
                        <SignUpForm onToggle={toggle}></SignUpForm>
                    )}
                    {buttonLabel === "Order" && (
                        <OrderForm
                            onToggle={toggle}
                            setTitle={setTitle}
                        ></OrderForm>
                    )}
                </ModalBody>
            </Modal>
        </div>
    );
}
