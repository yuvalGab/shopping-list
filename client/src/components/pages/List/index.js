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

  render() {
    const { list } = this.props

    return (
      <div className="list-page">
        <AddItemForm onSubmit={this.addItem.bind(this)} />
        {list.map((value, index) => (
          <Item key={index} data={value} />
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