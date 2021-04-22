
import React, { Component } from 'react'

export default class Menu extends Component {
  render() {
    const {children} =this.props
    return (
      <div class="Menu col-lg-3">

        <h1 class="my-4">Clothes Shop</h1>
        <div class="list-group">
          {children}
        </div>

      </div>
    )
  }
}

