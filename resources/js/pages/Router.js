import {
    BrowserRouter as Router, // bao boc app cua minh
    Switch, // switch
    Route, // case => path, exact
    Link,
    Redirect, // <a></a>
} from "react-router-dom";

import { Suspense, useState } from "react";
import HomePage from "./home/HomePage";
import About from "./About/About";
import Header from "./home/components/Header/Header";

import React from "react";
import CartContainer from "./home/components/CartContainer/CartContainer";
import Footer from "./home/components/Footer/Footer";
import Account from "./account/Account";
import Changepassword from "./changepassword/Changepassword";

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
                        path="/account"
                        render={(props) => <Account {...props} />}
                    />

<Route
                        path="/changepassword"
                        render={(props) => <Changepassword {...props} />}
                    />
                </Switch>
                <Footer />
            </Suspense>
        </Router>
    );
}
