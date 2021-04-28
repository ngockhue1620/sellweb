<<<<<<< HEAD:resources/js/components/public-page/Header.js
import React, { Component } from "react";
import "../../../sass/Header.scss";
export default class Header extends Component {
    render() {
        return (
            <div className="Header">
                <nav class="navbar navbar-inverse navbar-expand-lg">
                    <div class="container-fluid">
                        <div class="navbar-header">
                            <a class="navbar-brand" href="#">
                                FCT TEAMWORK
                            </a>
=======
import React, { Component } from 'react'
import Cart from '../Cart/Cart'



export default class Header extends Component {
    render() {
        return (

            <div className='Header'>

                <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                    <div class="container">
                        <a class="navbar-brand" href="/">Clothes Shop</a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarResponsive">
                            <ul class="navbar-nav ml-auto">
                                <li class="nav-item active">

                                    <a class="nav-link" href="/">Home
                                         <span class="sr-only">(current)</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/about">About</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/">Services</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/">
                                        <Cart></Cart>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="/login">Login</a>
                                </li>
                            </ul>
>>>>>>> faa864778fc8f56f38ebb88cd7bac15685a1822d:resources/js/pages/home/components/Header/Header.js
                        </div>
                        <ul class="nav navbar-nav navbar-right">
                            <form
                                class="navbar-form navbar-left"
                                action="/action_page.php"
                            >
                                <div class="input-group">
                                    <input
                                        type="text"
                                        class="form-control"
                                        placeholder="Search"
                                    ></input>
                                    <div class="input-group-btn">
                                        <button
                                            class="btn btn-default"
                                            type="submit"
                                        >
                                            <i class="glyphicon glyphicon-search"></i>
                                        </button>
                                    </div>
                                </div>
                            </form>
                            <li class="active">
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#">My Wishlist</a>
                            </li>
                            <li>
                                <a href="/about">About</a>
                            </li>

                            <li>
                                <a href="#">
                                    <span class="glyphicon glyphicon-user"></span>{" "}
                                    Sign Up
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span class="glyphicon glyphicon-log-in"></span>{" "}
                                    Login
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}
