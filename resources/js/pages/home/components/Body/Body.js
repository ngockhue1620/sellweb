


import React from 'react'
import Content from '../Content/Content'
import CartContainer from  '../CartContainer/CartContainer'
import Menu from '../Menu/Menu'

export default function Body(props) {
    return (
        <div class="Body ">
            <Menu></Menu>
            <Content></Content>
            <CartContainer></CartContainer>
        </div>
    )
}
