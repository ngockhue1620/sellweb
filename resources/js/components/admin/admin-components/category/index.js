import React, { Component } from 'react'
import CategoryItem from './CategoryItem';
import { Table, Spinner } from "reactstrap";
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
    getCategories() {
        axiosClient.get("https://laravel-react-sell-web.herokuapp.com/api/category")
            .then((data) => {
                this.setState({
                    listCategories: data
                })


            }).catch(function (error) {
                console.log(error);
            });
    }

    render() {
        console.log(this.state.listCategories);


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
                                this.state.listCategories.map((categorie, index) => (
                                    <CategoryItem key={index} categorie={categorie} />
                                ))
                        }

                    </tbody>
                </Table>
            </div>
        )
    }
}
