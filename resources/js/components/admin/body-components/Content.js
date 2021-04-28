
import {
    BrowserRouter as Router, // bao boc app cua minh
    Switch, // switch 
    Route, // case => path, exact 
    Link // <a></a> 
} from "react-router-dom"

import React, { Component, Suspense, lazy } from 'react'

const Category = lazy(() => import('../admin-components/category'))
const Wellcome = lazy(() => import('../admin-components/Wellcome'))
const Product = lazy(() => import('../admin-components/product'))
const Customer = lazy(() => import('../admin-components/customer/index'))
const Order = lazy(() => import('../admin-components/order/index'))
export default class Content extends Component {
    render() {
        return (
            <div className="content-class">
                <Router>
                    <Suspense fallback={<div>Loading...</div>}>
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
