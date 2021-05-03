import React, { useState } from "react";

import { Button, Label } from "reactstrap";
import userApi from "../../../../api/userApi";

import CustomForm from "../CustomForm/CustomForm";

export default function SignUpForm(props) {
    const [isSignUpSuccess, setIsSignUpSuccess] = useState(false);
    const [massage, setMassage] = useState("");
    const { onToggle } = props;

    const listFormGroups = [
        {
            label: "Name",
            type: "text",
            placeholder: "Enter your name here",
        },
        {
            label: "Email",
            type: "email",
            placeholder: "Enter your user here",
        },
        {
            label: "Phone",
            type: "text",
            placeholder: "Enter your phonenumber here",
        },
        {
            label: "Password",
            type: "password",
            placeholder: "Enter your password here",
        },
        {
            label: "Password againt",
            type: "password",
            placeholder: "Enter your password againt",
        },
    ];

    const handleSubmit = async (values) => {
        const listUsers = await userApi.getAll();

        const { name, email, password, phone } = values;

        const passwordAgaint = values["password againt"];

        let regExp = /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$/;

        if (!regExp.test(name)) {
            setMassage("Your Name is invalid!");
            return;
        }
        
        let isExist = (element, index, array) => {
            return element.email === email;
        };
        let idExist = listUsers.findIndex(isExist);
        if (idExist >= 0) {
            setMassage("Your Email is exist");
            return;
        }

        regExp = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        if (!phone.match(regExp)) {
            setMassage("Your Phone number is invalid!");
            return;
        }
        isExist = (element, index, array) => {
            return element.phone === phone;
        };
        idExist = listUsers.findIndex(isExist);
        if (idExist >= 0) {
            setMassage("Your phone number is exist");
            return;
        }
        regExp = /[a-zA-Z0-9!@#$%^&*]{8,}/;

        if (!regExp.test(password)) {
            setMassage("Minimum 8 character for password!");
            return;
        }
        if (passwordAgaint != password) {
            setMassage("Password againt is not true!");
            return;
        }
        await userApi.signUp({
            email: email,
            password: password,
            phone: phone,
            customerName: name,
        });
        setIsSignUpSuccess(true);
    };
    const onClickComeBack = () => {
        setIsSignUpSuccess(false);
        onToggle();
    };
    return (
        <div>
            {isSignUpSuccess ? (
                <div>
                    <Label>Sign Up Success</Label>
                    <br></br>
                    <Button onClick={onClickComeBack}>
                        Comeback to Homepage
                    </Button>
                </div>
            ) : (
                <CustomForm
                    btnLabel="Sign Up"
                    massage={massage}
                    onSubmit={handleSubmit}
                    listFormGroups={listFormGroups}
                ></CustomForm>
            )}
        </div>
    );
}
