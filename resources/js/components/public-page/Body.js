import React, { Component } from 'react'
import Menu from './Menu'
import Content from './Content'
export default class Body extends Component {
    render() {
        return (
            <div class="Body container">
                <Menu></Menu>
                <Content></Content>
            </div>
        )
    }
}
