import React, { useEffect, useState } from "react";
import {
    Label,
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
    Table,
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
        <div className="order-modal">
            <div onClick={toggle}>
                <Label>Phone: {order.recipientPhone}</Label>
                <br></br>
                <Label>Name: {order.recipientName}</Label>
                <br></br>
                <Label>Address: {order.recipientAddress}</Label>
                <br></br>
                <Label>Note: {order.note}</Label>
                <br></br>
                <Label>
                    Status: {order.isProcess ? "Process" : "NonProcess"}
                </Label>
                <br></br>
                <Label>Day Order: {order.created_at}</Label>
                <br></br>
            </div>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Order Details</ModalHeader>
                <ModalBody>
                    <Table>
                        <thead>
                            <tr>
                                <th>Index</th>
                                <th>Image</th>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {order_detail.map((product, index) => {
                                
                                let imageAddress = "",
                                    productName = "";
                                    products.map((e)=>{
                                        if(e.id==product.product_id)
                                        {
                                            imageAddress=e.imageAddress;
                                            productName=e.productName
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
                    <Label>Total: {totalMoney}đ</Label>
                </ModalFooter>
            </Modal>
        </div>
    );
}
