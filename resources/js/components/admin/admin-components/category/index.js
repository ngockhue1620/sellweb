import React, { Component } from 'react'
import CategoryItem from './CategoryItem';
import axios from 'axios';
import {
    Form,   
    Button,
    Input, 
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Card,
    InputGroupAddon,
    InputGroup,
    Spinner,
    Table,
    Label
    

} from "reactstrap";

export default class Index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listCategories: [],
            value: false,
            errorsValue:[],
            categoryName:""
        }
    }

    componentDidMount() {
        this.getCategories()
    }

    async getCategories() {
        await axios.get("/api/category")
            .then((response) => {
                this.setState({
                    listCategories: response.data
                })
                console.log("categỏy", this.state.listCategories)


            }).catch(function (error) {
                console.log(error);
            });
    }

    handleCategory(e){
        this.setState({categoryName:e.target.value})
    }

    async AddCategory()
    {
        if(this.state.categoryName=="")
        {
            this.setState({errorsValue:['Bạn Phải Nhập Category Name']})
        }
        if(this.state.errorsValue.length==0)
        {
            console.log("chạy")
            await axios 
                    .post('/api/category',{categoryName:this.state.categoryName})
                    .then(response=>{
                        if(response.data.status==true)
                        {   
                            let categories = this.state.listCategories;
                            categories.push(response.data.category)
                            this.setState({listCategories:categories})
                            console.log("sau khi insert",this.state.listCategories)
                            alert('Insert successful')
                            this.setState({value:false})
                        }
                    })
                    .catch((e)=>{
                        console.log(e)
                    })
        }
        
    }

    render() {



        return (
            <>
                <div className="conten-component-admin">
                    <div className="add-button-admin">
                        <button
                            className="btn btn-outline-success "
                            onClick={() =>{ this.setState({ value: true,errorsValue:[] }) }}
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
                    <Table bordered className="col-lg-6">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Category Name</th>
                                <th>Chi Tiết</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                !Array.isArray(this.state.listCategories) && this.state.listCategories.length > 0 ? <Spinner style={{ margin: "0 auto" }} type="grow" color="danger" >a</Spinner> :

                                    this.state.listCategories.map((category, index) => (
                                        <CategoryItem key={index} category={category} />
                                    ))
                            }

                        </tbody>
                    </Table>
                </div>
                <Modal isOpen={this.state.value}>
                    <ModalHeader>Thêm Một Danh Mục Sản Phẩm Sản Phẩm</ModalHeader>
                    <ModalBody>
                        <Card>
                            <Form>

                                <InputGroup>
                                    <InputGroupAddon addonType="append">
                                        <Label className="label-insert-admin">
                                            Tên Danh Mục
                                        </Label>
                                    </InputGroupAddon>
                                    <Input
                                        
                                        onChange={(e) =>
                                            this.handleCategory(e)
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
                            onClick={() =>this.setState({value:false})}
                        >
                            Close
                        </Button>
                        <Button
                            color="primary"
                            onClick={() => this.AddCategory()}

                        >
                            Thêm
                        </Button>
                    </ModalFooter>
                </Modal>
            </>

        )
    }
}
