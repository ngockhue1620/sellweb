

import Body from './Body'
import React, { Component } from 'react'
import Menu from './Menu'
import Category from './Category'
import Content from './Content'
import Slider from './Slider'

import Card from './Card'

import axios from 'axios'

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
        this.getCategories(),
        this.getProduct(),
        console.log("list proudtc ne",this.state.listProducts)
        console.log("list proudtc ne",this.state.listCategories)

    }
    getCategories() {
        axios.get(`https://laravel-react-sell-web.herokuapp.com/api/category`)
            .then((data) => {
                this.setState({
                    listCategories: data.data
                })
            }).catch(function (error) {
                console.log(error);
            });
    }
    getProduct () {
        axios.get(`https://laravel-react-sell-web.herokuapp.com/api/product`)
            .then((response) => {                
               this.setState( {listProducts: response.data})                
            }).catch(function (error) {
                console.log(error);
            });
    }
    
    render() {
        return (

            <div className="Homepage">

                <Body>
                    <Menu>
                        
                        {this.state.listCategories.map((item, index) => (<Category key={index}>{item.categoryName}</Category>))}
                    </Menu>
                    <Content>
                        <Slider></Slider>
                        {/* <ListCard listProduct={this.state.listProducts} /> */}
                        <div className='row ListCard'>
                            {this.state.listProducts.map((item, index) => (<Card  key={index} product={item}/>))}
                        </div>
                        
                      
                    </Content>
                </Body>
                {/* <LoginPage></LoginPage> */}
            </div>
        )
    }
}






