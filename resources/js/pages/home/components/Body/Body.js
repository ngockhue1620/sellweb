


import React from 'react'
import CartContainer from '../CartContainer/CartContainer'
import Content from '../Content/Content'
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
