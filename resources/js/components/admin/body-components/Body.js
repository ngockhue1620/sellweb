import React, { Component } from 'react'


export default class Body extends Component {
    render() {
        const {children} =this.props
        return (
            <div className="Body ">
                {children}
            </div>
        )
    }
}
