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
                <DropdownItem >
                    Thông tin tài khoản
                </DropdownItem>
                <DropdownItem>Lịch sử mua hàng</DropdownItem>
                <DropdownItem>Đổi mật khẩu</DropdownItem>
                <DropdownItem onClick={handleLogout}>Đăng xuất</DropdownItem>
            </DropdownMenu>
        </Dropdown>
        //     <div >

        // </div>
    );
}
