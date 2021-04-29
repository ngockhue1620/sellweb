

import Body from './components/Body/Body'
import React, { Component } from 'react'
import axiosClient from '../../api/axiosClient'
import {Spinner} from 'reactstrap'
export default class HomePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listCategories: [],
            listProducts: [],
            showLogin: false

        }
    }
    componentDidMount() {
        this.getCategories()
        this.getProduct()
        // console.log("list proudtc ne",this.state.listProducts)
        // console.log("list category ne"+this.state.listCategories[0].categoryName)

    }
    getCategories() {
        axiosClient.get('/api/category')
            .then((data) => {
                // console.log(data)
            }).catch(function (error) {
                console.log(error);
            });
    }
    getProduct () {
        axiosClient.get('/api/product')
            .then((response) => {                
               this.setState( {listProducts: response})                
            }).catch(function (error) {
                console.log(error);
            });
    }
    
    render() {
        return (
            
            <div className="Homepage">
               
                <Body/>
                
                {/* <LoginPage></LoginPage> */}
            </div>
        )
    }
}






