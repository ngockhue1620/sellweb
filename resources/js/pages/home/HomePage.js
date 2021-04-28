

import Body from './components/Body/Body'

import React, { Component } from 'react'
import Menu from './components/Menu/Menu'
import Category from './components/Category/Category'
import Content from './components/Content/Content'
import Slider from './components/Slider/Slider'

import Card from './components/ProductCard/ProductCard'
import axiosClient from '../../api/axiosClient'

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

                <Body>
                    
                </Body>
                {/* <LoginPage></LoginPage> */}
            </div>
        )
    }
}






