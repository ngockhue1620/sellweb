import React, { useState, useCallback } from 'react';

import { Spinner, Alert, Button, Modal, ModalHeader, ModalBody, ModalFooter, Card, CardImg, CardText } from 'reactstrap';

import UpdateProduct from './UpdateProduct';

export default function ProductItem(props) {

  const [product, setProduct] = useState(props.product);

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const [confirm, setConfirm] = useState(false);

  const [isDelete, setDelete] = useState("");

  const [isUpdate, setUpdate] = useState(false);

  const handleClickUpdate = useCallback((value) => {
    if (value == false) {
      setUpdate(false)
    }
    else {
      console.log("product", product)
      setUpdate(false)
      setProduct({
        ...product,
        price: value.price,
        imageAddress: value.imageAddress,
        productName: value.productName,
        description: value.description,
        quantity: value.quantity,
        id: value.id
      })
      console.log("value", product)

    }
  }, [product]);


  const confirmDelete = (value) => {
    if (value == true) {
      axios
        .delete(`/api/product/${product.id}`)
        .then((response) => {
          if (response.status == 200) {
            alert('Delete Success success')
            setDelete("show-product-item-admin");
          } else {
            console.log("errors");
          }
        })
        .catch(function (error) {
          console.log(error);
        });

      setConfirm(false);
    }
    else {
      setConfirm(false)
    }
  }



  return (
    <>
      <tr className={isDelete} data-aos="fade-up"
        data-aos-anchor-placement="bottom-bottom">
        <th scope="row">{product.id}</th>
        <td onClick={toggle}>{product.productName}</td>
        <td>{product.price}</td>
        <td><img className="image-product-admin" src={product.imageAddress} /></td>
        <td><button className="btn btn-danger"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16"
          onClick={() => setConfirm(true)}
        >
          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
          <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
        </svg></button>

          <button className="btn btn-warning"
            onClick={() => setUpdate(true)}
          ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
              <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
              <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
            </svg></button>

        </td>
      </tr>
      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>{product.productName}</ModalHeader>
        <ModalBody>
          <Card>
            <CardImg className="Card-Img-Detail" src={product.imageAddress} />
            <CardText>Tồn Kho:{product.quantity}</CardText>
            <CardText>Giá Cả :{product.price}</CardText>
            <CardText>Mô tả  :{product.description}</CardText>
          </Card>
        </ModalBody>
        <ModalFooter>

          <Button color="secondary" onClick={toggle}>Close</Button>
        </ModalFooter>
      </Modal>

      <Modal isOpen={confirm} >
        <ModalHeader style={{ margin: "auto " }}><Alert color="danger">Bạn Có Chắc Chắc Xóa Mặc Hàng Này</Alert></ModalHeader>
        <ModalBody>
          <Card>
            <CardImg className="Card-Img-Detail" src={product.imageAddress} />
            <CardText>Tồn Kho:{product.quantity}</CardText>
            <CardText>Giá Cả :{product.price}</CardText>
            <CardText>Mô tả  :{product.description}</CardText>
          </Card>
        </ModalBody>
        <ModalFooter style={{ margin: "auto " }}>
          <Button color="secondary" onClick={() => { confirmDelete(true) }}>Delete</Button>
          <Button color="success" onClick={() => { confirmDelete(false) }}>Close</Button>
        </ModalFooter>
        <Spinner className="container" type="grow" color="danger" >a</Spinner>
      </Modal>
      {/* update */}

      <UpdateProduct product={product} category={props.category} isUpdate={isUpdate} handleClickUpdate={handleClickUpdate} />

    </>

  )
}