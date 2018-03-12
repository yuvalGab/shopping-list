import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './item.css'
import { Checkbox } from 'antd'

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
      <div className="item">
        <Checkbox 
          checked={selected}
          onChange={() => onSelect(id, !selected)} 
        />    
        <span className="title">{title}</span>
        <span className="delete" onClick={() => onDelete(id)}>x</span>
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