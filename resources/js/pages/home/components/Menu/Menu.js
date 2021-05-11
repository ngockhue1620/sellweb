import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAll } from "../../../../reducers/categorySlice";
import Category from "../Category/Category";
import {
    
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
                <i class="fas fa-plus icon" onClick={toggleNavbar}></i>
                <ul
                    className={className("ul-category", "ul-category-responsive", {
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
                            <li key={index} className="li-category">
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
                <div className="sidebar-category">
                    <h3 className="text-category">categories</h3>
                    <ul className="ul-category">
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
                                <li key={index} className="li-category">
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
