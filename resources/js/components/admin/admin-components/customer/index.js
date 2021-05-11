import axios from 'axios';
import React, { Component } from 'react'
import {
    Table,
    Spinner
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
        await axios
            .get('/api/customer')
            .then(response=>
            {   
                if(response.status==200)
                {
                    this.setState({listCustomer:response.data})
                }
            })
            .catch(function (error) {
                console.log(error);
            });  
            
    }


    render() {
        
        
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
                            Array.isArray( this.state.listCustomer) ?     
                                                                     this.state.listCustomer.map((item,index)=>(                                
                                                                         <CustomerItem key={index} customer={item} num={index}/>
                                                                    )) :
                                                                    <div>
                                                                       
                                                                        <Spinner type="grow" color="danger" >Error!!!</Spinner>
                                                                        <h5>Data Response is Error</h5>
                                                                    </div> 
                        }
                        </tbody>

                </Table>
            </div>
        )
    }
}
