import React, { Component } from "react";
import ProductItem from "./ProductItem";
import { Label, Table, Spinner } from "reactstrap";

import {
    Form,
    CardImg,
    Button,
    Input, 
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Card,
    InputGroupAddon,
    InputGroup,
    

} from "reactstrap";

import axios from "axios";

export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listProducts: [],
            listCategory: [],
            showLogin: false,
            value: false,
            url: "https://reactstrap.github.io/assets/318x180.svg",
            productName: "",
            categoryId: "",
            color: "",
            description: "",
            quantity: 0,
            price: 0,
            errorsValue: [],
            isChangeUrl: false,

        };

    }
    componentDidMount() {
        this.getProduct();
        this.getCategory();
    }

    async getProduct() {
        await axios

            .get(`/api/product`)


            .then((response) => {
                this.setState({
                    listProducts: response.data,
                });
            })
            
            .catch(function (error) {
                console.log(error);
            });
           
    }

   async  getCategory() {
       await axios
            .get(`/api/category`)

            .then((response) => {
                if(response.status==200)
                {
                    this.setState({
                        listCategory: response.data,
                    });
                }

            })
            .catch(function (error) {
                console.log(error);
            });
            console.log("category",this.state.listCategory)
    }

    handleClick(value) {
        this.setState({ value: !value, errorsValue: [] });
    }

    AddImage(e) {
        this.setState({
            url: e.target.value,
            isChangeUrl: true,
        });
    }
    //thêm sản phẩm
    // trước khi thêm cập nhập giá trị các biến trong state

    handleChangeProductName(e) {
        this.setState({ productName: e.target.value });
    }

    handleChangeCategoryId(e) {
        this.setState({ categoryId: e.target.value });
    }

    handleChangeColor(e) {
        this.setState({ color: e.target.value });
    }

    handleChangeDescription(e) {
        this.setState({ description: e.target.value });
    }

    handleChangeQuantity(e) {
        this.setState({ quantity: e.target.value });
    }

    handleChangePrice(e) {
        this.setState({ price: e.target.value });
    }
    //

    // function thêm
    async addProduct() {
        this.setState({ errorsValue: [] });
        var errors = [];
        if (this.state.productName == "") {
            errors.push("Bạn chưa nhập tên sản phẩm");
        }
        if (this.state.categoryId == "") {
            errors.push("Ban Chua chon danh muc san pham");
        }
        if (this.state.color == "") {
            errors.push("Ban Chua Nhap mau san pham");
        }
        if (this.state.description == "") {
            errors.push("Ban Chua Nhap đoạn mô tả sản phâm");
        }
        if (this.state.price == "") {
            errors.push("Ban Chua Nhap giá cho sản phẩm");
        }
        if (this.state.quantity == "") {
            errors.push("Ban Chua Nhap số lượng sản phẩm");
        }
        if (this.state.isChangeUrl === false) {
            errors.push("Bạn Chưa nhập vào hình ảnh cho sản phẩm");
        }

        this.setState({ errorsValue: errors });
        if(errors.length==0)
        {
            let formdata = {
                productName: this.state.productName,
                categoryId: this.state.categoryId,
                price: this.state.price,
                quantity: this.state.quantity,
                description: this.state.description,
                color: this.state.color,
                imageAddress: this.state.url,
            };
            //http://127.0.0.1:8000/
            await axios
                .post(
                    `/api/product`,
                    formdata
                )
                .then((response) => {
                    if (response.status == 200) {

                        let products = this.state.listProducts;

                        products.push(response.data.product);

                        this.setState({ listProducts: products });
                        
                        this.setState({ value: !this.state.value });
                        alert('insert success')
                    } else {
                        console.log("errors");
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        }

        
    }
    // xoa san pham


    render() {
        return (
            <>

                <div
                    className="conten-component-admin"
                    
                >
                    <div className="add-button-admin">
                        <button
                            className="btn btn-outline-success "
                            onClick={() => this.handleClick(this.state.value)}
                        >
                            Add
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-file-plus"
                                viewBox="0 0 16 16"
                            >
                                <path d="M8.5 6a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V10a.5.5 0 0 0 1 0V8.5H10a.5.5 0 0 0 0-1H8.5V6z" />
                                <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z" />
                            </svg>
                        </button>
                    </div>
                    {/* font thêm sản phẩm */}

                    {/* font thêm sản phẩm */}

                    <Table bordered className="col-lg-6">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Image</th>
                                <th>Edit</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.listProducts.length == 0 ? <Spinner style={{ margin: "0 auto" }} type="grow" color="danger" >a</Spinner> :(
                                    Array.isArray(this.state.listProducts) ?
                                        this.state.listProducts.map((product, index) => (
                                            <ProductItem key={index} product={product} category={this.state.listCategory}/>
                                        )):"Data response is erro"
                                )
                            }
                        </tbody>
                    </Table>
                </div>

                <Modal isOpen={this.state.value}>
                    <ModalHeader>Thêm Một Sản Phẩm</ModalHeader>
                    <ModalBody>
                        <Card>
                            <Form>
                                <CardImg src={this.state.url} />
                                <InputGroup>
                                    <InputGroupAddon addonType="append">
                                        <Label className="label-insert-admin">
                                            Hình Ảnh
                                        </Label>
                                    </InputGroupAddon>

                                    <Input
                                        type="text"
                                        // value={this.state.selectedFile}

                                        onChange={(e) => this.AddImage(e)}
                                    />
                                </InputGroup>

                                <InputGroup>
                                    <InputGroupAddon addonType="append">
                                        <Label className="label-insert-admin">
                                            Danh Mục Sản Phẩm
                                        </Label>
                                    </InputGroupAddon>
                                    {/* <Input
                                        onChange={(e) =>
                                            this.handleChangeCategoryId(e)
                                        }
                                    /> */}
                                    <Input type="select" onChange={(e) =>
                                            this.handleChangeCategoryId(e)
                                        }>
                                            <option>Kích vào để chọn</option>
                                        {
                                            this.state.listCategory.map((category,index)=>
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
                                        onChange={(e) =>
                                            this.handleChangeProductName(e)
                                        }
                                    />
                                </InputGroup>

                                <InputGroup>
                                    <InputGroupAddon addonType="append">
                                        <Label className="label-insert-admin">
                                            Giá Cả
                                        </Label>
                                    </InputGroupAddon>
                                    <Input
                                        type="number"
                                        onChange={(e) =>
                                            this.handleChangePrice(e)
                                        }
                                    />
                                </InputGroup>

                                <InputGroup>
                                    <InputGroupAddon addonType="append">
                                        <Label className="label-insert-admin">
                                            Số Lượng Nhập
                                        </Label>
                                    </InputGroupAddon>
                                    <Input
                                        type="number"
                                        onChange={(e) =>
                                            this.handleChangeQuantity(e)
                                        }
                                    />
                                </InputGroup>

                                <InputGroup>
                                    <InputGroupAddon addonType="append">
                                        <Label className="label-insert-admin">
                                            Màu
                                        </Label>
                                    </InputGroupAddon>
                                    <Input
                                        onChange={(e) =>
                                            this.handleChangeColor(e)
                                        }
                                    />
                                </InputGroup>

                                <InputGroup>
                                    <InputGroupAddon addonType="append">
                                        <Label className="label-insert-admin">
                                            Mô tả{" "}
                                        </Label>
                                    </InputGroupAddon>
                                    <Input
                                        onChange={(e) =>
                                            this.handleChangeDescription(e)
                                        }
                                    />
                                </InputGroup>
                            </Form>
                            <ul className="list-group alert-danger">
                                {this.state.errorsValue.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </Card>
                    </ModalBody>
                    <ModalFooter>
                        <Button
                            color="secondary"
                            onClick={() => this.handleClick(this.state.value)}
                        >
                            Close
                        </Button>
                        <Button
                            color="primary"
                            onClick={() => this.addProduct()}

                        >
                            Thêm
                        </Button>
                    </ModalFooter>
                </Modal>
            </>
        );
    }
}
