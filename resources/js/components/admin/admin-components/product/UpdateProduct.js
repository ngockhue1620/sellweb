import React from 'react'

export default function UpdateProduct(props) {


    return (
        <>
        <ModalHeader style={{ margin: "auto " }}><Alert color="warning">Cập Nhập Sản Phẩm</Alert></ModalHeader>
        <ModalBody>
        
        </ModalBody>
        <ModalFooter style={{ margin: "auto " }}>
          <Button color="secondary">Delete</Button>
          <Button color="success" >Close</Button>
        </ModalFooter>
        <Spinner className="container" type="grow" color="danger" >a</Spinner>
        </>
    )
}
