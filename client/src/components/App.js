import React, { Component } from 'react'
import './App.css'
import { Layout } from 'antd';
import Routes from './Routes'
import Header from './common/Header'
import Footer from './common/Footer'

const { Content } = Layout

class App extends Component {
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

export default App
