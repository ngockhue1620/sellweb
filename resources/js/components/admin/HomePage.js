import React, { Component } from 'react'
import Body from './body-components/Body'
import Header from './body-components/Header'
import Table from './body-components/Table'
import Content from './body-components/Content'
import Footer from './body-components/Footer'

export default class HomePage extends Component {
    render() {
        return (
            <div>
                {/* <Header /> */}
                <Body>
                    <Table />
                    <Content />
                </Body>
                <Footer/>
            </div>
        )
    }
}