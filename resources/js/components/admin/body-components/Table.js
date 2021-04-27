import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';


const Table = () => {
    return (
        <div class="Menu col-lg-2 menu-class">
            <div class="list-group ">
                <ListGroup>
                   
                    <ListGroupItem tag="a" href="/admin/category">Category</ListGroupItem>
                    <ListGroupItem tag="a" href="/admin/customer">Customer</ListGroupItem>                    
                    <ListGroupItem tag="a" href="/admin/order">Order</ListGroupItem>
                    <ListGroupItem tag="a" href="/admin/product">Product</ListGroupItem>
                </ListGroup>
            </div>
        </div>

    );
}

export default Table;