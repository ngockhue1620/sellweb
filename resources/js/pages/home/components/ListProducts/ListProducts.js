import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAll } from "../../../../reducers/productSlice";
import ProductCard from "../ProductCard/ProductCard";
import { Spinner } from "reactstrap";

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
            {listProducts.length == 0 ? (
                <Spinner className="container" type="grow" color="danger">
                    a
                </Spinner>
            ) : (
                listProducts.map((product, index) => (
                    <ProductCard
                        key={index}
                        product={product}
                        index={index}
                    ></ProductCard>
                ))
            )}
        </div>
    );
}
