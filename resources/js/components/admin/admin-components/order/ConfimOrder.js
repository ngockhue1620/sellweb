import React, { useState, useCallback } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Table } from 'reactstrap';
import Detail from './Detail'

import axios from 'axios'

export default function ConfimOrder(props) {

    const [order, setOrder] = useState(props.order);

    const [isOpen, setIsOpen] = useState(false);

    const [isShow, setIsShow] = useState(true)

    const [orderDetail, setOrderDetail] = useState([]);



    const getOrderDetailById = async () => {
        setIsOpen(!isOpen);
        await axios
            .get(`/api/order-detail/${props.order.id}`)
            .then(response => {
                if (response.status == 200) {
                    setOrderDetail(response.data);
                }
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    const isDisabled = async () => {


        await axios
            .put(`/api/order/${order.id}`, { isProcess: true })
            .then(response => {
                if (response.data.status == true) {
                    setIsShow(false)
                    alert('Xác Nhận Thành Công')
                } else {
                    alert('Có Lỗi Xảy Ra Liện Hệ Kỹ Thuật Để Giải Quyết')
                }


            })
    }
    const totalMoney = () => {
        let money = 0;
        order.order_detail.map((item) => money += item.total)
        return money
    }

    const toggle = () => setIsOpen(!isOpen);



    return (

        <>
            <tr >
                <th scope="row">{props.number + 1}</th>
                <td>{order.recipientName}</td>
                <td>{order.recipientPhone}</td>
                <td>{order.recipientAddress}</td>
                <td>{totalMoney()} VND</td>
                <td>
                    <Button color="primary" onClick={getOrderDetailById} style={{ marginBottom: '1rem' }}>Detail</Button>

                </td>
                <td> <Button disabled={!isShow} color="primary" onClick={() => (props.isProgressSuccess(), isDisabled())} >Xác Nhận</Button></td>


            </tr>
            <div>

                <Modal isOpen={isOpen} toggle={toggle} className="order-detail-customer-admin" >
                    <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                    <ModalBody>
                        <Table>
                            <thead>
                                <tr>
                                    <th>Hình Ảnh</th>
                                    <th>Tên Sản Phẩm</th>
                                    <th>Số Lượng Mua</th>
                                    <th>Giá</th>
                                    <th>Thành Tiền</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    orderDetail.map((item, index) => (

                                        <Detail orderDetail={item} key={index} />
                                    ))}
                            </tbody>
                        </Table>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
                        <Button color="secondary" onClick={toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>



        </>



    )
}