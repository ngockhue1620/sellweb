
import ReactDOM from 'react-dom';
import Header from './Header'
import Body from './Body'
import LoginPage from './LoginPage'
import React, { Component } from 'react'
import Menu from './Menu'
import Category from './Category'
import Content from './Content'
import Slider from './Slider'
import ListCard from './ListCard'
import Card from './Card'
import axiosClient from './axiosClient'
import '../../../sass/HomePage.scss'
export default class HomePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            listCategories:[],  
            listProducts:[],
            showLogin: false

        }
    }
    componentDidMount(){
        this.getCategories()
    }
    getCategories   ()  {
        // console.log('Bearer ',this.state.token)
        // const res = await fetch('https://teambuilding-final.herokuapp.com/group/get-all-group',
        //   {
        //     method: 'GET',
        //     headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.state.token}` }
        //   })
        // const data = await res.json()
        // // console.log(data)
        // return data
        axiosClient.get('/api/category')
        .then((data)=>{
            this.setState({
                listCategories:data
              })
        }).catch(function (error) {
          console.log(error);
        });
      }
    clickLogin() {
        this.setState({
            showLogin: !this.state.showLogin
        })
    }
    render() {
        return (

            <div className="Homepage">
                
                <Body>
                    <Menu>
                        
                        
                        {this.state.listCategories.map((item,index)=>(<Category>{item.categoryName}</Category>))}
                    </Menu>
                    <Content>
                        <Slider></Slider>
                        <ListCard>
                            <Card></Card>
                            <Card></Card>
                            <Card></Card>
                            <Card></Card>
                            <Card></Card>
                            <Card></Card>
                        </ListCard>
                    </Content>
                </Body>
                {/* <LoginPage></LoginPage> */}
            </div>
        )
    }
}





