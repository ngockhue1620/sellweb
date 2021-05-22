
import axios from 'axios';
import React, { useState } from 'react';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Card, CardText,Label,Form,InputGroup,Input,InputGroupAddon,Table } from 'reactstrap';
import ShowProduct from './ShowProduct';
export default function CategoryItem(props) {

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const [className, setClassName] = useState("");

    const [isUpdate, setIsUpdate] = useState(false);

    const toggleUpdate = () => setIsUpdate(!isUpdate);

    const [errorsValue,seterrorsValue] =useState([]);

    const [categoryName,setCategoryName]=useState(props.category.categoryName);

    const handleCategory =(e) =>{
        setCategoryName(e.target.value);
    }

    const [isShowDetail,setIsShowDetail] =useState(false);

    const toggleDetail = () => setIsShowDetail(!isShowDetail)

    const detaleCategory = async () => {
        await axios
            .delete(`/api/category/${props.category.id}`)
            .then(response => {
                if (response.data.status == true) {
                    alert(response.data.message);
                    setClassName('show-product-item-admin')
                    toggle()
                }

            }).catch(error => {
                console.log(error)
            })
    }

    const UpdateCategory = async () => {


        if(categoryName=="")
        {
           seterrorsValue(["Bạn Phải Nhập Vào Category"]);
        }
        
        else
        {
            console.log("chay")
            await axios
                .put(`/api/category/${props.category.id}`, { categoryName:categoryName })
                .then(response => {                   
                    
                       if(response.data.status==true)
                       {
                            alert("Update Success");
                            props.category.categoryName=categoryName
                            toggleUpdate()                   
                       }   

                }).catch(error => {
                    console.log(error)
                })
        }    
    }




    return (
        <>
            <tr className={className}>
                <th scope="row">{props.category.id}</th>
                <td>{props.category.categoryName}</td>
                <td>
                    <Button color="primary" onClick={toggleDetail}>Detail</Button>
                </td>
                <td><Button 
                     onClick={toggle}
                     className="btn btn-danger"
                    >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                </svg></Button>

                    <Button 
                        onClick={toggleUpdate}
                        className="btn btn-warning" 
                        >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                    </svg></Button>

                </td>
            </tr>

            <Modal isOpen={modal} toggle={toggle} >
                <ModalHeader toggle={toggle}>Xóa sản phẩm</ModalHeader>
                <ModalBody>
                    <Card>
                        <CardText style={{ textAlign: "center" }}><h3>Bạn có chắc chắn muốn xóa:<br /> {props.category.categoryName}</h3></CardText>
                        <CardText >Nếu Danh Mục Này Bị Xóa Tất Cả Các Sản Phẩm và Đơn Hàng Liên Quan Sẽ Bị Xóa Theo</CardText>
                    </Card>
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" onClick={detaleCategory}>Vẫn Tiếp Tục</Button>
                    <Button color="success" onClick={toggle}>Close</Button>
                </ModalFooter>
            </Modal>

            <Modal isOpen={isUpdate} toggle={toggleUpdate} >
                <ModalHeader toggle={toggleUpdate}>Cập Nhập sản phẩm</ModalHeader>
                <ModalBody>
                    <Form>

                        <InputGroup>
                            <InputGroupAddon addonType="append">
                                <Label className="label-insert-admin">
                                    Tên Danh Mục
                                </Label>
                            </InputGroupAddon>
                            <Input
                                value={categoryName}
                                onChange={(e) =>
                                    handleCategory(e)
                                }
                            />
                        </InputGroup>
                    </Form>
                    <ul className="list-group alert-danger">
                        {errorsValue.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </ModalBody>
                <ModalFooter>
                   
                    <Button color="success" onClick={toggleUpdate}>Close</Button>
                    <Button color="warning" onClick={ UpdateCategory}>Vẫn Tiếp Tục</Button>
                </ModalFooter>
            </Modal>
            
            {/* show product of category */}
            {isShowDetail ? <ShowProduct category={props.category}/> : ""}

        </>

    )
}
