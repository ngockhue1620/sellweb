import { unwrapResult } from "@reduxjs/toolkit";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import {
    CardImg,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
} from "reactstrap";
import { Link } from "react-router-dom";
import userAvatar from "../../../../assets/userAvatar.svg";
import { login } from "../../../../reducers/userSlice";
export default function UserAvatar() {
    const dispatch = useDispatch();
    const history=useHistory()
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const handleLogout = async () => {
        
        
        const actionResult = await dispatch(
            login({
                email: "",
                password: "",
            })
        );
        history.push('/homepage')
        
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
                <Link to="/account">
                    <DropdownItem>Information Account</DropdownItem>
                </Link>
                <Link to="/history">
                    <DropdownItem>History order</DropdownItem>
                </Link>
                <Link to="/changepassword">
                    <DropdownItem>Change password</DropdownItem>
                </Link>
                <DropdownItem onClick={handleLogout}>Logout</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
}
