import React, { Component } from 'react'
import axiosClient from '../../../../axiosClient'
import ProductItem from './ProductItem';
import { Table } from 'reactstrap';
export default class Index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listProducts: [],
            showLogin: false
        }
    }
    componentDidMount() {
        this.getProduct()
        

    }
    getProduct() {
        axiosClient.get('/api/product')
            .then((data) => {
                this.setState({
                    listProducts: data
                })
                
               
            }).catch(function (error) {
                console.log(error);
            });
    }
    
    render() {
        console.log(this.state.listProducts);
        
        
        return (
            <div className="conten-component-admin">
                <Table bordered className="col-lg-6">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Image</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {this.state.listProducts.map((product,index)=>
                            (<ProductItem 
                                    key={index} product={product}
                                     
                             />))}                        
                        
                    </tbody>
                </Table>
            </div>
        )
    }
}
