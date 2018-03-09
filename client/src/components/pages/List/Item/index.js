import React, { Component } from 'react'
import './item.css'

class Item extends Component {
  render() {
    const { data: { title, selected } } = this.props

    return (
      <div>
        <button>X</button>
        {title}
        <input type="checkbox" value={selected} />  
      </div>
    )
  }
}

export default Item