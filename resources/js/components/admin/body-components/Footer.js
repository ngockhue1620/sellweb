import React from "react";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="footer-col">
                        <h4 className="h4-footer">About Us</h4>
                        <ul className="ul-footer">
                            <li className="li-footer">
                                <p className="p-footer">
                                    The site is created by the FCT-team that
                                    includes elite members in developing
                                    products using languages ​​such as PHP,
                                    ReactJS, ...
                                </p>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4 className="h4-footer">get help</h4>
                        <ul className="ul-footer">
                            <li className="li-footer">
                                <a href="#" className="a-footer">
                                    about us
                                </a>
                            </li>
                            <li className="li-footer">
                                <a href="#" className="a-footer">
                                    our services
                                </a>
                            </li>
                            <li className="li-footer">
                                <a href="#" className="a-footer">
                                    privacy policy
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4 className="h4-footer">online shop</h4>
                        <ul className="ul-footer">
                            <li className="li-footer">
                                <a href="#" className="a-footer">
                                    watch
                                </a>
                            </li>
                            <li className="li-footer">
                                <a href="#" className="a-footer">
                                    bag
                                </a>
                            </li>
                            <li className="li-footer">
                                <a href="#" className="a-footer">
                                    shoes
                                </a>
                            </li>
                            <li className="li-footer">
                                <a href="#" className="a-footer">
                                    dress
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4 className="h4-footer">follow us</h4>
                        <div className="social-links">
                            <a href="#" className="a-footer">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" className="a-footer">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" className="a-footer">
                                <i className="fab fa-instagram"></i>
                            </a>

                            <h2 className="h2-footer">
                                Coppy right@Clothes Shop 2021
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
