import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table, Button, Label, Input } from "reactstrap";
import userApi from "../../api/userApi";
import { login } from "../../reducers/userSlice";

export default function Account() {
    const user = useSelector((state) => state.user);
    const [inputName, setInputName] = useState("");
    const [inputPhone, setInputPhone] = useState("");
    const [isEdit, setIsEdit] = useState(false);
    const dispatch = useDispatch();
    const [message, setMessage] = useState("");

    const onClick = async () => {
        const listUsers = await userApi.getAll();
        if (!isEdit) {
            setIsEdit(!isEdit);
            return;
        }
        let regExp = /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$/;

        if (!regExp.test(inputName)) {
            setMessage("Your Name is invalid!");
            return;
        }
        regExp = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        if (!inputPhone.match(regExp)) {
            setMessage("Your Phone number is invalid!");
            return;
        }
        const isExist = (element, index, array) => {
            return element.phone === inputPhone && element.id != user.id;
        };
        const idExist = listUsers.findIndex(isExist);
        if (idExist >= 0) {
            setMessage("Your phone number is exist");
            return;
        }

        await userApi.putById({
            id: user.id,
            customerName: inputName,
            phone: inputPhone,
        });
        await dispatch(
            login({
                email: user.email,
                password: user.password,
            })
        );
        setMessage("Edit Success");
        setIsEdit(!isEdit);
    };
    const onChange = (e) => {
        const { name } = e.target;
        if (name === "name") {
            setInputName(e.target.value);
        }
        if (name === "phone") {
            setInputPhone(e.target.value);
        }
    };
    useEffect(() => {
        if (user) {
            setInputName(user.customerName);
            setInputPhone(user.phone);
        }
    });
    return (
        <div className="account-page container">
            {user ? (
                <div>
                    <Table>
                        <tbody>
                            <tr>
                                <th scope="row">Name</th>
                                <td>
                                    {isEdit ? (
                                        <Input
                                            autoFocus
                                            onChange={onChange}
                                            type="text"
                                            name="name"
                                            value={inputName}
                                        ></Input>
                                    ) : (
                                        <Label>{user.customerName}</Label>
                                    )}
                                </td>
                            </tr>
                            <tr>
                                <th scope="row">Phone</th>
                                <td>
                                    {isEdit ? (
                                        <Input
                                            onChange={onChange}
                                            type="text"
                                            name="phone"
                                            value={inputPhone}
                                        ></Input>
                                    ) : (
                                        <Label>{user.phone}</Label>
                                    )}
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                    <Label className="error">{message}</Label>
                    <br></br>
                    <Button onClick={onClick} color="primary">
                        {isEdit ? "Save" : "Edit"}
                    </Button>
                </div>
            ) : (
                <span>Bạn chưa đăng nhập</span>
            )}
        </div>
    );
}
