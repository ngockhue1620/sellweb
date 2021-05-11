import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ListGroup, ListGroupItem,Label } from "reactstrap";

import orderApi from "../../api/orderApi";
import HistoryOrderModal from "./components/HistoryOrderModal";

export default function HistoryOrder() {
    const user = useSelector((state) => state.user);
    const [historyOrders, setHistoryOrders] = useState([]);
    const [modal, setModal] = useState(null);

    const toggle = (key) => setModal(key);
    useEffect(() => {
        async function fetchData() {
            // You can await here

            const response = await orderApi.getHistoryOrders(user.id);
            setHistoryOrders(response);

            // ...
        }
        fetchData();
    }, []);
    return (
        <div  className="container history-page">
            <Label>Kích Vào Đơn Hàng Để Xem Chi Tiết</Label>
            {!user  ? (
                <span>Bạn chưa đăng nhập</span>
            ) : (
                <ListGroup>
                    {historyOrders.map((order, index) => {
                        return (
                            <ListGroupItem>
                                <HistoryOrderModal
                                    key={index}
                                    order={order}
                                ></HistoryOrderModal>
                            </ListGroupItem>
                        );
                    })}
                </ListGroup>
            )}
        </div>
    );
}
