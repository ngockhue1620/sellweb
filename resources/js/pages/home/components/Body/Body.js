import React from "react";

import Content from "../Content/Content";
import CustomModal from "../CustomModal/CustomModal";
import LoginForm from "../LoginForm/LoginForm";

import Menu from "../Menu/Menu";

export default function Body() {
    return (
        <div class="Body ">
            <Menu></Menu>
            <Content></Content>
            {/* <CustomModal
                buttonLabel="Login"
                className="modal-login"
            ></CustomModal> */}
        </div>
    );
}
