import React, { Component } from 'react'
import './header.css'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActions from '../../../store/actions/user'
import { Layout, Icon } from 'antd'

const { Header: HeaderLayout } = Layout

class Header extends Component { 
  logout() {
    this.props.userActions.logout()
  }

  render() {
    const { isLogedIn } = this.props

    return (
      <HeaderLayout className="header">
        <h1>Shopping List</h1>
        {isLogedIn && <Icon type="logout" onClick={this.logout.bind(this)} />}
      </HeaderLayout>
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
)(Header)