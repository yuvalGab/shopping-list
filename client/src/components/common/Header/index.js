import React, { Component } from 'react'
import './header.css'
import { Layout } from 'antd'

const { Header: HeaderLayout } = Layout

class Header extends Component {
  render() {
    return (
      <HeaderLayout className="header">
        <h1>Shopping List</h1>
      </HeaderLayout>
    )
  }
}
export default Header