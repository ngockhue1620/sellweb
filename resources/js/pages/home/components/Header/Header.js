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
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        FCT TEAMWORK
                    </Link>

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
                                <Link className="nav-link" to="/">
                                    Home
                                    <span className="sr-only">(current)</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">
                                    About
                                </Link>
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
