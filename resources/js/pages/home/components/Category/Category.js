import React, { useState } from "react";
import classNames from "classnames/bind";

export default function Category(props) {
    const { idClick, category, handelCategoryClick } = props;

    return (
        <a 
            onClick={() => handelCategoryClick(category)}
            className={classNames("Category", "list-group-item", {
                active: idClick == category.id,
            })}
        >
            {category.categoryName}
        </a>
    );
}
