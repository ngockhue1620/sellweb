


import  { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getAll } from '../../../../reducers/categorySlice'
import Category from '../Category/Category'
import {Spinner} from 'reactstrap'


import React from 'react'
import { showProductsByCategoryId } from '../../../../reducers/productSlice'

export default function Menu(props) {
  const [idClick,setIdClick]=useState(null)
  const categoryList = useSelector(state => state.categories)
  const dispatch=useDispatch();
  const handelCategoryClick=(category)=>{

    dispatch(showProductsByCategoryId(category))
    setIdClick(category.id)
  }
  
  useEffect(() => {
    async function fetchData() {
      // You can await here
      dispatch(getAll())
      // ...
    }
    fetchData();
  }, []);
  return (
    <div class="Menu col-lg-3">
        <div class="category-menu">
          <h3 class="my-4">Danh Mục Sản Phẩm</h3>
          <div class="list-group ">
            
          {categoryList.length==0 ? <Spinner className="container" type="grow" color="danger" >a</Spinner> :
          categoryList.map((category, index) => (<Category idClick={idClick} handelCategoryClick={handelCategoryClick} key={index} category={category}></Category>))}
          </div>
        </div>
      </div>
  )
}




// async function fetchData() {
//   // You can await here
//   const actionResult=await categoryApi.getAll();
// const currentCategory=unwrapResult(actionResult);
//   console.log("asdasdasd")
// this.setState({
//   categoryList:actionResult
// })
//   // ...
// }
// fetchData();