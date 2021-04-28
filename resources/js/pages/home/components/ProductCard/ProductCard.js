import { useEffect } from "react"
import React from 'react'
import { useDispatch } from "react-redux"
import { addProduct } from "../../../../reducers/cartSlice"



export default function ProductCard(props) {

    const { imageAddress, productName, price, description } = props.product
    const dispatch=useDispatch()
    const onClick=(product)=>{
        dispatch(addProduct(product))
    }
    return (
        <div onClick={()=>onClick(props.product)} class="ProductCard col-lg-4 col-md-6 mb-4">
            <div class="card h-100">
                <a ><img class="card-img-top" src={imageAddress} alt=""></img></a>
                <div class="card-body">
                    <h4 class="card-title">
                        <a >{productName}</a>
                    </h4>
                    <h5>{price}</h5>
                    <p class="card-text">{description}</p>
                </div>
                <div class="card-footer">
                    <small class="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
                </div>
            </div>
        </div>
    )

}
