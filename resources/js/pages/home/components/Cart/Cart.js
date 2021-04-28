import React from 'react'
import cart from '../../../../assets/cart.svg'
export default function Cart() {
    return (
        <div className='cart'>
            <div className="quantity">0</div>
            <img src={cart} height={32} width={32}></img>
        </div>
    )
}
