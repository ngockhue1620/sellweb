import Cart from "../Cart/Cart";

import React from "react";

import { useSelector } from "react-redux";
import UserAvatar from "../UserAvatar/UserAvatar";
import CustomModal from "../CustomModal/CustomModal";
import { Link } from "react-router-dom";

export default function Header(props) {
    const { onClickCart } = props;
    const user = useSelector((state) => state.user);
    return (
        <div className="Header">
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div class="container">
                    {" "}
                    <a class="navbar-brand" href="/">
                        FCT TEAMWORK
                    </a>
                    <ul class="navbar-nav1">
                        <li class="nav-item nav-item1">
                            <a class="nav-link" href="/homepage">
                                <i class="fas fa-home"></i>
                            </a>
                        </li>
                        <li class="nav-item nav-item1">
                            <a class="nav-link" href="/about">
                                <i class="fas fa-users"></i>
                            </a>
                        </li>
                        <button
                            onClick={onClickCart}
                            class="nav-item"
                            class="navbar-toggler"
                            type="button"
                            data-target="#navbarResponsive"
                            aria-controls="navbarResponsive"
                            aria-expanded="false"
                        >
                            <a class="nav-link cart-icon-header">
                                <Cart></Cart>
                            </a>
                        </button>
                        {user ? (
                            <UserAvatar></UserAvatar>
                        ) : (
                            <>
                                <li class="nav-item nav-item1">
                                    <a class="nav-link">
                                        <CustomModal
                                            buttonLabel="Login"
                                            className="modal-login"
                                            isMobie="true"
                                        ></CustomModal>
                                    </a>
                                </li>
                                <li class="nav-item nav-item1">
                                    <a class="nav-link">
                                        <CustomModal
                                            buttonLabel="Sign Up"
                                            className="modal-signup"
                                            isMobie="true"
                                        ></CustomModal>
                                    </a>
                                </li>
                            </>
                        )}{" "}
                    </ul>
                </div>

                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ">
                        <li class="nav-item active">
                            <Link className="nav-link" to="/">
                                Home
                                <span className="sr-only">(current)</span>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link" to="/about">
                                About
                            </Link>
                        </li>

                        <li onClick={onClickCart} class="nav-item">
                            <a class="nav-link cart-icon-header">
                                <Cart></Cart>
                            </a>
                        </li>
                        {user ? (
                            <UserAvatar></UserAvatar>
                        ) : (
                            <>
                                <li class="nav-item sign-up">
                                    <a class="nav-link">
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
            </nav>
        </div>
    );
}
