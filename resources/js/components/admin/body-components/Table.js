import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Wellcome from '../admin-components/Wellcome'
import Product from '../admin-components/product/Index'
import Customer from '../admin-components/customer/index'
import Order from '../admin-components/order/Index'
import Category from '../admin-components/category/index'
const Table = () => {
    return (
        
        <Router  >
            <div className="Menu col-lg-2 menu-class">
            <div  className="list-group">
                <ListGroup>
                    <ListGroupItem>
                        <Link  to="/admin/category">Category</Link>
                    </ListGroupItem>
                    <ListGroupItem>
                        <Link to="/admin/customer">Customer</Link>
                    </ListGroupItem>
                    <ListGroupItem>
                        <Link to="/admin/order">Order</Link>
                    </ListGroupItem>
                    <ListGroupItem>
                        <Link to="/admin/product">Product</Link>
                    </ListGroupItem>
                    <ListGroupItem>
                        <Link to="/admin/">Note</Link>
                    </ListGroupItem>
                </ListGroup>
                </div>
            </div>              


                <Switch>
                    <Route exact path='/admin' render={props => (
                        <Wellcome {...props} />
                    )} />
                    <Route exact path='/admin/category' render={props => (
                        <Category {...props} />
                    )} />
                    <Route exact path='/admin/product' render={props => (
                        <Product {...props} />
                    )} />
                    <Route exact path='/admin/customer' render={props => (
                        <Customer {...props} />
                    )} />
                    <Route exact path='/admin/order' render={props => (
                        <Order {...props} />
                    )} />

                </Switch>
            
        </Router>

    );
}

export default Table;