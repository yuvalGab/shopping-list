import React, { Component } from 'react'
import './register.css'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActions from '../../../store/actions/user'
import RegisterForm from './RegisterForm'
import { Spin, notification } from 'antd'

class Register extends Component {
  componentWillReceiveProps(nextProps) {
    const { loading, history } = this.props
    const { loading: nextLoading, error } = nextProps
    if (loading && !nextLoading && !error) {
      notification.success({
        message: 'User created successfully!',
        description: 'You can now connect to the user on the login page.'
      })

      history.push('/login')
    }
  }

  render() {
    const { loading, error, userActions: { register } } = this.props

    return (
      <div className="register-page">
        <h2>register</h2>
        <RegisterForm onSubmit={register} />
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
)(Register)