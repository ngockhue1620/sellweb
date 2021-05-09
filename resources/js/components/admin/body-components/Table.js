import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';


const Table = () => {
    return (
        <div className="Menu col-lg-2 menu-class">
            <div className="list-group ">
                <ListGroup>                   
                    <ListGroupItem tag="a" href="/admin/category">Category</ListGroupItem>
                    <ListGroupItem tag="a" href="/admin/customer">Customer</ListGroupItem>                    
                    <ListGroupItem tag="a" href="/admin/order">Order</ListGroupItem>
                    <ListGroupItem tag="a" href="/admin/product">Product</ListGroupItem>
                    <ListGroupItem tag="a" href="/admin/">Note</ListGroupItem>
                </ListGroup>
            </div>
        </div>

    );
}

export default Table;