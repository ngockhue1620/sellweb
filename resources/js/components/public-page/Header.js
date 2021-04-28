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
