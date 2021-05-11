import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import userApi from "../../api/userApi";
import CustomForm from "../home/components/CustomForm/CustomForm";
import { login, logout } from "../../reducers/userSlice";
import { Button, Label } from "reactstrap";

export default function Changepassword() {
    
    const dispatch = useDispatch();
    const [message, setMessage] = useState("");
    const user = useSelector((state) => state.user);
    
    const listFormGroups = [
        {
            label: "Password",
            type: "password",
            placeholder: "Enter password here",
        },

        {
            label: "New password",
            type: "password",
            placeholder: "Enter new password here",
        },
        {
            label: "Repeat new password",
            type: "password",
            placeholder: "",
        },
    ];

    const handleSubmit = async (values) => {

        const oldPassword = values["password"];
        const newPassword = values["new password"];
        const repearNewPassword = values["repeat new password"];

        if (user.password != oldPassword) {
            setMessage("Old Password is wrong!");
            return;
        }

        const regExp = /[a-zA-Z0-9!@#$%^&*]{8,}/;

        if (!regExp.test(newPassword)) {
            setMessage("Minimum 8 character for password!");
            return;
        }
        if (repearNewPassword != newPassword) {
            setMessage("Password againt is not true!");
            return;
        }

        await userApi.putById({
            id: user.id,
            password: newPassword,
        });
        alert("Change password success!Please,login againt!")
        await dispatch(logout())
        

    };

    return (
        <div className="container changepassword-page">
            {user ? <CustomForm
                    message={message}
                    onSubmit={handleSubmit}
                    btnLabel="Change Password"
                    listFormGroups={listFormGroups}
                ></CustomForm> : <span>You are not logged in!!!</span>}
            
        </div>
    );
}
