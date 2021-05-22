import React, { useEffect, useState } from "react";
import {
    Label,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
    Table,
    Toast, ToastBody, ToastHeader  ,
    Badge 
} from "reactstrap";
import productApi from "../../../api/productApi";

export default function HistoryOrderModal(props) {
    let totalMoney = 0;
    const { order } = props;
    const { order_detail } = order;
    const [products, setProducts] = useState([]);
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
    useEffect(() => {
        async function fetchData() {


            const response = await productApi.getAll();

            if (response) {
                setProducts(response);
            }
        }
        fetchData();
    }, []);
    return (
        <div className="order-modal ">
            
                <Toast onClick={toggle} className="p-3 bg-info my-2 rounded container">
                    <ToastHeader>
                        Lịch sử đơn hàng
                    </ToastHeader>
                    <ToastBody>
                        <Label>Số Điện Thoại: {order.recipientPhone}</Label>
                        <br></br>
                        <Label>Tên Người Nhận: {order.recipientName}</Label>
                        <br></br>
                        <Label>Địa Chỉ Giao Hàng: {order.recipientAddress}</Label>
                        <br></br>
                        <Label>Ghi Chú: {order.note}</Label>
                        <br></br>
                        <Label>
                        Trạng Thái <Badge href="#" color="danger"> {order.isProcess ? "Đã Xác Nhận" : "Chưa Xác Nhận"}</Badge>
                            
                        </Label>
                        <br></br>
                        <Label>Ngày Đặt Hàng: {order.created_at}</Label>
                        <br></br>
                    </ToastBody>
                </Toast>
           
            {/* <div onClick={toggle}>
                <Label>Số Điện Thoại: {order.recipientPhone}</Label>
                <br></br>
                <Label>Tên Người Nhận: {order.recipientName}</Label>
                <br></br>
                <Label>Địa Chỉ Giao Hàng: {order.recipientAddress}</Label>
                <br></br>
                <Label>Ghi Chú: {order.note}</Label>
                <br></br>
                <Label>
                    Trạng Thái: {order.isProcess ? "Đã Xác Nhận" : "Chưa Xác Nhận"}
                </Label>
                <br></br>
                <Label>Ngày Đặt Hàng: {order.created_at}</Label>
                <br></br>
            </div> */}
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Chi Tiết Đơn Hàng</ModalHeader>
                <ModalBody>
                    <Table>
                        <thead>
                            <tr>
                                <th>Số Lượng</th>
                                <th>Hình Ảnh</th>
                                <th>Tên Sản Phẩm</th>
                                <th>Giá</th>
                                <th>Số Lượng</th>
                                <th>Thành Tiền</th>
                            </tr>
                        </thead>
                        <tbody>
                            {order_detail.map((product, index) => {

                                let imageAddress = "",
                                    productName = "";
                                products.map((e) => {
                                    if (e.id == product.product_id) {
                                        imageAddress = e.imageAddress;
                                        productName = e.productName
                                    }
                                })


                                const { price, quantity, total } = product;

                                totalMoney += total;

                                return (
                                    <tr key={index}>
                                        <th scope="row">{index + 1}</th>
                                        <td>
                                            <img
                                                width={32}
                                                height={32}
                                                src={imageAddress}
                                            ></img>
                                        </td>
                                        <td>{productName}</td>
                                        <td>{price}</td>
                                        <td>{quantity}</td>
                                        <td>{total}</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </Table>
                </ModalBody>
                <ModalFooter>
                    <Label>Tổng Tiền: {totalMoney}đ</Label>
                </ModalFooter>
            </Modal>
        </div>
    );
}
