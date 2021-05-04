import { unwrapResult } from "@reduxjs/toolkit";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

import { login } from "../../../../reducers/userSlice";
import CustomForm from "../CustomForm/CustomForm";

export default function LoginForm(props) {
    const [message, setMessage] = useState("");
    const { onToggle } = props;
    const dispatch = useDispatch();
    const history = useHistory();
    const listFormGroups = [
        {
            label: "Email",
            type: "email",
            placeholder: "Enter your user here",
        },
        {
            label: "Password",
            type: "password",
            placeholder: "Enter your password here",
        },
    ];

    const handleSubmit = async (values) => {
        console.log(values)
        const actionResult = await dispatch(login(values));
        const user = unwrapResult(actionResult);

        if (user) {
            console.log("user", user);
            onToggle();
        } else {
            setMessage("Email or password is wrong!!!");
        }
    };
    return (
        <CustomForm
        btnLabel="Login"
            message={message}
            onSubmit={handleSubmit}
            listFormGroups={listFormGroups}
        ></CustomForm>
    );
}
