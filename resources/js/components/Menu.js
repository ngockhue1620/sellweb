import Category from './Category'
import React, { Component } from 'react'

export default class Menu extends Component {
  render() {
    return (
      <div class="Menu col-lg-3">

        <h1 class="my-4">Clothes Shop</h1>
        <div class="list-group">
          <Category>Đồ Nam</Category>
          <Category>Đồ Nữ</Category>
          <Category>Đồ Đôi</Category>
        </div>

      </div>
    )
  }
}

