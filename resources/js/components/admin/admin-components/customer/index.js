import React, { Component } from 'react'
import axiosClient from '../../../../axiosClient'
import CustomerItem from './CustomerItem';
import { Table } from 'reactstrap';
export default class Index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listCustomers: [],
            showLogin: false
        }
    }
    componentDidMount() {
        this.getCustomer()
        

    }
    getCustomer() {
        axiosClient.get('/api/customer')
            .then((data) => {
                this.setState({
                    listCustomers: data
                })
                
               
            }).catch(function (error) {
                console.log(error);
            });
    }
    deleteCustomer() {
        axiosClient.get('/api/customer/')
            .then((data) => {
                this.setState({
                    listCustomers: data
                })
                
               
            }).catch(function (error) {
                console.log(error);
            });
    }
    render() {
        console.log(this.state.listCustomers);
        
        
        return (
            <div className="conten-component-admin">
                <Table bordered className="col-lg-6">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Customer Name</th>
                            <th>Phone</th>
                            <th>email</th>
                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {this.state.listCustomers.map((customer,index)=>
                            (<CustomerItem 
                                    key={index} customer={customer}
                                     
                             />))}                        
                        
                    </tbody>
                </Table>
            </div>
        )
    }
}
