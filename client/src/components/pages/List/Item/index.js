import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './item.css'

class Item extends Component {
  render() {
    const { 
      data: 
      { 
        _id: id,
        title, 
        selected 
      }, 
      onDelete 
    } = this.props

    return (
      <div>
        <button onClick={() => onDelete(id)}>X</button>
        {title}
        <input type="checkbox" value={selected} />  
      </div>
    )
  }
}

Item.propTypes = {
  data: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired
}

export default Item