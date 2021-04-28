import Cart from "../Cart/Cart";

import React from "react";
import { useEffect } from "react";

export default function Header(props) {
    const { onClickCart } = props;

    return (
        <div className="Header">
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div class="container">
                    <a class="navbar-brand" href="/">
                        FCT TEAMWORK
                    </a>
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
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    <span class="glyphicon glyphicon-user"></span>{" "}
                                    Sign Up
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="">
                                    <span class="glyphicon glyphicon-log-in"></span>{" "}
                                    Login
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}
