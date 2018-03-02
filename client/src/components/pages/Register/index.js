import React, { Component } from 'react'
import './register.css'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActions from '../../../store/actions/user'
import RegisterForm from './RegisterForm'
import { Spin } from 'antd'

class Register extends Component {
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