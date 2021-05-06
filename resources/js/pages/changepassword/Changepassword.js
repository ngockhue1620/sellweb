import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import userApi from "../../api/userApi";
import CustomForm from "../home/components/CustomForm/CustomForm";
import { login } from "../../reducers/userSlice";
import { Button, Label } from "reactstrap";
export default function Changepassword() {
    const dispatch = useDispatch();
    const [message, setMessage] = useState("");
    const user = useSelector((state) => state.user);
    const [isSuccess, setIsSuccess] = useState(false);
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
        console.log(values);
        const listUsers = await userApi.getAll();

        const oldPassword = values["password"];
        const newPassword = values["new password"];
        const repearNewPassword = values["repeat new password"];

        if (user.password != oldPassword) {
            setMassage("Password is wrong!");
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
        await dispatch(
            login({
                email: "",
                password: "",
            })
        );
        setIsSuccess(true);
    };

    return (
        <div className="container changepassword-page">
            {isSuccess ? (
                <div>
                    <Label>Change password success!</Label>
                    <br></br>
                    <Button color="primary">
                        <a href="/homepage">Comeback to homepage</a>
                    </Button>
                </div>
            ) : (
                <CustomForm
                    message={message}
                    onSubmit={handleSubmit}
                    btnLabel="Change Password"
                    listFormGroups={listFormGroups}
                ></CustomForm>
            )}
        </div>
    );
}
