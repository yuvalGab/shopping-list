import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActions from '../../../store/actions/user'

class Login extends Component {
  componentDidMount() {
    const { promiseDemo, thunkDemo } = this.props.userActions
    promiseDemo()
    thunkDemo()
  }

  render() {
    const { increase, decrease } = this.props.userActions
    const { number } = this.props
    return (
      <div>
        {number}
        <button onClick={() => increase()}>+</button>
        <button onClick={() => decrease()}>-</button>
      </div>
    )
  }
}

export default connect(
  state => ({
    number: state.user.number
  }),
  dispatch => ({
      userActions: bindActionCreators(userActions, dispatch)
  })
)(Login)