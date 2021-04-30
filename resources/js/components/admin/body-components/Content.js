
import {
    BrowserRouter as Router, // bao boc app cua minh
    Switch, // switch 
    Route, // case => path, exact 
    Link // <a></a> 
} from "react-router-dom"

import React, { Component, Suspense } from 'react'

import Wellcome from '../admin-components/Wellcome'
import Product from '../admin-components/product/Index'
import Customer from '../admin-components/customer/index'
import Order from '../admin-components/order/index'
import Category from '../admin-components/category/index'
import { Spinner } from "reactstrap"
export default class Content extends Component {
    render() {
        return (
            <div className="content-class">
                <Router>
                    <Suspense >
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
                    </Suspense>
                </Router>
            </div>
        )
    }
}
