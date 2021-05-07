import axios from 'axios';
import React, { useState, useEffect } from 'react'
import {
    Toast,
    ToastBody,
    ToastHeader,
    Alert
} from 'reactstrap'
export default function Wellcome() {

    const [note, setNote] = useState([]);

    const [OrderList, setOrderList] = useState([])

    //lấy sản phẩm gần hết hàng
    useEffect(() => {
        async function getOutStockProduct() {

            await axios
                .get('/api/out-stock-product')
                .then(response => {
                    if (response.data.status == true) {
                        setNote(response.data.product)
                    }
                })
                .catch(e => {
                    console.log(e)
                })
        }
        getOutStockProduct();
    }, []);

    //thông báo có đơn đặt hàng mới
    useEffect(() => {
        async function fetchData() {

            await axios
                .get("/api/order")
                .then((response) => {
                    console.log("data ne", response)
                    setOrderList(response.data)

                }).catch(function (error) {
                    console.log(error);
                });
        }
        fetchData();
    }, []);

    return (
        <div className="conten-component-admin">
            <h1>Đây Là Trang Admin</h1>
            
            {
                Array.isArray(note) && note.length > 0  ?
                    (
                        
                        note.map(item => (
                            <div className="p-3 bg-danger my-2 rounded"> 
                            <Toast>
                                <ToastHeader>
                                   Các Sản Phẩm Gần Hết Hàng ({note.length})
                                </ToastHeader>
                                <ToastBody>
                                    {note.map((item,index)=>(
                                        <Alert key={index} color="warning">
                                            {item.productName}
                                      </Alert>
                                    ))}
                                 </ToastBody>
                            </Toast>
                            </div>   
                        ))
                                             

                    ) :
                    (
                        "Hệ Thống Đang Ở Trạng Thái Tốt"
                    )
                }
                {
                    Array.isArray(OrderList) && OrderList.length > 0 ?(
                        <div className="p-3 my-2 rounded">     
                        <Toast>
                            <ToastHeader>
                                Đơn Hàng Mới
                        </ToastHeader>
                            <ToastBody>
                                có {OrderList.length} Đơn Hàng Mới Chờ Xác Nhận
                        </ToastBody>
                        </Toast>
                        </div>
                    ):
                    (
                        ""
                    )
                }
        </div>
    )
}
