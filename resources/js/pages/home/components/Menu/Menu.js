import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import menuIcon from "../../../../assets/menu.svg";
import { getAll } from "../../../../reducers/categorySlice";
import Category from "../Category/Category";
import {
    Collapse,
    Nav,
    Navbar,
    NavbarToggler,
    NavItem,
    NavLink,
    Spinner,
} from "reactstrap";

import React from "react";
import { showProductsByCategoryId } from "../../../../reducers/productSlice";
import className from "classnames";

export default function Menu(props) {
    const [idClick, setIdClick] = useState(null);
    const categoryList = useSelector((state) => state.categories);
    const dispatch = useDispatch();
    const handelCategoryClick = (category) => {
        dispatch(showProductsByCategoryId(category));
        setIdClick(category.id);
    };

    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);

    useEffect(() => {
        async function fetchData() {
            // You can await here
            dispatch(getAll());
            // ...
        }
        fetchData();
    }, []);
    return (
        <div className="Menu col-lg-3">
            <div className="Menu__mobie">
                <img
                    onClick={toggleNavbar}
                    widt={32}
                    height={32}
                    src={menuIcon}
                ></img>

                <ul
                    class={className("ul-category", "ul-category-responsive", {
                        none: collapsed,
                    })}
                >
                    {categoryList.length == 0 ? (
                        <Spinner
                            className="container"
                            type="grow"
                            color="danger"
                        >
                            a
                        </Spinner>
                    ) : (
                        categoryList.map((category, index) => (
                            <li class="li-category">
                                <Category
                                    idClick={idClick}
                                    handelCategoryClick={handelCategoryClick}
                                    key={index}
                                    category={category}
                                ></Category>
                            </li>
                        ))
                    )}
                </ul>
            </div>
            <div className="Menu__laptop">
                <div class="sidebar-category">
                    <h3 class="text-category">categories</h3>
                    <ul class="ul-category">
                        {categoryList.length == 0 ? (
                            <Spinner
                                className="container"
                                type="grow"
                                color="danger"
                            >
                                a
                            </Spinner>
                        ) : (
                            categoryList.map((category, index) => (
                                <li class="li-category">
                                    <Category
                                        idClick={idClick}
                                        handelCategoryClick={
                                            handelCategoryClick
                                        }
                                        key={index}
                                        category={category}
                                    ></Category>
                                </li>
                            ))
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
}
