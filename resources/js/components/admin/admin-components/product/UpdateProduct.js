import axios from 'axios';
import {React,useState} from 'react';
import { Spinner, Alert, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {
  Form,
  CardImg,  
  Input,  
  Card,
  InputGroupAddon,
  InputGroup,
  Label

} from "reactstrap";
export default function UpdateProduct(props) {
  const [product, setproduct] = useState(props.product)
  const onChangeDescription=(value)=>{
    setproduct({...product,description:value})
  }
  const onChangeProductName=(value)=>{
    setproduct({...product,productName:value})
  }
  const onchangePrice=(value)=>{
    setproduct({...product,price:value})
  }
  const onChangeQuantity=(value)=>{
    setproduct({...product,quantity:value})
  }
  const onChangeImageAddreess=(value)=>{
    setproduct({...product,imageAddress:value})
  }
  const onChangeColor=(value)=>{
    setproduct({...product,color:value})
  }

  const confimUpdate=()=>{
    axios
    .put(`https://laravel-react-sell-web.herokuapp.com/api/product/${product.id}`,product)
    .then(response=>{
      
      if(response.data.status==true)
      {
        alert('update successful')
        props.handleClickUpdate(product)
      }
      else
      {
        alert('update fail')
      }
    })
  }
  
  return (
    <>
      <Modal isOpen={props.isUpdate}>
        <ModalHeader style={{ margin: "auto " }}><Alert color="warning">Cập Nhập Sản Phẩm</Alert></ModalHeader>
        <ModalBody>
          <Card>
            <Form>
              <CardImg src={product.imageAddress} />
              <InputGroup>
                <InputGroupAddon addonType="append">
                  <Label className="label-insert-admin">
                    Hình Ảnh
                  </Label>
                </InputGroupAddon>

                <Input
                  type="text"                   
                  
                  placeholder="không đổi thì để trống"
                  onChange={e=>onChangeImageAddreess(e.target.value)}                
                />
              </InputGroup>

              <InputGroup>
                <InputGroupAddon addonType="append">
                  <Label className="label-insert-admin">
                    Danh Mục Sản Phẩm
                  </Label>
                </InputGroupAddon>
                
                <Input type="select" >               
                  <option>Kích vào để chọn</option>
                  {
                    props.category.map((category, index) =>
                      <option key={index} value={category.id}>{category.categoryName}</option>
                  )}
                </Input>
              </InputGroup>
              <InputGroup>
                <InputGroupAddon addonType="append">
                  <Label className="label-insert-admin">
                    Tên Sản Phẩm
                   </Label>
                </InputGroupAddon>
                <Input
                required
                type="text"
                value={product.productName}
                onChange={e=>onChangeProductName(e.target.value)}
                
                
                />
              </InputGroup>

              <InputGroup>
                <InputGroupAddon addonType="append">
                  <Label className="label-insert-admin">
                    Giá Cả
                   </Label>
                </InputGroupAddon>
                <Input
                 required
                  type="number"
                  value={product.price}
                  onChange={e=>onchangePrice(e.target.value)}
                />
              </InputGroup>

              <InputGroup>
                <InputGroupAddon addonType="append">
                  <Label className="label-insert-admin">
                    Số Lượng Nhập
                  </Label>
                </InputGroupAddon>
                <Input
                required
                  type="number"
                  value={product.quantity}
                  onChange={e=>onChangeQuantity(e.target.value)}
                />
              </InputGroup>

              <InputGroup>
                <InputGroupAddon addonType="append">
                  <Label className="label-insert-admin">
                    Màu
                  </Label>
                </InputGroupAddon>
                <Input
                required
                  value={product.color}
                  onChange={e=>onChangeColor(e.target.value)}
                />
              </InputGroup>

              <InputGroup>
                <InputGroupAddon addonType="append">
                  <Label className="label-insert-admin">
                    Mô tả
                  </Label>
                </InputGroupAddon>
                <Input
                  value ={product.description}
                  onChange={e=>onChangeDescription(e.target.value)}
                  
                ></Input>
              </InputGroup>
              
            </Form>
            </Card>
        </ModalBody>
          <ModalFooter >
            <Button color="success" onClick={confimUpdate}>Update</Button>
            <Button color="secondary" onClick={() => props.handleClickUpdate(false)}>Close</Button>
          </ModalFooter>
          <Spinner className="container" type="grow" color="danger" >a</Spinner>
      </Modal>
    </>
  )
}
