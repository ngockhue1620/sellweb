import React, { Component } from 'react'
import CategoryItem from './CategoryItem';
import { Table, Spinner } from "reactstrap";
import axios from 'axios';
export default class Index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listCategories: [],
            showLogin: false
        }
    }
    componentDidMount() {
        this.getCategories()


    }
    async getCategories() {
       await axios.get("https://laravel-react-sell-web.herokuapp.com/api/category")
            .then((data) => {
                this.setState({
                    listCategories: data
                })
                console.log("cate",this.state.listCategories)


            }).catch(function (error) {
                console.log(error);
            });
    }

    render() {
        


        return (
            <div className="conten-component-admin">
                <Table bordered className="col-lg-6">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Category Name</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            this.state.listCategories.length == 0 ? <Spinner style={{ margin: "0 auto" }} type="grow" color="danger" >a</Spinner> :
                               "Da La trang Category"    
                            // this.state.listCategories.map((category, index) =>{ 
                            //         <CategoryItem key={index} category={category} />
                            // })
                        }

                    </tbody>
                </Table>
            </div>
        )
    }
}
