
import React, { useState } from 'react';
// import { Spinner } from 'reactstrap';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,Card,CardImg, CardText } from 'reactstrap';
export default function ProductItem(product,products) {
    
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    // const {product,deleteProduct,key}=props
   
   
    // xác nhận xóa => xong thì đóng
    const [confirm,setConfirm] = useState(false);
    const [isDelete,setDelete] = useState("");
    const confirmDelete =(value) =>{
        if(value==true)
        {   
               
            
            axios
                .delete(`http://127.0.0.1:8000/api/product/${product.product.id}`)
                .then((response) => {
                    if (response.status == 200) {                        
                        alert('Delete Success success')
                    } else {
                        console.log("errors");
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
            
            setDelete("show-product-item-admin");
            setConfirm(false);
        }
        else
        {
            setConfirm(false)
        }
    }


    return (
        <>
        <tr className={isDelete} data-aos="fade-up"
             data-aos-anchor-placement="bottom-bottom">
            <th scope="row">{product.product.id}</th>
            <td onClick={toggle}>{product.product.productName}</td>
            <td>{product.product.price}</td>
            <td><img className="image-product-admin" src={product.product.imageAddress} /></td>
            <td><button className="btn btn-danger"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16"
                onClick={()=>setConfirm(true)}
            >
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
            </svg></button>

                <button className="btn btn-warning" ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                </svg></button>

            </td>
        </tr>
        <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>{product.product.productName}</ModalHeader>
        <ModalBody>
          <Card>
              <CardImg  className="Card-Img-Detail" src={product.product.imageAddress}/>
              <CardText>Tồn Kho:{product.product.quantity}</CardText>
              <CardText>Giá Cả :{product.product.price}</CardText>
              <CardText>Mô tả  :{product.product.description}</CardText>
          </Card>
        </ModalBody>
        <ModalFooter>
          
          <Button color="secondary" onClick={toggle}>Close</Button>
        </ModalFooter>
      </Modal>
        {/* confirm delete */}
      <Modal isOpen={confirm} >
        <ModalHeader>{product.product.productName}</ModalHeader>
        <ModalBody>
          <Card>
              <CardImg  className="Card-Img-Detail" src={product.product.imageAddress}/>
              <CardText>Tồn Kho:{product.product.quantity}</CardText>
              <CardText>Giá Cả :{product.product.price}</CardText>
              <CardText>Mô tả  :{product.product.description}</CardText>
          </Card>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={()=>{confirmDelete(true)}}>Delete</Button>
          <Button color="secondary" onClick={()=>{confirmDelete(false)}}>Close</Button>
        </ModalFooter>
      </Modal>
      </>
        
    )
}
