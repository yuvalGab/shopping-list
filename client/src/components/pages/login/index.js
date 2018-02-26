import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActions from '../../../store/actions/user'

class Login extends Component {
  render() {
    return (
      <div>
        login page
      </div> 
    )
  }
}

export default connect(
  state => ({
    ...state.user
  }),
  dispatch => ({
      userActions: bindActionCreators(userActions, dispatch)
  })
)(Login)