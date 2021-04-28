import React, { useEffect } from 'react'
import addIcon from '../../../../assets/addIcon.svg'
import minusIcon from '../../../../assets/minusIcon.svg'
import cancelIcon from '../../../../assets/cancel.svg'
import { useDispatch } from 'react-redux'
import { addQuatity, subQuatity ,removeProduct} from '../../../../reducer/cartSlice'
export default function CartItem(props) {
    const { product } = props
    const dispatch=useDispatch()
    const onAddClick=(id)=>{
        dispatch(addQuatity(id))
    }
    const onSubClick=(id)=>{
        dispatch(subQuatity(id))
    }
    const onRemoveClick=(id)=>{
        dispatch(removeProduct(id))
    }
    return (
        <div className="cart-item">
            <div className="cart-item__container-left">
                <img src={product.product.imageAddress}></img>
                <div>{product.product.productName}</div>

            </div>
            <div className="cart-item__container-right">
                <div className="cart-item__container-right__quantity">
                    <img onClick={()=>onAddClick(product.product.id)} width={20} height={20} src={addIcon}></img>
                    <div className="quanlity">
                        {product.quantity}
                    </div>
                    <img onClick={()=>onSubClick(product.product.id)} width={20} height={20} src={minusIcon}></img>
                    <img onClick={()=>onRemoveClick(product.product.id)} width={20} height={20} src={cancelIcon}></img>
                </div>
                <div className="cart-item__container-right__price">
                    {product.product.price*product.quantity+" đ"}
                </div>

            </div>

        </div>
    )
}
