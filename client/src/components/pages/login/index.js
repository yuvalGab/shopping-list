import React, { Component } from 'react'
import './login.css'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActions from '../../../store/actions/user'
import LoginFrom from './LoginForm'

class Login extends Component {
  render() {
    const { login } = this.props.userActions
    
    return (
      <div className="login-page">
        <h2>login</h2>
        <LoginFrom onSubmit={login} />
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