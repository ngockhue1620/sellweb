import Cart from "../Cart/Cart";

import React from "react";

import { useSelector } from "react-redux";
import UserAvatar from "../UserAvatar/UserAvatar";
import CustomModal from "../CustomModal/CustomModal";

export default function Header(props) {
    const { onClickCart } = props;
    const user = useSelector((state) => state.user);
    return (
        <div className="Header">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container">
                    <a className="navbar-brand" href="/">
                        FCT TEAMWORK
                    </a>

                    <li onClick={onClickCart} className="nav-item nav-item1">
                        <a className="nav-link cart-icon-header">
                            <Cart></Cart>
                        </a>
                    </li>
                    {user ? (
                        <li className="nav-item nav-item1">
                            <a className="nav-link ">
                                <UserAvatar></UserAvatar>
                            </a>
                        </li>
                    ) : (
                        <>
                            <li className="nav-item sign-up nav-item1">
                                <a className="nav-link" >
                                    <span className="glyphicon glyphicon-user"></span>{" "}
                                    <CustomModal
                                        buttonLabel="Sign Up"
                                        className="modal-signup"
                                    ></CustomModal>
                                </a>
                            </li>
                            <li className="nav-item nav-item1">
                                <a className="nav-link">
                                    <span className="glyphicon glyphicon-log-in"></span>{" "}
                                    <CustomModal
                                        buttonLabel="Login"
                                        className="modal-login"
                                    ></CustomModal>
                                </a>
                            </li>
                        </>
                    )}
                    <button
                        onClick={onClickCart}
                        className="nav-item"
                        className="navbar-toggler"
                        type="button"
                        // data-toggle="collapse"
                        data-target="#navbarResponsive"
                        aria-controls="navbarResponsive"
                        aria-expanded="false"
                    // aria-label="Toggle navigation"
                    >
                        <a className="nav-link cart-icon-header">
                            <Cart></Cart>
                        </a>
                    </button>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarResponsive"
                        aria-controls="navbarResponsive"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ">
                            <li className="nav-item active">
                                <a className="nav-link" href="/">
                                    Home
                                    <span className="sr-only">(current)</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/about">
                                    About
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">
                                    Services
                                </a>
                            </li>
                            <li onClick={onClickCart} className="nav-item">
                                <a className="nav-link cart-icon-header">
                                    <Cart></Cart>
                                </a>
                            </li>
                            {user ? (
                                <li className="nav-item login">
                                    <a className="nav-link ">
                                        <UserAvatar></UserAvatar>
                                    </a>
                                </li>
                            ) : (
                                <>
                                    <li className="nav-item sign-up1">
                                        <a className="nav-link" >
                                            <span className="glyphicon glyphicon-user"></span>{" "}
                                            <CustomModal
                                                buttonLabel="Sign Up"
                                                className="modal-signup"
                                            ></CustomModal>
                                        </a>
                                    </li>
                                    <li className="nav-item login">
                                        <a className="nav-link">
                                            <span className="glyphicon glyphicon-log-in"></span>{" "}
                                            <CustomModal
                                                buttonLabel="Login"
                                                className="modal-login"
                                            ></CustomModal>
                                        </a>
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
        </div >
    );
}
