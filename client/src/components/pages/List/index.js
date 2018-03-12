import React, { Component } from 'react'
import './list.css'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as itemActions from '../../../store/actions/item'
import AddItemForm from './AddItemForm'
import Item from './Item'
import { Spin } from 'antd'

class List extends Component {
  componentDidMount() {
    this.getAllItems()
  }

  getAllItems() {
    this.props.itemActions.getAllItems()
  }
  
  addItem(item) {
    this.props.itemActions.addItem(item).then(() => {
      this.getAllItems()
    })
  }

  deleteItem(id) {
    this.props.itemActions.deleteItem(id).then(() => {
      this.getAllItems()
    })
  }

  selectItem(id, value) {
    this.props.itemActions.editItem({ _id: id, selected: value}).then(() => {
      this.getAllItems()
    })
  }

  deleteSelected() {
    this.props.itemActions.deleteSelected().then(() => {
      this.getAllItems()
    })
  }

  render() {
    const { loading, error, list } = this.props

    return (
      <div className="list-page">
        <AddItemForm onSubmit={this.addItem.bind(this)} />
        <div style={{ minHeight: 40 }}>
          {error && <p className="error">{error || 'an error occurred'}</p>}
          {loading && <Spin />} 
        </div>
        <button 
          onClick={this.deleteSelected.bind(this)}
        >
          delete all selected items
        </button>
        {list.map((value, index) => (
          <Item 
            key={index}
            data={value} 
            onDelete={this.deleteItem.bind(this)}
            onSelect={this.selectItem.bind(this)}
          />
        ))}
      </div>
    )
  }
}

export default connect(
  state => ({
    ...state.item
  }),
  dispatch => ({
      itemActions: bindActionCreators(itemActions, dispatch)
  })
)(List)