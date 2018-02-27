import React, { Component } from 'react'
import './login.css'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActions from '../../../store/actions/user'
import LoginFrom from './LoginForm'
import { Spin } from 'antd'

class Login extends Component {
  render() {
    const { loading, error, userActions: { login } } = this.props
    
    return (
      <div className="login-page">
        <h2>login</h2>
        <LoginFrom onSubmit={login} />
        {error && <p className="error">An error occurred</p>}
        {loading && <Spin />}
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