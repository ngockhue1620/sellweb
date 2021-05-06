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
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div class="container">
                    <a class="navbar-brand" href="/">
                        FCT TEAMWORK
                    </a>

                    <li onClick={onClickCart} class="nav-item nav-item1">
                        <a class="nav-link cart-icon-header">
                            <Cart></Cart>
                        </a>
                    </li>
                    {user ? (
                        <li class="nav-item nav-item1">
                            <a class="nav-link ">
                                <UserAvatar></UserAvatar>
                            </a>
                        </li>
                    ) : (
                        <>
                            <li class="nav-item sign-up nav-item1">
                                <a class="nav-link" >
                                    <span class="glyphicon glyphicon-user"></span>{" "}
                                    <CustomModal
                                        buttonLabel="Sign Up"
                                        className="modal-signup"
                                    ></CustomModal>
                                </a>
                            </li>
                            <li class="nav-item nav-item1">
                                <a class="nav-link">
                                    <span class="glyphicon glyphicon-log-in"></span>{" "}
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
                        class="nav-item"
                        class="navbar-toggler"
                        type="button"
                        // data-toggle="collapse"
                        data-target="#navbarResponsive"
                        aria-controls="navbarResponsive"
                        aria-expanded="false"
                    // aria-label="Toggle navigation"
                    >
                        <a class="nav-link cart-icon-header">
                            <Cart></Cart>
                        </a>
                    </button>
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarResponsive"
                        aria-controls="navbarResponsive"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarResponsive">
                        <ul class="navbar-nav ">
                            <li class="nav-item active">
                                <a class="nav-link" href="/">
                                    Home
                                    <span class="sr-only">(current)</span>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/about">
                                    About
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/">
                                    Services
                                </a>
                            </li>
                            <li onClick={onClickCart} class="nav-item">
                                <a class="nav-link cart-icon-header">
                                    <Cart></Cart>
                                </a>
                            </li>
                            {user ? (
                                <li class="nav-item login">
                                    <a class="nav-link ">
                                        <UserAvatar></UserAvatar>
                                    </a>
                                </li>
                            ) : (
                                <>
                                    <li class="nav-item sign-up">
                                        <a class="nav-link" >
                                            <span class="glyphicon glyphicon-user"></span>{" "}
                                            <CustomModal
                                                buttonLabel="Sign Up"
                                                className="modal-signup"
                                            ></CustomModal>
                                        </a>
                                    </li>
                                    <li class="nav-item login">
                                        <a class="nav-link">
                                            <span class="glyphicon glyphicon-log-in"></span>{" "}
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
