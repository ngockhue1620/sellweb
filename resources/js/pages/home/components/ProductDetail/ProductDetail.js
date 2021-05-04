import React from "react";
import { CardBody, CardText, CardTitle } from "reactstrap";

export default function ProductDetail(props) {
    const { productName, description } = props;
    return (
        <CardBody className="product-detail">
            <CardTitle tag="h5">{productName}</CardTitle>
            <CardText>{description}</CardText>
        </CardBody>
    );
}
