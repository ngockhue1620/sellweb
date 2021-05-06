

import React, { Component } from 'react'
import axiosAdmin from '../../axiosAdmin'
import {
    Table
} from 'reactstrap';
import CustomerItem from './CustomerItem';
export default class index extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            listCustomer:[],

        }
    }
    componentDidMount()
    {
        this.getCustomer();
    }

    async getCustomer()
    {
        await axiosAdmin
            .get('api/customer')
            .then(response=>
            {   
                
                this.setState({listCustomer:response})
            })
            .catch(function (error) {
                console.log(error);
            });    
    }


    render() {
        console.log(this.state.listCustomers);
        
        
        return (
            <div className="conten-component-admin">

                <Table responsive> 
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Id</th>
                                <th>Tên Khách Hàng</th>
                                <th>Số Điện Thoại</th>
                                <th>Email</th>
                                <th>Chi Tiết</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            
                            {
                            this.state.listCustomer.map((item,index)=>(                                
                                 <CustomerItem key={index} customer={item} num={index}/>
                            ))}
                        </tbody>

                </Table>
            </div>
        )
    }
}
