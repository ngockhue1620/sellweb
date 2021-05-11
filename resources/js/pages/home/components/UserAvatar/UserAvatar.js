import React, { useEffect, useState } from "react";
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
import { logout } from "../../../../reducers/userSlice";
import firebase from "firebase";
export default function UserAvatar() {
    const dispatch = useDispatch();

    const user = useSelector((state) => state.user);
    const history = useHistory();
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleLogout = async () => {
        firebase.auth().signOut();
        const actionResult = await dispatch(logout());
        history.push("/homepage");
    };
    const toggle = () => setDropdownOpen((prevState) => !prevState);

    return (
        <Dropdown className="user-avt" isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle className="user-avt__toggle">
                <CardImg
                    className="user-avt__card__img"
                    top
                    width="100%"
                    src={user.photoURL ? user.photoURL : userAvatar}
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
