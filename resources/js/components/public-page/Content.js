import React, { Component } from 'react'
import Slider from './Slider'
import ListCard from './ListCard'

export default class Content extends Component {
    render() {
        return (
            <div className='col-lg-9 Content'>
                <Slider></Slider>
                <ListCard></ListCard>
            </div>
        )
    }
}
