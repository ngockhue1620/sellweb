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
    const [title,setTitle]=useState(buttonLabel==="Order" ? "Enter some information about the recipient" : buttonLabel)
    const toggle = () => {
        if (buttonLabel === "Order" && cartProducts.length < 1) {
            alert("Your cart is empty"); return;
            
        }
        if (buttonLabel === "Order" && !user) {
            alert("You are not logged in"); return;
            
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
                    {title}
                </ModalHeader>
                <ModalBody>
                    {buttonLabel === "Login" && (
                        <LoginForm onToggle={toggle}></LoginForm>
                    )}
                    {buttonLabel === "Sign Up" && (
                        <SignUpForm onToggle={toggle}></SignUpForm>
                    )}
                    {buttonLabel === "Order" && (
                        <OrderForm onToggle={toggle} setTitle={setTitle}></OrderForm>
                    )}
                </ModalBody>
            </Modal>
        </div>
    );
}
