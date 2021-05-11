import axios from 'axios';
import React, { useState, useCallback } from 'react';

import {
    Button,
    Modal, ModalHeader, ModalBody, ModalFooter,
    
    Table

} from 'reactstrap';
import OrderDetail from './OrderDetail';
export default function CustomerOrderDetail(props) {
    const checkDate = (date) => {

        var cdate = (new Date(date));
        cdate = cdate.getDate() + '-' + (cdate.getMonth() + 1) + '-' + +cdate.getFullYear();
        return cdate;
    }
    // console.log("chi tiet",props.orderDetail.order_detail);

    const [orderDetail, setOrderDetail] = useState([]);

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
   
    const getOrderDetailById = useCallback(function () {
        axios
            .get(`/api/order-detail/${props.order.id}`)
            .then(response => {
                if(response.status==200)
                {
                    setOrderDetail(response.data);
                }
            })
            .catch(function (error) {
                console.log(error);
            });

    }, [orderDetail])

    var totalMoney=0;
    
    return (
        <>
            <tr>
                <td>Đơn Hàng Thứ {props.num + 1}</td>
                <td>{props.order.recipientName}</td>
                <td>{props.order.recipientPhone}</td>
                <td>{props.order.recipientAddress}</td>
                <td>{checkDate(props.order.created_at)}</td>
                <td><Button color="primary" onClick={() => { toggle(); getOrderDetailById() }}>Xem Chi Tiết</Button>{' '}</td>
            </tr>
            <Modal isOpen={modal} toggle={toggle} className="order-detail-customer-admin" >
                <ModalHeader toggle={toggle}>Chi Tiết Đơn Hàng</ModalHeader>
                <ModalBody>
                    <Table >
                        <thead>
                            <th>Hình Ảnh</th>
                            <th>Tên Sản Phẩm</th>
                            <th>Giá Bán</th>
                            <th>Số Lượng Mua</th>
                            <th>Thành Tiền</th>
                        </thead>
                        <tbody>
                            {
                           Array.isArray(orderDetail)?
                            orderDetail.map((item, index) => (

                                totalMoney+=item.total,
                                <OrderDetail orderDetail={item} key={index} />
                            )):"Data response is error"
                            }
                            <tr>
                                <td></td>
                                <td>Tổng Tiền Đơn Hàng: {totalMoney} VNĐ</td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>

                    </Table>
                </ModalBody>
                <ModalFooter>

                    <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>

        </>
    )
}
