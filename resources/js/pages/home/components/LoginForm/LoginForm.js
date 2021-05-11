import { unwrapResult } from "@reduxjs/toolkit";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import firebase from "firebase";
import { login } from "../../../../reducers/userSlice";
import CustomForm from "../CustomForm/CustomForm";
import { StyledFirebaseAuth } from "react-firebaseui";

const uiConfig = {
    signInFlow: "popup",
    signInSuccessUrl: "/homepage",
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
};

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
        const actionResult = await dispatch(login(values));
        
        const user = unwrapResult(actionResult);
        console.log(user)
        if (user) {
            onToggle();
        } else {
            setMessage("Email or password is wrong!!!");
        }
    };
    return (
        <div>
            <CustomForm
                btnLabel="Login"
                message={message}
                onSubmit={handleSubmit}
                listFormGroups={listFormGroups}
            ></CustomForm>
            <StyledFirebaseAuth
                uiConfig={uiConfig}
                firebaseAuth={firebase.auth()}
            />
        </div>
    );
}
