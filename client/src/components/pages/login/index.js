import React, { Component } from 'react'
import './login.css'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActions from '../../../store/actions/user'
import LoginFrom from './LoginForm'
import { Spin, notification } from 'antd'

class Login extends Component {
  componentWillReceiveProps(nextProps) {
    const { loading, history } = this.props
    const { loading: nextLoading, error } = nextProps
    if (loading && !nextLoading && !error) {
      notification.success({
        message: 'You have successfully signed in to your account!',
        description: 'You can now edit your shopping list.'
      })

      history.push('/list')
    }
  }

  render() {
    const { loading, error, userActions: { login } } = this.props
    
    return (
      <div className="login-page">
        <h2>login</h2>
        <LoginFrom onSubmit={login} />
        {error && <p className="error">{error}</p>}
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