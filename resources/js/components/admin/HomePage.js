import React, { Component } from 'react'
import Body from './body-components/Body'
import Table from './body-components/Table'
import Footer from './body-components/Footer'

export default class HomePage extends Component {
    render() {
        return (
            <div>
                {/* <Header /> */}
                <Body>
                    <Table />                   
                    <Footer/>
                </Body>
                
            </div>
        )
    }
}