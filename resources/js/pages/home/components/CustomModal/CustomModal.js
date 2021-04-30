import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import LoginForm from "../LoginForm/LoginForm";
import SignUpForm from "../SignUpForm/SignUpForm";
export default function CustomModal(props) {
    const { buttonLabel, className } = props;

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <div>
            <Button color="danger" onClick={toggle}>
                {buttonLabel}
            </Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>{buttonLabel}</ModalHeader>
                <ModalBody>
                    {
                        buttonLabel==='Login' && <LoginForm onToggle={toggle}></LoginForm>
                    }
                    {
                        buttonLabel==='Sign Up' && <SignUpForm onToggle={toggle}></SignUpForm>
                    }
                    
                </ModalBody>
            </Modal>
        </div>
    );
}
