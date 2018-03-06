import React, { Component } from 'react'
import './App.css'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActions from '../store/actions/user'
import { Layout } from 'antd';
import Routes from './Routes'
import Header from './common/Header'
import Footer from './common/Footer'

const { Content } = Layout

class App extends Component {
  componentDidMount() {
    this.props.userActions.isLogedIn()
  }
  
  render() {
    return (
      <Layout>
        <Header />
        <Content className="content">
          <Routes />
        </Content>
        <Footer />
      </Layout>
    )
  }
}

export default connect(
  null,
  dispatch => ({
    userActions: bindActionCreators(userActions, dispatch)
})
)(App)