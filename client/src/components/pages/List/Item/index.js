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
      onDelete,
      onSelect
    } = this.props

    return (
      <div>
        <input 
          type="checkbox" 
          checked={selected}
          onChange={() => onSelect(id, !selected)} 
        />    
        <span>{title}</span>
        <span onClick={() => onDelete(id)}>X</span>
      </div>
    )
  }
}

Item.propTypes = {
  data: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired
}

export default Item