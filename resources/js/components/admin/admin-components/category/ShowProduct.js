import React, { useState } from 'react';
import ProductItem from './ProductItem'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, CardText,Table } from 'reactstrap';

export default function ShowProduct(props) {
    const [isShowDetail,setIsShowDetail] =useState(true);

    const toggleDetail = () => setIsShowDetail(!isShowDetail)
    return (
        <Modal isOpen={isShowDetail} toggle={toggleDetail} >
                <ModalHeader toggle={toggleDetail}>{props.category.categoryName}</ModalHeader>
                <ModalBody>
                    <CardText>{props.category.product.length} Sản Phẩm Cho Danh Mục Này</CardText>
                    <Table bordered className="col-lg-6">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Image</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {
                             props.category.product.length == 0 ? <Spinner style={{ margin: "0 auto" }} type="grow" color="danger" >a</Spinner> :(
                                    Array.isArray(props.category.product) ?
                                    props.category.product.map((product, index) => (
                                            <ProductItem key={index} product={product} />
                                        )):"Data response is erro"
                                )
                            }
                        </tbody>
                    </Table>                   
                </ModalBody>
                <ModalFooter>                    
                    
                </ModalFooter>
            </Modal>
    )
}
