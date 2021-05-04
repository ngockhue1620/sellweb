import { unwrapResult } from "@reduxjs/toolkit";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

import { login } from "../../../../reducers/userSlice";
import CustomForm from "../CustomForm/CustomForm";

export default function LoginForm(props) {
    const [massage, setMassage] = useState("");
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
        const actionResult = await dispatch(login(values));
        const user = unwrapResult(actionResult);

        if (user) {
            console.log("user", user);
            onToggle();
        } else {
            setMassage("Email or password is wrong!!!");
        }
    };
    return (
        <CustomForm
        btnLabel="Login"
            massage={massage}
            onSubmit={handleSubmit}
            listFormGroups={listFormGroups}
        ></CustomForm>
    );
}
