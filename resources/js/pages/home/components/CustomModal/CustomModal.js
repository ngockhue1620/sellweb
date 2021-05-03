import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import LoginForm from "../LoginForm/LoginForm";
import OrderForm from "../OrderForm/OrderForm";
import SignUpForm from "../SignUpForm/SignUpForm";

export default function CustomModal(props) {
    const cartProducts = useSelector((state) => state.cartProducts);
    const { buttonLabel, className } = props;
    const user=useSelector(state=>state.user)
    const [modal, setModal] = useState(false);

    const toggle = () => {
        if (buttonLabel === "Order" && cartProducts.length < 1) {
            alert("Your cart is empty"); return;
            
        }
        if (buttonLabel === "Order" && !user) {
            alert("ban da dang nhap deo dau"); return;
            
        }
        
        setModal(!modal);
    };
    
    return (
        <div>
            <Button className="LoginSignUp_btn" onClick={toggle}>
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
