import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAll } from "../../../../reducers/productSlice";
import ProductCard from "../ProductCard/ProductCard";

export default function ListProducts(props) {
    const listProducts = useSelector((state) => state.products);
    const dispatch = useDispatch();
    useEffect(() => {
        async function fetchData() {
            // You can await here
            dispatch(getAll());
            // ...
        }
        fetchData();
    }, []);

    
    return (
        <div className="row ListProducts">
            {listProducts.map((product, index) => {
                return (
                    <ProductCard
                        key={index}
                        product={product}
                        index={index}
                    ></ProductCard>
                );
            })}
        </div>
    );
}
