import React, { Component } from 'react'
import './list.css'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as itemActions from '../../../store/actions/item'
import AddItemForm from './AddItemForm'
import Item from './Item'

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

  render() {
    const { list } = this.props

    return (
      <div className="list-page">
        <AddItemForm onSubmit={this.addItem.bind(this)} />
        <button>delete all selected items</button>
        {list.map((value, index) => (
          <Item 
            key={index}
            data={value} 
            onDelete={this.deleteItem.bind(this)}
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