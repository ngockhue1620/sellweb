import {
    BrowserRouter as Router, // bao boc app cua minh
    Switch, // switch
    Route, // case => path, exact
    Link,
    Redirect, // <a></a>
} from "react-router-dom";

import { Suspense, useEffect, useState } from "react";
import HomePage from "./home/HomePage";
import About from "./About/About";
import Header from "./home/components/Header/Header";
import { setUser } from "../reducers/userSlice";
import React from "react";
import CartContainer from "./home/components/CartContainer/CartContainer";
import Footer from "./home/components/Footer/Footer";
import Account from "./account/Account";
import Changepassword from "./changepassword/Changepassword";
import { useDispatch, useSelector } from "react-redux";
import HistoryOrder from "./historyOrder/HistoryPage";
import firebase from "firebase";
import userApi from "../api/userApi";

const config = {
    apiKey: "AIzaSyAnorPwc5skSnCOy1PjUrPaVVM1r33KyBE",
    authDomain: "clothes-shop-19d7f.firebaseapp.com",
};
firebase.initializeApp(config);
export default function App() {
    const dispatch = useDispatch();
    const User = useSelector((state) => state.user);

    useEffect(() => {
        const unregisterAuthObserver = firebase
            .auth()
            .onAuthStateChanged(async (user) => {
                
                if(User) return;    
                if (!user) {
                    // user logs out, handle something here

                    return;
                }
                let listUsers = await userApi.getAll();
                const isExist = (element, index, array) => {
                    return element.email === user.email;
                };
                const idExist = listUsers.findIndex(isExist);
                if (idExist < 0) {
                    await userApi.signUp({
                        customerName: user.displayName,
                        email: user.email,
                        password: "",
                        phone: "",
                    });
                }
                listUsers = await userApi.getAll();
                let id;
                listUsers.map((item) => {
                    if (item.email === user.email) {
                        id = item.id;
                    }
                });
                await dispatch(
                    setUser({
                        id: id,
                        email: user.email,
                        customerName: user.displayName,
                        phone: user.phoneNumber,
                        photoURL: user.photoURL,
                    })
                );
            });

        return () => unregisterAuthObserver();
    }, []);

    
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
                    <Route
                        path="/history"
                        render={(props) => <HistoryOrder {...props} />}
                    />
                </Switch>
                <Footer />
            </Suspense>
        </Router>
    );
}
