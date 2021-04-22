import React, { Component } from 'react'

import '../../sass/Body.scss'
export default class Body extends Component {
    render() {
        const {children} =this.props
        return (
            <div class="Body container">
                {children}
            </div>
        )
    }
}
