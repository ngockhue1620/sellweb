import React, { Component } from 'react'
import CategoryItem from './CategoryItem';
import { Table } from 'reactstrap';
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
        axiosClient.get(`https://laravel-react-sell-web.herokuapp.com/api/category`)
            .then((data) => {
                this.setState({
                    listCategories: data
                })


            }).catch(function (error) {
                console.log(error);
            });
    }

    render() {
        // console.log(this.state.listCategories);


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

                        {this.state.listCategories.map((category, index) =>
                        (<CategoryItem
                            key={index} category={category}

                        />))}

                    </tbody>
                </Table>
            </div>
        )
    }
}
