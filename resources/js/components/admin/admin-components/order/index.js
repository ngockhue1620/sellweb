import React, { useState,useEffect } from 'react'
import {
    Button,
    Progress,
    Table
} from 'reactstrap';
import ConfimOrder from './ConfimOrder';
import axios from 'axios';
export default function Index(){

    const [OrderList,setOrderList]=useState([])

    const [isProgress,setIsProgress]=useState(0)


    useEffect(() => {
        async function fetchData() {
            
            await axios
            .get("/api/order")
            .then((response) => {
                console.log("data ne",response )
                setOrderList(response.data)

            }).catch(function (error) {
                console.log(error);
            });           
        }
        fetchData();
    }, []);
   
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

                               Array.isArray(OrderList) ?  
                                                       OrderList.map((item,index)=>(                         
                                                                    <ConfimOrder key={index} order={item} number={index} isProgressSuccess={isProgressSuccess} />                               
                                                       )) 
                                                         : "Có Một Chút Vấn Đề Sảy Ra"
                            }
                        </tbody>
                    </Table>
                </div>
            </div>
        )
    
}
