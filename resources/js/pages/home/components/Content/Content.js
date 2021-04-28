


import React from 'react'
import ListProducts from '../ListProducts/ListProducts'
import Slider from '../Slider/Slider'

export default function Content() {
    return (
        <div className='col-lg-9 Content'>
            <Slider></Slider>
            <ListProducts></ListProducts>
        </div>
    )
}

