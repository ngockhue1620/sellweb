import {
    BrowserRouter as Router, // bao boc app cua minh
    Switch, // switch
    Route, // case => path, exact
    Link,
    Redirect, // <a></a>
} from "react-router-dom";

import { Suspense, useState } from "react";
import HomePage from "./HomePage";
import About from "../About/About";
import Header from "./components/Header/Header";

import React from "react";
import CartContainer from "./components/CartContainer/CartContainer";
import PayPage from "../pay/PayPage";
import Footer from "../footer/footer";

export default function App() {
    const [isShowCart, setIsShowCart] = useState(false);

    const isClickCart = () => {
        setIsShowCart(!isShowCart);
    };
    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <Header
                    onClickCart={isClickCart}
                    isShowCart={isClickCart}
                ></Header>

                {isShowCart && <CartContainer></CartContainer>}

                <Switch>
                    <Redirect exact from="/" to="/homepage" />
                    <Route
                        path="/homepage"
                        render={(props) => <HomePage {...props} />}
                    />

                    <Route
                        path="/about"
                        render={(props) => <About {...props} />}
                    />

                    <Route
                        path="/pay"
                        render={(props) => <PayPage {...props} />}
                    />
                </Switch>
                <Footer/>
            </Suspense>
        </Router>
    );
}
