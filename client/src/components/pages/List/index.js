import React, { Component } from 'react'
import './list.css'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as itemActions from '../../../store/actions/item'
import AddItemForm from './AddItemForm'

class List extends Component {
  addItem(item) {
    this.props.itemActions.addItem(item)
  }

  render() {
    return (
      <div className="list-page">
        <AddItemForm onSubmit={this.addItem.bind(this)} />
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