import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Button, Label } from "reactstrap";
import orderApi from "../../../../api/orderApi";
import userApi from "../../../../api/userApi";
import { removeAll } from "../../../../reducers/cartSlice";


import CustomForm from "../CustomForm/CustomForm";

export default function OrderForm(props) {
    const cartProducts=useSelector(state=>state.cartProducts)
    const user=useSelector(state=>state.user)
    const dispatch=useDispatch()
    const [isSignUpSuccess, setIsSignUpSuccess] = useState(false);
    const [massage, setMassage] = useState("");
    const { onToggle } = props;

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
        
        
        
        const { name, phone,address,note } = values;

        

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
        let orderDetails=[]
        cartProducts.map((product)=>{
            orderDetails.push({
                productId:product.product.id,
                quantity:product.quantity,
                price:product.product.price,
                total:product.quantity*product.product.price
            })
        })
        D
        const order={
            customer_id: user.id,
            recipientPhone: phone,
            recipientName:user.customerName,
            recipientAddress: address,
            note: note,
            orderDetails:orderDetails
        }
        D
        const res=await orderApi.postOrder(order);
        if(res.status)
        {
            dispatch(removeAll())
        
            setIsSignUpSuccess(true);
        }
        
        
    };
    const onClickComeBack = () => {
        setIsSignUpSuccess(false);
        onToggle();
    };
    return (
        <div>
            {isSignUpSuccess ? (
                <div>
                    <Label>Order Success!Check your email for more information</Label>
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
