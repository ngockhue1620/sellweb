
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
import '../../../sass/HomePage.scss'
export default class HomePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showLogin: false

        }
    }
    clickLogin() {
        this.setState({
            showLogin: !this.state.showLogin
        })
    }
    render() {
        return (

            <div className="Homepage">
                <Header></Header>
                <Body>
                    <Menu>
                        <Category>Đồ Nam</Category>
                        <Category>Đồ Nữ</Category>
                        <Category>Đồ Đôi</Category>
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




if (document.getElementById('homepage')) {
    ReactDOM.render(<HomePage />, document.getElementById('homepage'));
}
