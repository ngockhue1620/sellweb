import axios from 'axios';
import React, { useState,useCallback } from 'react'
import {
    Button,
    Progress,
    Table



} from 'reactstrap';
import ConfimOrder from './ConfimOrder';
export default function Index(){

    const [OrderList,setOrderList]=useState([])

    const [isProgress,setIsProgress]=useState(0)

    const getOrder=  useCallback(
        async ()=> {
            await axios
                .get('https://laravel-react-sell-web.herokuapp.com/api/order')
                .then(response => {
                    setOrderList(response.data)
                })
        }
    )
    if(OrderList.length==0)
    {
        getOrder()
    } 
    

   
    const isProgressSuccess=()=>         
    {
        let getProgress = isProgress+1;
        setIsProgress(getProgress)  ;    

    }
    

        return (
            <div className="conten-component-admin">
                <Button color="primary" outline>
                    Đơn Hàng Chờ xữ lý   {OrderList.length-isProgress}
                </Button>
                <div className="text-center">{OrderList.length 
                                                        ? parseFloat( isProgress*100/OrderList.length).toFixed(2)+"%"
                                                        :"Tất Cả Các Đơn Hàng Đã Được Xác Nhận"
                                            }
                </div>
                <Progress value={isProgress*100/OrderList.length} />
                <div>
                    <Table responsive> 
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Tên Người Nhận</th>
                                <th>Số Điện Thoại</th>
                                <th>Địa Chỉ</th>
                                <th>Tổng Giá Trị Đợn Hàng</th>
                                <th>Chi Tiết</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            
                            {
                            OrderList.map((item,index)=>(
                                
                                 <ConfimOrder key={index} order={item} number={index} isProgressSuccess={isProgressSuccess} />
                                
                                
                            ))}
                        </tbody>
                    </Table>
                </div>
            </div>
        )
    
}
