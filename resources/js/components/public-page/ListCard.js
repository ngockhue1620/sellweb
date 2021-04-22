import React, { Component } from 'react'
import Card from './Card'
export default class ListCard extends Component {
    render() {
        return (
            <div className='row ListCard'>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </div>
        )
    }
}
