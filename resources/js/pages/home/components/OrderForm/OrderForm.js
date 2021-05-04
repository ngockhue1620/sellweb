import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Label, Table } from "reactstrap";
import orderApi from "../../../../api/orderApi";
import { removeAll } from "../../../../reducers/cartSlice";
import CustomForm from "../CustomForm/CustomForm";

export default function OrderForm(props) {
    const cartProducts = useSelector((state) => state.cartProducts);

    const user = useSelector((state) => state.user);

    const dispatch = useDispatch();

    const [isOrder, setIsOrder] = useState(false);

    const [massage, setMassage] = useState("");

    const { onToggle, setTitle } = props;

    const [resOrder, setResOrder] = useState({});

    let total = 0;

    const listFormGroups = [
        {
            label: "Name",
            type: "text",
            placeholder: "Enter recipient's name here",
        },

        {
            label: "Phone",
            type: "text",
            placeholder: "Enter recipient's phonenumber here",
        },
        {
            label: "Address",
            type: "text",
            placeholder: "Enter recipient's address here",
        },
        {
            label: "Note",
            type: "area",
            placeholder: "Enter note for us here if you need",
        },
    ];

    const handleSubmit = async (values) => {
        const { name, phone, address, note } = values;

        let regExp = /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$/;

        if (!regExp.test(name)) {
            setMassage("Name is invalid!");
            return;
        }

        regExp = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        if (!phone.match(regExp)) {
            setMassage("Phone number is invalid!");
            return;
        }
        let orderDetails = [];
        cartProducts.map((product) => {
            orderDetails.push({
                productId: product.product.id,
                quantity: product.quantity,
                price: product.product.price,
                total: product.quantity * product.product.price,
            });
        });

        const order = {
            customer_id: user.id,
            recipientPhone: phone,
            recipientName: user.customerName,
            recipientAddress: address,
            note: note,
            orderDetails: orderDetails,
        };

        const res = await orderApi.postOrder(order);
        if (res.status) {
            setResOrder(res.order);
            setTitle("Order Success! This is details for your order.");
        } else {
            setTitle("Oops!!!Order failed");
        }

        setIsOrder(true);
    };
    const onClickComeBack = () => {
        onToggle();
        setIsOrder(false);
        dispatch(removeAll());
    };
    return (
        <div>
            {isOrder ? (
                <div>
                    <Label>Recipient Name: {resOrder.recipientName}</Label>
                    <br></br>
                    <Label>Recipient Phone: {resOrder.recipientPhone}</Label>
                    <br></br>
                    <Label>
                        Recipient Address: {resOrder.recipientAddress}
                    </Label>
                    <br></br>
                    <Label>Note: {resOrder.note}</Label>
                    <br></br>
                    <Label>Order day: {resOrder.created_at}</Label>
                    <br></br>

                    <Table>
                        <thead>
                            <tr>
                                <th>Index</th>
                                <th>Image</th>
                                <th>Name Product</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartProducts.map((product, index) => {
                                total =
                                    total +
                                    product.quantity * product.product.price;
                                return (
                                    <tr>
                                        <th scope="row">{index + 1}</th>
                                        <td>
                                            <img
                                                width={32}
                                                height={32}
                                                src={
                                                    product.product.imageAddress
                                                }
                                            ></img>
                                        </td>
                                        <td>{product.product.productName}</td>
                                        <td>{product.product.price}</td>
                                        <td>{product.quantity}</td>
                                        <td>
                                            {product.quantity *
                                                product.product.price}
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </Table>
                    <Label>Total: {total} đ</Label>
                    <br></br>
                    <Button onClick={onClickComeBack}>
                        Comeback to Homepage
                    </Button>
                </div>
            ) : (
                <CustomForm
                    btnLabel="Order"
                    massage={massage}
                    onSubmit={handleSubmit}
                    listFormGroups={listFormGroups}
                ></CustomForm>
            )}
        </div>
    );
}
