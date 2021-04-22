import React, { Component } from 'react'

export default class Category extends Component {
    constructor(props){
        super(props)
    }
    render() {
        const {children}=this.props

        return (

            <a href="#" class="Category list-group-item">{children}</a>
        )
    }
}
