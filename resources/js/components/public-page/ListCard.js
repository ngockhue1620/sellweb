import React, { Component } from 'react'

export default class ListCard extends Component {
    constructor(props){
        super(props)
    }
    render() {
        const {children} =this.props
        return (
            <div className='row ListCard'>
                {children}
            </div>
        )
    }
}
