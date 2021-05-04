import { unwrapResult } from "@reduxjs/toolkit";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    CardImg,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
} from "reactstrap";
import userAvatar from "../../../../assets/userAvatar.svg";
import { login } from "../../../../reducers/userSlice";
export default function UserAvatar() {
    const dispatch = useDispatch();

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const handleLogout = async () => {
        const actionResult = await dispatch(
            login({
                email: "",
                password: "",
            })
        );

        const user = unwrapResult(actionResult);
    };
    const toggle = () => setDropdownOpen((prevState) => !prevState);
    const user = useSelector((state) => state.user);
    return (
        <Dropdown className="user-avt" isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle className="user-avt__toggle">
                <CardImg
                    className="user-avt__card__img"
                    top
                    width="100%"
                    src={userAvatar}
                    alt="Card image cap"
                />
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem>
                    <a href="/account">Information Account</a>
                </DropdownItem>
                <DropdownItem>
                    <a href="/account">History order</a>
                </DropdownItem>
                <DropdownItem>
                    <a href="/account">Change password</a>
                </DropdownItem>
                <DropdownItem onClick={handleLogout}>
                    <a href="/homepage">Logout</a>
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
        //     <div >

        // </div>
    );
}
